import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validators";
import { hashPassword } from "@/utils/hash";
import { generateOTP } from "@/lib/otp";
import { sendVerificationEmail } from "@/utils/mail";

export async function POST(req: Request) {
  try {
    // Read request body
    const body = await req.json();

    // Validate input
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { username, email, password } = result.data;

    // Check username
    const usernameExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (usernameExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Username already exists.",
        },
        { status: 409 }
      );
    }

    // Check email
    const emailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already registered.",
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // Generate OTP
    const otp = generateOTP();

    // Save OTP
    await prisma.oTP.create({
      data: {
        code: otp,
        type: "EMAIL_VERIFICATION",
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        userId: user.id,
      },
    });

    // Send verification email
    await sendVerificationEmail(user.email, user.username, otp);
    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      },
      { status: 201 }
    );
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
