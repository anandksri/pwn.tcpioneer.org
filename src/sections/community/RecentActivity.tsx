import Container from "@/components/Container";

import { BookOpen, CalendarDays, Trophy, Users } from "lucide-react";

import { recentActivities } from "@/data/community";

const icons = {
  Workshop: BookOpen,
  CTF: Trophy,
  Learning: CalendarDays,
  Community: Users,
};

const colors = {
  Workshop: {
    icon: "text-brand-soft bg-primary/10 border-primary/20",
    hoverBorder: "hover:border-primary/40",
    hoverText: "group-hover:text-brand-soft",
  },

  CTF: {
    icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    hoverText: "group-hover:text-emerald-400",
  },

  Learning: {
    icon: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    hoverBorder: "hover:border-sky-500/40",
    hoverText: "group-hover:text-sky-400",
  },

  Community: {
    icon: "text-warning bg-warning/10 border-warning/20",
    hoverBorder: "hover:border-warning/40",
    hoverText: "group-hover:text-warning",
  },
};

export default function RecentActivity() {
  return (
    <section className="bg-background py-14">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.15em] text-brand-soft uppercase">
              Recent Activity
            </span>

            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Whats happening now
            </h2>
          </div>

          <button className="cursor-pointer text-sm font-medium text-secondary-foreground transition-colors duration-300 hover:text-brand-soft">
            View All →
          </button>
        </div>

        <div className="mt-14 space-y-5">
          {recentActivities.map((activity, index) => {
            const Icon = icons[activity.type as keyof typeof icons];
            const theme = colors[activity.type as keyof typeof colors];

            return (
              <div
                key={index}
                className={`group flex cursor-pointer items-start justify-between rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary ${theme.hoverBorder}`}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border transition-all duration-300 ${theme.icon}`}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Content */}

                  <div>
                    <h3
                      className={`text-lg font-semibold text-foreground transition-colors duration-300 ${theme.hoverText}`}
                    >
                      {activity.title}
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-secondary-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* Time */}

                <span className="ml-8 text-sm whitespace-nowrap text-subtle-foreground">
                  {activity.time}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
