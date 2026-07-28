import Container from "@/components/Container";
import { path } from "@/data/path";

export default function ThePath() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            The Path
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Your Journey Into Cybersecurity
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Follow a structured roadmap from learning the fundamentals to
            solving real-world security challenges and building practical
            experience.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-zinc-800 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">
            {path.map((step) => (
              <div key={step.number} className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/30 bg-zinc-950 text-lg font-bold text-violet-400">
                  {step.number}
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}