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
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hover: "hover:border-violet-500/40",
    text: "group-hover:text-violet-400",
  },

  orange: {
    icon: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    hover: "hover:border-orange-500/40",
    text: "group-hover:text-orange-400",
  },
} as const;

export default function WhyPwn() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-400">
            Why PWN.TCPIONEER
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
           Built for Practical Learning.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
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
                className={`group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 ${theme.hover}`}
              >
                {/* Top */}

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${theme.bg} ${theme.border}`}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${theme.icon}`}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-zinc-400">
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