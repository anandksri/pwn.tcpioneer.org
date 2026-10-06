import Link from "next/link";

import Container from "@/components/Container";

export default function RecentActivity() {
  return (
    <section className="bg-background py-14">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.15em] text-brand-soft uppercase">
              Recent Activity
            </span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">
              What&apos;s happening now
            </h2>
          </div>
        </div>

        <div className="mt-14 border border-dashed border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            Community activity will appear here when the feed is connected.
          </p>
          <Link
            href="https://discord.gg/tcpioneer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
          >
            Join the Discord community
          </Link>
        </div>
      </Container>
    </section>
  );
}
