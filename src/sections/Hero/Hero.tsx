"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/Container";
import AnimatedText from "@/components/ui/AnimatedText";

const stats = [
  {
    value: "120+",
    label: "Learning Modules",
  },
  {
    value: "50+",
    label: "Hands-on Labs",
  },
  {
    value: "3K+",
    label: "Community Members",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#09090B] pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-[#09090B]" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Blur */}

      <div className="absolute inset-0 -z-30 backdrop-blur-[1px]" />

      {/* Top Fade */}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#09090B] to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#09090B] to-transparent" />

      {/* Left Fade */}

      <div className="absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#09090B] to-transparent" />

      {/* Right Fade */}

      <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-[#09090B] to-transparent" />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-violet-400">
            PWN • BY TC PIONEER
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn Cybersecurity
            <div className="mt-3 flex h-20 w-full items-center justify-center">
              <AnimatedText
                className="
    w-full
    max-w-full
    px-4
    text-center
    text-2xl
    font-black
    leading-tight
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
  "
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

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            A modern cybersecurity learning platform built for aspiring ethical
            hackers, students and professionals. Learn through structured
            modules, hands-on labs, curated resources and an active community
            designed to prepare you for real-world cybersecurity.
          </p>

          {/* CTA */}

          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/modules"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_15px_40px_rgba(139,92,246,.30)]"
            >
              Start Learning
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/practice"
              className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-7 py-3.5 font-semibold text-zinc-300 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
            >
              Explore Practice
            </Link>
          </div>

          {/* Divider */}

          <div className="mt-16 h-px w-56 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          {/* Scroll Indicator */}

          <div className="mt-8 flex flex-col items-center">
            <span className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-zinc-600">
              Scroll
            </span>

            <div className="flex h-10 w-6 justify-center rounded-full border border-zinc-700 p-1">
              <div className="h-2 w-2 rounded-full bg-violet-400 animate-[scroll_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </Container>

      {/* Animation */}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }

          50% {
            transform: translateY(14px);
            opacity: 0.4;
          }

          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
