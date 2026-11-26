import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { consumeRateLimit } from "@/lib/rate-limit";
import { communityContentSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

export async function GET() {
  try {
    const [posts, viewer] = await Promise.all([
      prisma.communityPost.findMany({
        orderBy: { createdAt: "desc" },
        take: 30,
        select: {
          id: true,
          body: true,
          removedAt: true,
          createdAt: true,
          authorId: true,
          author: { select: { username: true, avatar: true } },
          _count: { select: { comments: { where: { removedAt: null } } } },
          comments: {
            where: { removedAt: null },
            orderBy: { createdAt: "desc" },
            take: 20,
            select: {
              id: true,
              body: true,
              createdAt: true,
              authorId: true,
              author: { select: { username: true, avatar: true } },
            },
          },
        },
      }),
      getCurrentUser(),
    ]);

    return NextResponse.json({
      success: true,
      viewer: viewer
        ? { id: viewer.id, role: viewer.role, verified: viewer.verified }
        : null,
      posts: posts.map((post) => ({
        ...post,
        body: post.removedAt ? "[This post was removed.]" : post.body,
        comments: post.comments.reverse(),
      })),
    });
  } catch {
    return apiError("community-posts-list");
  }
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: "Sign in to post." }, { status: 401 });
    }
    if (!user.verified) {
      return NextResponse.json({ success: false, message: "Verify your email to post." }, { status: 403 });
    }

    const rateLimit = await consumeRateLimit(`community-post:${user.id}`, 5, 60 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: "You have posted too often. Please try again later." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const result = communityContentSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Post must be between 2 and 3000 characters." }, { status: 400 });
    }

    const post = await prisma.communityPost.create({
      data: { authorId: user.id, body: result.data.body },
      select: {
        id: true,
        body: true,
        createdAt: true,
        authorId: true,
        author: { select: { username: true, avatar: true } },
        _count: { select: { comments: true } },
        comments: { select: { id: true, body: true, createdAt: true, authorId: true, author: { select: { username: true, avatar: true } } } },
      },
    });

    return NextResponse.json({ success: true, post: { ...post, removedAt: null } }, { status: 201 });
  } catch {
    return apiError("community-post-create");
  }
}
