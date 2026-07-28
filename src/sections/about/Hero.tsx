import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#09090B] pt-36 pb-28 sm:pt-40 lg:pt-52 lg:pb-36">

      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-[#09090B]" />

      {/* Square Grid */}

      <div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft Blur */}

      <div className="absolute inset-0 -z-30 backdrop-blur-[0.5px]" />

      {/* Top Fade */}

      <div className="absolute inset-x-0 top-0 -z-20 h-44 bg-gradient-to-b from-[#09090B] to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 -z-20 h-56 bg-gradient-to-t from-[#09090B] to-transparent" />

      {/* Left Fade */}

      <div className="absolute inset-y-0 left-0 -z-20 w-48 bg-gradient-to-r from-[#09090B] to-transparent" />

      {/* Right Fade */}

      <div className="absolute inset-y-0 right-0 -z-20 w-48 bg-gradient-to-l from-[#09090B] to-transparent" />

      <Container className="relative z-10">

        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
            About
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
            PWN.
          </h1>

          {/* Subtitle */}

          <p className="mt-5 text-lg font-semibold text-violet-400 sm:text-xl">
            Built by The Cyber Pioneer
          </p>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Empowering the next generation of cybersecurity professionals
            through practical learning, hands-on labs, and a collaborative
            community dedicated to making cybersecurity education accessible
            for everyone.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-violet-500/20"
            >
              Learn More

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/modules"
              className="rounded-xl border border-zinc-700 bg-black/50 px-7 py-3.5 font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500 hover:bg-zinc-900/70 hover:text-white"
            >
              Start Learning
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}