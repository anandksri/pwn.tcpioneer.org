"use client";

import Link from "next/link";
import { Bell, CheckCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Notification = {
  id: string;
  title: string;
  message: string;
  href: string | null;
  readAt: string | null;
  createdAt: string;
};

export default function NotificationList({ notifications }: { notifications: Notification[] }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const unread = notifications.some((notification) => !notification.readAt);

  async function markAllRead() {
    setPending(true);
    try {
      await fetch("/api/notifications/read", { method: "POST" });
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">Inbox</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground">Notifications</h1>
          <p className="mt-3 text-secondary-foreground">Learning and account updates for your profile.</p>
        </div>
        <button
          type="button"
          disabled={!unread || pending}
          onClick={markAllRead}
          className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCheck className="h-4 w-4" />
          Mark all read
        </button>
      </div>

      {notifications.length ? (
        <div className="mt-8 space-y-3">
          {notifications.map((notification) => {
            const content = (
              <div className={`flex gap-4 border p-5 transition-colors ${notification.readAt ? "border-border bg-card" : "border-primary/30 bg-primary/5"}`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-secondary">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="font-semibold text-foreground">{notification.title}</h2>
                    <time className="text-xs text-muted-foreground">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </time>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{notification.message}</p>
                </div>
              </div>
            );

            return notification.href ? (
              <Link key={notification.id} href={notification.href} className="block hover:border-primary/40">
                {content}
              </Link>
            ) : (
              <div key={notification.id}>{content}</div>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 border border-dashed border-border bg-secondary p-12 text-center text-sm text-muted-foreground">
          You&apos;re all caught up. New learning updates will appear here.
        </div>
      )}
    </>
  );
}
