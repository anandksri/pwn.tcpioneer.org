import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileText,
  LucideIcon,
  PlayCircle,
} from "lucide-react";

type Color =
  | "emerald"
  | "sky"
  | "violet"
  | "orange"
  | "rose"
  | "amber";

type ResourceType =
  | "download"
  | "link"
  | "book"
  | "video"
  | "read";

type ResourceCardProps = {
  title: string;
  description: string;
  category: string;
  type: ResourceType;
  href: string;
  icon: LucideIcon;
  color: Color;
};

const colors = {
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hover: "hover:border-emerald-500/40",
    text: "group-hover:text-emerald-400",
    glow: "hover:shadow-[0_20px_45px_rgba(16,185,129,.12)]",
  },

  sky: {
    icon: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hover: "hover:border-sky-500/40",
    text: "group-hover:text-sky-400",
    glow: "hover:shadow-[0_20px_45px_rgba(14,165,233,.12)]",
  },

  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hover: "hover:border-violet-500/40",
    text: "group-hover:text-violet-400",
    glow: "hover:shadow-[0_20px_45px_rgba(139,92,246,.12)]",
  },

  orange: {
    icon: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    hover: "hover:border-orange-500/40",
    text: "group-hover:text-orange-400",
    glow: "hover:shadow-[0_20px_45px_rgba(249,115,22,.12)]",
  },

  rose: {
    icon: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    hover: "hover:border-rose-500/40",
    text: "group-hover:text-rose-400",
    glow: "hover:shadow-[0_20px_45px_rgba(244,63,94,.12)]",
  },

  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hover: "hover:border-amber-500/40",
    text: "group-hover:text-amber-400",
    glow: "hover:shadow-[0_20px_45px_rgba(245,158,11,.12)]",
  },
};

export default function ResourceCard({
  title,
  description,
  category,
  type,
  href,
  icon: Icon,
  color,
}: ResourceCardProps) {
  const theme = colors[color];

  const action = {
    download: {
      text: "Download",
      icon: ArrowDownToLine,
    },

    link: {
      text: "Visit Website",
      icon: ExternalLink,
    },

    book: {
      text: "View Book",
      icon: BookOpen,
    },

    video: {
      text: "Watch",
      icon: PlayCircle,
    },

    read: {
      text: "Read",
      icon: ArrowUpRight,
    },
  }[type];

  const ActionIcon = action.icon;

  return (
    <div
      className={`group rounded-2xl border border-zinc-800 bg-[#111114] p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-[#18181d] ${theme.hover} ${theme.glow}`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${theme.bg} ${theme.border}`}
        >
          <Icon
            className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${theme.icon}`}
          />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.bg} ${theme.border} ${theme.icon}`}
        >
          {category}
        </span>
      </div>

      <h3
        className={`mt-5 text-xl font-semibold text-white transition-colors duration-300 ${theme.text}`}
      >
        {title}
      </h3>

      <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="my-5 h-px bg-zinc-800" />

      <Link
        href={href}
        target={type === "link" ? "_blank" : undefined}
        rel={type === "link" ? "noopener noreferrer" : undefined}
        className={`inline-flex items-center gap-2 font-medium text-zinc-300 transition-all duration-300 ${theme.text}`}
      >
        {action.text}

        <ActionIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}