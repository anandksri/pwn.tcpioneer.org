import Link from "next/link";

import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

import { trainingGrounds } from "@/data/trainingGrounds";

const colors = {
  emerald: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  sky: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  violet: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  orange: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  cyan: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },

  rose: {
    icon: "text-muted-foreground group-hover:text-primary",
    bg: "bg-secondary",
    border: "border-border",
    hover: "hover:border-primary/50",
    text: "group-hover:text-primary",
  },
} as const;

export default function TrainingGrounds() {
  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          badge="TRAINING GROUNDS"
          title="Choose Your Cybersecurity Domain"
          description="Build practical skills through structured lessons, guided exercises and hands-on learning paths designed for every stage."
          align="left"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainingGrounds.map((ground) => {
            const theme = colors[ground.color];

            const Icon = ground.icon;

            return (
              <div
                key={ground.title}
                className={`group flex cursor-pointer flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:bg-elevated ${theme.hover}`}
              >
                {/* Header */}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-md border ${theme.bg} ${theme.border}`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${theme.icon}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {ground.title}
                      </h3>

                      <p className="mt-1 font-mono text-xs font-medium text-muted-foreground">
                        {ground.level}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {ground.description}
                </p>

                {/* Stats */}

                <div className="mt-6 flex items-center gap-6 border-t border-border pt-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />

                    <span>{ground.lessons} Lessons</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" />

                    <span>{ground.estimatedTime}</span>
                  </div>
                </div>

                {/* Topics */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {ground.topics.map((topic) => (
                    <span
                      key={topic}
                      className={`rounded-sm border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground transition-colors ${theme.hover}`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA */}

                <div
                  className={`mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-secondary-foreground transition-colors ${theme.text}`}
                >
                  <Link
                    href={ground.href}
                    className="group/link inline-flex items-center gap-2"
                  >
                    <span>Start Learning</span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
