import Link from "next/link";

import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import SectionHeading from "@/components/ui/SectionHeading";

import { trainingGrounds } from "@/data/trainingGrounds";

export default function TrainingGrounds() {
  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          badge="TRAINING GROUNDS"
          title="Choose Your Cybersecurity Domain"
          description="Build practical skills through structured lessons, guided exercises and hands-on learning paths designed for every stage of your cybersecurity journey."
          align="left"
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {trainingGrounds.map((ground) => {
            const Icon = ground.icon;

            return (
              <Card
                key={ground.title}
                className="group flex flex-col hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <IconBox>
                    <Icon size={28} />
                  </IconBox>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      ground.level === "Beginner"
                        ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : ground.level === "Intermediate"
                        ? "border border-amber-500/20 bg-amber-500/10 text-amber-400"
                        : "border border-red-500/20 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {ground.level}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {ground.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {ground.description}
                </p>

                <div className="my-8 h-px bg-zinc-800" />

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-zinc-500">Lessons</p>

                    <p className="mt-1 font-medium text-white">
                      {ground.lessons}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-zinc-500">Estimated Time</p>

                    <p className="mt-1 font-medium text-white">
                      {ground.estimatedTime}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {ground.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300 transition group-hover:border-violet-500/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <Link
                    href={ground.href}
                    className="inline-flex items-center gap-2 font-medium text-violet-400 transition-all duration-300 group-hover:gap-3"
                  >
                    Start Learning

                    <span>→</span>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}