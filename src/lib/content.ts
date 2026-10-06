import { prisma } from "@/lib/prisma";

/** Public module listing. Challenge secrets and unpublished content never leave this layer. */
export function listPublishedModules() {
  return prisma.module.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      category: true,
      difficulty: true,
      estimatedMinutes: true,
      _count: {
        select: { lessons: true, challenges: true },
      },
    },
  });
}

export function getPublishedModule(slug: string, userId?: string) {
  return prisma.module.findFirst({
    where: { slug, published: true },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      category: true,
      difficulty: true,
      estimatedMinutes: true,
      lessons: {
        where: { published: true },
        orderBy: { sortOrder: "asc" },
        select: {
          id: true,
          slug: true,
          title: true,
          summary: true,
          content: true,
          sortOrder: true,
          progress: userId ? { where: { userId }, select: { completedAt: true } } : false,
        },
      },
      progress: userId ? { where: { userId }, select: { status: true, completedAt: true } } : false,
    },
  });
}

export function listPublishedChallenges() {
  return prisma.challenge.findMany({
    where: { published: true },
    orderBy: [{ difficulty: "asc" }, { title: "asc" }],
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      category: true,
      difficulty: true,
      points: true,
      moduleId: true,
      // Deliberately exclude flagHash from all public reads.
    },
  });
}

/** Public challenge detail. The validation secret is intentionally never selected. */
export function getPublishedChallenge(slug: string, userId?: string) {
  return prisma.challenge.findFirst({
    where: { slug, published: true },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      category: true,
      difficulty: true,
      points: true,
      moduleId: true,
      attempts: userId
        ? { where: { userId, isCorrect: true }, select: { id: true }, take: 1 }
        : false,
    },
  });
}
