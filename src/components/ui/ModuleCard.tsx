import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  LucideIcon,
} from "lucide-react";

type ModuleCardProps = {
  title: string;
  description: string;
  modules: number;
  duration: string;
  level: string;
  href: string;
  icon: LucideIcon;
  color: "emerald" | "sky" | "violet" | "orange";
};

const colors = {
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "group-hover:border-emerald-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
    text: "group-hover:text-emerald-400",
  },

  sky: {
    icon: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hoverBorder: "group-hover:border-sky-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.12)]",
    text: "group-hover:text-sky-400",
  },

  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hoverBorder: "group-hover:border-violet-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
    text: "group-hover:text-violet-400",
  },

  orange: {
    icon: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    hoverBorder: "group-hover:border-orange-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]",
    text: "group-hover:text-orange-400",
  },
};

export default function ModuleCard({
  title,
  description,
  modules,
  duration,
  level,
  href,
  icon: Icon,
  color,
}: ModuleCardProps) {
  const theme = colors[color];

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 ${theme.hoverBorder} ${theme.glow}`}
    >
      {/* Top */}

      <div className="mb-6 flex items-start justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl border ${theme.bg} ${theme.border} transition-all duration-300 group-hover:scale-105`}
        >
          <Icon className={`h-7 w-7 ${theme.icon}`} />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.border} ${theme.bg} ${theme.icon}`}
        >
          {level}
        </span>

      </div>

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-8 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 border-t border-zinc-800 pt-5">

        <div className="flex gap-6 text-sm text-zinc-400">

          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            {modules} Modules
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {duration}
          </div>

        </div>

      </div>

      <div
        className={`mt-6 flex items-center gap-2 font-medium text-zinc-200 transition-colors duration-300 ${theme.text}`}
      >
        <span>Start Learning</span>

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

    </Link>
  );
}