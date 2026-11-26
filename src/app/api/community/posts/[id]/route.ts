import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { communityContentSchema } from "@/lib/validators";
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
    const post = await prisma.communityPost.findUnique({
      where: { id },
      select: { authorId: true },
    });
    if (!post) {
      return NextResponse.json({ success: false, message: "Post not found." }, { status: 404 });
    }
    if (post.authorId !== user.id && !["ADMIN", "MODERATOR"].includes(user.role)) {
      return NextResponse.json({ success: false, message: "You cannot remove this post." }, { status: 403 });
    }

    await prisma.communityPost.update({
      where: { id },
      data: { body: "[This post was removed.]", removedAt: new Date() },
    });

    return NextResponse.json({ success: true });
  } catch {
    return apiError("community-post-remove");
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required." }, { status: 401 });
    }
    if (!user.verified) {
      return NextResponse.json({ success: false, message: "Verify your email to edit posts." }, { status: 403 });
    }

    const result = communityContentSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Post must be between 2 and 3000 characters." }, { status: 400 });
    }

    const { id } = await params;
    const post = await prisma.communityPost.findUnique({
      where: { id },
      select: { authorId: true, removedAt: true },
    });
    if (!post || post.removedAt) {
      return NextResponse.json({ success: false, message: "Post not found." }, { status: 404 });
    }
    if (post.authorId !== user.id) {
      return NextResponse.json({ success: false, message: "You cannot edit this post." }, { status: 403 });
    }

    await prisma.communityPost.update({ where: { id }, data: { body: result.data.body } });
    return NextResponse.json({ success: true });
  } catch {
    return apiError("community-post-edit");
  }
}
