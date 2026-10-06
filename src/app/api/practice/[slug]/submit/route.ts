import { createHash } from "node:crypto";

import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { rateLimitResponse } from "@/lib/rate-limit";
import { challengeFlagSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";
import { comparePassword } from "@/utils/hash";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Authentication required." },
        { status: 401 },
      );
    }

    const limited = await rateLimitResponse(
      request,
      `challenge:submit:${user.id}`,
      10,
      15 * 60 * 1000,
    );
    if (limited) return limited;

    const result = challengeFlagSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "A valid flag is required." },
        { status: 400 },
      );
    }

    const { slug } = await params;
    const challenge = await prisma.challenge.findFirst({
      where: { slug, published: true },
      select: { id: true, flagHash: true },
    });

    if (!challenge) {
      return NextResponse.json(
        { success: false, message: "Challenge not found." },
        { status: 404 },
      );
    }

    const isCorrect = await comparePassword(result.data.flag, challenge.flagHash);
    const submittedHash = createHash("sha256").update(result.data.flag).digest("hex");

    await prisma.challengeAttempt.create({
      data: {
        userId: user.id,
        challengeId: challenge.id,
        submittedHash,
        isCorrect,
      },
    });

    return NextResponse.json({
      success: true,
      correct: isCorrect,
      message: isCorrect ? "Correct flag. Challenge completed." : "Incorrect flag. Try again.",
    });
  } catch {
    return apiError("challenge-submit");
  }
}
