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
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Upcoming Events
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Stay updated with the latest events
        </p>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition-all duration-300 hover:border-violet-500/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-violet-500/10 p-3">
                  <Calendar className="h-5 w-5 text-violet-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {event.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {event.date}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:border-violet-500/30
          hover:bg-zinc-800
        "
      >
        View All Events

        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
}