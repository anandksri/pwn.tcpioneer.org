import Link from "next/link";

import Container from "@/components/Container";
import { entryPoint } from "@/data/entryPoint";

export default function EntryPoint() {
  return (
    <section className="pb-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Entry Point
            </span>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Choose Your First Learning Path
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
              Begin with the fundamentals before moving into advanced
              exploitation and real-world cybersecurity challenges.
            </p>
          </div>

          <Link
            href="/modules"
            className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
          >
            View All Modules →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {entryPoint.map((item) => (
            <Link
              key={item.title}
              href="/modules"
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <div
                className={`mb-6 h-1.5 w-14 rounded-full ${item.color}`}
              />

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-8 space-y-2 text-sm text-zinc-500">
                <div className="flex items-center justify-between">
                  <span>Modules</span>
                  <span>{item.modules}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span>{item.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Level</span>

                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    {item.level}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}