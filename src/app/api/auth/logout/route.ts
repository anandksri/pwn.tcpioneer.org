import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    try {
      const payload = verifyToken(token);
      await prisma.user.updateMany({
        where: { id: payload.userId, sessionVersion: payload.sessionVersion },
        data: { sessionVersion: { increment: 1 } },
      });
    } catch {
      // Always clear the browser cookie, even when the session is already invalid.
    }
  }

  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully.",
  });

  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  });

  return response;
}
