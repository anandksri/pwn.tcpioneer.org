"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "./Container";

import { navigation } from "@/data/navigation";
import { actions } from "@/data/actions";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "pt-0" : "pt-6"
      }`}
    >
      <Container className={scrolled ? "!max-w-none !w-full !px-0" : ""}>
        <nav
          className={`grid h-[72px] grid-cols-[220px_1fr_220px] items-center transition-all duration-300 ${
            scrolled
              ? "w-full rounded-none border-b border-white/10 bg-zinc-950/90 px-10 backdrop-blur-2xl"
              : "rounded-2xl border border-white/10 bg-zinc-950/80 px-8 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold tracking-[0.15em]"
            >
              <span className="text-white">PWN.</span>
              <span className="text-violet-400">TCPIONEER</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex items-center justify-end gap-3">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.variant === "primary"
                    ? "rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
                    : "rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white"
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