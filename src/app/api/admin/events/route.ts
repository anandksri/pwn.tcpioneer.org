import { NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { adminEventCreateSchema } from "@/lib/validators";
import { apiError } from "@/utils/api-error";

const eventFields = {
  id: true,
  title: true,
  description: true,
  category: true,
  startsAt: true,
  endsAt: true,
  location: true,
  registrationUrl: true,
  published: true,
} as const;

export async function GET() {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const events = await prisma.communityEvent.findMany({
      orderBy: [{ startsAt: "asc" }, { title: "asc" }],
      select: eventFields,
    });

    return NextResponse.json({ success: true, events });
  } catch {
    return apiError("admin-events-list");
  }
}

export async function POST(request: Request) {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const result = adminEventCreateSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid event details." }, { status: 400 });
    }

    const event = await prisma.communityEvent.create({
      data: { ...result.data, published: false },
      select: eventFields,
    });

    return NextResponse.json({ success: true, event }, { status: 201 });
  } catch {
    return apiError("admin-event-create");
  }
}
