import Link from "next/link";

import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-36 pb-24">
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
            PWN Community
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl leading-tight font-black text-foreground sm:text-6xl lg:text-7xl">
            Stay Connected.
            <span className="block text-brand-soft">
              Stay Updated.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-secondary-foreground">
            Stay up to date with everything happening in the PWN ecosystem.
            Explore workshops, Capture The Flag competitions, community
            projects, announcements, and discussions—all in one place.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://discord.gg/tcpioneer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-6 py-3 font-medium text-foreground transition-all duration-300 hover:bg-primary"
            >
              Join Community
            </Link>

            <Link
              href="#events"
              className="rounded-md border border-border px-6 py-3 font-medium text-secondary-foreground transition-all duration-300 hover:border-primary hover:text-brand-soft"
            >
              View Events
            </Link>
          </div>

          {/* Divider */}

          <div className="mt-12 h-px w-40 bg-primary" />
        </div>
      </Container>
    </section>
  );
}
