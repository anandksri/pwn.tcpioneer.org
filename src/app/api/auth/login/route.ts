import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/utils/hash";
import { signToken } from "@/lib/jwt";
import { loginSchema } from "@/lib/validators";
import { rateLimitResponse } from "@/lib/rate-limit";
import { apiError } from "@/utils/api-error";

export async function POST(req: Request) {
  try {
    const limited = await rateLimitResponse(req, "auth:login", 10, 15 * 60 * 1000);
    if (limited) return limited;

    const result = loginSchema.safeParse(await req.json());

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Username/Email and password are required.",
        },
        { status: 400 }
      );
    }

    const { identifier, password } = result.data;

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
      sessionVersion: user.sessionVersion,
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
  } catch {
    return apiError("login");
  }
}
