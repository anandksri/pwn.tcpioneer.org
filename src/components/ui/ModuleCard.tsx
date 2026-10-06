import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, LucideIcon } from "lucide-react";

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
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hoverBorder: "group-hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  sky: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hoverBorder: "group-hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  violet: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hoverBorder: "group-hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  orange: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hoverBorder: "group-hover:border-primary/50",
    text: "group-hover:text-primary",
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
      className={`group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:bg-elevated ${theme.hoverBorder}`}
    >
      {/* Top */}

      <div className="mb-6 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-md border ${theme.bg} ${theme.border} transition-colors`}
        >
          <Icon
            className={`h-5 w-5 transition-colors ${theme.icon}`}
          />
        </div>

        <span
          className={`rounded-sm border px-3 py-1 text-xs font-medium text-muted-foreground ${theme.border} ${theme.bg}`}
        >
          {level}
        </span>
      </div>

      <h3
        className={`text-2xl font-semibold text-card-foreground transition-colors duration-300 ${theme.text}`}
      >
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-8 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 border-t border-border pt-5">
        <div className="flex gap-6 text-sm text-muted-foreground">
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
        className={`mt-6 flex items-center gap-2 font-medium text-secondary-foreground transition-colors ${theme.text}`}
      >
        <span>Start Learning</span>

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
