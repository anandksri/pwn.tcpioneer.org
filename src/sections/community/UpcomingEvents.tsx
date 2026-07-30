import Link from "next/link";

import Container from "@/components/Container";

import { CalendarDays, Clock3, ArrowRight } from "lucide-react";

import { upcomingEvents } from "@/data/community";

export default function UpcomingEvents() {
  return (
    <section className="bg-[#09090B] pb-24">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-violet-400 uppercase">
              Upcoming Events
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Dont miss whats next
            </h2>
          </div>

          <Link
            href="#"
            className="text-sm font-medium text-zinc-400 transition hover:text-violet-400"
          >
            View All →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl border border-zinc-800 bg-[#111114] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-[#18181d] hover:shadow-[0_15px_35px_rgba(139,92,246,.12)]"
            >
              {/* Date */}

              <div className="inline-flex rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                <span className="text-sm font-semibold tracking-[0.15em] text-violet-400 uppercase">
                  {event.date}
                </span>
              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-400">
                {event.title}
              </h3>

              {/* Meta */}

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-zinc-400">
                  <Clock3 className="h-5 w-5" />

                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-3 text-zinc-400">
                  <CalendarDays className="h-5 w-5" />

                  <span>{event.location}</span>
                </div>
              </div>

              {/* Button */}

              <Link
                href={event.href}
                className="mt-8 inline-flex items-center gap-2 font-medium text-zinc-300 transition-colors duration-300 group-hover:text-violet-400"
              >
                Register
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
