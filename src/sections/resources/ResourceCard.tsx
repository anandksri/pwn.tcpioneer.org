import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  LucideIcon,
  PlayCircle,
} from "lucide-react";
import { getCategoryTheme } from "@/lib/category-theme";

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


export default function ResourceCard({
  title,
  description,
  category,
  type,
  href,
  icon: Icon,
  color,
}: ResourceCardProps) {
  const categoryKey =
    color === "emerald"
      ? "linux"
      : color === "sky"
        ? "networking"
        : color === "violet"
          ? "web"
          : color === "amber"
            ? "forensics"
            : color === "rose"
              ? "pwn"
              : color === "orange"
                ? "cryptography"
                : "fundamentals";
  const theme = getCategoryTheme(categoryKey);

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
      className={`group rounded-lg border border-border bg-card p-5 transition-colors duration-200 hover:bg-elevated ${theme.hover}`}
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
