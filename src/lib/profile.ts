import { prisma } from "@/lib/prisma";

export async function getProfileData(userId: string) {
  const [moduleProgress, solvedChallenges, completedLessons] = await Promise.all([
    prisma.moduleProgress.findMany({
      where: { userId, module: { published: true } },
      orderBy: { updatedAt: "desc" },
      select: {
        status: true,
        updatedAt: true,
        module: {
          select: {
            title: true,
            slug: true,
            category: true,
            difficulty: true,
            lessons: {
              where: { published: true },
              select: {
                id: true,
                progress: { where: { userId }, select: { completedAt: true } },
              },
            },
          },
        },
      },
    }),
    prisma.challenge.findMany({
      where: {
        published: true,
        attempts: { some: { userId, isCorrect: true } },
      },
      orderBy: { updatedAt: "desc" },
      select: {
        title: true,
        slug: true,
        category: true,
        difficulty: true,
        points: true,
        attempts: {
          where: { userId, isCorrect: true },
          orderBy: { submittedAt: "desc" },
          take: 1,
          select: { submittedAt: true },
        },
      },
    }),
    prisma.lessonProgress.count({
      where: { userId, completedAt: { not: null }, lesson: { published: true } },
    }),
  ]);

  return {
    stats: {
      completedModules: moduleProgress.filter((item) => item.status === "COMPLETED").length,
      inProgressModules: moduleProgress.filter((item) => item.status === "IN_PROGRESS").length,
      completedLessons,
      solvedChallenges: solvedChallenges.length,
      points: solvedChallenges.reduce((total, challenge) => total + challenge.points, 0),
    },
    modules: moduleProgress.map((item) => ({
      title: item.module.title,
      slug: item.module.slug,
      category: item.module.category,
      difficulty: item.module.difficulty,
      status: item.status,
      completedLessons: item.module.lessons.filter((lesson) => lesson.progress[0]?.completedAt).length,
      totalLessons: item.module.lessons.length,
      updatedAt: item.updatedAt,
    })),
    challenges: solvedChallenges.map((challenge) => ({
      title: challenge.title,
      slug: challenge.slug,
      category: challenge.category,
      difficulty: challenge.difficulty,
      points: challenge.points,
      solvedAt: challenge.attempts[0]?.submittedAt ?? null,
    })),
  };
}
