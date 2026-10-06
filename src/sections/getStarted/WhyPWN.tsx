import Container from "@/components/Container";
import { why } from "@/data/why";

const colors = {
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hover: "hover:border-emerald-500/40",
    text: "group-hover:text-emerald-400",
  },

  sky: {
    icon: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hover: "hover:border-sky-500/40",
    text: "group-hover:text-sky-400",
  },

  violet: {
    icon: "text-brand-soft",
    bg: "bg-primary/10",
    border: "border-primary/20",
    hover: "hover:border-primary/40",
    text: "group-hover:text-brand-soft",
  },

  orange: {
    icon: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
    hover: "hover:border-warning/40",
    text: "group-hover:text-warning",
  },
} as const;

export default function WhyPwn() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold tracking-[0.15em] text-brand-soft uppercase">
            Why PWN.TCPIONEER
          </span>

          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Built for Practical Learning.
          </h2>

          <p className="mt-6 text-lg leading-8 text-secondary-foreground">
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
                className={`group cursor-pointer rounded-lg border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-card ${theme.hover}`}
              >
                {/* Top */}

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border ${theme.bg} ${theme.border}`}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${theme.icon}`}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-secondary-foreground">
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
