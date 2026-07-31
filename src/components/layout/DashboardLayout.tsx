"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import DashboardSearch from "./DashboardSearch";
import ProfileMenu from "./ProfileMenu";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#09090B] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 border-b border-zinc-800 bg-[#09090B]/95 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between gap-6 px-6">
            {/* Search */}
            <div className="flex-1">
              <DashboardSearch />
            </div>

            {/* Right Side */}
            <ProfileMenu />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}