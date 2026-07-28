import Link from "next/link";

import Container from "@/components/Container";

const starterModules = [
  {
    title: "Linux Fundamentals",
    description: "Master the Linux terminal, files, permissions and shell basics.",
    modules: 18,
    level: "Beginner",
    color: "bg-green-500",
  },
  {
    title: "Networking",
    description: "Understand TCP/IP, DNS, HTTP and packet analysis.",
    modules: 12,
    level: "Beginner",
    color: "bg-cyan-500",
  },
  {
    title: "Web Security",
    description: "Start with HTTP, SQL Injection, XSS and authentication.",
    modules: 20,
    level: "Beginner",
    color: "bg-violet-500",
  },
  {
    title: "Programming",
    description: "Build Python and Bash skills for offensive security.",
    modules: 10,
    level: "Beginner",
    color: "bg-orange-500",
  },
];

export default function Hero() {
  return (
    <section className="pb-24 pt-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
            PWN.TCPIONEER
          </span>

          <h1 className="mt-8 text-6xl font-bold tracking-tight text-white lg:text-7xl">
            Learn Offensive Security.
            <br />
            One Module at a Time.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            PWN.TCPIONEER is a free cybersecurity learning platform by
            TCPioneer. Follow structured learning paths, complete practical
            modules, and build real-world offensive security skills through
            hands-on challenges.
          </p>
        </div>

        <div className="mt-24">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Getting Started
              </h2>

              <p className="mt-2 text-zinc-400">
                Start with these beginner-friendly learning paths.
              </p>
            </div>

            <Link
              href="/modules"
              className="text-sm text-violet-400 transition hover:text-violet-300"
            >
              View All Modules →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {starterModules.map((module) => (
              <Link
                key={module.title}
                href="/modules"
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
              >
                <div
                  className={`mb-5 h-1.5 w-14 rounded-full ${module.color}`}
                />

                <h3 className="text-xl font-semibold text-white">
                  {module.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {module.description}
                </p>

                <div className="mt-8 flex items-center justify-between text-sm">
                  <span className="text-zinc-500">
                    {module.modules} Modules
                  </span>

                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-300">
                    {module.level}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}