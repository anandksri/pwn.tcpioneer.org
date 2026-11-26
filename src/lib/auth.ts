import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
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
        sessionVersion: true,
      },
    });

    if (!user || user.sessionVersion !== payload.sessionVersion) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}

export async function getCurrentAdmin() {
  const user = await getCurrentUser();
  return user?.role === "ADMIN" ? user : null;
}
