import { prisma } from "@/lib/prisma";

export function createNotification(data: {
  userId: string;
  title: string;
  message: string;
  href?: string;
}) {
  return prisma.notification.create({ data });
}
