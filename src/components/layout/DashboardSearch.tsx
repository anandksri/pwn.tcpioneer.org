"use client";

import { Search } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export default function DashboardSearch() {
  const { collapsed } = useSidebar();

  return (
    <div
      className={`
        relative
        transition-all
        duration-500
        ease-in-out
        ${
          collapsed
            ? "w-full max-w-3xl"
            : "w-full max-w-xl"
        }
      `}
    >
      <Search
        className="
          absolute
          left-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-zinc-500
        "
      />

      <input
        type="text"
        placeholder="Search modules, labs, challenges..."
        className="
          peer
          h-12
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/50
          pl-12
          pr-20
          text-sm
          text-white
          placeholder:text-zinc-500
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          hover:border-violet-500/30
          focus:border-violet-500
          focus:ring-4
          focus:ring-violet-500/10
        "
      />

      <div
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          rounded-lg
          border
          border-zinc-800
          bg-zinc-900
          px-2
          py-1
          text-xs
          text-zinc-500
        "
      >
        Ctrl K
      </div>
    </div>
  );
}