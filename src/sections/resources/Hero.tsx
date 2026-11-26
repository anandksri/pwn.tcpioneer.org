import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/70 bg-background pt-28 pb-16 sm:pt-32 lg:pt-36">
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

          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-emerald-300 uppercase">
            PWN RESOURCES
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl leading-tight font-black text-foreground sm:text-6xl lg:text-7xl">
            Everything You Need.
            <span className="block text-brand-soft">
              All in One Place.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-secondary-foreground">
            Discover a curated collection of cybersecurity resources including
            cheat sheets, tools, wordlists, write-ups, books, roadmaps and
            useful references to support your learning journey.{" "}
          </p>

          {/* Divider */}

          <div className="mt-12 h-px w-40 bg-primary" />
        </div>
      </Container>
    </section>
  );
}
