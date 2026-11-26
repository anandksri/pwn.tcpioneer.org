"use client";

import { useState } from "react";

type LessonCompletionButtonProps = {
  slug: string;
  lessonSlug: string;
  completed: boolean;
};

export default function LessonCompletionButton({
  slug,
  lessonSlug,
  completed,
}: LessonCompletionButtonProps) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function markComplete() {
    setPending(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/modules/${encodeURIComponent(slug)}/lessons/${encodeURIComponent(lessonSlug)}/complete`,
        { method: "POST" },
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to update progress.");
      }

      setIsCompleted(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to update progress.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={markComplete}
        disabled={pending || isCompleted}
        className="border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Saving..." : isCompleted ? "Lesson completed" : "Mark lesson complete"}
      </button>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
    </div>
  );
}
