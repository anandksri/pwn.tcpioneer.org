import Link from "next/link";

import Container from "./Container";

import { navigation } from "@/data/navigation";
import { actions } from "@/data/actions";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-6">
      <Container>
        <nav className="flex h-17 items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/80 px-8 backdrop-blur-xl">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.15em] transition-colors duration-200"
          >
            <span className="text-white">PWN.</span>
            <span className="text-violet-400">TCPIONEER</span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.variant === "primary"
                    ? "rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-violet-500"
                    : "rounded-xl border border-white/10 px-6 py-3 text-base font-medium text-zinc-300 transition-all duration-200 hover:border-violet-500 hover:text-white"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}