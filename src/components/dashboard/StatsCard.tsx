import {
  Trophy,
  BookOpen,
  FlaskConical,
  Target,
} from "lucide-react";

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
    <div
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/50
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/30
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            {subtitle}
          </p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-zinc-800
            bg-zinc-950
            p-3
          "
        >
          <Icon className="h-6 w-6 text-violet-400" />
        </div>
      </div>
    </div>
  );
}