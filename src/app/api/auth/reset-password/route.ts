import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/utils/hash";
import { hashOTP } from "@/lib/otp";
import { resetPasswordSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const result = resetPasswordSchema.safeParse(await req.json());

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Email, OTP and password are required.",
        },
        { status: 400 }
      );
    }

    const { email, otp, password } = result.data;

    // Find user
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    // Find reset OTP
    const otpRecord = await prisma.oTP.findFirst({
      where: {
        userId: user.id,
        type: "PASSWORD_RESET",
      },
      orderBy: { createdAt: "desc" },
    });

    if (!otpRecord || otpRecord.code !== hashOTP(user.id, "PASSWORD_RESET", otp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid reset code.",
        },
        { status: 400 }
      );
    }

    // Check expiry
    if (otpRecord.expiresAt < new Date()) {
      return NextResponse.json(
        {
          success: false,
          message: "Reset code has expired.",
        },
        { status: 400 }
      );
    }

    // Hash new password
    const hashedPassword = await hashPassword(password);

    // Update password
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    // Delete ALL password reset OTPs
    await prisma.oTP.deleteMany({
      where: {
        userId: user.id,
        type: "PASSWORD_RESET",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Password reset successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
