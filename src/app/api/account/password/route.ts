import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { changePasswordSchema } from "@/lib/validators";
import { rateLimitResponse } from "@/lib/rate-limit";
import { apiError } from "@/utils/api-error";
import { comparePassword, hashPassword } from "@/utils/hash";

export async function POST(request: Request) {
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
      `account:password:${user.id}`,
      5,
      15 * 60 * 1000,
    );
    if (limited) return limited;

    const result = changePasswordSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Please provide valid password details." },
        { status: 400 },
      );
    }

    const account = await prisma.user.findUnique({
      where: { id: user.id },
      select: { password: true },
    });

    if (!account || !(await comparePassword(result.data.currentPassword, account.password))) {
      return NextResponse.json(
        { success: false, message: "Current password is incorrect." },
        { status: 400 },
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: await hashPassword(result.data.password),
        sessionVersion: { increment: 1 },
      },
    });

    const response = NextResponse.json({
      success: true,
      message: "Password changed. Please sign in again.",
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(0),
      path: "/",
    });

    return response;
  } catch {
    return apiError("account-password");
  }
}
