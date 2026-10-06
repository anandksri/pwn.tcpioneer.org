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
        duration-300
        ${collapsed ? "w-full max-w-3xl" : "w-full max-w-xl"}
      `}
    >
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        aria-label="Search dashboard"
        type="text"
        placeholder="Search modules, labs, challenges..."
        className="
          h-11
          w-full
          border
          border-border
          bg-card
          pl-11
          pr-20
          text-sm
          text-foreground
          placeholder:text-muted-foreground
          outline-none
          transition-colors
          hover:border-primary/40
          focus:border-primary
        "
      />

      <div
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          border
          border-border
          bg-secondary
          px-2
          py-1
          text-[10px]
          font-medium
          uppercase
          tracking-[0.12em]
          text-muted-foreground
        "
      >
        Ctrl K
      </div>
    </div>
  );
}
