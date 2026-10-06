"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bell, ChevronDown, LogOut, Settings, Shield, User } from "lucide-react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <button
        className="
          relative
          flex
          h-10
          w-10
          items-center
          justify-center
          border
          border-border
          bg-card
          text-muted-foreground
          transition-colors
          hover:border-primary/40
          hover:text-foreground
        "
      >
        <Bell className="h-4 w-4" />
        <span className="absolute right-2.5 top-2.5 h-2 w-2 bg-primary" />
      </button>

      <div ref={menuRef} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            flex
            items-center
            gap-3
            border
            border-border
            bg-card
            px-3
            py-2
            text-left
            transition-colors
            hover:border-primary/40
          "
        >
          <div className="flex h-9 w-9 items-center justify-center border border-border bg-primary/10 font-bold text-primary">
            A
          </div>

          <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-foreground">Anand Keshari</p>
            <p className="text-[11px] text-muted-foreground">Cybersecurity Student</p>
          </div>

          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`
            absolute
            right-0
            mt-3
            w-64
            origin-top-right
            border
            border-border
            bg-card
            p-2
            transition-all
            ${
              open
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <Link
            href="/profile"
            className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <User className="h-4 w-4" />
            My Profile
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>

          <Link
            href="/security"
            className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <Shield className="h-4 w-4" />
            Security
          </Link>

          <div className="my-2 border-t border-border" />

          <button className="flex w-full items-center gap-3 px-3 py-2.5 text-sm text-destructive transition hover:bg-destructive/5">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
