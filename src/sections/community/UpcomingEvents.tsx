import Link from "next/link";

import Container from "@/components/Container";

import { CalendarDays, Clock3, ArrowRight } from "lucide-react";

import { upcomingEvents } from "@/data/community";

export default function UpcomingEvents() {
  return (
    <section className="bg-background pb-24">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
              Upcoming Events
            </span>

            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Dont miss whats next
            </h2>
          </div>

          <Link
            href="#"
            className="text-sm font-medium text-secondary-foreground transition hover:text-brand-soft"
          >
            View All →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-secondary "
            >
              {/* Date */}

              <div className="inline-flex rounded-md border border-primary/20 bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold tracking-[0.15em] text-brand-soft uppercase">
                  {event.date}
                </span>
              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-brand-soft">
                {event.title}
              </h3>

              {/* Meta */}

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-secondary-foreground">
                  <Clock3 className="h-5 w-5" />

                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-3 text-secondary-foreground">
                  <CalendarDays className="h-5 w-5" />

                  <span>{event.location}</span>
                </div>
              </div>

              {/* Button */}

              <Link
                href={event.href}
                className="mt-8 inline-flex items-center gap-2 font-medium text-secondary-foreground transition-colors duration-300 group-hover:text-brand-soft"
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
