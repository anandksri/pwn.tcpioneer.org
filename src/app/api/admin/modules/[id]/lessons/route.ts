import { NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { adminLessonCreateSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const result = adminLessonCreateSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid lesson details." }, { status: 400 });
    }

    const { id: moduleId } = await params;
    const learningModule = await prisma.module.findUnique({ where: { id: moduleId }, select: { id: true } });
    if (!learningModule) {
      return NextResponse.json({ success: false, message: "Module not found." }, { status: 404 });
    }

    const lesson = await prisma.lesson.create({
      data: { ...result.data, moduleId },
      select: { id: true, slug: true, title: true, published: true },
    });

    return NextResponse.json({ success: true, lesson }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return NextResponse.json({ success: false, message: "That lesson slug or order is already in use." }, { status: 409 });
    }
    return apiError("admin-lesson-create");
  }
}
