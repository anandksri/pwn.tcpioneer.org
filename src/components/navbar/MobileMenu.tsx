"use client";

import Link from "next/link";
import { X, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "./Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
  onSearch: () => void;
  loggedIn: boolean;
}

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Modules",
    href: "/modules",
  },
  {
    name: "Practice",
    href: "/practice",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Community",
    href: "/community",
  },
];

export default function MobileMenu({
  open,
  onClose,
  onLogin,
  onSearch,
  loggedIn,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/75"
          />

          {/* Popup */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute top-24 left-1/2 w-[92%] max-w-md -translate-x-1/2 overflow-hidden rounded-md border border-border bg-popover shadow-lg"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-border p-6">
              <Logo />

              <button
                onClick={onClose}
                className="rounded-sm p-2 transition-colors hover:bg-secondary"
              >
                <X className="h-5 w-5 text-secondary-foreground" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-2 p-6">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="w-full max-w-xs rounded-sm border border-transparent px-4 py-3 text-center text-secondary-foreground transition-colors hover:border-primary/30 hover:bg-secondary hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Footer */}

            <div className="space-y-3 border-t border-border p-6">
              <button
                onClick={() => {
                  onSearch();
                  onClose();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-border py-3 transition-colors hover:border-primary hover:bg-secondary"
              >
                <Search size={18} />
                Search
              </button>

              {!loggedIn && (
                <>
                  <button
                    onClick={() => {
                      onLogin();
                      onClose();
                    }}
                    className="w-full rounded-md border border-border py-3 transition-colors hover:border-primary hover:bg-secondary"
                  >
                    Login
                  </button>

                  <Link
                    href="/get-started"
                    onClick={onClose}
                    className="block rounded-md bg-primary py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-brand-hover"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
