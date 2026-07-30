import Link from "next/link";

import Container from "@/components/Container";

const platform = [
  {
    label: "Modules",
    href: "/modules",
  },
  {
    label: "Learning Paths",
    href: "/roadmaps",
  },
  {
    label: "Training Grounds",
    href: "/training",
  },
  {
    label: "Community",
    href: "/community",
  },
];

const ecosystem = [
  {
    label: "Main Website",
    href: "https://tcpioneer.org",
  },
  {
    label: "TCP Handbook",
    href: "https://learn.tcpioneer.org",
  },
  {
    label: "TCP Toolkit",
    href: "https://tools.tcpioneer.org",
  },
  {
    label: "TCP CTF",
    href: "https://ctf.tcpioneer.org",
  },
];

const community = [
  {
    label: "Discord",
    href: "https://discord.gg/tcpioneer",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/tcpioneerorg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/tcpioneerorg",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/tcpioneerorg",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <Link href="/" className="text-3xl font-bold tracking-[0.10em]">
              <span className="text-white">PWN.</span>

              <span className="text-violet-400">TCPIONEER</span>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-zinc-400">
              A modern cybersecurity learning platform focused on structured
              learning, hands-on practice and community-driven education.
            </p>

            <p className="mt-8 text-sm font-medium tracking-wide text-zinc-500">
              Learn • Practice • Build • Secure
            </p>
          </div>

          {/* Platform */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Platform</h3>

            <div className="space-y-4">
              {platform.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-zinc-400 transition hover:text-violet-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* TCP Ecosystem */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              TCP Ecosystem
            </h3>

            <div className="space-y-4">
              {ecosystem.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-zinc-400 transition hover:text-violet-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Community</h3>

            <div className="space-y-4">
              {community.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-zinc-400 transition hover:text-violet-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 text-sm md:flex-row">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} TCPioneer. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="https://tcpioneer.org/privacy"
              className="text-zinc-500 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="https://tcpioneer.org/terms"
              className="text-zinc-500 transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="https://tcpioneer.org/contact"
              className="text-zinc-500 transition hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="https://tcpioneer.org"
              target="_blank"
              className="text-violet-400 transition hover:text-violet-300"
            >
              Visit Main Website →
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
