"use client";

import { ArrowRight, Flame, Target } from "lucide-react";

export default function WelcomeBanner() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <section className="border border-border bg-card p-6 md:p-8">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary">{greeting}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Welcome back, Anand
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
              Continue your cybersecurity journey by completing modules, solving labs, and participating in CTF challenges.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-border bg-secondary">
                <Flame className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-xl font-semibold text-foreground">7</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-border bg-secondary">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-semibold text-foreground">82%</p>
                <p className="text-sm text-muted-foreground">Weekly Goal</p>
              </div>
            </div>
          </div>
        </div>

        <button className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover">
          Continue Learning
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
