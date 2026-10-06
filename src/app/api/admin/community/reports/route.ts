import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { communityModerationSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

async function getModerator() {
  const user = await getCurrentUser();
  return user && (user.role === "ADMIN" || user.role === "MODERATOR") ? user : null;
}

export async function GET() {
  try {
    if (!(await getModerator())) {
      return NextResponse.json({ success: false, message: "Moderator access required." }, { status: 403 });
    }

    const reports = await prisma.communityReport.findMany({
      where: { status: "OPEN" },
      orderBy: { createdAt: "asc" },
      take: 100,
      select: {
        id: true,
        postId: true,
        commentId: true,
        reason: true,
        createdAt: true,
        reporter: { select: { username: true } },
        post: {
          select: {
            id: true,
            body: true,
            removedAt: true,
            author: { select: { username: true } },
          },
        },
        comment: {
          select: {
            id: true,
            body: true,
            removedAt: true,
            author: { select: { username: true } },
            post: { select: { id: true, body: true } },
          },
        },
      },
    });

    return NextResponse.json({ success: true, reports });
  } catch {
    return apiError("community-reports-list");
  }
}

export async function PATCH(request: Request) {
  try {
    const moderator = await getModerator();
    if (!moderator) {
      return NextResponse.json({ success: false, message: "Moderator access required." }, { status: 403 });
    }

    const result = communityModerationSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid moderation action." }, { status: 400 });
    }

    const { reportId, targetType, targetId, action } = result.data;
    const report = await prisma.communityReport.findUnique({
      where: { id: reportId },
      select: { status: true, postId: true, commentId: true },
    });
    const reportMatchesTarget = targetType === "post"
      ? report?.postId === targetId
      : report?.commentId === targetId;
    if (!report || report.status !== "OPEN" || !reportMatchesTarget) {
      return NextResponse.json({ success: false, message: "Open report not found." }, { status: 404 });
    }

    const now = new Date();
    await prisma.$transaction(async (transaction) => {
      if (action === "remove") {
        if (targetType === "post") {
          await transaction.communityPost.update({
            where: { id: targetId },
            data: { body: "[This post was removed by moderators.]", removedAt: now },
          });
          await transaction.communityReport.updateMany({
            where: { postId: targetId, status: "OPEN" },
            data: { status: "ACTIONED", reviewedById: moderator.id, reviewedAt: now },
          });
        } else {
          await transaction.communityComment.update({
            where: { id: targetId },
            data: { body: "[This comment was removed by moderators.]", removedAt: now },
          });
          await transaction.communityReport.updateMany({
            where: { commentId: targetId, status: "OPEN" },
            data: { status: "ACTIONED", reviewedById: moderator.id, reviewedAt: now },
          });
        }
      } else {
        await transaction.communityReport.update({
          where: { id: reportId },
          data: { status: "DISMISSED", reviewedById: moderator.id, reviewedAt: now },
        });
      }
    });

    return NextResponse.json({ success: true });
  } catch {
    return apiError("community-report-moderate");
  }
}
