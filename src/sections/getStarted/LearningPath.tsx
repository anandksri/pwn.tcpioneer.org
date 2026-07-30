import Container from "@/components/Container";
import { path } from "@/data/path";

const colors = {
  emerald: {
    icon: "text-emerald-400",
    badge: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    shadow: "hover:shadow-emerald-500/10",
    dot: "bg-emerald-400",
    line: "from-emerald-500",
  },
  violet: {
    icon: "text-violet-400",
    badge: "text-violet-400",
    border: "hover:border-violet-500/40",
    shadow: "hover:shadow-violet-500/10",
    dot: "bg-violet-400",
    line: "from-violet-500",
  },
  sky: {
    icon: "text-sky-400",
    badge: "text-sky-400",
    border: "hover:border-sky-500/40",
    shadow: "hover:shadow-sky-500/10",
    dot: "bg-sky-400",
    line: "from-sky-500",
  },
  orange: {
    icon: "text-orange-400",
    badge: "text-orange-400",
    border: "hover:border-orange-500/40",
    shadow: "hover:shadow-orange-500/10",
    dot: "bg-orange-400",
    line: "from-orange-500",
  },
  rose: {
    icon: "text-rose-400",
    badge: "text-rose-400",
    border: "hover:border-rose-500/40",
    shadow: "hover:shadow-rose-500/10",
    dot: "bg-rose-400",
    line: "from-rose-500",
  },
};

export default function LearningPath() {
  return (
    <section className="bg-[#09090B] py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-400">
            Learning Roadmap
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Your Cybersecurity Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Progress through a carefully designed roadmap that builds your
            knowledge step by step—from foundational concepts to practical
            skills and career readiness.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Timeline */}

          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-violet-500 via-zinc-700 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12">
            {path.map((step, index) => {
              const Icon = step.icon;
              const style = colors[step.color];

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}

                  <div
                    className={`absolute left-8 z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#09090B] ${style.dot} transition-all duration-300 group-hover:scale-110 lg:left-1/2`}
                  />

                  {/* Card */}

                  <div
                    className={`
                    group
                    ml-20
                    w-full
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-950/60
                    p-7
                    cursor-pointer
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    ${style.border}
                    ${style.shadow}
                    lg:ml-0
                    lg:w-[44%]
                  `}
                  >
                    {/* Header */}

                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                        <Icon
                          className={`h-7 w-7 transition-transform duration-300 group-hover:rotate-6 ${style.icon}`}
                        />
                      </div>

                      <div>
                        <p
                          className={`text-xs font-semibold tracking-[0.3em] uppercase ${style.badge}`}
                        >
                          Step {step.number}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}

                    <p className="mt-6 leading-8 text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
