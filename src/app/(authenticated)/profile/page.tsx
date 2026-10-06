import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Flag, Trophy } from "lucide-react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { getProfileData } from "@/lib/profile";

export const dynamic = "force-dynamic";

function formatDifficulty(difficulty: string) {
  return difficulty.charAt(0) + difficulty.slice(1).toLowerCase();
}

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const profile = await getProfileData(user.id);
  const initials = user.username.slice(0, 2).toUpperCase();
  const stats = [
    { label: "Points", value: profile.stats.points, detail: "Earned from solved challenges", icon: Trophy },
    { label: "Challenges", value: profile.stats.solvedChallenges, detail: "Challenges solved", icon: Flag },
    { label: "Lessons", value: profile.stats.completedLessons, detail: "Lessons completed", icon: BookOpen },
    { label: "Modules", value: profile.stats.completedModules, detail: "Modules completed", icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-8">
      <section className="border border-border bg-card p-6 md:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-primary/30 bg-primary/10 text-2xl font-bold text-primary">
              {initials}
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">Learner profile</p>
              <h1 className="mt-2 text-3xl font-bold text-foreground">{user.username}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Link href="/settings" className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground">
            Account settings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, detail, icon: Icon }) => (
          <div key={label} className="border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-3 text-3xl font-semibold text-foreground">{value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{detail}</p>
              </div>
              <Icon className="h-5 w-5 text-primary" />
            </div>
          </div>
        ))}
      </section>

      <div className="grid gap-8 xl:grid-cols-2">
        <section className="border border-border bg-card p-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Learning progress</h2>
              <p className="mt-1 text-sm text-muted-foreground">Your published module progress</p>
            </div>
            <BookOpen className="h-5 w-5 text-primary" />
          </div>

          {profile.modules.length ? (
            <div className="space-y-4">
              {profile.modules.map((module) => {
                const percentage = module.totalLessons
                  ? Math.round((module.completedLessons / module.totalLessons) * 100)
                  : 0;

                return (
                  <Link key={module.slug} href={`/modules/${module.slug}`} className="block border border-border bg-secondary p-4 transition-colors hover:border-primary/40 hover:bg-elevated">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">{module.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {module.category} · {formatDifficulty(module.difficulty)} · {module.status === "COMPLETED" ? "Completed" : "In progress"}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-brand-soft">{percentage}%</span>
                    </div>
                    <div className="mt-4 h-2 bg-background">
                      <div className="h-full bg-primary" style={{ width: `${percentage}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {module.completedLessons} of {module.totalLessons} lessons completed
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-border bg-secondary p-8 text-center text-sm text-muted-foreground">
              Start a module to see your learning progress here.
              <Link href="/modules" className="mt-4 inline-flex items-center gap-2 font-medium text-brand-soft hover:text-primary">
                Browse modules <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>

        <section className="border border-border bg-card p-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Solved challenges</h2>
              <p className="mt-1 text-sm text-muted-foreground">Your verified practice achievements</p>
            </div>
            <Flag className="h-5 w-5 text-primary" />
          </div>

          {profile.challenges.length ? (
            <div className="space-y-3">
              {profile.challenges.map((challenge) => (
                <Link key={challenge.slug} href={`/practice/${challenge.slug}`} className="flex items-center justify-between gap-4 border border-border bg-secondary p-4 transition-colors hover:border-primary/40 hover:bg-elevated">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-foreground">{challenge.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {challenge.category} · {formatDifficulty(challenge.difficulty)}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-brand-soft">+{challenge.points} pts</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-border bg-secondary p-8 text-center text-sm text-muted-foreground">
              Solved challenges will appear here after your first correct flag.
              <Link href="/practice" className="mt-4 inline-flex items-center gap-2 font-medium text-brand-soft hover:text-primary">
                Browse practice <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
