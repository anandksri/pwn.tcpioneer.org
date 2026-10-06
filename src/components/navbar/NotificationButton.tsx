"use client";

import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button className="relative flex h-11 w-11 items-center justify-center rounded-md border border-border/50 bg-card/80 transition hover:border-primary">
      <Bell className="h-5 w-5 text-secondary-foreground" />

      <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
    </button>
  );
}
