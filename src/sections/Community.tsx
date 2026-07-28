import Link from "next/link";

import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { community } from "@/data/community";

export default function Community() {
  return (
    <section className="py-32">
      <Container>

        <SectionHeading
          badge="Community"
          title="Learn Together. Grow Together."
          description="Cybersecurity is better learned with others. Join a growing community of learners who collaborate, share knowledge and level up together."
          align="center"
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {community.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-zinc-950/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
                  <Icon className="h-8 w-8 text-violet-400" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-violet-500/20 bg-violet-500/5 px-10 py-16 text-center">

          <h3 className="text-4xl font-bold text-white">
            Ready to Join the Community?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Collaborate with learners, participate in events, solve challenges,
            and grow your cybersecurity skills together.
          </p>

          <Link
            href="/community"
            className="mt-10 inline-flex rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-violet-500"
          >
            Join Community
          </Link>

        </div>

      </Container>
    </section>
  );
}