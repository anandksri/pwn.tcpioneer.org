import { ReactNode } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { SidebarProvider } from "@/context/SidebarContext";

type LayoutProps = {
  children: ReactNode;
};

export default function AuthenticatedLayout({
  children,
}: LayoutProps) {
  return (
    <SidebarProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </SidebarProvider>
  );
}