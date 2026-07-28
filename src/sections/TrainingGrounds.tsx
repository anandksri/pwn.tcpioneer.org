import Link from "next/link";

import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

import { trainingGrounds } from "@/data/trainingGrounds";

const colors = {
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hover: "hover:border-emerald-500/40",
    text: "group-hover:text-emerald-400",
    glow:
      "hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
  },

  sky: {
    icon: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hover: "hover:border-sky-500/40",
    text: "group-hover:text-sky-400",
    glow:
      "hover:shadow-[0_0_30px_rgba(14,165,233,0.12)]",
  },

  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hover: "hover:border-violet-500/40",
    text: "group-hover:text-violet-400",
    glow:
      "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },

  orange: {
    icon: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    hover: "hover:border-orange-500/40",
    text: "group-hover:text-orange-400",
    glow:
      "hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]",
  },

  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    hover: "hover:border-cyan-500/40",
    text: "group-hover:text-cyan-400",
    glow:
      "hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
  },

  rose: {
    icon: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    hover: "hover:border-rose-500/40",
    text: "group-hover:text-rose-400",
    glow:
      "hover:shadow-[0_0_30px_rgba(244,63,94,0.12)]",
  },
} as const;

export default function TrainingGrounds() {
  return (
    <section className="py-32">
      <Container>

        <SectionHeading
          badge="TRAINING GROUNDS"
          title="Choose Your Cybersecurity Domain"
          description="Build practical skills through structured lessons, guided exercises and hands-on learning paths designed for every stage."
          align="left"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {trainingGrounds.map((ground) => {

            const theme = colors[ground.color];

            const Icon = ground.icon;

            return (

              <div
                key={ground.title}
                className={`group flex cursor-pointer flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 ${theme.hover} ${theme.glow}`}
              >

                {/* Header */}

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.bg} ${theme.border}`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${theme.icon}`}
                      />
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold text-white">
                        {ground.title}
                      </h3>

                      <p
                        className={`mt-1 text-xs font-medium ${theme.icon}`}
                      >
                        {ground.level}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {ground.description}
                </p>

                {/* Stats */}

                <div className="mt-6 flex items-center gap-6 border-t border-zinc-800 pt-5">

                  <div className="flex items-center gap-2 text-sm text-zinc-400">

                    <BookOpen className="h-4 w-4" />

                    <span>{ground.lessons} Lessons</span>

                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-400">

                    <Clock3 className="h-4 w-4" />

                    <span>{ground.estimatedTime}</span>

                  </div>

                </div>

                {/* Topics */}

                                <div className="mt-6 flex flex-wrap gap-2">
                  {ground.topics.map((topic) => (
                    <span
                      key={topic}
                      className={`rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300 transition-all duration-300 ${theme.hover}`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA */}

                <div
                  className={`mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-zinc-300 transition-colors duration-300 ${theme.text}`}
                >
                  <Link
                    href={ground.href}
                    className="group/link inline-flex items-center gap-2"
                  >
                    <span>Start Learning</span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>

            );
          })}

        </div>

      </Container>
    </section>
  );
}