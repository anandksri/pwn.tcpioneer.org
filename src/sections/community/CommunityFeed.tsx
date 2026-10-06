"use client";

import { type FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Author = { username: string; avatar: string | null };
type Comment = {
  id: string;
  body: string;
  createdAt: string;
  authorId: string;
  author: Author;
};
type Post = {
  id: string;
  body: string;
  removedAt: string | null;
  createdAt: string;
  authorId: string;
  author: Author;
  _count: { comments: number };
  comments: Comment[];
};
type Viewer = { id: string; role: string; verified: boolean } | null;
type ReportTarget = { postId?: string; commentId?: string } | null;

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [viewer, setViewer] = useState<Viewer>(null);
  const [loaded, setLoaded] = useState(false);
  const [postBody, setPostBody] = useState("");
  const [commentBodies, setCommentBodies] = useState<Record<string, string>>({});
  const [reportTarget, setReportTarget] = useState<ReportTarget>(null);
  const [reportReason, setReportReason] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function loadPosts() {
    const response = await fetch("/api/community/posts");
    const result = (await response.json()) as {
      posts?: Post[];
      viewer?: Viewer;
      message?: string;
    };
    if (!response.ok) throw new Error(result.message ?? "Unable to load community posts.");
    setPosts(result.posts ?? []);
    setViewer(result.viewer ?? null);
    setLoaded(true);
  }

  useEffect(() => {
    let active = true;
    fetch("/api/community/posts")
      .then(async (response) => ({
        response,
        result: (await response.json()) as {
          posts?: Post[];
          viewer?: Viewer;
          message?: string;
        },
      }))
      .then(({ response, result }) => {
        if (!active) return;
        if (!response.ok) throw new Error(result.message ?? "Unable to load community posts.");
        setPosts(result.posts ?? []);
        setViewer(result.viewer ?? null);
        setLoaded(true);
      })
      .catch((error: unknown) => {
        if (active) {
          setMessage(error instanceof Error ? error.message : "Unable to load community posts.");
          setLoaded(true);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  async function submitContent(
    event: FormEvent<HTMLFormElement>,
    endpoint: string,
    body: string,
    successMessage: string,
  ) {
    event.preventDefault();
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to submit content.");
      await loadPosts();
      setMessage(successMessage);
      if (endpoint === "/api/community/posts") setPostBody("");
      else {
        const postId = endpoint.split("/")[4];
        setCommentBodies((current) => ({ ...current, [postId]: "" }));
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to submit content.");
    } finally {
      setPending(false);
    }
  }

  async function removeContent(endpoint: string, label: string) {
    if (!window.confirm(`Remove this ${label}?`)) return;
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(endpoint, { method: "DELETE" });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? `Unable to remove ${label}.`);
      await loadPosts();
      setMessage(`${label[0].toUpperCase()}${label.slice(1)} removed.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : `Unable to remove ${label}.`);
    } finally {
      setPending(false);
    }
  }

  async function submitReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!reportTarget) return;
    setPending(true);
    setMessage("");
    try {
      const response = await fetch("/api/community/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...reportTarget, reason: reportReason }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to report content.");
      setMessage("Report sent to the moderation team.");
      setReportTarget(null);
      setReportReason("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to report content.");
    } finally {
      setPending(false);
    }
  }

  const canModerate = viewer?.role === "ADMIN" || viewer?.role === "MODERATOR";

  return (
    <section id="community-feed" className="bg-background pb-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
          Community Feed
        </span>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="mt-4 text-4xl font-bold text-foreground">
            Latest from the Community
          </h2>
          {canModerate ? (
            <Link href="/admin/community" className="text-sm text-brand-soft hover:underline">
              Review reports
            </Link>
          ) : null}
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Share what you&apos;re learning, ask questions, and help other members grow.
        </p>

        {viewer?.verified ? (
          <form
            onSubmit={(event) => void submitContent(event, "/api/community/posts", postBody, "Post published.")}
            className="mt-8 border border-border bg-card p-5"
          >
            <label htmlFor="community-post" className="text-sm font-medium text-foreground">
              Start a discussion
            </label>
            <textarea
              id="community-post"
              required
              minLength={2}
              maxLength={3000}
              value={postBody}
              onChange={(event) => setPostBody(event.target.value)}
              placeholder="Share a question, insight, or project update..."
              className="mt-3 min-h-28 w-full border border-border bg-background p-3 text-foreground outline-none focus:border-primary"
            />
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground">{postBody.length}/3000</span>
              <button
                disabled={pending || postBody.trim().length < 2}
                className="bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-50"
              >
                Publish post
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 border border-border bg-card p-5 text-sm text-muted-foreground">
            {viewer
              ? "Verify your email to publish posts, comment, or report content."
              : "Sign in with a verified account to publish posts, comment, or report content."}
          </div>
        )}

        {message ? <p role="status" className="mt-5 text-sm text-muted-foreground">{message}</p> : null}

        <div className="mt-8 space-y-5">
          {posts.map((post) => {
            const isRemoved = Boolean(post.removedAt);
            const canRemovePost = !isRemoved &&
              (canModerate || viewer?.id === post.authorId);

            return (
              <article key={post.id} className="border border-border bg-card p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-foreground">{post.author.username}</p>
                    <time className="mt-1 block text-xs text-muted-foreground" dateTime={post.createdAt}>
                      {formatDate(post.createdAt)}
                    </time>
                  </div>
                  {viewer?.verified && !isRemoved && viewer.id !== post.authorId ? (
                    <button
                      type="button"
                      onClick={() => {
                        setReportTarget({ postId: post.id });
                        setReportReason("");
                      }}
                      className="text-xs text-muted-foreground hover:text-brand-soft"
                    >
                      Report
                    </button>
                  ) : null}
                </div>
                <p className={`mt-4 whitespace-pre-wrap text-sm leading-7 ${isRemoved ? "italic text-muted-foreground" : "text-secondary-foreground"}`}>
                  {post.body}
                </p>

                {reportTarget?.postId === post.id ? (
                  <form onSubmit={(event) => void submitReport(event)} className="mt-4 border border-border p-4">
                    <label className="block text-sm text-foreground">
                      Why are you reporting this post?
                      <textarea
                        required
                        minLength={10}
                        maxLength={1000}
                        value={reportReason}
                        onChange={(event) => setReportReason(event.target.value)}
                        className="mt-2 min-h-20 w-full border border-border bg-background p-3 text-foreground outline-none focus:border-primary"
                      />
                    </label>
                    <div className="mt-3 flex gap-3">
                      <button disabled={pending} className="bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50">
                        Send report
                      </button>
                      <button type="button" onClick={() => setReportTarget(null)} className="px-4 py-2 text-sm text-muted-foreground">
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : null}

                {canRemovePost ? (
                  <button
                    type="button"
                    disabled={pending}
                    onClick={() => void removeContent(`/api/community/posts/${post.id}`, "post")}
                    className="mt-4 text-xs text-red-400 disabled:opacity-50"
                  >
                    Remove post
                  </button>
                ) : null}

                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-medium text-muted-foreground">
                    Comments ({post._count.comments})
                  </p>
                  <div className="mt-3 space-y-3">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="border-l-2 border-border pl-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm font-medium text-foreground">{comment.author.username}</span>
                          <div className="flex items-center gap-3">
                            <time className="text-xs text-muted-foreground" dateTime={comment.createdAt}>
                              {formatDate(comment.createdAt)}
                            </time>
                            {viewer?.verified && viewer.id !== comment.authorId ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setReportTarget({ commentId: comment.id });
                                  setReportReason("");
                                }}
                                className="text-xs text-muted-foreground hover:text-brand-soft"
                              >
                                Report
                              </button>
                            ) : null}
                            {!comment.body.startsWith("[This comment was removed") &&
                            (canModerate || viewer?.id === comment.authorId) ? (
                              <button
                                type="button"
                                disabled={pending}
                                onClick={() => void removeContent(`/api/community/comments/${comment.id}`, "comment")}
                                className="text-xs text-red-400 disabled:opacity-50"
                              >
                                Remove
                              </button>
                            ) : null}
                          </div>
                        </div>
                        <p className={`mt-1 whitespace-pre-wrap text-sm leading-6 ${comment.body.startsWith("[This comment was removed") ? "italic text-muted-foreground" : "text-secondary-foreground"}`}>
                          {comment.body}
                        </p>
                        {reportTarget?.commentId === comment.id ? (
                          <form onSubmit={(event) => void submitReport(event)} className="mt-3 border border-border p-4">
                            <label className="block text-sm text-foreground">
                              Why are you reporting this comment?
                              <textarea
                                required
                                minLength={10}
                                maxLength={1000}
                                value={reportReason}
                                onChange={(event) => setReportReason(event.target.value)}
                                className="mt-2 min-h-20 w-full border border-border bg-background p-3 text-foreground outline-none focus:border-primary"
                              />
                            </label>
                            <div className="mt-3 flex gap-3">
                              <button disabled={pending} className="bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50">
                                Send report
                              </button>
                              <button type="button" onClick={() => setReportTarget(null)} className="px-4 py-2 text-sm text-muted-foreground">
                                Cancel
                              </button>
                            </div>
                          </form>
                        ) : null}
                      </div>
                    ))}
                    {!post.comments.length ? (
                      <p className="text-xs text-muted-foreground">No comments yet.</p>
                    ) : null}
                  </div>
                  {viewer?.verified && !isRemoved ? (
                    <form
                      onSubmit={(event) =>
                        void submitContent(
                          event,
                          `/api/community/posts/${post.id}/comments`,
                          commentBodies[post.id] ?? "",
                          "Comment added.",
                        )
                      }
                      className="mt-4 flex flex-col gap-2 sm:flex-row"
                    >
                      <label className="sr-only" htmlFor={`comment-${post.id}`}>Add a comment</label>
                      <input
                        id={`comment-${post.id}`}
                        required
                        minLength={2}
                        maxLength={3000}
                        value={commentBodies[post.id] ?? ""}
                        onChange={(event) =>
                          setCommentBodies((current) => ({ ...current, [post.id]: event.target.value }))
                        }
                        placeholder="Write a comment..."
                        className="h-10 min-w-0 flex-1 border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                      />
                      <button
                        disabled={pending || (commentBodies[post.id] ?? "").trim().length < 2}
                        className="h-10 bg-secondary px-4 text-sm text-foreground disabled:opacity-50"
                      >
                        Comment
                      </button>
                    </form>
                  ) : null}
                </div>
              </article>
            );
          })}
          {loaded && !posts.length ? (
            <p className="border border-dashed border-border p-8 text-center text-muted-foreground">
              No discussions yet. Be the first to share something with the community.
            </p>
          ) : null}
          {!loaded ? <p className="py-8 text-center text-muted-foreground">Loading community discussions…</p> : null}
        </div>
      </div>
    </section>
  );
}
