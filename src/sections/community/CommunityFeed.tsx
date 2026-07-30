import Container from "@/components/Container";

import { communityFeed } from "@/data/community";

import { Clock3, ArrowUpRight } from "lucide-react";

export default function CommunityFeed() {
  return (
    <section className="bg-[#09090B] pb-28">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-violet-400 uppercase">
              Community Feed
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Latest from the Community
            </h2>
          </div>

          <button className="text-sm font-medium text-zinc-400 transition hover:text-violet-400">
            View All →
          </button>
        </div>

        <div className="mt-14 space-y-5">
          {communityFeed.map((feed, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl border border-zinc-800 bg-[#111114] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-[#18181d] hover:shadow-[0_15px_35px_rgba(139,92,246,.10)]"
            >
              <div className="flex items-start justify-between">
                {/* Left */}

                <div className="flex items-start gap-5">
                  {/* Avatar */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 text-lg font-semibold text-violet-400 transition-transform duration-300 group-hover:scale-105">
                    {feed.user.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-violet-400">
                      {feed.user}
                    </h3>

                    <p className="mt-2 leading-7 text-zinc-400">
                      {feed.action}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                      <Clock3 className="h-4 w-4" />
                      {feed.time}
                    </div>
                  </div>
                </div>

                {/* Arrow */}

                <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-400" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
