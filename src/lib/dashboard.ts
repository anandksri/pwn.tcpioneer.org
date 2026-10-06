import { prisma } from "@/lib/prisma";

export async function getDashboardData(userId: string) {
  const [lessonProgress, completedLessonCount, solvedChallenges, moduleProgress, firstModule] = await Promise.all([
    prisma.lessonProgress.findMany({
      where: { userId, completedAt: { not: null } },
      orderBy: { updatedAt: "desc" },
      take: 8,
      select: {
        id: true,
        updatedAt: true,
        lesson: {
          select: {
            title: true,
            slug: true,
            module: { select: { title: true, slug: true } },
          },
        },
      },
    }),
    prisma.lessonProgress.count({
      where: { userId, completedAt: { not: null }, lesson: { published: true } },
    }),
    prisma.challenge.findMany({
      where: {
        published: true,
        attempts: { some: { userId, isCorrect: true } },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        points: true,
        attempts: {
          where: { userId, isCorrect: true },
          orderBy: { submittedAt: "desc" },
          take: 1,
          select: { submittedAt: true },
        },
      },
    }),
    prisma.moduleProgress.findMany({
      where: {
        userId,
        status: { in: ["IN_PROGRESS", "COMPLETED"] },
        module: { published: true },
      },
      orderBy: { updatedAt: "desc" },
      take: 6,
      select: {
        status: true,
        updatedAt: true,
        module: {
          select: {
            id: true,
            title: true,
            slug: true,
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
    prisma.module.findFirst({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
      select: {
        id: true,
        title: true,
        slug: true,
        lessons: {
          where: { published: true },
          select: { id: true, progress: { where: { userId }, select: { completedAt: true } } },
        },
      },
    }),
  ]);

  const activeModule = moduleProgress.find((item) => item.status === "IN_PROGRESS") ?? moduleProgress[0];
  const selectedModule = activeModule?.module ?? firstModule;
  const selectedModuleCompleted = selectedModule?.lessons.filter(
    (lesson) => lesson.progress[0]?.completedAt,
  ).length ?? 0;

  const activities = [
    ...lessonProgress.map((item) => ({
      id: `lesson-${item.id}`,
      label: "Completed lesson",
      title: item.lesson.title,
      detail: item.lesson.module.title,
      href: `/modules/${item.lesson.module.slug}/lessons/${item.lesson.slug}`,
      date: item.updatedAt,
    })),
    ...solvedChallenges.map((challenge) => ({
      id: `challenge-${challenge.id}`,
      label: "Solved challenge",
      title: challenge.title,
      detail: `${challenge.points} points`,
      href: `/practice/${challenge.slug}`,
      date: challenge.attempts[0]?.submittedAt ?? null,
    })),
  ].sort((left, right) => {
    const leftTime = left.date?.getTime() ?? 0;
    const rightTime = right.date?.getTime() ?? 0;
    return rightTime - leftTime;
  }).slice(0, 6);

  return {
    stats: {
      points: solvedChallenges.reduce((total, challenge) => total + challenge.points, 0),
      completedLessons: completedLessonCount,
      solvedChallenges: solvedChallenges.length,
      completedModules: moduleProgress.filter((item) => item.status === "COMPLETED").length,
    },
    continueLearning: selectedModule
      ? {
          title: selectedModule.title,
          slug: selectedModule.slug,
          completedLessons: selectedModuleCompleted,
          totalLessons: selectedModule.lessons.length,
        }
      : null,
    activities,
  };
}
