import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

type LearningModuleCardProps = {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  lessons: number;
  duration: string;
  image: string;
};

const difficultyColors = {
  Beginner: "bg-secondary border-border text-secondary-foreground",

  Intermediate: "bg-secondary border-border text-secondary-foreground",

  Advanced: "bg-secondary border-border text-secondary-foreground",
};

export default function LearningModuleCard({
  slug,
  title,
  description,
  category,
  difficulty,
  lessons,
  duration,
  image,
}: LearningModuleCardProps) {
  const badge =
    difficultyColors[difficulty as keyof typeof difficultyColors] ??
    "bg-primary/10 border-primary/20 text-brand-soft";

  return (
    <Link
      href={`/modules/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40 hover:bg-elevated"
    >
      {/* Banner */}

      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-secondary">

        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="relative z-10"
        />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        {/* Top Row */}

        <div className="flex items-center justify-between">
          <span className="rounded-sm border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            {category}
          </span>

          <span
            className={`rounded-sm border px-3 py-1 text-xs font-medium ${badge}`}
          >
            {difficulty}
          </span>
        </div>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
          {description}
        </p>

        {/* Meta */}

        <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />

            <span>{lessons} Lessons</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />

            <span>{duration}</span>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between">
          <span className="font-medium text-secondary-foreground transition-colors duration-300 group-hover:text-foreground">
            Start Learning
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary">
            <ArrowRight className="h-5 w-5 text-secondary-foreground transition-colors duration-300 group-hover:text-primary-foreground" />
          </div>
        </div>
      </div>
    </Link>
  );
}
