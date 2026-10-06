"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FlagSubmissionFormProps = {
  slug: string;
  completed: boolean;
};

export default function FlagSubmissionForm({ slug, completed }: FlagSubmissionFormProps) {
  const router = useRouter();
  const [flag, setFlag] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [correct, setCorrect] = useState(completed);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/practice/${slug}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flag }),
      });
      const result = (await response.json()) as {
        correct?: boolean;
        message?: string;
      };

      setCorrect(Boolean(result.correct));
      setMessage(result.message ?? "Unable to submit the flag.");
      if (result.correct) {
        setFlag("");
        router.refresh();
      }
    } catch {
      setMessage("Unable to submit the flag. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Submit flag</p>
          <h2 className="mt-2 text-xl font-semibold text-foreground">
            {correct ? "Challenge completed" : "Ready to validate your answer?"}
          </h2>
        </div>
        {correct ? (
          <span className="border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Solved
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="challenge-flag">Flag</label>
        <input
          id="challenge-flag"
          value={flag}
          onChange={(event) => setFlag(event.target.value)}
          placeholder="PWN{your_answer}"
          autoComplete="off"
          disabled={pending || correct}
          className="h-11 min-w-0 flex-1 border border-border bg-background px-3 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending || correct || !flag.trim()}
          className="h-11 border border-primary bg-primary px-5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? "Checking…" : "Submit flag"}
        </button>
      </div>

      {message ? (
        <p className={`mt-4 text-sm ${correct ? "text-emerald-400" : "text-muted-foreground"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
