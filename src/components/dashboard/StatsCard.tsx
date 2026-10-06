import { Trophy, BookOpen, FlaskConical, Target } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
};

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
}: StatsCardProps) {
  const icons = {
    trophy: Trophy,
    book: BookOpen,
    flask: FlaskConical,
    target: Target,
  };

  const Icon = icons[icon as keyof typeof icons];

  return (
    <div className="border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {value}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center border border-border bg-secondary">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
