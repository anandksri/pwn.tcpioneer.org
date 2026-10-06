import Container from "@/components/Container";

import { communityFeed } from "@/data/community";

import { Clock3, ArrowUpRight } from "lucide-react";

export default function CommunityFeed() {
  return (
    <section className="bg-background pb-28">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
              Community Feed
            </span>

            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Latest from the Community
            </h2>
          </div>

          <button className="text-sm font-medium text-secondary-foreground transition hover:text-brand-soft">
            View All →
          </button>
        </div>

        <div className="mt-14 space-y-5">
          {communityFeed.map((feed, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary "
            >
              <div className="flex items-start justify-between">
                {/* Left */}

                <div className="flex items-start gap-5">
                  {/* Avatar */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-lg font-semibold text-brand-soft transition-transform duration-300 group-hover:scale-105">
                    {feed.user.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-brand-soft">
                      {feed.user}
                    </h3>

                    <p className="mt-2 leading-7 text-secondary-foreground">
                      {feed.action}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-subtle-foreground">
                      <Clock3 className="h-4 w-4" />
                      {feed.time}
                    </div>
                  </div>
                </div>

                {/* Arrow */}

                <ArrowUpRight className="h-5 w-5 text-subtle-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-soft" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
