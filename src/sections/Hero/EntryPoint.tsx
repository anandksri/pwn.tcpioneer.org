import Link from "next/link";

import Container from "@/components/Container";
import ModuleCard from "@/components/ui/ModuleCard";
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
Start Your Cybersecurity Journey
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
              Begin with the fundamentals before moving into advanced exploitation and real-world cybersecurity challenges.
            </p>
          </div>

     <Link
  href="/modules"
  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:!text-violet-400"
>
  <span>View All Modules</span>

  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</Link>

        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {entryPoint.map((item) => (
            <ModuleCard
              key={item.title}
              title={item.title}
              description={item.description}
              modules={item.modules}
              duration={item.duration}
              level={item.level}
              href={item.href}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}