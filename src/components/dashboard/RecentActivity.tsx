export default function RecentActivity() {
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

      <div className="border border-dashed border-border bg-secondary p-6 text-sm text-muted-foreground">
        Your activity will appear here after you complete a lesson or challenge.
      </div>
    </section>
  );
}
