import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-36 pb-10">
      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-background" />

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


      {/* Bottom Fade */}


      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}

          <span className="rounded-md border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold tracking-[0.35em] text-brand-soft uppercase">
            PWN PRACTICE
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl leading-tight font-black text-foreground sm:text-6xl lg:text-7xl">
            Learn by Doing.
            <span className="block text-brand-soft">
              Hack with Confidence.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-secondary-foreground">
            Develop real-world cybersecurity skills through interactive labs,
            Capture The Flag challenges and guided practice environments
            designed for learners of every level.
          </p>

          {/* Divider */}

          <div className="mt-12 h-px w-40 bg-primary" />
        </div>
      </Container>
    </section>
  );
}
