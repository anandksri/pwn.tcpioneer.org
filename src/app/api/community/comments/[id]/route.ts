import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { apiError } from "@/utils/api-error";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required." }, { status: 401 });
    }

    const { id } = await params;
    const comment = await prisma.communityComment.findUnique({
      where: { id },
      select: { authorId: true },
    });
    if (!comment) {
      return NextResponse.json({ success: false, message: "Comment not found." }, { status: 404 });
    }
    if (comment.authorId !== user.id && !["ADMIN", "MODERATOR"].includes(user.role)) {
      return NextResponse.json({ success: false, message: "You cannot remove this comment." }, { status: 403 });
    }

    await prisma.communityComment.update({
      where: { id },
      data: { body: "[This comment was removed.]", removedAt: new Date() },
    });
    return NextResponse.json({ success: true });
  } catch {
    return apiError("community-comment-remove");
  }
}
