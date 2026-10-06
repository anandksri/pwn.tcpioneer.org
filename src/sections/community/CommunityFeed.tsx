import Link from "next/link";

import Container from "@/components/Container";

export default function CommunityFeed() {
  return (
    <section className="bg-background pb-28">
      <Container>
        <div>
          <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
            Community Feed
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground">
            Latest from the Community
          </h2>
        </div>

        <div className="mt-14 border border-dashed border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            The community feed is being prepared. Join Discord to participate now.
          </p>
          <Link
            href="https://discord.gg/tcpioneer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
          >
            Join Discord
          </Link>
        </div>
      </Container>
    </section>
  );
}
