import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#09090B] pt-36 pb-10">
      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-[#09090B]" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Top Fade */}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#09090B] to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090B] to-transparent" />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-400">
            PWN PRACTICE
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Learn by Doing.
            <span className="block bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent">
              Hack with Confidence.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Develop real-world cybersecurity skills through interactive labs,
            Capture The Flag challenges and guided practice environments
            designed for learners of every level.
          </p>

          {/* Divider */}

          <div className="mt-12 h-px w-40 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
