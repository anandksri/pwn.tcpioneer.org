import { NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { adminModuleCreateSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

const moduleSelect = {
  id: true,
  slug: true,
  title: true,
  description: true,
  category: true,
  difficulty: true,
  estimatedMinutes: true,
  sortOrder: true,
  published: true,
  lessons: {
    orderBy: { sortOrder: "asc" as const },
    select: {
      id: true,
      slug: true,
      title: true,
      summary: true,
      content: true,
      sortOrder: true,
      published: true,
    },
  },
} as const;

export async function GET() {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const modules = await prisma.module.findMany({
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
      select: moduleSelect,
    });

    return NextResponse.json({ success: true, modules });
  } catch {
    return apiError("admin-modules-list");
  }
}

export async function POST(request: Request) {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const result = adminModuleCreateSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid module details." }, { status: 400 });
    }

    const learningModule = await prisma.module.create({ data: result.data, select: moduleSelect });
    return NextResponse.json({ success: true, module: learningModule }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return NextResponse.json({ success: false, message: "That module slug or order is already in use." }, { status: 409 });
    }
    return apiError("admin-module-create");
  }
}
