import { BookOpen, FlaskConical, Trophy, UserPlus } from "lucide-react";

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
    <section className="border border-border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Recent Activity
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Your latest learning progress</p>
      </div>

      <div className="space-y-0">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className={`flex items-start gap-4 py-4 ${index !== activities.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex h-11 w-11 items-center justify-center border border-border bg-secondary">
                <Icon className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-foreground">{activity.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{activity.description}</p>
              </div>

              <span className="text-[11px] text-muted-foreground">{activity.time}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
