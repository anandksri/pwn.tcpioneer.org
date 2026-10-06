import { NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { adminChallengeUpdateSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";
import { hashPassword } from "@/utils/hash";

const publicChallengeFields = {
  id: true,
  moduleId: true,
  slug: true,
  title: true,
  description: true,
  category: true,
  difficulty: true,
  points: true,
  published: true,
  createdAt: true,
  updatedAt: true,
} as const;

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const result = adminChallengeUpdateSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid challenge details." }, { status: 400 });
    }

    const { id } = await params;
    const { flag, ...challengeData } = result.data;
    const challenge = await prisma.challenge.update({
      where: { id },
      data: {
        ...challengeData,
        ...(flag ? { flagHash: await hashPassword(flag) } : {}),
      },
      select: publicChallengeFields,
    });

    return NextResponse.json({ success: true, challenge });
  } catch {
    return apiError("admin-challenge-update");
  }
}
