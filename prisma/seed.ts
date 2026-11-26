import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

/**
 * Development-only fixture seed. Content remains unpublished by default so
 * running this command cannot accidentally add fake content to the public site.
 */
async function main() {
  const learningModule = await prisma.module.upsert({
    where: { slug: "linux-foundations" },
    update: {},
    create: {
      slug: "linux-foundations",
      title: "Linux Foundations",
      description: "A private development fixture for testing the learning flow.",
      category: "Linux",
      difficulty: "BEGINNER",
      estimatedMinutes: 30,
      sortOrder: 999,
      published: false,
    },
  });

  await prisma.lesson.upsert({
    where: { moduleId_slug: { moduleId: learningModule.id, slug: "shell-navigation" } },
    update: {},
    create: {
      moduleId: learningModule.id,
      slug: "shell-navigation",
      title: "Shell Navigation",
      summary: "Private development fixture lesson.",
      content: "Use this unpublished lesson to verify the learning flow locally.",
      sortOrder: 1,
      published: false,
    },
  });

  await prisma.challenge.upsert({
    where: { slug: "linux-fixture" },
    update: {},
    create: {
      moduleId: learningModule.id,
      slug: "linux-fixture",
      title: "Linux Fixture Challenge",
      description: "Private development fixture for testing challenge submission.",
      category: "Linux",
      difficulty: "BEGINNER",
      points: 50,
      flagHash: await bcrypt.hash("PWN{development_fixture}", 12),
      published: false,
    },
  });

  console.log("Development fixtures seeded as unpublished content.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
