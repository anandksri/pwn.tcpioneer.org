"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";

import { useSidebar } from "@/context/SidebarContext";
import useAuth from "@/hooks/useAuth";
import { navigation } from "@/lib/navigation";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { collapsed, toggleSidebar, mobileOpen, closeMobileSidebar } = useSidebar();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  const navigationItems = (
    <div className="space-y-1">
      {navigation.map((item) => (
        <SidebarItem key={item.href} {...item} />
      ))}
    </div>
  );

  const account = user && (
    <div className="border-t border-border p-4">
      <div className="border border-border bg-secondary p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-border bg-primary/10 text-sm font-semibold text-primary">
            {user.username.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{user.username}</p>
            <p className="truncate text-[11px] text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-4 flex w-full items-center justify-center gap-2 border border-destructive/30 bg-destructive/5 py-2.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
    <aside
      className={`
        hidden
        lg:flex
        sticky
        top-0
        flex
        h-screen
        shrink-0
        flex-col
        border-r
        border-border
        bg-background
        transition-all
        duration-200
        ease-in-out
        ${collapsed ? "w-[88px]" : "w-[280px]"}
      `}
    >
      <div className="border-b border-border">
        <div
          className={`
            flex
            h-16
            items-center
            transition-all
            duration-300
            ${collapsed ? "justify-center px-2" : "justify-between px-4"}
          `}
        >
          {!collapsed ? (
            <Link href="/dashboard" className="select-none">
              <span className="text-[0.7rem] font-semibold tracking-[0.15em] text-foreground">
                PWN<span className="text-primary">.</span>
                <span className="ml-1 text-muted-foreground">TCPIONEER</span>
              </span>
            </Link>
          ) : (
            <div className="flex h-9 w-9 items-center justify-center border border-border bg-card text-[9px] font-bold tracking-[0.2em] text-primary">
              PWN
            </div>
          )}

          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              border
              border-border
              bg-card
              text-muted
              transition-colors
              hover:border-primary/50
              hover:text-foreground
            "
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`
          flex-1
          overflow-y-auto
          py-4
          transition-all
          duration-300
          ${collapsed ? "px-2" : "px-3"}
        `}
      >
        {navigationItems}
      </nav>

      <div className={`overflow-hidden transition-all duration-300 ${collapsed ? "max-h-0 opacity-0" : "max-h-56 opacity-100"}`}>
        {account}
      </div>
    </aside>

    {mobileOpen && (
      <div className="fixed inset-0 z-50 lg:hidden">
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMobileSidebar}
          className="absolute inset-0 h-full w-full bg-background/75"
        />
        <aside className="relative flex h-full w-[min(86vw,320px)] flex-col border-r border-border bg-background shadow-lg">
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <Link href="/dashboard" onClick={closeMobileSidebar} className="select-none">
              <span className="text-[0.7rem] font-semibold tracking-[0.15em] text-foreground">
                PWN<span className="text-primary">.</span>
                <span className="ml-1 text-muted-foreground">TCPIONEER</span>
              </span>
            </Link>
            <button type="button" onClick={closeMobileSidebar} aria-label="Close navigation" className="border border-border p-2 text-muted-foreground hover:border-primary/50 hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4">{navigationItems}</nav>
          {account}
        </aside>
      </div>
    )}
    </>
  );
}
