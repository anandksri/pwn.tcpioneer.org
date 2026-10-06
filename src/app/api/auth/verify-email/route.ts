import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashOTP } from "@/lib/otp";
import { otpSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const result = otpSchema.safeParse(await req.json());

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and OTP are required.",
        },
        { status: 400 }
      );
    }

    const { email, otp } = result.data;

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

    // Find OTP
    const otpRecord = await prisma.oTP.findFirst({
      where: {
        userId: user.id,
        type: "EMAIL_VERIFICATION",
      },
      orderBy: { createdAt: "desc" },
    });

    if (!otpRecord || otpRecord.code !== hashOTP(user.id, "EMAIL_VERIFICATION", otp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid verification code.",
        },
        { status: 400 }
      );
    }

    // Check expiry
    if (otpRecord.expiresAt < new Date()) {
      return NextResponse.json(
        {
          success: false,
          message: "Verification code has expired.",
        },
        { status: 400 }
      );
    }

    // Verify account
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        verified: true,
      },
    });

    // Delete OTP
    await prisma.oTP.delete({
      where: {
        id: otpRecord.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Email verified successfully.",
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
