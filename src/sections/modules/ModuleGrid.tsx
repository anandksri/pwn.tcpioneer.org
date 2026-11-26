"use client";

import Link from "next/link";
import { BookOpen, Code2, Globe, Network, Terminal } from "lucide-react";

import Container from "@/components/Container";
import ModuleCard from "@/sections/modules/ModuleCard";

export type PublishedModule = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  estimatedMinutes: number;
  _count: { lessons: number; challenges: number };
};

type Props = {
  modules: PublishedModule[];
  selectedCategory: string;
  error: boolean;
};

const icons = {
  Linux: Terminal,
  Networking: Network,
  Web: Globe,
  Programming: Code2,
};

const colors = {
  BEGINNER: "emerald",
  INTERMEDIATE: "sky",
  ADVANCED: "rose",
} as const;

function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return remaining ? `${hours}h ${remaining}m` : `${hours} Hours`;
}

export default function ModuleGrid({ modules, selectedCategory, error }: Props) {
  const filteredModules =
    selectedCategory === "All"
      ? modules
      : modules.filter((module) => module.category === selectedCategory);

  return (
    <section className="bg-background py-16">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
              Learning Paths
            </span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Browse Modules
            </h2>
          </div>
          <span className="hidden text-sm text-subtle-foreground lg:block">
            {filteredModules.length} Published Modules
          </span>
        </div>

        {error ? (
          <div className="border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">
            Modules are temporarily unavailable. Please try again later.
          </div>
        ) : filteredModules.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card/60 p-10 text-center sm:p-14">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">No modules published yet</h3>
            <p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">
              New learning modules will appear here as they become available.
            </p>
            <Link
              href="/get-started"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-border bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-elevated hover:text-foreground"
            >
              Explore learning paths
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredModules.map((module) => {
              const Icon = icons[module.category as keyof typeof icons] ?? BookOpen;

              return (
                <ModuleCard
                  key={module.id}
                  category={module.category}
                  title={module.title}
                  description={module.description}
                  slug={module.slug}
                  lessons={module._count.lessons}
                  duration={formatDuration(module.estimatedMinutes)}
                  difficulty={module.difficulty.charAt(0) + module.difficulty.slice(1).toLowerCase() as "Beginner" | "Intermediate" | "Advanced"}
                  icon={Icon}
                  color={colors[module.difficulty]}
                />
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
