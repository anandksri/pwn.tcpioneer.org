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
        <div className="lg:hidden fixed inset-0 z-[999]">
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="
              absolute
              inset-0
              bg-black/70
              backdrop-blur-2xl
            "
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
            className="
              absolute
              left-1/2
              top-24
              w-[92%]
              max-w-md
              -translate-x-1/2
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-zinc-950/95
              shadow-2xl
              backdrop-blur-xl
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <Logo />

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  p-2
                  transition
                  hover:bg-white/5
                "
              >
                <X className="h-5 w-5 text-zinc-300" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-2 p-6">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="
                   w-full
    max-w-xs
    rounded-2xl
    px-4
    py-3
    text-center
    text-zinc-300
    transition-all
    duration-300
    hover:bg-violet-500/10
    hover:text-violet-400
    hover:border-violet-500/30
    border
    border-transparent
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Footer */}

            <div className="border-t border-white/10 p-6 space-y-3">
              <button
                onClick={() => {
                  onSearch();
                  onClose();
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  py-3
                  transition-all
                  duration-300
                  hover:border-violet-500
                  hover:bg-violet-500/10
                "
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
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      py-3
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
                    onClick={onClose}
                    className="
                      block
                      rounded-xl
                      bg-violet-600
                      py-3
                      text-center
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-violet-500
                    "
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
