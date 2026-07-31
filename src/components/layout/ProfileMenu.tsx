"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  Shield,
  User,
} from "lucide-react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* Notifications */}

      <button
        className="
          relative
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          text-zinc-400
          transition-all
          duration-300
          hover:border-violet-500/30
          hover:bg-zinc-800
          hover:text-white
        "
      >
        <Bell className="h-5 w-5" />

        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-cyan-400" />
      </button>

      {/* Profile */}

      <div
        ref={menuRef}
        className="relative"
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            px-3
            py-2
            transition-all
            duration-300
            hover:border-violet-500/30
            hover:bg-zinc-800
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-violet-500
              to-cyan-500
              font-bold
              text-white
            "
          >
            A
          </div>

          <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-white">
              Anand Keshari
            </p>

            <p className="text-xs text-zinc-500">
              Cybersecurity Student
            </p>
          </div>

          <ChevronDown
            className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}

        <div
          className={`
            absolute
            right-0
            mt-3
            w-64
            origin-top-right
            rounded-2xl
            border
            border-zinc-800
            bg-[#111113]
            p-2
            shadow-2xl
            transition-all
            duration-200
            ${
              open
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <User className="h-5 w-5" />
            My Profile
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>

          <Link
            href="/security"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <Shield className="h-5 w-5" />
            Security
          </Link>

          <div className="my-2 border-t border-zinc-800" />

          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-red-400
              transition
              hover:bg-red-500/10
            "
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}