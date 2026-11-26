"use client";

import { FormEvent, useState } from "react";

type Challenge = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  points: number;
  moduleId: string | null;
  published: boolean;
};

type FormState = {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: Challenge["difficulty"];
  points: string;
  flag: string;
};

const emptyForm: FormState = {
  slug: "",
  title: "",
  description: "",
  category: "",
  difficulty: "BEGINNER",
  points: "100",
  flag: "",
};

export default function AdminChallengeManager({
  initialChallenges,
}: {
  initialChallenges: Challenge[];
}) {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function loadChallenges() {
    const response = await fetch("/api/admin/challenges");
    const result = (await response.json()) as { challenges?: Challenge[]; message?: string };
    if (!response.ok) throw new Error(result.message ?? "Unable to load challenges.");
    setChallenges(result.challenges ?? []);
    setMessage("");
  }

  async function createChallenge(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/challenges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, points: Number(form.points), published: false }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to create challenge.");
      setForm(emptyForm);
      setMessage("Draft challenge created.");
      await loadChallenges();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to create challenge.");
    } finally {
      setPending(false);
    }
  }

  async function togglePublished(challenge: Challenge) {
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(`/api/admin/challenges/${challenge.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !challenge.published }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to update challenge.");
      await loadChallenges();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to update challenge.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Admin console</p>
        <h1 className="mt-4 text-4xl font-bold">Challenge content</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Create unpublished challenge drafts, review them, and publish only when their content is ready.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <form onSubmit={createChallenge} className="border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">New draft</h2>
            <div className="mt-6 space-y-4">
              {([
                ["slug", "Slug", "linux-basics"],
                ["title", "Title", "Linux Basics"],
                ["category", "Category", "Linux"],
                ["points", "Points", "100"],
                ["flag", "Flag", "PWN{...}"],
              ] as const).map(([name, label, placeholder]) => (
                <label key={name} className="block text-sm text-muted-foreground">
                  {label}
                  <input
                    required
                    type={name === "points" ? "number" : name === "flag" ? "password" : "text"}
                    value={form[name]}
                    onChange={(event) => setForm({ ...form, [name]: event.target.value })}
                    placeholder={placeholder}
                    className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                  />
                </label>
              ))}
              <label className="block text-sm text-muted-foreground">
                Difficulty
                <select
                  value={form.difficulty}
                  onChange={(event) => setForm({ ...form, difficulty: event.target.value as FormState["difficulty"] })}
                  className="mt-2 h-10 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
                >
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                </select>
              </label>
              <label className="block text-sm text-muted-foreground">
                Description
                <textarea
                  required
                  value={form.description}
                  onChange={(event) => setForm({ ...form, description: event.target.value })}
                  className="mt-2 min-h-28 w-full border border-border bg-background p-3 text-foreground outline-none focus:border-primary"
                />
              </label>
              <button disabled={pending} className="h-10 w-full bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-50">
                Create draft
              </button>
            </div>
          </form>

          <section className="border border-border bg-card p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Challenge drafts</h2>
              <span className="text-sm text-muted-foreground">{challenges.length} total</span>
            </div>
            {message ? <p className="mt-5 text-sm text-muted-foreground">{message}</p> : null}
            <div className="mt-5 space-y-3">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="flex items-center justify-between gap-4 border border-border p-4">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-foreground">{challenge.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {challenge.category} · {challenge.difficulty} · {challenge.points} points
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={pending}
                    onClick={() => togglePublished(challenge)}
                    className={`shrink-0 border px-3 py-2 text-xs font-medium ${challenge.published ? "border-emerald-500/30 text-emerald-400" : "border-border text-muted-foreground"}`}
                  >
                    {challenge.published ? "Published" : "Publish"}
                  </button>
                </div>
              ))}
              {!challenges.length && !message ? (
                <p className="py-8 text-center text-sm text-muted-foreground">No challenge drafts yet.</p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
