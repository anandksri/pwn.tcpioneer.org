import Link from "next/link";

import Container from "@/components/Container";

export default function CTA() {
  return (
    <section className="py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-zinc-950 px-12 py-20">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              START YOUR JOURNEY
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Ready to Master Cybersecurity?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Join PWN.TCPIONEER today and learn through structured modules,
              practical labs, hands-on exercises and an active cybersecurity
              community.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/modules"
                className="rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-violet-500"
              >
                Start Learning
              </Link>

              <Link
                href="/community"
                className="rounded-xl border border-white/10 px-8 py-4 text-base font-medium text-white transition hover:border-violet-500"
              >
                Join Community
              </Link>

            </div>

            <p className="mt-8 text-sm text-zinc-500">
              Free forever • Beginner friendly • Learn at your own pace
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}