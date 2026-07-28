import {
  ShieldCheck,
  Users,
  GraduationCap,
} from "lucide-react";

import Container from "@/components/Container";

const features = [
  {
    title: "Practical Learning",
    description:
      "Learn through hands-on labs, real-world challenges and structured learning paths.",
    icon: ShieldCheck,
    color: "text-violet-400",
  },
  {
    title: "Community Driven",
    description:
      "Collaborate with passionate learners, mentors and cybersecurity enthusiasts.",
    icon: Users,
    color: "text-sky-400",
  },
  {
    title: "Career Focused",
    description:
      "Build industry-ready skills that prepare you for real cybersecurity careers.",
    icon: GraduationCap,
    color: "text-emerald-400",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#09090B] py-28">

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white lg:text-5xl">
              Building the Future of Cybersecurity Education.
            </h2>

          </div>

          {/* Right */}

          <div>

            <p className="text-lg leading-8 text-zinc-400">
              PWN is the official cybersecurity learning platform developed by
              <span className="font-semibold text-white">
                {" "}The Cyber Pioneer (TCPioneer)
              </span>
              , a student-driven cybersecurity organization committed to making
              cybersecurity education practical, accessible and community
              focused. Through structured learning, hands-on labs, workshops
              and real-world challenges, we empower learners to build
              industry-ready skills and contribute to a safer digital future.
            </p>

          </div>

        </div>

        {/* Feature Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-violet-500/10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                  <Icon
                    className={`h-7 w-7 ${feature.color}`}
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-400">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}