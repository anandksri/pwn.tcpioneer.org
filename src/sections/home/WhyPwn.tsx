import Container from "@/components/Container";
import { why } from "@/data/why";

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
} as const;

export default function WhyPwn() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-medium tracking-[0.16em] text-brand-soft uppercase">
            Why PWN.TCPIONEER
          </span>

          <h2 className="mt-4 text-5xl font-bold text-foreground">
            Built for Practical Learning.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Learn cybersecurity through structured learning paths, practical
            labs and real-world challenges.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {why.map((item) => {
            const theme = colors[item.color];

            return (
              <div
                key={item.title}
                className={`group cursor-pointer rounded-lg border border-border bg-card p-5 transition-colors hover:bg-elevated ${theme.hover}`}
              >
                {/* Top */}

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border ${theme.bg} ${theme.border}`}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${theme.icon}`}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
