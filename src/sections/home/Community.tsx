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
    value: "Open",
    label: "Community",
    icon: Users,
    color: "text-muted-foreground",
    bg: "bg-secondary",
    border: "border-border",
    hover: "group-hover:border-primary/50",
  },
  {
    value: "Live",
    label: "Events and workshops",
    icon: CalendarDays,
    color: "text-muted-foreground",
    bg: "bg-secondary",
    border: "border-border",
    hover: "group-hover:border-primary/50",
  },
  {
    value: "Active",
    label: "Peer discussions",
    icon: MessageSquare,
    color: "text-muted-foreground",
    bg: "bg-secondary",
    border: "border-border",
    hover: "group-hover:border-primary/50",
  },
  {
    value: "Hands-on",
    label: "CTF practice",
    icon: Trophy,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    hover: "group-hover:border-primary/50",
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
                  className="group cursor-pointer rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-elevated"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-md border ${item.bg} ${item.border} ${item.hover} transition-colors`}
                    >
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {item.value}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
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
              className="group mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-brand-hover"
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
