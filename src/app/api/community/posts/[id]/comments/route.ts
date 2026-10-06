import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { consumeRateLimit } from "@/lib/rate-limit";
import { communityContentSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: "Sign in to comment." }, { status: 401 });
    }
    if (!user.verified) {
      return NextResponse.json({ success: false, message: "Verify your email to comment." }, { status: 403 });
    }

    const rateLimit = await consumeRateLimit(`community-comment:${user.id}`, 20, 60 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: "You have commented too often. Please try again later." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const result = communityContentSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Comment must be between 2 and 3000 characters." }, { status: 400 });
    }

    const { id } = await params;
    const post = await prisma.communityPost.findFirst({
      where: { id, removedAt: null },
      select: { id: true },
    });
    if (!post) {
      return NextResponse.json({ success: false, message: "Post not found." }, { status: 404 });
    }

    const comment = await prisma.communityComment.create({
      data: { postId: id, authorId: user.id, body: result.data.body },
      select: {
        id: true,
        body: true,
        createdAt: true,
        authorId: true,
        author: { select: { username: true, avatar: true } },
      },
    });

    return NextResponse.json({ success: true, comment }, { status: 201 });
  } catch {
    return apiError("community-comment-create");
  }
}
