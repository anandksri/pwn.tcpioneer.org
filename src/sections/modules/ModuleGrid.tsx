"use client";

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
          <div className="border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
            No published modules are available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredModules.map((module) => {
              const Icon = icons[module.category as keyof typeof icons] ?? BookOpen;

              return (
                <ModuleCard
                  key={module.id}
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
