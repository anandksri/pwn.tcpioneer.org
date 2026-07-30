import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/jwt";
import { getGitHubUser } from "@/lib/github";

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

    const githubUser = await getGitHubUser(code);

    let user = await prisma.user.findUnique({
      where: {
        email: githubUser.email,
      },
    });

    if (!user) {
      let username = githubUser.username;

      // Ensure username is unique
      let counter = 1;

      while (
        await prisma.user.findUnique({
          where: {
            username,
          },
        })
      ) {
        username = `${githubUser.username}${counter++}`;
      }

      user = await prisma.user.create({
        data: {
          username,
          email: githubUser.email,
          password: "",
          verified: true,
          avatar: githubUser.avatar,
        },
      });
    }

    const token = signToken({
      userId: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
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
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "GitHub authentication failed.",
      },
      { status: 500 }
    );
  }
}