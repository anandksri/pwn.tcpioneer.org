import Container from "@/components/Container";

import { why } from "@/data/why";

export default function WhyPwn() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Why PWN.TCPIONEER
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-white">
            Built for Practical Learning.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Learn cybersecurity through structured modules, hands-on labs and
            practical challenges instead of endless theory.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {why.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <div className="h-1 w-14 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-20" />

              <h3 className="mt-8 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}