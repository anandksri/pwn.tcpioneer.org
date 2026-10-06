"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { useSidebar } from "@/context/SidebarContext";

type SidebarItemProps = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: SidebarItemProps) {
  const pathname = usePathname();
  const { collapsed, closeMobileSidebar } = useSidebar();

  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={closeMobileSidebar}
      title={collapsed ? title : ""}
      className={`
        group
        relative
        flex
        items-center
        border-l
        transition-colors
        ${collapsed ? "h-11 justify-center px-0" : "h-11 gap-3 px-3"}
        ${
          active
            ? "border-primary bg-secondary text-foreground"
            : "border-transparent text-muted hover:bg-secondary hover:text-foreground"
        }
      `}
    >
      <span
        className={`
          absolute
          left-0
          top-0
          h-full
          w-0.5
          ${active ? "bg-primary" : "bg-transparent group-hover:bg-primary/40"}
        `}
      />

      <Icon
        className={`
          h-4
          w-4
          ${active ? "text-primary" : "text-muted group-hover:text-foreground"}
        `}
      />

      {!collapsed && (
        <span
          className={`
            text-sm
            font-medium
            ${active ? "text-foreground" : "text-muted"}
          `}
        >
          {title}
        </span>
      )}
    </Link>
  );
}
