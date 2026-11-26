import Link from "next/link";
import { ArrowRight, BookOpen, Flag, Search, Terminal } from "lucide-react";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageWrapper from "@/components/PageWrapper";
import { searchPublishedContent } from "@/lib/content";

export const dynamic = "force-dynamic";

const icons = { module: BookOpen, lesson: Terminal, challenge: Flag } as const;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const query = ((await searchParams).q ?? "").trim().slice(0, 100);
  const results = await searchPublishedContent(query);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="min-h-screen bg-background py-36">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">Global search</p>
              <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">Search PWN.TCPIONEER</h1>
              <form action="/search" className="relative mt-8">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input name="q" defaultValue={query} placeholder="Search modules, lessons, and challenges" className="h-14 w-full border border-border bg-card pl-12 pr-4 text-foreground outline-none focus:border-primary" />
              </form>

              <p className="mt-8 text-sm text-muted-foreground">
                {query ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”` : "Enter at least two characters to search."}
              </p>

              {results.length ? (
                <div className="mt-5 space-y-3">
                  {results.map((result) => {
                    const Icon = icons[result.type];
                    return <Link key={`${result.type}-${result.href}`} href={result.href} className="group flex items-center gap-4 border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-elevated"><div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-secondary"><Icon className="h-4 w-4 text-primary" /></div><div className="min-w-0 flex-1"><p className="font-medium text-foreground group-hover:text-brand-soft">{result.title}</p><p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{result.description}</p><p className="mt-2 text-xs uppercase tracking-[0.12em] text-subtle-foreground">{result.meta}</p></div><ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" /></Link>;
                  })}
                </div>
              ) : query.length >= 2 ? <div className="mt-5 border border-dashed border-border bg-card p-12 text-center text-sm text-muted-foreground">No published content matched your search.</div> : null}
            </div>
          </Container>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
