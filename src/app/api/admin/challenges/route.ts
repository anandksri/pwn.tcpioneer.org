import { NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  adminChallengeCreateSchema,
} from "@/lib/validators";
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

export async function GET() {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const challenges = await prisma.challenge.findMany({
      orderBy: { updatedAt: "desc" },
      select: publicChallengeFields,
    });

    return NextResponse.json({ success: true, challenges });
  } catch {
    return apiError("admin-challenges-list");
  }
}

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const result = adminChallengeCreateSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid challenge details." }, { status: 400 });
    }

    const { flag, ...challengeData } = result.data;
    const challenge = await prisma.challenge.create({
      data: { ...challengeData, flagHash: await hashPassword(flag) },
      select: publicChallengeFields,
    });

    return NextResponse.json({ success: true, challenge }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return NextResponse.json({ success: false, message: "That slug is already in use." }, { status: 409 });
    }
    return apiError("admin-challenge-create");
  }
}
