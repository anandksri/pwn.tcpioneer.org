import { redirect } from "next/navigation";

import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminChallengeManager from "@/sections/admin/AdminChallengeManager";

export const dynamic = "force-dynamic";

export default async function AdminChallengesPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/");

  const challenges = await prisma.challenge.findMany({
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      moduleId: true,
      slug: true,
      title: true,
      description: true,
      category: true,
      difficulty: true,
      points: true,
      published: true,
    },
  });

  return <AdminChallengeManager initialChallenges={challenges} />;
}
