import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  LucideIcon,
  PlayCircle,
} from "lucide-react";

type Color = "emerald" | "sky" | "violet" | "orange" | "rose" | "amber";

type ResourceType = "download" | "link" | "book" | "video" | "read";

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
  },

  sky: {
    icon: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hover: "hover:border-sky-500/40",
    text: "group-hover:text-sky-400",
  },

  violet: {
    icon: "text-brand-soft",
    bg: "bg-primary/10",
    border: "border-primary/20",
    hover: "hover:border-primary/40",
    text: "group-hover:text-brand-soft",
  },

  orange: {
    icon: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
    hover: "hover:border-warning/40",
    text: "group-hover:text-warning",
  },

  rose: {
    icon: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    hover: "hover:border-rose-500/40",
    text: "group-hover:text-rose-400",
  },

  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hover: "hover:border-amber-500/40",
    text: "group-hover:text-amber-400",
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
      className={`group rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-secondary ${theme.hover}`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-md border ${theme.bg} ${theme.border}`}
        >
          <Icon
            className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${theme.icon}`}
          />
        </div>

        <span
          className={`rounded-md border px-3 py-1 text-xs font-medium ${theme.bg} ${theme.border} ${theme.icon}`}
        >
          {category}
        </span>
      </div>

      <h3
        className={`mt-5 text-xl font-semibold text-foreground transition-colors duration-300 ${theme.text}`}
      >
        {title}
      </h3>

      <p className="mt-3 line-clamp-2 text-sm leading-6 text-secondary-foreground">
        {description}
      </p>

      <div className="my-5 h-px bg-elevated" />

      <Link
        href={href}
        target={type === "link" ? "_blank" : undefined}
        rel={type === "link" ? "noopener noreferrer" : undefined}
        className={`inline-flex items-center gap-2 font-medium text-secondary-foreground transition-all duration-300 ${theme.text}`}
      >
        {action.text}

        <ActionIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
