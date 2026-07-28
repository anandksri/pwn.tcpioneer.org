import Link from "next/link";

import Container from "@/components/Container";

const platform = [
  { label: "Modules", href: "/modules" },
  { label: "Practice", href: "/practice" },
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Community", href: "/community" },
];

const resources = [
  { label: "Documentation", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Discord", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}

          <div>
            <Link
              href="/"
              className="text-3xl font-bold tracking-[0.15em]"
            >
              <span className="text-white">PWN.</span>
              <span className="text-violet-400">TCPIONEER</span>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-zinc-400">
              A modern cybersecurity learning platform designed to help
              beginners and professionals master offensive security through
              structured learning paths and hands-on practice.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              Learn • Practice • Build • Secure
            </p>
          </div>

          {/* Platform */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Platform
            </h3>

            <div className="space-y-4">
              {platform.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Resources
            </h3>

            <div className="space-y-4">
              {resources.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Community
            </h3>

            <div className="space-y-4">
              {social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} PWN.TCPIONEER. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  );
}