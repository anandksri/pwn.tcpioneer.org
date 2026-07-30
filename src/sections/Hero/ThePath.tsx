import Container from "@/components/Container";
import { path } from "@/data/path";

const colors = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
    hover: "hover:border-emerald-500/50",
    line: "group-hover:bg-emerald-400",
  },

  sky: {
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    icon: "text-sky-400",
    hover: "hover:border-sky-500/50",
    line: "group-hover:bg-sky-400",
  },

  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    icon: "text-violet-400",
    hover: "hover:border-violet-500/50",
    line: "group-hover:bg-violet-400",
  },

  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    icon: "text-orange-400",
    hover: "hover:border-orange-500/50",
    line: "group-hover:bg-orange-400",
  },

  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    icon: "text-rose-400",
    hover: "hover:border-rose-500/50",
    line: "group-hover:bg-rose-400",
  },
} as const;

export default function ThePath() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium tracking-[0.25em] text-violet-400 uppercase">
            THE PATH
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Your Cybersecurity Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Learn progressively through structured stages—from mastering the
            basics to building real-world offensive security skills.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Desktop Timeline */}
          <div className="absolute top-10 right-0 left-0 hidden border-t border-dashed border-zinc-800 lg:block" />

          <div className="grid gap-6 lg:grid-cols-5">
            {path.map((step, index) => {
              const theme = colors[step.color];

              return (
                <div
                  key={step.number}
                  className={`group relative cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-zinc-900 hover:shadow-2xl ${theme.hover}`}
                >
                  {/* Connection Line */}

                  {index !== path.length - 1 && (
                    <div className="absolute top-10 -right-6 hidden items-center lg:flex">
                      <div
                        className={`h-px w-12 bg-zinc-700 transition-colors duration-300 ${theme.line}`}
                      />

                      <div
                        className={`h-2 w-2 rounded-full bg-zinc-700 transition-colors duration-300 ${theme.line}`}
                      />
                    </div>
                  )}

                  {/* Icon */}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border ${theme.bg} ${theme.border}`}
                  >
                    <step.icon
                      className={`h-7 w-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${theme.icon}`}
                    />
                  </div>

                  {/* Step */}

                  <span className="mt-6 block text-xs font-semibold tracking-[0.25em] text-zinc-500">
                    STEP {step.number}
                  </span>

                  {/* Title */}

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
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
