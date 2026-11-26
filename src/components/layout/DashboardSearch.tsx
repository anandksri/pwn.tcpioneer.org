"use client";

import { Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { useSidebar } from "@/context/SidebarContext";

export default function DashboardSearch() {
  const { collapsed } = useSidebar();
  const router = useRouter();
  const [query, setQuery] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = query.trim();
    if (term.length >= 2) router.push(`/search?q=${encodeURIComponent(term)}`);
  }

  return (
    <form onSubmit={submit} className={`relative transition-all duration-300 ${collapsed ? "w-full max-w-3xl" : "w-full max-w-xl"}`}>
      <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search dashboard" type="search" placeholder="Search modules, lessons, challenges..." className="h-11 w-full border border-border bg-card pl-11 pr-20 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors hover:border-primary/40 focus:border-primary" />
      <button type="submit" className="absolute top-1/2 right-3 -translate-y-1/2 border border-border bg-secondary px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">Enter</button>
    </form>
  );
}
