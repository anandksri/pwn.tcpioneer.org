import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import LessonCompletionButton from "@/components/modules/LessonCompletionButton";
import Navbar from "@/components/navbar/Navbar";
import PageWrapper from "@/components/PageWrapper";
import { getCurrentUser } from "@/lib/auth";
import { getPublishedModule } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>;
}) {
  const { slug, lessonSlug } = await params;
  const user = await getCurrentUser();
  const learningModule = await getPublishedModule(slug, user?.id);

  if (!learningModule) notFound();

  const lessonIndex = learningModule.lessons.findIndex((lesson) => lesson.slug === lessonSlug);
  const lesson = learningModule.lessons[lessonIndex];

  if (!lesson) notFound();

  const completed = Array.isArray(lesson.progress) && Boolean(lesson.progress[0]?.completedAt);
  const previous = learningModule.lessons[lessonIndex - 1];
  const next = learningModule.lessons[lessonIndex + 1];

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="bg-background py-36">
          <Container>
            <Link
              href={`/modules/${learningModule.slug}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {learningModule.title}
            </Link>

            <article className="mx-auto mt-12 max-w-4xl">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">
                Lesson {lessonIndex + 1} · {learningModule.title}
              </p>
              <h1 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">
                {lesson.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{lesson.summary}</p>

              <div className="mt-12 border border-border bg-card p-6 md:p-10">
                <div className="prose prose-invert max-w-none whitespace-pre-wrap leading-8 text-secondary-foreground">
                  {lesson.content}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                {user ? (
                  <LessonCompletionButton
                    slug={learningModule.slug}
                    lessonSlug={lesson.slug}
                    completed={completed}
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Sign in to save your lesson progress.
                  </p>
                )}

                <div className="flex items-center gap-4">
                  {previous ? (
                    <Link
                      href={`/modules/${learningModule.slug}/lessons/${previous.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <ArrowLeft className="h-4 w-4" /> Previous
                    </Link>
                  ) : null}
                  {next ? (
                    <Link
                      href={`/modules/${learningModule.slug}/lessons/${next.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      Next <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          </Container>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
