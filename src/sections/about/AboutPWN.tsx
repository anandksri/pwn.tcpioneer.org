import Container from "@/components/Container";

export default function AboutPWN() {
  return (
    <section className="bg-[#09090B] py-4">
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

      {/* RIGHT */}

<div className="grid gap-5">

  <div className="rounded-2xl border border-zinc-800 bg-[#111114] p-6 transition-all duration-300 hover:border-violet-500/30 hover:bg-[#18181d] hover:-translate-y-1">
    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-400">
      Learn
    </span>

    <h3 className="mt-3 text-2xl font-semibold text-white cursor-pointer ">
      Structured Learning Paths
    </h3>

  
  </div>

  <div className="rounded-2xl border border-zinc-800 bg-[#111114] p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#18181d] hover:-translate-y-1">
    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-400">
      Practice
    </span>

    <h3 className="mt-3 text-2xl font-semibold text-white cursor-pointer ">
      Hands-on Experience
    </h3>
  </div>

  <div className="rounded-2xl border border-zinc-800 bg-[#111114] p-6 transition-all duration-300 hover:border-sky-500/30 hover:bg-[#18181d] hover:-translate-y-1">
    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
      Grow
    </span>

    <h3 className="mt-3 text-2xl font-semibold text-white cursor-pointer ">
      Community Driven
    </h3>
  </div>

</div>
        </div>
      </Container>
    </section>
  );
}
