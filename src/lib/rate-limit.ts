import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

export function getClientAddress(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function consumeRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): Promise<RateLimitResult> {
  const now = new Date();
  const resetAt = new Date(now.getTime() + windowMs);
  const current = await prisma.rateLimitBucket.findUnique({ where: { key } });

  if (!current || current.resetAt <= now) {
    await prisma.rateLimitBucket.upsert({
      where: { key },
      create: { key, count: 1, resetAt },
      update: { count: 1, resetAt },
    });

    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt.getTime() - now.getTime()) / 1000)),
    };
  }

  await prisma.rateLimitBucket.update({
    where: { key },
    data: { count: { increment: 1 } },
  });

  return { allowed: true, retryAfterSeconds: 0 };
}

export async function rateLimitResponse(
  request: Request,
  scope: string,
  limit: number,
  windowMs: number,
) {
  const result = await consumeRateLimit(
    `${scope}:${getClientAddress(request)}`,
    limit,
    windowMs,
  );

  if (result.allowed) {
    return null;
  }

  return NextResponse.json(
    { success: false, message: "Too many requests. Please try again later." },
    {
      status: 429,
      headers: { "Retry-After": String(result.retryAfterSeconds) },
    },
  );
}
