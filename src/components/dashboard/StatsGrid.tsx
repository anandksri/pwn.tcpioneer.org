import StatsCard from "./StatsCard";

const stats = [
  { title: "XP", value: "—", subtitle: "Connects to your progress", icon: "trophy" },
  { title: "Modules", value: "—", subtitle: "No progress recorded yet", icon: "book" },
  { title: "Labs", value: "—", subtitle: "No practice data yet", icon: "flask" },
  { title: "Rank", value: "—", subtitle: "Available after challenges", icon: "target" },
];

export default function StatsGrid() {
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
