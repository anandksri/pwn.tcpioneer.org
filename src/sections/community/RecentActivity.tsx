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
    icon: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    hoverText: "group-hover:text-violet-400",
    glow: "hover:shadow-[0_15px_35px_rgba(139,92,246,.12)]",
  },

  CTF: {
    icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    hoverText: "group-hover:text-emerald-400",
    glow: "hover:shadow-[0_15px_35px_rgba(16,185,129,.12)]",
  },

  Learning: {
    icon: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    hoverBorder: "hover:border-sky-500/40",
    hoverText: "group-hover:text-sky-400",
    glow: "hover:shadow-[0_15px_35px_rgba(14,165,233,.12)]",
  },

  Community: {
    icon: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    hoverBorder: "hover:border-orange-500/40",
    hoverText: "group-hover:text-orange-400",
    glow: "hover:shadow-[0_15px_35px_rgba(249,115,22,.12)]",
  },
};

export default function RecentActivity() {
  return (
    <section className="bg-[#09090B] py-14">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.15em] text-violet-400 uppercase">
              Recent Activity
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Whats happening now
            </h2>
          </div>

          <button className="cursor-pointer text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-violet-400">
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
                className={`group flex cursor-pointer items-start justify-between rounded-2xl border border-zinc-800 bg-[#111114] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#18181d] ${theme.hoverBorder} ${theme.glow}`}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${theme.icon}`}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Content */}

                  <div>
                    <h3
                      className={`text-lg font-semibold text-white transition-colors duration-300 ${theme.hoverText}`}
                    >
                      {activity.title}
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-zinc-400">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* Time */}

                <span className="ml-8 text-sm whitespace-nowrap text-zinc-500">
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
