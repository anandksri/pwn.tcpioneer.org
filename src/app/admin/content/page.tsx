import { redirect } from "next/navigation";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminContentManager from "@/sections/admin/AdminContentManager";

export const dynamic = "force-dynamic";

export default async function AdminContentPage() {
  if (!(await getCurrentAdmin())) redirect("/");

  const modules = await prisma.module.findMany({
    orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      category: true,
      difficulty: true,
      estimatedMinutes: true,
      sortOrder: true,
      published: true,
      lessons: {
        orderBy: { sortOrder: "asc" },
        select: {
          id: true,
          slug: true,
          title: true,
          summary: true,
          content: true,
          sortOrder: true,
          published: true,
        },
      },
    },
  });

  return <AdminContentManager initialModules={modules} />;
}
