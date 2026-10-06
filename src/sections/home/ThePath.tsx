import Container from "@/components/Container";
import { path } from "@/data/path";

const colors = {
  emerald: {
    bg: "bg-secondary",
    border: "border-border",
    icon: "text-muted-foreground group-hover:text-primary",
    hover: "hover:border-primary/50",
    line: "group-hover:bg-primary",
  },

  sky: {
    bg: "bg-secondary",
    border: "border-border",
    icon: "text-muted-foreground group-hover:text-primary",
    hover: "hover:border-primary/50",
    line: "group-hover:bg-primary",
  },

  violet: {
    bg: "bg-secondary",
    border: "border-border",
    icon: "text-muted-foreground group-hover:text-primary",
    hover: "hover:border-primary/50",
    line: "group-hover:bg-primary",
  },

  orange: {
    bg: "bg-secondary",
    border: "border-border",
    icon: "text-muted-foreground group-hover:text-primary",
    hover: "hover:border-primary/50",
    line: "group-hover:bg-primary",
  },

  rose: {
    bg: "bg-secondary",
    border: "border-border",
    icon: "text-muted-foreground group-hover:text-primary",
    hover: "hover:border-primary/50",
    line: "group-hover:bg-primary",
  },
} as const;

export default function ThePath() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-medium tracking-[0.16em] text-brand-soft uppercase">
            THE PATH
          </span>

          <h2 className="mt-4 text-5xl font-bold text-foreground">
            Your Cybersecurity Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Learn progressively through structured stages—from mastering the
            basics to building real-world offensive security skills.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Desktop Timeline */}
          <div className="absolute top-10 right-0 left-0 hidden border-t border-dashed border-border lg:block" />

          <div className="grid gap-6 lg:grid-cols-5">
            {path.map((step, index) => {
              const theme = colors[step.color];

              return (
                <div
                  key={step.number}
                  className={`group relative cursor-pointer rounded-lg border border-border bg-card p-6 transition-colors hover:bg-elevated ${theme.hover}`}
                >
                  {/* Connection Line */}

                  {index !== path.length - 1 && (
                    <div className="absolute top-10 -right-6 hidden items-center lg:flex">
                      <div
                        className={`h-px w-12 bg-border transition-colors duration-300 ${theme.line}`}
                      />

                      <div
                        className={`h-2 w-2 rounded-full bg-muted-foreground transition-colors duration-300 ${theme.line}`}
                      />
                    </div>
                  )}

                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-md border ${theme.bg} ${theme.border}`}
                  >
                    <step.icon
                      className={`h-5 w-5 transition-colors ${theme.icon}`}
                    />
                  </div>

                  {/* Step */}

                  <span className="mt-6 block font-mono text-xs font-semibold tracking-[0.16em] text-subtle-foreground">
                    STEP {step.number}
                  </span>

                  {/* Title */}

                  <h3 className="mt-3 text-xl font-semibold text-card-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
