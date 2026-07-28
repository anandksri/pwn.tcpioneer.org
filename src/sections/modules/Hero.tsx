import Image from "next/image";

import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#09090B] pt-36 pb-20 lg:pt-44">

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

      <div className="absolute inset-x-0 top-0 -z-30 h-40 bg-gradient-to-b from-[#09090B] to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 -z-30 h-40 bg-gradient-to-t from-[#09090B] to-transparent" />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
              Modules
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white ">
              Learn
              <br />
              Cybersecurity
              <br />
              Through
              <span className="text-violet-400">
                {" "}Practice.
              </span>
            </h1>

            {/* <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Master cybersecurity through structured learning paths,
              hands-on laboratories, guided exercises and real-world
              challenges designed for beginners and professionals.
            </p> */}

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-8">
                            <div className="mt-12 grid grid-cols-3 gap-10">

              <div>

                <h3 className="text-4xl font-black text-white">
                  50+
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Learning
                  <br />
                  Modules
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-white">
                  30+
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Hands-on
                  <br />
                  Labs
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-white">
                  100+
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Security
                  <br />
                  Challenges
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex items-center justify-center">

            {/* Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[140px]" />

            {/* Background Ring */}

            <div className="absolute h-[430px] w-[430px] rounded-full border border-violet-500/10" />

            {/* Floating Illustration */}

            <div className="relative z-10 w-[200px]">

              <Image
                src="/images/temp-svg.svg"
                alt="Cybersecurity Illustration"
                width={1000}
                height={1000}
                priority
                className="animate-float w-full max-w-lg drop-shadow-[0_0_40px_rgba(139,92,246,.25)]"
              />

            </div>

            {/* Floating Badge */}

            <div className="absolute left-0 top-16 rounded-2xl border border-zinc-800 bg-zinc-950/90 px-5 py-4 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Difficulty
              </p>

              <h4 className="mt-1 text-lg font-semibold text-white">
                Beginner →
                <span className="text-violet-400">
                  Advanced
                </span>
              </h4>

            </div>

            {/* Floating Badge */}

            <div className="absolute bottom-10 right-0 rounded-2xl border border-zinc-800 bg-zinc-950/90 px-5 py-4 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Learning
              </p>

              <h4 className="mt-1 text-lg font-semibold text-white">
                Hands-on Labs
              </h4>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}