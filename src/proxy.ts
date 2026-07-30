import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const protectedRoutes = ["/dashboard"];

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    verifyToken(token);

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};