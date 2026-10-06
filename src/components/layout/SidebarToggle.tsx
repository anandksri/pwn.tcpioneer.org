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
        rounded-lg
        border
        border-border
        bg-card/50
        text-secondary-foreground
        transition-all
        duration-300
        hover:border-primary/30
        hover:bg-elevated
        hover:text-foreground
      "
      aria-label="Toggle sidebar"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}