import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { generateOTP } from "@/lib/otp";
import { sendResetPasswordEmail } from "@/utils/mail";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

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

    // Remove previous reset OTPs
    await prisma.oTP.deleteMany({
      where: {
        userId: user.id,
        type: "PASSWORD_RESET",
      },
    });

    const otp = generateOTP();

    await prisma.oTP.create({
      data: {
        userId: user.id,
        code: otp,
        type: "PASSWORD_RESET",
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    });

 await sendResetPasswordEmail(
  user.email,
  user.username,
  otp
);

    return NextResponse.json({
      success: true,
      message: "Password reset code sent.",
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