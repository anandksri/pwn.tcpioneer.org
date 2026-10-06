import Link from "next/link";
import { ArrowLeft, ArrowRight, Flag, Trophy } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import FlagSubmissionForm from "@/components/practice/FlagSubmissionForm";
import Navbar from "@/components/navbar/Navbar";
import PageWrapper from "@/components/PageWrapper";
import { getCurrentUser } from "@/lib/auth";
import { getPublishedChallenge, listPublishedChallenges } from "@/lib/content";

export const dynamic = "force-dynamic";

function formatDifficulty(difficulty: string) {
  return difficulty.charAt(0) + difficulty.slice(1).toLowerCase();
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const user = await getCurrentUser();
  const [challenge, challenges] = await Promise.all([
    getPublishedChallenge(slug, user?.id),
    listPublishedChallenges(),
  ]);

  if (!challenge) notFound();

  const solved = Array.isArray(challenge.attempts) && challenge.attempts.length > 0;
  const challengeIndex = challenges.findIndex((item) => item.slug === slug);
  const nextChallenge = challenges[challengeIndex + 1];

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="bg-background py-36">
          <Container>
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              All challenges
            </Link>

            <article className="mx-auto mt-12 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">
                <span>{challenge.category}</span>
                <span className="text-muted-foreground">·</span>
                <span>{formatDifficulty(challenge.difficulty)}</span>
              </div>
              <h1 className="mt-5 text-4xl font-bold text-foreground md:text-6xl">
                {challenge.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {challenge.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-6 border-y border-border py-5 text-sm text-secondary-foreground">
                <span className="inline-flex items-center gap-2">
                  <Flag className="h-4 w-4 text-primary" />
                  {challenge.points} points
                </span>
                <span className="inline-flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  {solved ? "Completed" : "Not completed"}
                </span>
              </div>

              {user ? (
                <div className="mt-10">
                  <FlagSubmissionForm slug={challenge.slug} completed={solved} />
                </div>
              ) : (
                <div className="mt-10 border border-border bg-card p-6 text-sm text-muted-foreground">
                  <Link href="/" className="font-medium text-brand-soft hover:text-primary">
                    Return home to sign in
                  </Link>{" "}
                  to submit flags and save challenge progress.
                </div>
              )}

              {nextChallenge ? (
                <Link
                  href={`/practice/${nextChallenge.slug}`}
                  className="group mt-10 flex items-center justify-between border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-elevated"
                >
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">
                      Next challenge
                    </p>
                    <p className="mt-2 font-semibold text-foreground group-hover:text-brand-soft">
                      {nextChallenge.title}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              ) : null}
            </article>
          </Container>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
