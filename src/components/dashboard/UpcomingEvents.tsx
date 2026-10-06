import { Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    title: "TCP Monthly CTF",
    date: "Aug 10, 2026",
    status: "Registration Open",
  },
  {
    title: "Linux Basics Workshop",
    date: "Aug 18, 2026",
    status: "Free Event",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="border border-border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Upcoming Events
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Stay updated with the latest events</p>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.title} className="border border-border bg-secondary p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-border bg-card">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground">{event.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{event.date}</p>
                </div>
              </div>

              <span className="border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-primary">
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-border bg-secondary px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-[#1a1a1e]">
        View All Events
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
}
