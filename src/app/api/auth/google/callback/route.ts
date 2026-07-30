import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/jwt";
import { getGoogleUser } from "@/lib/google";

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

    const email = googleUser.email!;

    let user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          username:
            googleUser.name?.replace(/\s+/g, "").toLowerCase() ??
            email.split("@")[0],

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
    });

    console.log("Origin:", req.nextUrl.origin);

const redirectUrl = new URL("/dashboard", req.nextUrl.origin);

console.log("Redirect URL:", redirectUrl.toString());

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

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Google authentication failed.",
      },
      { status: 500 }
    );
  }
}