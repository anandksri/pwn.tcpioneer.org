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
  const { collapsed } = useSidebar();

  const active =
    pathname === href ||
    pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      title={collapsed ? title : ""}
      className={`
        group
        relative
        flex
        items-center
        rounded-xl
        transition-all
        duration-300
        ease-out
        ${
          collapsed
            ? "h-12 justify-center"
            : "h-12 gap-3 px-4"
        }
        ${
          active
            ? "bg-zinc-900 text-white"
            : "text-zinc-400 hover:bg-zinc-900/80 hover:text-white hover:translate-x-1"
        }
      `}
    >
      {/* Active Indicator */}

      <span
        className={`
          absolute
          left-0
          top-2
          bottom-2
          w-1
          rounded-r-full
          bg-violet-500
          transition-all
          duration-300
          ${
            active
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-60"
          }
        `}
      />

      {/* Icon */}

      <Icon
        className={`
          h-5
          w-5
          transition-all
          duration-300
          ${
            active
              ? "text-violet-400"
              : "text-zinc-500 group-hover:text-white"
          }
        `}
      />

      {/* Label */}

      {!collapsed && (
        <span
          className={`
            font-medium
            transition-all
            duration-300
            ${
              active
                ? "text-white"
                : ""
            }
          `}
        >
          {title}
        </span>
      )}
    </Link>
  );
}