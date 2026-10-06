import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { verifyToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        verified: true,
        avatar: true,
        createdAt: true,
        sessionVersion: true,
      },
    });

    if (!user || user.sessionVersion !== payload.sessionVersion) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const safeUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      verified: user.verified,
      avatar: user.avatar,
      createdAt: user.createdAt,
    };

    return NextResponse.json({
      success: true,
      user: safeUser,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid session",
      },
      { status: 401 }
    );
  }
}
