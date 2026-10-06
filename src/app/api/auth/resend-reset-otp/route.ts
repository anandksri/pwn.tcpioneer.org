import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { sendResetPasswordEmail } from "@/utils/mail";
import { generateOTP, hashOTP } from "@/lib/otp";
import { emailSchema } from "@/lib/validators";
import { rateLimitResponse } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const limited = await rateLimitResponse(req, "auth:resend-reset", 5, 15 * 60 * 1000);
    if (limited) return limited;

    const result = emailSchema.safeParse(await req.json());

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    const { email } = result.data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ success: true, message: "If an account exists, a reset code has been sent." });
    }

    await prisma.oTP.deleteMany({
      where: {
        userId: user.id,
        type: "PASSWORD_RESET",
      },
    });

    const otp = generateOTP();

    await prisma.oTP.create({
      data: {
        code: hashOTP(user.id, "PASSWORD_RESET", otp),
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
