import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/utils/mail";
import { generateOTP, hashOTP } from "@/lib/otp";
import { emailSchema } from "@/lib/validators";
import { rateLimitResponse } from "@/lib/rate-limit";
import { apiError } from "@/utils/api-error";

export async function POST(req: Request) {
  try {
    const limited = await rateLimitResponse(req, "auth:resend-verification", 5, 15 * 60 * 1000);
    if (limited) return limited;

    const result = emailSchema.safeParse(await req.json());

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        {
          status: 400,
        }
      );
    }

    const { email } = result.data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ success: true, message: "If an account exists, a verification code has been sent." });
    }

    if (user.verified) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is already verified.",
        },
        {
          status: 400,
        }
      );
    }

    await prisma.oTP.deleteMany({
      where: {
        userId: user.id,
        type: "EMAIL_VERIFICATION",
      },
    });

    const otp = generateOTP();

    await prisma.oTP.create({
      data: {
        code: hashOTP(user.id, "EMAIL_VERIFICATION", otp),
        type: "EMAIL_VERIFICATION",
        expiresAt: new Date(
          Date.now() + 10 * 60 * 1000
        ),
        userId: user.id,
      },
    });

    await sendVerificationEmail(
      user.email,
      user.username,
      otp
    );

    return NextResponse.json({
      success: true,
      message: "Verification code sent successfully.",
    });
  } catch {
    return apiError("resend-verification");
  }
}
