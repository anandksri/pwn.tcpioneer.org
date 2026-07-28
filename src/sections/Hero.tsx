import Link from "next/link";

import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="pt-36 pb-28">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
            PWN.TCPIONEER
          </span>

          <h1 className="mt-8 text-6xl font-bold tracking-tight text-white lg:text-7xl">
            Learn Offensive Security.
            <br />
            One Module at a Time.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            PWN.TCPIONEER is an open cybersecurity learning platform by
            TCPioneer. Learn through structured modules, practice real-world
            labs, and develop the skills required for offensive security.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/modules"
              className="rounded-xl bg-violet-600 px-7 py-3 font-medium text-white transition hover:bg-violet-500"
            >
              Start Learning
            </Link>

            <Link
              href="/practice"
              className="rounded-xl border border-white/10 px-7 py-3 font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white"
            >
              Explore Practice
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}