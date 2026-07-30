import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/utils/hash";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const { identifier, password } = await req.json();

    if (!identifier || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Username/Email and password are required.",
        },
        { status: 400 }
      );
    }

    // Find user by email OR username
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: identifier,
          },
          {
            username: identifier,
          },
        ],
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username/email or password.",
        },
        { status: 401 }
      );
    }

    // Check email verification
    if (!user.verified) {
      return NextResponse.json(
        {
          success: false,
          message: "Please verify your email first.",
        },
        { status: 403 }
      );
    }

    // Compare password
    const validPassword = await comparePassword(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username/email or password.",
        },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = signToken({
      userId: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    });

    // Save cookie
    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({
      success: true,
      message: "Logged in successfully.",
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
