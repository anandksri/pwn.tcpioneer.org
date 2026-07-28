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
  Beginner:
    "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",

  Intermediate:
    "bg-amber-500/10 border-amber-500/20 text-amber-400",

  Advanced:
    "bg-red-500/10 border-red-500/20 text-red-400",
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
    difficultyColors[
      difficulty as keyof typeof difficultyColors
    ] ??
    "bg-violet-500/10 border-violet-500/20 text-violet-400";

  return (
    <Link
      href={`/modules/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-900 hover:shadow-[0_0_35px_rgba(139,92,246,.15)]"
    >

      {/* Banner */}

      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">

        <div className="absolute h-52 w-52 rounded-full bg-violet-600/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

             {/* Top Row */}

        <div className="flex items-center justify-between">

          <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
            {category}
          </span>

          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${badge}`}
          >
            {difficulty}
          </span>

        </div>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-violet-400">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
          {description}
        </p>

        {/* Meta */}

        <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-5 text-sm text-zinc-400">

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

          <span className="font-medium text-zinc-300 transition-colors duration-300 group-hover:text-white">
            Start Learning
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 group-hover:border-violet-500 group-hover:bg-violet-500">

            <ArrowRight className="h-5 w-5 text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />

          </div>

        </div>

      </div>

    </Link>
  );
}