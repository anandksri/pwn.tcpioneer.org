import Link from "next/link";
import { Newspaper } from "lucide-react";

export default function CyberNews() {
  return (
    <section className="border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Cyber News</h2>
          <p className="mt-1 text-sm text-muted-foreground">Latest security updates</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center border border-border bg-secondary">
          <Newspaper className="h-4 w-4 text-primary" />
        </div>
      </div>

      <div className="border border-dashed border-border bg-secondary p-6 text-sm text-muted-foreground">
        Live security news will appear here when the feed is connected.
      </div>

      <Link href="/resources" className="mt-6 block w-full border border-border bg-secondary px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-elevated">
        View All News
      </Link>
    </section>
  );
}
