"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import DashboardSearch from "./DashboardSearch";
import ProfileMenu from "./ProfileMenu";
import SidebarToggle from "./SidebarToggle";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 border-b border-border bg-background/95">
          <div className="flex h-16 items-center justify-between gap-6 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="lg:hidden">
                <SidebarToggle />
              </div>
              <DashboardSearch />
            </div>

            <ProfileMenu />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 xl:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
