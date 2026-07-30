import Link from "next/link";
import {
  ArrowRight,
  Users,
  CalendarDays,
  MessageSquare,
  Trophy,
} from "lucide-react";

import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    value: "100+",
    label: "Community Members",
    icon: Users,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hover: "group-hover:border-emerald-500/40",
  },
  {
    value: "10+",
    label: "Community Events",
    icon: CalendarDays,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    hover: "group-hover:border-orange-500/40",
  },
  {
    value: "24/7",
    label: "Discussions",
    icon: MessageSquare,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hover: "group-hover:border-sky-500/40",
  },
  {
    value: "Weekly",
    label: "CTF Challenges",
    icon: Trophy,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hover: "group-hover:border-violet-500/40",
  },
];

export default function Community() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            badge="COMMUNITY"
            title="Your Learning Doesn't Stop After The Lessons."
            description="Join the TCPioneer Discord community to learn with fellow hackers, participate in weekly CTFs, attend events and build practical cybersecurity skills together."
            align="center"
          />

          {/* Stats */}

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.bg} ${item.border} ${item.hover} transition-all duration-300`}
                    >
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.value}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Link
              href="https://discord.gg/tcpioneer"
              target="_blank"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#5865F2] px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#4752C4]"
            >
              Join Discord
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
