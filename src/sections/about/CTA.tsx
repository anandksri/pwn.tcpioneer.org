import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-[#09090B]" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Fade */}

      <div className="absolute inset-x-0 top-0 -z-30 h-32 bg-gradient-to-b from-[#09090B] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-30 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

      <Container>

        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-950/70 px-8 py-16 text-center backdrop-blur-xl">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Join Our Mission
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white lg:text-5xl">
            Ready to Begin Your
            <br />
            Cybersecurity Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether you are just getting started or advancing your skills,
            PWN provides the knowledge, practical experience, and community
            you need to grow with confidence.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
              href="/modules"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-violet-500/20"
            >
              Start Learning

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/community"
              className="rounded-xl border border-zinc-700 bg-black/50 px-7 py-3.5 font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500 hover:bg-zinc-900/70 hover:text-white"
            >
              Join Community
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}