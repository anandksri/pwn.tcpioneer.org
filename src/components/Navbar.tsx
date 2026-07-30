"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import AuthModal from "@/components/auth/AuthModal";
import { navigation } from "@/data/navigation";
// import { actions } from "@/data/actions";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "pt-0" : "pt-4 lg:pt-6"
        }`}
      >
        <Container className={scrolled ? "!max-w-none !w-full !px-0" : ""}>
          <nav
            className={`relative flex h-16 items-center justify-between transition-all duration-300 lg:grid lg:h-[72px] lg:grid-cols-[220px_1fr_220px] ${
              scrolled
                ? "w-full rounded-none border-b border-white/10 bg-zinc-950/90 backdrop-blur-2xl px-5 lg:px-10"
                : "rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl px-5 lg:px-8"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold tracking-[0.08em] sm:text-xl"
            >
              <span className="text-white">PWN.</span>

              <span className="text-violet-400">TCPIONEER</span>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden items-center justify-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    cursor-pointer
                    text-base
                    font-medium
                    text-zinc-400
                    transition-all
                    duration-300
                    hover:text-violet-400
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>{" "}
            {/* Desktop Actions */}
            <div className="hidden items-center justify-end gap-3 lg:flex">
              {/* Login */}

              <button
                type="button"
                onClick={() => setAuthOpen(true)}
                className="
                  cursor-pointer
                  rounded-xl
                  border
                  border-white/10
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:border-violet-500
                  hover:bg-violet-500/10
                  hover:text-violet-400
                "
              >
                Login
              </button>

              {/* Get Started */}

              <Link
                href="/get-started"
                className="
                  cursor-pointer
                  rounded-xl
                  bg-violet-600
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-violet-500
                  hover:shadow-lg
                  hover:shadow-violet-500/20
                "
              >
                Get Started
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-zinc-900/80
                text-white
                transition-all
                duration-300
                hover:border-violet-500
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
            {/* Mobile Menu */}
            <div
              className={`
                absolute
                left-0
                right-0
                top-full
                mt-3
                origin-top
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-zinc-950/95
                backdrop-blur-2xl
                transition-all
                duration-300
                lg:hidden

                ${
                  mobileOpen
                    ? "pointer-events-auto scale-y-100 opacity-100"
                    : "pointer-events-none scale-y-95 opacity-0"
                }
              `}
            >
              <div className="flex flex-col p-4">
                {/* Navigation */}

                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      cursor-pointer
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-medium
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:bg-zinc-900
                      hover:text-violet-400
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-4 h-px bg-white/10" />

                {/* Login */}

                <button
                  type="button"
                  onClick={() => {
                    setAuthOpen(true);
                    setMobileOpen(false);
                  }}
                  className="
                    cursor-pointer
                    rounded-xl
                    border
                    border-white/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-zinc-300
                    transition-all
                    duration-300
                    hover:border-violet-500
                    hover:text-violet-400
                  "
                >
                  Login
                </button>

                {/* Get Started */}

                <Link
                  href="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className="
                    mt-3
                    cursor-pointer
                    rounded-xl
                    bg-violet-600
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-violet-500
                  "
                >
                  Get Started
                </Link>
              </div>
            </div>{" "}
          </nav>
        </Container>
      </header>

      {/* Auth Modal */}

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
