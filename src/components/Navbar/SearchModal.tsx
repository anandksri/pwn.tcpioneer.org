"use client";

import { useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const quickLinks = [
  {
    title: "Modules",
    description: "Browse cybersecurity modules",
    href: "/modules",
  },
  {
    title: "Practice",
    description: "Hands-on labs and exercises",
    href: "/practice",
  },
  {
    title: "Resources",
    description: "Articles, writeups and tools",
    href: "/resources",
  },
  {
    title: "Community",
    description: "Join the TCPioneer community",
    href: "/community",
  },
];

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-start
        justify-center
        bg-black/70
        pt-24
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-zinc-950
          shadow-2xl
        "
      >
        {/* Header */}

        <div className="flex items-center gap-4 border-b border-white/10 p-5">
          <Search className="h-5 w-5 text-zinc-500" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search modules, labs, resources..."
            className="
              flex-1
              bg-transparent
              text-white
              outline-none
              placeholder:text-zinc-500
            "
          />

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-white/5
            "
          >
            <X className="h-5 w-5 text-zinc-400" />
          </button>
        </div>

        {/* Quick Links */}

        <div className="p-5">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Quick Links
          </h2>

          <div className="space-y-2">
            {quickLinks.map((item) => (
              <button
                key={item.title}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-transparent
                  p-4
                  text-left
                  transition-all
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                "
              >
                <div>
                  <h3 className="font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="h-5 w-5 text-zinc-500" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}

        <div className="border-t border-white/10 px-5 py-4">
          <p className="text-xs text-zinc-500">
            Press{" "}
            <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-zinc-300">
              Esc
            </span>{" "}
            to close.
          </p>
        </div>
      </div>
    </div>
  );
}