"use client";

import { useEffect, useState } from "react";

type Report = {
  id: string;
  postId: string | null;
  commentId: string | null;
  reason: string;
  createdAt: string;
  reporter: { username: string };
  post: {
    id: string;
    body: string;
    removedAt: string | null;
    author: { username: string };
  } | null;
  comment: {
    id: string;
    body: string;
    removedAt: string | null;
    author: { username: string };
    post: { id: string; body: string };
  } | null;
};

export default function AdminCommunityModeration() {
  const [reports, setReports] = useState<Report[]>([]);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function loadReports() {
    const response = await fetch("/api/admin/community/reports");
    const result = (await response.json()) as { reports?: Report[]; message?: string };
    if (!response.ok) throw new Error(result.message ?? "Unable to load reports.");
    setReports(result.reports ?? []);
  }

  useEffect(() => {
    let active = true;
    fetch("/api/admin/community/reports")
      .then(async (response) => ({
        response,
        result: (await response.json()) as { reports?: Report[]; message?: string },
      }))
      .then(({ response, result }) => {
        if (!active) return;
        if (!response.ok) throw new Error(result.message ?? "Unable to load reports.");
        setReports(result.reports ?? []);
      })
      .catch((error: unknown) => {
        if (active) {
          setMessage(error instanceof Error ? error.message : "Unable to load reports.");
        }
      });
    return () => {
      active = false;
    };
  }, []);

  async function moderate(report: Report, action: "remove" | "dismiss") {
    setPending(true);
    setMessage("");
    const targetType = report.postId ? "post" : "comment";
    const targetId = report.postId ?? report.commentId;
    if (!targetId) {
      setMessage("The reported item is no longer available.");
      setPending(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/community/reports", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reportId: report.id, targetType, targetId, action }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to update report.");
      await loadReports();
      setMessage(action === "remove" ? "Content removed and related reports resolved." : "Report dismissed.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to update report.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Admin console</p>
        <h1 className="mt-4 text-4xl font-bold">Community moderation</h1>
        <p className="mt-4 text-muted-foreground">Review member reports and remove content that violates community guidelines.</p>
        {message ? <p role="status" className="mt-6 text-sm text-muted-foreground">{message}</p> : null}
        <div className="mt-8 space-y-5">
          {reports.map((report) => {
            const target = report.post ?? report.comment;
            return (
              <article key={report.id} className="border border-border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground">
                    {report.comment ? "Comment" : "Post"} reported by {report.reporter.username} ·{" "}
                    {new Date(report.createdAt).toLocaleString()}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    Author: {target?.author.username ?? "Unavailable"}
                  </span>
                </div>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 text-foreground">
                  {target?.body ?? "Reported content is no longer available."}
                </blockquote>
                {report.comment?.post ? (
                  <p className="mt-3 text-xs text-muted-foreground">
                    In post: {report.comment.post.body}
                  </p>
                ) : null}
                <p className="mt-4 text-sm text-secondary-foreground">
                  <span className="font-semibold">Report reason:</span> {report.reason}
                </p>
                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    disabled={pending || !target}
                    onClick={() => void moderate(report, "remove")}
                    className="border border-red-500/30 px-4 py-2 text-sm text-red-400 disabled:opacity-50"
                  >
                    Remove content
                  </button>
                  <button
                    type="button"
                    disabled={pending}
                    onClick={() => void moderate(report, "dismiss")}
                    className="border border-border px-4 py-2 text-sm text-foreground disabled:opacity-50"
                  >
                    Dismiss report
                  </button>
                </div>
              </article>
            );
          })}
          {!reports.length ? (
            <p className="border border-dashed border-border p-8 text-center text-muted-foreground">
              No open community reports.
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
