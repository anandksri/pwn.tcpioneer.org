import {
  BookOpen,
  FlaskConical,
  Trophy,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    title: "Completed Linux Fundamentals",
    description: "Earned 120 XP",
    icon: BookOpen,
    time: "2 hours ago",
  },
  {
    title: "Solved SQL Injection Lab",
    description: "Difficulty: Medium",
    icon: FlaskConical,
    time: "Yesterday",
  },
  {
    title: "Joined TCP Community",
    description: "Welcome aboard!",
    icon: UserPlus,
    time: "2 days ago",
  },
  {
    title: "Reached Top 100",
    description: "Leaderboard Rank #84",
    icon: Trophy,
    time: "Last Week",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Your latest learning progress
        </p>
      </div>

      <div className="space-y-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <Icon className="h-5 w-5 text-violet-400" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {activity.description}
                </p>
              </div>

              <span className="text-xs text-zinc-500">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}