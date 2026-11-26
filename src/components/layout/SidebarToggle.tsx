"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export default function SidebarToggle() {
  const { toggleMobileSidebar, mobileOpen } = useSidebar();

  return (
    <button
      onClick={toggleMobileSidebar}
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
      aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
      aria-expanded={mobileOpen}
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}
