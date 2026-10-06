import Link from "next/link";

import Container from "@/components/Container";

export default function UpcomingEvents() {
  return (
    <section id="events" className="bg-background pb-24">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
              Upcoming Events
            </span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Don&apos;t miss what&apos;s next
            </h2>
          </div>
        </div>

        <div className="mt-14 border border-dashed border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            No events have been published yet. Follow the community for announcements.
          </p>
          <Link
            href="https://discord.gg/tcpioneer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex border border-border bg-secondary px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-elevated"
          >
            Follow community updates
          </Link>
        </div>
      </Container>
    </section>
  );
}
