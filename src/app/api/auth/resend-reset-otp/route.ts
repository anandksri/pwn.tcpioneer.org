import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
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

    await prisma.oTP.deleteMany({
      where: {
        userId: user.id,
        type: "PASSWORD_RESET",
      },
    });

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    await prisma.oTP.create({
      data: {
        code: otp,
        type: "PASSWORD_RESET",
        expiresAt: new Date(
          Date.now() + 10 * 60 * 1000
        ),
        userId: user.id,
      },
    });

    await sendResetPasswordEmail(
      user.email,
      user.username,
      otp
    );

    return NextResponse.json({
      success: true,
      message: "Reset code sent successfully.",
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