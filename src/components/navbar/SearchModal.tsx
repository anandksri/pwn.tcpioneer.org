"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Flag, Search, Terminal, X } from "lucide-react";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

type SearchResult = {
  type: "module" | "lesson" | "challenge";
  title: string;
  description: string;
  meta: string;
  href: string;
};

const icons = { module: BookOpen, lesson: Terminal, challenge: Flag } as const;

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || query.trim().length < 2) {
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query.slice(0, 100))}`, { signal: controller.signal });
        const data = (await response.json()) as { results?: SearchResult[] };
        setResults(data.results ?? []);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [open, query]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Site search" className="fixed inset-0 z-[999] flex items-start justify-center bg-background/75 pt-24" onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-md border border-border bg-popover shadow-lg">
        <div className="flex items-center gap-4 border-b border-border p-5">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search modules, lessons, and challenges" placeholder="Search modules, lessons, challenges..." className="flex-1 bg-transparent text-foreground outline-none placeholder:text-subtle-foreground" />
          <button type="button" aria-label="Close search" onClick={onClose} className="rounded-sm p-2 transition-colors hover:bg-secondary"><X className="h-5 w-5 text-muted-foreground" /></button>
        </div>

        <div className="max-h-[min(60vh,480px)] overflow-y-auto p-5">
          {loading ? <p className="py-8 text-center text-sm text-muted-foreground">Searching published content…</p> : null}
          {!loading && query.trim().length < 2 ? <p className="py-8 text-center text-sm text-muted-foreground">Type at least two characters to search.</p> : null}
          {!loading && query.trim().length >= 2 && !results.length ? <p className="py-8 text-center text-sm text-muted-foreground">No published content found.</p> : null}
          <div className="space-y-2">
            {!loading ? results.map((result) => { const Icon = icons[result.type]; return <Link key={`${result.type}-${result.href}`} href={result.href} onClick={onClose} className="flex items-center gap-4 border border-transparent p-4 transition-colors hover:border-primary/40 hover:bg-secondary"><div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-card"><Icon className="h-4 w-4 text-primary" /></div><div className="min-w-0 flex-1"><p className="truncate font-medium text-foreground">{result.title}</p><p className="mt-1 truncate text-sm text-muted-foreground">{result.meta}</p></div><ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" /></Link>; }) : null}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border px-5 py-4"><p className="text-xs text-subtle-foreground">Press <span className="rounded-sm bg-secondary px-1.5 py-0.5 text-secondary-foreground">Esc</span> to close.</p><Link href={`/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`} onClick={onClose} className="text-xs font-medium text-brand-soft hover:text-primary">View all results</Link></div>
      </div>
    </div>
  );
}
