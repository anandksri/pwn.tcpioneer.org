import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center border-b border-border/60 py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.24em] text-primary uppercase">
              Error 404
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-foreground sm:text-6xl">
              Page not found
            </h1>
            <p className="mx-auto mt-6 max-w-lg leading-8 text-muted-foreground">
              The page may have moved or the address may be incorrect. Return
              home or search the learning platform.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-brand-hover"
              >
                <ArrowLeft className="h-4 w-4" />
                Back home
              </Link>
              <Link
                href="/search"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-elevated"
              >
                <Search className="h-4 w-4" />
                Search platform
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
