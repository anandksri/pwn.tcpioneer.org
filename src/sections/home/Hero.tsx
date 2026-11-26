"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  Trophy,
} from "lucide-react";

import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/70 bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <div
        className="absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(139,92,246,.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 92%)",
        }}
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,.92fr)] lg:gap-16">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              PWN • By TC Pioneer
            </div>

            <h1 className="mt-7 max-w-[760px] font-mono text-[2.65rem] leading-[1.04] font-bold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.25rem]">
              Learn Cybersecurity
              <span className="mt-2 block text-brand-soft">Through Practice</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Structured modules, practical labs, and real CTF challenges for
              learners who want skills—not just theory.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/modules"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Start learning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/practice"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-6 font-semibold text-secondary-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-elevated hover:text-foreground"
              >
                Explore practice
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-border pt-6">
              {[
                ["Learning", "Structured"],
                ["Labs", "Hands-on"],
                ["Community", "Active"],
              ].map(([label, value]) => (
                <div key={label} className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                  <p className="mt-1 text-xs text-subtle-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex h-12 items-center justify-between border-b border-border px-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
                </div>
                <span className="font-mono text-[10px] text-subtle-foreground">learner@pwn:~</span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="rounded-lg border border-border bg-background p-4 font-mono text-xs sm:text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-success">$</span> pwn learn start
                  </p>
                  <p className="mt-3 text-primary">Initializing learning environment...</p>
                  <p className="mt-2 text-muted-foreground">[+] Linux fundamentals</p>
                  <p className="mt-1 text-muted-foreground">[+] Networking basics</p>
                  <p className="mt-1 text-success">[✓] Your journey is ready</p>
                </div>

                <div className="mt-5 grid grid-cols-2 divide-x divide-border border-y border-border">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span className="font-mono text-[10px] text-success">LIVE</span>
                    </div>
                    <p className="mt-5 text-2xl font-bold text-foreground">CTF</p>
                    <p className="mt-1 text-xs text-muted-foreground">Practice challenges</p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <Clock3 className="h-5 w-5 text-primary" />
                      <span className="font-mono text-[10px] text-subtle-foreground">PROGRESS</span>
                    </div>
                    <p className="mt-5 text-2xl font-bold text-foreground">0%</p>
                    <p className="mt-1 text-xs text-muted-foreground">Learning track</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <LockKeyhole className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">Next skill: Linux permissions</p>
                    <p className="mt-1 text-xs text-muted-foreground">Continue your learning path</p>
                  </div>
                  <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-subtle-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
