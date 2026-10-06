import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "PWN TCPioneer",
  description: "Cybersecurity Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
