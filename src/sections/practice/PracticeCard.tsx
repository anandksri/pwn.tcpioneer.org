import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";

type PracticeCardProps = {
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  points: number;
  moduleId: string | null;
};

const difficultyStyles = {
  BEGINNER: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  INTERMEDIATE: "border-sky-500/20 bg-sky-500/10 text-sky-400",
  ADVANCED: "border-rose-500/20 bg-rose-500/10 text-rose-400",
} as const;

function formatDifficulty(difficulty: PracticeCardProps["difficulty"]) {
  return difficulty.charAt(0) + difficulty.slice(1).toLowerCase();
}

export default function PracticeCard({
  title,
  description,
  slug,
  category,
  difficulty,
  points,
}: PracticeCardProps) {
  return (
    <article className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10">
          <Flag className="h-6 w-6 text-brand-soft" />
        </div>
        <span
          className={`rounded-md border px-3 py-1 text-xs font-medium ${difficultyStyles[difficulty]}`}
        >
          {formatDifficulty(difficulty)}
        </span>
      </div>

      <p className="mt-5 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
        {category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-brand-soft">
        {title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-secondary-foreground">
        {description}
      </p>

      <div className="my-5 h-px bg-elevated" />
      <div className="flex items-center justify-between text-sm text-secondary-foreground">
        <span>{points} points</span>
        <span>Challenge</span>
      </div>

      <Link
        href={`/practice/${slug}`}
        className="mt-6 inline-flex items-center gap-2 font-medium text-secondary-foreground transition-colors hover:text-brand-soft"
      >
        View challenge
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
