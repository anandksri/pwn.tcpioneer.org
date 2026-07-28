import {
  Target,
  Eye,
  Users,
} from "lucide-react";

import Container from "@/components/Container";

const values = [
  {
    title: "Our Mission",
    description:
      "To make cybersecurity education practical, accessible and engaging through structured learning, hands-on labs and real-world experiences.",
    icon: Target,
    color: "text-violet-400",
  },
  {
    title: "Our Vision",
    description:
      "To empower the next generation of ethical hackers, security researchers and cyber defenders by building an open learning ecosystem.",
    icon: Eye,
    color: "text-sky-400",
  },
  {
    title: "Our Community",
    description:
      "To foster a collaborative environment where learners connect, share knowledge, solve challenges and grow together.",
    icon: Users,
    color: "text-emerald-400",
  },
];

export default function Mission() {
  return (
    <section className="bg-[#0B0B0E] py-28">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Mission & Vision
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white lg:text-5xl">
            Driven by Purpose,
            <br />
            United by Community.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Every initiative at PWN is guided by a simple goal:
            helping learners build practical cybersecurity skills
            through collaboration, consistency and continuous learning.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
                      {values.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-violet-500/10"
              >

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                  <Icon
                    className={`h-8 w-8 ${item.color}`}
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-violet-400">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div className="mt-8 h-px w-full bg-gradient-to-r from-violet-500/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}