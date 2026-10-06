import Link from "next/link";

import Container from "@/components/Container";
import { prisma } from "@/lib/prisma";

function formatUtc(value: Date) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(value);
}

export default async function UpcomingEvents() {
  const now = new Date();
  const events = await prisma.communityEvent.findMany({
    where: {
      published: true,
      OR: [
        { startsAt: { gte: now } },
        { endsAt: { gte: now } },
      ],
    },
    orderBy: [{ startsAt: "asc" }, { title: "asc" }],
    take: 12,
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      startsAt: true,
      endsAt: true,
      location: true,
      registrationUrl: true,
    },
  });

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

        {events.length ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {events.map((event) => (
              <article key={event.id} className="border border-border bg-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-soft uppercase">
                    {event.category}
                  </span>
                  <time
                    dateTime={event.startsAt.toISOString()}
                    className="text-sm text-muted-foreground"
                  >
                    {formatUtc(event.startsAt)} UTC
                  </time>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-foreground">{event.title}</h3>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-muted-foreground">
                  {event.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-secondary-foreground">
                  {event.endsAt ? (
                    <span>Ends {formatUtc(event.endsAt)} UTC</span>
                  ) : null}
                  {event.location ? <span>{event.location}</span> : null}
                </div>
                {event.registrationUrl ? (
                  <Link
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
                  >
                    Event details / registration
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-14 border border-dashed border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              No upcoming events have been published yet. Follow the community for announcements.
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
        )}
      </Container>
    </section>
  );
}
