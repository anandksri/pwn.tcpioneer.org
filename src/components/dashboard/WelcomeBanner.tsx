"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function WelcomeBanner() {
  const { user } = useAuth();
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
              Welcome back, {user?.username ?? "learner"}
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
              Continue your cybersecurity journey by completing modules, solving labs, and participating in CTF challenges.
            </p>
          </div>

        </div>

        <Link href="/modules" className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover">
          Continue Learning
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
