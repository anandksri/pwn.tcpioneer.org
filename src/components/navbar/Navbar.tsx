"use client";

import { useState } from "react";
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full"
      >
        <Container className="!w-full !max-w-none !px-0">
          <nav
            className="relative flex h-[68px] items-center justify-between border-b border-border bg-[#010409] px-5 lg:grid lg:h-[68px] lg:grid-cols-[240px_1fr_220px] sm:px-6"
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
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-hover"
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
