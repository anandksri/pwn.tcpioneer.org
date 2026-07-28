import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Users,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/Container";

const highlights = [
  {
    title: "Structured Learning",
    icon: BookOpen,
    color: "text-violet-400",
  },
  {
    title: "Hands-on Labs",
    icon: FlaskConical,
    color: "text-emerald-400",
  },
  {
    title: "Community Driven",
    icon: Users,
    color: "text-sky-400",
  },
  {
    title: "Career Ready",
    icon: ShieldCheck,
    color: "text-orange-400",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#09090B] pt-52 pb-40">

      {/* Background */}

      <div className="absolute inset-0 z-0 bg-[#09090B]" />

      {/* Square Grid */}

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft Blur */}

      <div className="absolute inset-0 z-0 backdrop-blur-[0.5px]" />

      {/* Top Fade */}

      <div className="absolute inset-x-0 top-0 z-0 h-44 bg-gradient-to-b from-[#09090B] to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 z-0 h-56 bg-gradient-to-t from-[#09090B] to-transparent" />

      {/* Left Fade */}

      <div className="absolute inset-y-0 left-0 z-0 w-48 bg-gradient-to-r from-[#09090B] to-transparent" />

      {/* Right Fade */}

      <div className="absolute inset-y-0 right-0 z-0 w-48 bg-gradient-to-l from-[#09090B] to-transparent" />

      <Container className="relative z-10">

        <div className="mx-auto max-w-5xl text-center">

          {/* Logo */}

          <div className="flex items-center justify-center gap-5">

            <h1 className="font-mono text-6xl font-black tracking-tight text-white lg:text-7xl">
              PWN.
            </h1>

            <div className="h-16 w-3 rounded-full bg-violet-500" />

            <h1 className="font-mono text-6xl font-black tracking-tight text-violet-400 lg:text-7xl">
              TCPIONEER
            </h1>

          </div>

          {/* Tagline */}

          <p className="mt-6 text-xl font-medium text-white lg:text-2xl">
            Learn
            <span className="mx-3 text-zinc-600">•</span>
            Practice
            <span className="mx-3 text-zinc-600">•</span>
            Master Cybersecurity
          </p>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            A modern cybersecurity learning platform built for aspiring
            ethical hackers, students and professionals. Learn through
            structured modules, practical labs, real-world challenges
            and community-driven education.
          </p>

          {/* Highlights */}

          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group cursor-pointer rounded-xl border border-zinc-800/80 bg-black/50 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900/70"
                >

                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80">

                    <Icon className={`h-5 w-5 ${item.color}`} />

                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                </div>

              );

            })}

          </div>

          {/* Buttons */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/modules"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-violet-500/20"
            >
              Start Learning

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/roadmaps"
              className="rounded-xl border border-zinc-700 bg-black/50 px-7 py-3.5 font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500 hover:bg-zinc-900/70 hover:text-white"
            >
              View Learning Paths
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}