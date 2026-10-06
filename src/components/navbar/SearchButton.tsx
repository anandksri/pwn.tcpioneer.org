"use client";

import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick: () => void;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Search"
      className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-border bg-secondary transition-colors hover:border-primary/50 hover:bg-elevated"
    >
      <Search className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
    </button>
  );
}
