import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/ui/FeatureCard";
import Container from "@/components/Container";
import { GraduationCap, Trophy, Users, Code2 } from "lucide-react";

export default function Community() {
  return (
    <section className="bg-[#09090B] py-28">
      <Container>
        <div className="grid items-center gap-56 lg:grid-cols-[380px_1fr]">
          {/* LEFT */}

          <div className="flex justify-center">
            <div className="group w-full max-w-sm rounded-3xl border border-zinc-800 bg-[#111114] p-8 transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,.12)]">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/tcp-logo.png"
                  alt="TC Pioneer"
                  width={220}
                  height={220}
                  className="h-auto w-52 transition-transform duration-300 group-hover:scale-105"
                />

                <div className="mt-8 h-px w-full bg-zinc-800" />

                <h3 className="mt-6 text-xl font-semibold text-violet-400">
                  TC Pioneer
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-400">
              ABOUT TC PIONEER
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Building the Next Generation
              <br />
              of Cybersecurity Leaders.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-6 text-zinc-400">
              TC Pioneer is a student-driven cybersecurity community focused on
              making practical cybersecurity education accessible through
              workshops, Capture The Flag competitions, mentoring and
              collaborative open-source projects.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-6 text-zinc-400">
              Our mission is to help learners build real-world skills, connect
              with professionals and grow together through a supportive
              cybersecurity community.
            </p>

            <Link
              href="https://tcpioneer.org"
              className="group mt-10 inline-flex cursor-pointer items-center gap-2 font-medium  transition-colors duration-300 hover:text-violet-300"
            >
              <span>Learn More</span>

              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-30 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            title="Workshops"
            description="Interactive cybersecurity workshops covering modern security topics."
            icon={GraduationCap}
            color="violet"
          />

          <FeatureCard
            title="CTF Competitions"
            description="Solve real-world challenges and sharpen offensive security skills."
            icon={Trophy}
            color="emerald"
          />

          <FeatureCard
            title="Mentorship"
            description="Learn alongside experienced professionals and the community."
            icon={Users}
            color="sky"
          />

          <FeatureCard
            title="Open Source"
            description="Build tools, contribute to projects and grow your public portfolio."
            icon={Code2}
            color="orange"
          />
        </div>
      </Container>
    </section>
  );
}
