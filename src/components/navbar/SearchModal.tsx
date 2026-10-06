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

export default function SearchModal({ open, onClose }: SearchModalProps) {
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

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center bg-background/75 pt-24"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-md border border-border bg-popover shadow-lg"
      >
        {/* Header */}

        <div className="flex items-center gap-4 border-b border-border p-5">
          <Search className="h-5 w-5 text-muted-foreground" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search modules, labs, resources..."
            className="flex-1 bg-transparent text-foreground outline-none placeholder:text-subtle-foreground"
          />

          <button onClick={onClose} className="rounded-sm p-2 transition-colors hover:bg-secondary">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Quick Links */}

        <div className="p-5">
          <h2 className="mb-4 font-mono text-xs font-semibold tracking-[0.16em] text-subtle-foreground uppercase">
            Quick Links
          </h2>

          <div className="space-y-2">
            {quickLinks.map((item) => (
              <button
                key={item.title}
                className="flex w-full items-center justify-between rounded-sm border border-transparent p-4 text-left transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="h-5 w-5 text-subtle-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}

        <div className="border-t border-border px-5 py-4">
          <p className="text-xs text-subtle-foreground">
            Press{" "}
            <span className="rounded-sm bg-secondary px-1.5 py-0.5 text-secondary-foreground">
              Esc
            </span>{" "}
            to close.
          </p>
        </div>
      </div>
    </div>
  );
}
