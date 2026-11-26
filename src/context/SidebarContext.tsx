"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type SidebarContextType = {
  collapsed: boolean;
  toggleSidebar: () => void;
  mobileOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
};

const SidebarContext = createContext<
  SidebarContextType | undefined
>(undefined);

export function SidebarProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Initialize from localStorage only once
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("sidebar") === "true";
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  // Save whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "sidebar",
      String(collapsed)
    );
  }, [collapsed]);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        toggleSidebar,
        mobileOpen,
        toggleMobileSidebar,
        closeMobileSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used within SidebarProvider"
    );
  }

  return context;
}
