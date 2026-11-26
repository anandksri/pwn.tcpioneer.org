import { redirect } from "next/navigation";

import NotificationList from "@/components/notifications/NotificationList";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function NotificationsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const notifications = await prisma.notification.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 50,
    select: {
      id: true,
      title: true,
      message: true,
      href: true,
      readAt: true,
      createdAt: true,
    },
  });

  return (
    <NotificationList
      notifications={notifications.map((notification) => ({
        ...notification,
        readAt: notification.readAt?.toISOString() ?? null,
        createdAt: notification.createdAt.toISOString(),
      }))}
    />
  );
}
