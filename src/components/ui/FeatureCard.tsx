import { LucideIcon } from "lucide-react";

type Color =
  | "emerald"
  | "sky"
  | "violet"
  | "orange"
  | "rose";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: Color;
  badge?: string;
};

const colors = {
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hover: "hover:border-emerald-500/40",
    text: "group-hover:text-emerald-400",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,.12)]",
  },

  sky: {
    icon: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hover: "hover:border-sky-500/40",
    text: "group-hover:text-sky-400",
    glow: "hover:shadow-[0_0_30px_rgba(14,165,233,.12)]",
  },

  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hover: "hover:border-violet-500/40",
    text: "group-hover:text-violet-400",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,.12)]",
  },

  orange: {
    icon: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    hover: "hover:border-orange-500/40",
    text: "group-hover:text-orange-400",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,.12)]",
  },

  rose: {
    icon: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    hover: "hover:border-rose-500/40",
    text: "group-hover:text-rose-400",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,.12)]",
  },
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  color,
  badge,
}: FeatureCardProps) {
  const theme = colors[color];

  return (
    <div
      className={`group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-zinc-900 ${theme.hover} ${theme.glow}`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl border ${theme.bg} ${theme.border}`}
        >
          <Icon
            className={`h-7 w-7 transition-all duration-300 group-hover:scale-110 ${theme.icon}`}
          />
        </div>

        {badge && (
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.bg} ${theme.border} ${theme.icon}`}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}