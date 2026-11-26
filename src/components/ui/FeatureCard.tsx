import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type Color = "emerald" | "sky" | "violet" | "orange" | "rose";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: Color;
  badge?: string;
};

const colors = {
  emerald: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  sky: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  violet: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  orange: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  rose: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
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
    <Card
      className={`group cursor-pointer border border-border bg-card p-6 ring-0 transition-colors hover:bg-elevated ${theme.hover}`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-md border ${theme.bg} ${theme.border}`}
        >
          <Icon
            className={`h-7 w-7 transition-all duration-300 group-hover:scale-110 ${theme.icon}`}
          />
        </div>

        {badge && (
          <span
            className={`rounded-sm border px-3 py-1 text-xs font-medium ${theme.bg} ${theme.border} ${theme.icon}`}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>

      <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
    </Card>
  );
}
