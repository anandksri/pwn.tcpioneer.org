import { NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { adminEventUpdateSchema } from "@/lib/validators";
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

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const result = adminEventUpdateSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ success: false, message: "Invalid event details." }, { status: 400 });
    }

    const { id } = await params;
    const existing = await prisma.communityEvent.findUnique({
      where: { id },
      select: { startsAt: true, endsAt: true },
    });
    if (!existing) {
      return NextResponse.json({ success: false, message: "Event not found." }, { status: 404 });
    }

    const startsAt = result.data.startsAt ?? existing.startsAt;
    const endsAt = result.data.endsAt === undefined ? existing.endsAt : result.data.endsAt;
    if (endsAt && endsAt < startsAt) {
      return NextResponse.json(
        { success: false, message: "End time must be after the start time." },
        { status: 400 },
      );
    }

    const event = await prisma.communityEvent.update({
      where: { id },
      data: result.data,
      select: eventFields,
    });

    return NextResponse.json({ success: true, event });
  } catch {
    return apiError("admin-event-update");
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    if (!(await getCurrentAdmin())) {
      return NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 });
    }

    const { id } = await params;
    const result = await prisma.communityEvent.deleteMany({ where: { id } });
    if (!result.count) {
      return NextResponse.json({ success: false, message: "Event not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return apiError("admin-event-delete");
  }
}
