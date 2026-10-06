import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <section className="border border-border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Upcoming Events
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Stay updated with the latest events</p>
      </div>

      <div className="border border-dashed border-border bg-secondary p-6 text-sm text-muted-foreground">
        No upcoming events have been published yet.
      </div>

      <Link href="/community" className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-border bg-secondary px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-elevated">
        View All Events
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
