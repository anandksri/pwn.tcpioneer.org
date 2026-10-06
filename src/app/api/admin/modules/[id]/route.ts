import { NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { adminModuleUpdateSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const result = adminModuleUpdateSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid module details." }, { status: 400 });
    }

    const { id } = await params;
    const learningModule = await prisma.module.update({ where: { id }, data: result.data });
    return NextResponse.json({ success: true, module: { id: learningModule.id } });
  } catch {
    return apiError("admin-module-update");
  }
}
