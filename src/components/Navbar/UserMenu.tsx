"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  Settings,
  Bell,
  Shield,
  LogOut,
} from "lucide-react";

import useAuth from "@/hooks/useAuth";

export default function UserMenu() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
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

  if (!user) return null;

  async function handleLogout() {
    await logout();

    window.location.href = "/";
  }

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      {/* Avatar */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/10
          bg-zinc-900
          transition
          hover:border-violet-500
        "
      >
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt={user.username}
            width={44}
            height={44}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-bold text-white">
            {user.username.charAt(0).toUpperCase()}
          </span>
        )}
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-80
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-zinc-950
            shadow-2xl
            shadow-black/40
          "
        >
          {/* Header */}

          <div className="border-b border-white/10 p-5">
            <div className="flex items-center gap-4">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.username}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              ) : (
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-violet-600
                    font-bold
                  "
                >
                  {user.username.charAt(0).toUpperCase()}
                </div>
              )}

              <div>
                <h2 className="font-semibold">
                  {user.username}
                </h2>

                <p className="text-sm text-zinc-500">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Links */}

          <div className="p-2">

            <MenuItem
              href="/dashboard"
              icon={<LayoutDashboard size={18} />}
              title="Dashboard"
            />

            <MenuItem
              href="/profile"
              icon={<User size={18} />}
              title="Profile"
            />

            <MenuItem
              href="/settings"
              icon={<Settings size={18} />}
              title="Settings"
            />

            <MenuItem
              href="/notifications"
              icon={<Bell size={18} />}
              title="Notifications"
            />

            {user.role === "ADMIN" && (
              <MenuItem
                href="/admin"
                icon={<Shield size={18} />}
                title="Admin Panel"
              />
            )}

          </div>

          <div className="border-t border-white/10 p-2">

            <button
              onClick={handleLogout}
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
              <LogOut size={18} />

              Logout
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

interface MenuItemProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

function MenuItem({
  href,
  title,
  icon,
}: MenuItemProps) {
  return (
    <Link
      href={href}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-zinc-300
        transition
        hover:bg-zinc-900
        hover:text-violet-400
      "
    >
      {icon}

      {title}
    </Link>
  );
}