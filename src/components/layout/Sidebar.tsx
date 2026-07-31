"use client";

import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

import { useSidebar } from "@/context/SidebarContext";
import { navigation } from "@/lib/navigation";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`
        sticky
        top-0
        flex
        h-screen
        shrink-0
        flex-col
        border-r
        border-zinc-800
        bg-[#09090B]
        transition-all
        duration-200
        ease-in-out
        ${collapsed ? "w-[72px]" : "w-[260px]"}
      `}
    >
      {/* Header */}

      <div className="border-b border-zinc-800">
        <div
          className={`
            flex
            h-16
            items-center
            transition-all
            duration-300
            ${
              collapsed
                ? "justify-center px-2"
                : "justify-between px-5"
            }
          `}
        >
          {!collapsed && (
            <Link
              href="/dashboard"
              className="select-none"
            >
              <span className="text-xl font-black tracking-[0.08em] text-white">
                PWN.
                <span className="text-violet-500">
                  TCPIONEER
                </span>
              </span>
            </Link>
          )}

          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-zinc-500
              transition-all
              duration-300
              hover:bg-zinc-800
              hover:text-white
            "
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}

      <nav
        className={`
          flex-1
          overflow-y-auto
          py-4
          transition-all
          duration-300
          ${
            collapsed
              ? "px-2"
              : "px-3"
          }
        `}
      >
        <div className="space-y-1">
          {navigation.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
            />
          ))}
        </div>
      </nav>

      {/* Footer */}

      <div
        className={`
          overflow-hidden
          border-t
          border-zinc-800
          transition-all
          duration-500
          ${
            collapsed
              ? "max-h-0 opacity-0"
              : "max-h-60 opacity-100"
          }
        `}
      >
        <div className="p-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white">
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  Anand Keshari
                </p>

                <p className="truncate text-xs text-zinc-500">
                  anand@example.com
                </p>
              </div>
            </div>

            <button
              className="
                mt-4
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-red-500/20
                bg-red-500/10
                py-3
                text-sm
                font-medium
                text-red-400
                transition-all
                duration-300
                hover:bg-red-500/20
              "
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}