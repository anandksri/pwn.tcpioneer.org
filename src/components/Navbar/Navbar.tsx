"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import Container from "../Container";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchButton from "./SearchButton";
import SearchModal from "./SearchModal";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";

import AuthModal from "@/components/auth/AuthModal";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            className={`relative flex h-[72px] items-center justify-between transition-all duration-300 lg:grid lg:h-[72px] lg:grid-cols-[280px_1fr_220px] ${
              scrolled
                ? "w-full rounded-none border-b border-white/10 bg-zinc-950/90 px-6 backdrop-blur-2xl"
                : "rounded-2xl border border-white/10 bg-zinc-950/80 px-6 backdrop-blur-xl"
            }`}
          >
            {/* Left */}
            <div className="flex items-center">
              <Logo />
            </div>
            {/* Center */}
            <div className="flex justify-center">
    <NavLinks />
</div>
            {/* Desktop Right */}
            <div className="hidden items-center justify-end gap-3 lg:flex">
              <SearchButton onClick={() => setSearchOpen(true)} />

              {user ? (
                <UserMenu />
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setAuthOpen(true)}
                    className="
                     h-10
px-6
rounded-2xl
border
cursor-pointer
border-white/10
bg-zinc-900/70
font-medium
transition-all
duration-300
hover:border-violet-500
hover:bg-violet-500/10
                    "
                  >
                    Login
                  </button>

                  <Link
                    href="/get-started"
                    className="
                     inline-flex
    h-10
    items-center
    justify-center
    whitespace-nowrap
    rounded-2xl
    bg-violet-700
    px-6
    text-sm
    font-semibold
    text-white-300
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-violet-800
                    "
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open Menu"
              onClick={() => setMobileOpen(true)}
              className="
                flex
                h-11
                w-11
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
              <Menu className="h-5 w-5" />
            </button>{" "}
            {/* Mobile Drawer */}
            <MobileMenu
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              onLogin={() => setAuthOpen(true)}
              onSearch={() => setSearchOpen(true)}
              loggedIn={!!user}
            />
          </nav>
        </Container>
      </header>

      {/* Search Modal */}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Authentication Modal */}

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
