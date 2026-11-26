import StatsCard from "./StatsCard";

type DashboardStats = {
  points: number;
  completedLessons: number;
  solvedChallenges: number;
  completedModules: number;
};

export default function StatsGrid({ data }: { data: DashboardStats | null }) {
  const stats = [
    { title: "Points", value: data ? String(data.points) : "—", subtitle: data ? "From solved challenges" : "Sign in to view progress", icon: "trophy" },
    { title: "Lessons", value: data ? String(data.completedLessons) : "—", subtitle: data ? "Completed lessons" : "No progress available", icon: "book" },
    { title: "Challenges", value: data ? String(data.solvedChallenges) : "—", subtitle: data ? "Solved challenges" : "No progress available", icon: "flask" },
    { title: "Modules", value: data ? String(data.completedModules) : "—", subtitle: data ? "Completed modules" : "No progress available", icon: "target" },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}
