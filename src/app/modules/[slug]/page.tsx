import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageWrapper from "@/components/PageWrapper";
import { getCurrentUser } from "@/lib/auth";
import { getPublishedModule } from "@/lib/content";

export const dynamic = "force-dynamic";

function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return remaining ? `${hours}h ${remaining}m` : `${hours} Hours`;
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const user = await getCurrentUser();
  const learningModule = await getPublishedModule(slug, user?.id);

  if (!learningModule) notFound();

  const progress = Array.isArray(learningModule.progress) ? learningModule.progress[0] : null;
  const completedLessons = learningModule.lessons.filter(
    (lesson) => Array.isArray(lesson.progress) && lesson.progress[0]?.completedAt,
  ).length;

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="bg-background py-36">
          <Container>
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              All modules
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">
                  {learningModule.category} · {learningModule.difficulty}
                </p>
                <h1 className="mt-5 text-4xl font-bold text-foreground md:text-6xl">
                  {learningModule.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  {learningModule.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-secondary-foreground">
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    {learningModule.lessons.length} lessons
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-primary" />
                    {formatDuration(learningModule.estimatedMinutes)}
                  </span>
                </div>
              </div>

              <aside className="border border-border bg-card p-6">
                <p className="text-sm font-medium text-muted-foreground">Your progress</p>
                <p className="mt-3 text-3xl font-semibold text-foreground">
                  {completedLessons}/{learningModule.lessons.length}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {progress?.status === "COMPLETED" ? "Module completed" : "Lessons completed"}
                </p>
                <div className="mt-5 h-2 border border-border bg-secondary">
                  <div
                    className="h-full bg-primary"
                    style={{
                      width: `${learningModule.lessons.length ? (completedLessons / learningModule.lessons.length) * 100 : 0}%`,
                    }}
                  />
                </div>
              </aside>
            </div>

            <section className="mt-20">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">
                    Curriculum
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-foreground">Lessons</h2>
                </div>
                <span className="text-sm text-muted-foreground">
                  {completedLessons} completed
                </span>
              </div>

              {learningModule.lessons.length === 0 ? (
                <div className="mt-8 border border-dashed border-border bg-card p-8 text-center text-muted-foreground">
                  Lessons for this module have not been published yet.
                </div>
              ) : (
                <div className="mt-8 space-y-3">
                  {learningModule.lessons.map((lesson, index) => {
                    const completed = Array.isArray(lesson.progress) && Boolean(lesson.progress[0]?.completedAt);

                    return (
                      <Link
                        key={lesson.id}
                        href={`/modules/${learningModule.slug}/lessons/${lesson.slug}`}
                        className="group flex items-center justify-between gap-4 border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-elevated"
                      >
                        <div className="flex min-w-0 items-center gap-4">
                          <span className="font-mono text-sm text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-brand-soft">
                              {lesson.title}
                            </h3>
                            <p className="mt-1 truncate text-sm text-muted-foreground">
                              {lesson.summary}
                            </p>
                          </div>
                        </div>
                        <span className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
                          {completed ? "Completed" : "Open"}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>
          </Container>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
