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
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "pt-0" : "pt-4 lg:pt-6"
        }`}
      >
        <Container className={scrolled ? "!w-full !max-w-none !px-0" : ""}>
          <nav
            className={`relative flex h-[72px] items-center justify-between transition-all duration-300 lg:grid lg:h-[72px] lg:grid-cols-[280px_1fr_220px] ${
              scrolled
                ? "w-full border-b border-border bg-background px-6"
                : "rounded-md border border-border bg-background px-6"
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
                    className="h-10 cursor-pointer rounded-md border border-border bg-transparent px-6 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:bg-secondary"
                  >
                    Login
                  </button>

                  <Link
                    href="/get-started"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-colors hover:bg-brand-hover"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-secondary text-secondary-foreground transition-colors hover:border-primary lg:hidden"
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
