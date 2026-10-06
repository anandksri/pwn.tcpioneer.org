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

export async function searchPublishedContent(query: string) {
  const term = query.trim();
  if (term.length < 2) return [];

  const [modules, lessons, challenges] = await Promise.all([
    prisma.module.findMany({
      where: {
        published: true,
        OR: [
          { title: { contains: term, mode: "insensitive" } },
          { description: { contains: term, mode: "insensitive" } },
          { category: { contains: term, mode: "insensitive" } },
        ],
      },
      take: 8,
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
      select: { slug: true, title: true, description: true, category: true },
    }),
    prisma.lesson.findMany({
      where: {
        published: true,
        module: { published: true },
        OR: [
          { title: { contains: term, mode: "insensitive" } },
          { summary: { contains: term, mode: "insensitive" } },
          { content: { contains: term, mode: "insensitive" } },
        ],
      },
      take: 8,
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
      select: { slug: true, title: true, summary: true, module: { select: { slug: true, title: true } } },
    }),
    prisma.challenge.findMany({
      where: {
        published: true,
        OR: [
          { title: { contains: term, mode: "insensitive" } },
          { description: { contains: term, mode: "insensitive" } },
          { category: { contains: term, mode: "insensitive" } },
        ],
      },
      take: 8,
      orderBy: [{ difficulty: "asc" }, { title: "asc" }],
      select: { slug: true, title: true, description: true, category: true },
    }),
  ]);

  return [
    ...modules.map((module) => ({
      type: "module" as const,
      title: module.title,
      description: module.description,
      meta: module.category,
      href: `/modules/${module.slug}`,
    })),
    ...lessons.map((lesson) => ({
      type: "lesson" as const,
      title: lesson.title,
      description: lesson.summary,
      meta: `Lesson · ${lesson.module.title}`,
      href: `/modules/${lesson.module.slug}/lessons/${lesson.slug}`,
    })),
    ...challenges.map((challenge) => ({
      type: "challenge" as const,
      title: challenge.title,
      description: challenge.description,
      meta: `Challenge · ${challenge.category}`,
      href: `/practice/${challenge.slug}`,
    })),
  ];
}
