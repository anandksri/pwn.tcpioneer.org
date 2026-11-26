import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { consumeRateLimit } from "@/lib/rate-limit";
import { communityReportSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: "Sign in to report content." }, { status: 401 });
    }
    if (!user.verified) {
      return NextResponse.json({ success: false, message: "Verify your email to report content." }, { status: 403 });
    }

    const rateLimit = await consumeRateLimit(`community-report:${user.id}`, 10, 24 * 60 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: "You have sent too many reports. Please try again later." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const result = communityReportSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Choose one item and provide a reason (10-1000 characters)." }, { status: 400 });
    }

    const { postId, commentId, reason } = result.data;
    const targetAuthor = postId
      ? await prisma.communityPost.findFirst({
          where: { id: postId, removedAt: null },
          select: { authorId: true },
        })
      : await prisma.communityComment.findFirst({
          where: { id: commentId, removedAt: null, post: { removedAt: null } },
          select: { authorId: true },
        });

    if (!targetAuthor) {
      return NextResponse.json({ success: false, message: "Content not found." }, { status: 404 });
    }
    if (targetAuthor.authorId === user.id) {
      return NextResponse.json({ success: false, message: "You cannot report your own content." }, { status: 400 });
    }

    const report = await prisma.communityReport.create({
      data: { reporterId: user.id, postId, commentId, reason },
      select: { id: true },
    });
    return NextResponse.json({ success: true, reportId: report.id }, { status: 201 });
  } catch {
    return apiError("community-report-create");
  }
}
