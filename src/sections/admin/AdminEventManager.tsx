"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";

type CommunityEvent = {
  id: string;
  title: string;
  description: string;
  category: string;
  startsAt: string;
  endsAt: string | null;
  location: string | null;
  registrationUrl: string | null;
  published: boolean;
};

type EventForm = {
  title: string;
  description: string;
  category: string;
  startsAt: string;
  endsAt: string;
  location: string;
  registrationUrl: string;
};

const emptyForm: EventForm = {
  title: "",
  description: "",
  category: "",
  startsAt: "",
  endsAt: "",
  location: "",
  registrationUrl: "",
};

function eventToForm(event: CommunityEvent): EventForm {
  return {
    title: event.title,
    description: event.description,
    category: event.category,
    startsAt: event.startsAt.slice(0, 16),
    endsAt: event.endsAt?.slice(0, 16) ?? "",
    location: event.location ?? "",
    registrationUrl: event.registrationUrl ?? "",
  };
}

function formatUtc(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function AdminEventManager({
  initialEvents,
}: {
  initialEvents: CommunityEvent[];
}) {
  const [events, setEvents] = useState(initialEvents);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function refreshEvents() {
    const response = await fetch("/api/admin/events");
    const result = (await response.json()) as { events?: CommunityEvent[]; message?: string };
    if (!response.ok) throw new Error(result.message ?? "Unable to load events.");
    setEvents(result.events ?? []);
  }

  async function saveEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");

    const body = {
      ...form,
      startsAt: `${form.startsAt}:00Z`,
      endsAt: form.endsAt ? `${form.endsAt}:00Z` : null,
      location: form.location || null,
      registrationUrl: form.registrationUrl || null,
    };

    try {
      const response = await fetch(
        editingId ? `/api/admin/events/${editingId}` : "/api/admin/events",
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
      );
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to save event.");
      setMessage(editingId ? "Event updated." : "Event draft created.");
      setEditingId(null);
      setForm(emptyForm);
      await refreshEvents();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save event.");
    } finally {
      setPending(false);
    }
  }

  async function updateEvent(event: CommunityEvent, changes: Partial<CommunityEvent>) {
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(`/api/admin/events/${event.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changes),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to update event.");
      await refreshEvents();
      setMessage(changes.published ? "Event published." : "Event saved as a draft.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to update event.");
    } finally {
      setPending(false);
    }
  }

  async function deleteEvent(event: CommunityEvent) {
    if (!window.confirm(`Delete "${event.title}"? This cannot be undone.`)) return;
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(`/api/admin/events/${event.id}`, { method: "DELETE" });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to delete event.");
      if (editingId === event.id) {
        setEditingId(null);
        setForm(emptyForm);
      }
      await refreshEvents();
      setMessage("Event deleted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to delete event.");
    } finally {
      setPending(false);
    }
  }

  function editEvent(event: CommunityEvent) {
    setEditingId(event.id);
    setForm(eventToForm(event));
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Admin console</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-bold">Community events</h1>
          <Link href="/community#events" className="text-sm text-brand-soft hover:underline">
            View public calendar
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Create event drafts, review the details, then publish events to the community calendar. All event times are entered in UTC.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <form onSubmit={saveEvent} className="border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">{editingId ? "Edit event" : "New event draft"}</h2>
            <div className="mt-6 space-y-4">
              <label className="block text-sm text-muted-foreground">
                Title
                <input
                  required
                  minLength={2}
                  maxLength={140}
                  value={form.title}
                  onChange={(event) => setForm({ ...form, title: event.target.value })}
                  className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm text-muted-foreground">
                Category
                <input
                  required
                  minLength={2}
                  maxLength={60}
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                  placeholder="Workshop, CTF, Meetup..."
                  className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm text-muted-foreground">
                Start (UTC)
                <input
                  required
                  type="datetime-local"
                  value={form.startsAt}
                  onChange={(event) => setForm({ ...form, startsAt: event.target.value })}
                  className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm text-muted-foreground">
                End (UTC, optional)
                <input
                  type="datetime-local"
                  value={form.endsAt}
                  onChange={(event) => setForm({ ...form, endsAt: event.target.value })}
                  className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm text-muted-foreground">
                Location (optional)
                <input
                  maxLength={160}
                  value={form.location}
                  onChange={(event) => setForm({ ...form, location: event.target.value })}
                  placeholder="Online or a venue"
                  className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm text-muted-foreground">
                Registration URL (optional)
                <input
                  type="url"
                  value={form.registrationUrl}
                  onChange={(event) => setForm({ ...form, registrationUrl: event.target.value })}
                  placeholder="https://..."
                  className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm text-muted-foreground">
                Description
                <textarea
                  required
                  minLength={10}
                  maxLength={4000}
                  value={form.description}
                  onChange={(event) => setForm({ ...form, description: event.target.value })}
                  className="mt-2 min-h-32 w-full border border-border bg-background p-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <div className="flex gap-3">
                <button
                  disabled={pending}
                  className="h-10 flex-1 bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-50"
                >
                  {editingId ? "Save changes" : "Create draft"}
                </button>
                {editingId ? (
                  <button
                    type="button"
                    disabled={pending}
                    onClick={() => {
                      setEditingId(null);
                      setForm(emptyForm);
                    }}
                    className="h-10 border border-border px-4 text-sm text-foreground disabled:opacity-50"
                  >
                    Cancel
                  </button>
                ) : null}
              </div>
            </div>
          </form>

          <section className="border border-border bg-card p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">All events</h2>
              <span className="text-sm text-muted-foreground">{events.length} total</span>
            </div>
            {message ? <p role="status" className="mt-5 text-sm text-muted-foreground">{message}</p> : null}
            <div className="mt-5 space-y-3">
              {events.map((event) => (
                <article key={event.id} className="border border-border p-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-medium text-foreground">{event.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {event.category} · {formatUtc(event.startsAt)} UTC
                        {event.location ? ` · ${event.location}` : ""}
                      </p>
                    </div>
                    <span className={`border px-2 py-1 text-xs ${event.published ? "border-emerald-500/30 text-emerald-400" : "border-border text-muted-foreground"}`}>
                      {event.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={pending}
                      onClick={() => editEvent(event)}
                      className="border border-border px-3 py-2 text-xs text-foreground disabled:opacity-50"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      disabled={pending}
                      onClick={() => void updateEvent(event, { published: !event.published })}
                      className="border border-border px-3 py-2 text-xs text-foreground disabled:opacity-50"
                    >
                      {event.published ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      type="button"
                      disabled={pending}
                      onClick={() => void deleteEvent(event)}
                      className="border border-red-500/30 px-3 py-2 text-xs text-red-400 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
              {!events.length ? (
                <p className="py-8 text-center text-sm text-muted-foreground">No events created yet.</p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
