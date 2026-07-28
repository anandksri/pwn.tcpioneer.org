import Container from "@/components/Container";
import { journey } from "@/data/journey";

export default function LearningJourney() {
  return (
    <section className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm text-violet-400">
            LEARNING JOURNEY
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Your Roadmap Into Cybersecurity
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Every great hacker starts somewhere. Follow a structured learning
            path from the fundamentals to real-world offensive security skills.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 lg:block" />

          <div className="grid gap-8 lg:grid-cols-5">
            {journey.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
              >
                <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/40 bg-zinc-900 text-sm font-bold text-violet-400">
                  {item.step}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}