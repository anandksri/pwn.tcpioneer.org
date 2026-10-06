import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function ContinueLearning() {
  return (
    <section className="border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Continue Learning
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            No active module yet
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Choose a module to begin learning.</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center border border-border bg-secondary">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
      </div>

      <Link href="/modules" className="mt-8 inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover">
        Browse Modules
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
