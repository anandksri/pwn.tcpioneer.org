import { redirect } from "next/navigation";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminEventManager from "@/sections/admin/AdminEventManager";

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  if (!(await getCurrentAdmin())) redirect("/");

  const events = await prisma.communityEvent.findMany({
    orderBy: [{ startsAt: "asc" }, { title: "asc" }],
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      startsAt: true,
      endsAt: true,
      location: true,
      registrationUrl: true,
      published: true,
    },
  });

  return (
    <AdminEventManager
      initialEvents={events.map((event) => ({
        ...event,
        startsAt: event.startsAt.toISOString(),
        endsAt: event.endsAt?.toISOString() ?? null,
      }))}
    />
  );
}
