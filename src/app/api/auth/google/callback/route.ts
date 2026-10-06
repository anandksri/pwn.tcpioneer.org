import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/jwt";
import { getGoogleUser } from "@/lib/google";
import { apiError } from "@/utils/api-error";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");

    if (!code) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing authorization code.",
        },
        { status: 400 }
      );
    }

    const googleUser = await getGoogleUser(code);
    if (!googleUser.email) {
      return NextResponse.json(
        { success: false, message: "Google account email is unavailable." },
        { status: 400 },
      );
    }
    const email = googleUser.email.toLowerCase();

    let user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      const baseUsername = (googleUser.name ?? email.split("@")[0])
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, "")
        .slice(0, 16) || "googleuser";
      let username = baseUsername.length >= 3 ? baseUsername : `${baseUsername}user`;
      let suffix = 1;

      while (await prisma.user.findUnique({ where: { username } })) {
        const suffixText = String(suffix++);
        username = `${baseUsername.slice(0, 20 - suffixText.length)}${suffixText}`;
      }

      user = await prisma.user.create({
        data: {
          username,
          email,

          password: "",

          verified: true,

          avatar: googleUser.picture,
        },
      });
    }

    const token = signToken({
      userId: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      sessionVersion: user.sessionVersion,
    });

    const response = NextResponse.redirect(
      new URL("/dashboard", req.nextUrl.origin)
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return apiError("google-callback", "Google authentication failed.");
  }
}
