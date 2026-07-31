"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/50
        text-zinc-400
        transition-all
        duration-300
        hover:border-violet-500/30
        hover:bg-zinc-800
        hover:text-white
      "
      aria-label="Toggle sidebar"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}