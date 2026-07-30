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
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl transition-all duration-300"
    >
      <Search className="h-5 w-5 text-zinc-400 transition-colors duration-300 group-hover:text-violet-400" />
    </button>
  );
}
