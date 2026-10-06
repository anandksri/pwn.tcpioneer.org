import Container from "@/components/Container";

export default function AboutPWN() {
  return (
    <section className="bg-background py-4">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="text-sm font-semibold tracking-[0.15em] text-brand-soft uppercase">
              WHY PWN
            </span>

            <h2 className="mt-5 text-4xl leading-tight font-bold text-foreground lg:text-5xl">
              Learning Cybersecurity
              <br />
              Should Be Practical.
            </h2>

            <p className="mt-8 text-lg leading-7 text-secondary-foreground">
              PWN is a modern cybersecurity learning platform developed by{" "}
              <span className="font-semibold text-foreground">TC Pioneer </span>
              to bridge the gap between theoretical knowledge and practical
              experience.
            </p>

            <p className="mt-6 text-lg leading-7 text-secondary-foreground">
              Through structured learning paths, hands-on labs, guided
              challenges and an active community, we help learners build the
              skills required for real-world cybersecurity careers.
            </p>
          </div>

          {/* RIGHT */}

          {/* RIGHT */}

          <div className="grid gap-5">
            <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary">
              <span className="text-sm font-semibold tracking-[0.15em] text-brand-soft uppercase">
                Learn
              </span>

              <h3 className="mt-3 cursor-pointer text-2xl font-semibold text-foreground">
                Structured Learning Paths
              </h3>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-secondary">
              <span className="text-sm font-semibold tracking-[0.15em] text-emerald-400 uppercase">
                Practice
              </span>

              <h3 className="mt-3 cursor-pointer text-2xl font-semibold text-foreground">
                Hands-on Experience
              </h3>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-secondary">
              <span className="text-sm font-semibold tracking-[0.15em] text-sky-400 uppercase">
                Grow
              </span>

              <h3 className="mt-3 cursor-pointer text-2xl font-semibold text-foreground">
                Community Driven
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
