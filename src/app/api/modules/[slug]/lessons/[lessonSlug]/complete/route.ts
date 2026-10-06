import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { createNotification } from "@/lib/notifications";
import { prisma } from "@/lib/prisma";
import { apiError } from "@/utils/api-error";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string; lessonSlug: string }> },
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Authentication required." },
        { status: 401 },
      );
    }

    const { slug, lessonSlug } = await params;
    const lesson = await prisma.lesson.findFirst({
      where: {
        slug: lessonSlug,
        published: true,
        module: { slug, published: true },
      },
      select: { id: true, moduleId: true },
    });

    if (!lesson) {
      return NextResponse.json(
        { success: false, message: "Lesson not found." },
        { status: 404 },
      );
    }

    const existingProgress = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
      select: { completedAt: true },
    });

    await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
      create: {
        userId: user.id,
        lessonId: lesson.id,
        completedAt: new Date(),
      },
      update: { completedAt: new Date() },
    });

    const [lessonCount, completedLessonCount] = await Promise.all([
      prisma.lesson.count({ where: { moduleId: lesson.moduleId, published: true } }),
      prisma.lessonProgress.count({
        where: {
          userId: user.id,
          completedAt: { not: null },
          lesson: { moduleId: lesson.moduleId, published: true },
        },
      }),
    ]);

    const completed = lessonCount > 0 && completedLessonCount >= lessonCount;

    await prisma.moduleProgress.upsert({
      where: { userId_moduleId: { userId: user.id, moduleId: lesson.moduleId } },
      create: {
        userId: user.id,
        moduleId: lesson.moduleId,
        status: completed ? "COMPLETED" : "IN_PROGRESS",
        startedAt: new Date(),
        completedAt: completed ? new Date() : null,
      },
      update: {
        status: completed ? "COMPLETED" : "IN_PROGRESS",
        completedAt: completed ? new Date() : null,
      },
    });

    if (!existingProgress?.completedAt) {
      await createNotification({
        userId: user.id,
        title: "Lesson completed",
        message: "Your lesson progress has been saved.",
        href: `/modules/${slug}/lessons/${lessonSlug}`,
      });
    }

    return NextResponse.json({ success: true, completed });
  } catch {
    return apiError("lesson-complete");
  }
}
