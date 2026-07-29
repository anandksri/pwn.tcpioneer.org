import Image from "next/image";

import Container from "@/components/Container";

export default function AboutPWN() {
  return (
    <section className="bg-[#09090B] py-20">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-400">
              WHY PWN
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Learning Cybersecurity
              <br />
              Should Be Practical.
            </h2>

            <p className="mt-8 text-lg leading-7 text-zinc-400">
              PWN is a modern cybersecurity learning platform developed by{" "}
              <span className="font-semibold text-white">TC Pioneer </span>
              to bridge the gap between theoretical knowledge and practical
              experience.
            </p>

            <p className="mt-6 text-lg leading-7 text-zinc-400">
              Through structured learning paths, hands-on labs, guided
              challenges and an active community, we help learners build the
              skills required for real-world cybersecurity careers.
            </p>
          </div>

          {/* RIGHT */}

         <div className="flex justify-center">

  <div className="group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-[#111114] p-8 transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,.12)]">

    {/* Background Glow */}

    <div className="absolute inset-0 bg-violet-500/5 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

    {/* Logo */}

    <div className="relative flex justify-center">

      <Image
        src="/images/pwn-logo.png"
        alt="PWN Logo"
        width={240}
        height={240}
        priority
        className="h-auto w-56 object-contain transition-transform duration-300 group-hover:scale-105"
      />

    </div>

    {/* Divider */}

    <div className="my-8 h-px bg-zinc-800" />

    {/* Small Caption */}

    <div className="relative text-center">

      <h3 className="text-xl font-semibold text-violet-400">
        PWN Platform
      </h3>

    </div>

  </div>

</div>
        </div>
      </Container>
    </section>
  );
}
