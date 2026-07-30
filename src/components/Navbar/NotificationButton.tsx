"use client";

import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-zinc-900/80
        transition
        hover:border-violet-500
      "
    >
      <Bell className="h-5 w-5 text-zinc-300" />

      <span
        className="
          absolute
          right-2
          top-2
          h-2
          w-2
          rounded-full
          bg-red-500
        "
      />
    </button>
  );
}