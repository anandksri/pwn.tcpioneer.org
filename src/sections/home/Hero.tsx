"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/Container";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-background" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-30 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.025) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}

          <span className="rounded-sm border border-border bg-card px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.2em] text-brand-soft uppercase">
            PWN • BY TC PIONEER
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-4xl leading-[1.1] font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Learn Cybersecurity
            <div className="mt-3 flex min-h-20 w-full items-center justify-center">
              <AnimatedText
                className="w-full max-w-full px-4 text-center text-2xl leading-tight font-black text-primary sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                texts={[
                  "Practical Experience",
                  "Hands-on Labs",
                  "CTF Challenges",
                  "Community Learning",
                  "Real-world Projects",
                ]}
              />
            </div>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-muted-foreground">
            A modern cybersecurity learning platform built for aspiring ethical
            hackers, students and professionals. Learn through structured
            modules, hands-on labs, curated resources and an active community
            designed to prepare you for real-world cybersecurity.
          </p>

          {/* CTA */}

          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/modules"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-brand-hover"
            >
              Start Learning
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/practice"
              className="rounded-md border border-border bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground transition-colors hover:border-primary/60 hover:bg-elevated hover:text-foreground"
            >
              Explore Practice
            </Link>
          </div>

          {/* Divider */}

          <div className="mt-16 h-px w-32 bg-border" />

          {/* Scroll Indicator */}

          <div className="mt-8 flex flex-col items-center">
            <span className="mb-3 font-mono text-xs font-medium tracking-[0.25em] text-subtle-foreground uppercase">
              Scroll
            </span>

            <div className="flex h-10 w-6 justify-center rounded-sm border border-border p-1">
              <div className="h-2 w-2 rounded-md bg-primary" />
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
}
