type Activity = {
  id: string;
  label: string;
  title: string;
  detail: string;
  href: string;
  date: Date | null;
};

export default function RecentActivity({ activities }: { activities: Activity[] }) {
  return (
    <section className="border border-border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Recent Activity
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Your latest learning progress
        </p>
      </div>

      {activities.length ? (
        <div className="space-y-3">
          {activities.map((activity) => (
            <a key={activity.id} href={activity.href} className="block border border-border bg-secondary p-4 transition-colors hover:border-primary/40 hover:bg-elevated">
              <p className="text-xs uppercase tracking-[0.12em] text-primary">{activity.label}</p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-foreground">{activity.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{activity.detail}</p>
                </div>
                {activity.date ? <time className="shrink-0 text-xs text-muted-foreground">{activity.date.toLocaleDateString()}</time> : null}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-border bg-secondary p-6 text-sm text-muted-foreground">
          Your activity will appear here after you complete a lesson or challenge.
        </div>
      )}
    </section>
  );
}
