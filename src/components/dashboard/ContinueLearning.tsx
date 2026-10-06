import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

type ContinueLearningData = {
  title: string;
  slug: string;
  completedLessons: number;
  totalLessons: number;
};

export default function ContinueLearning({ data }: { data: ContinueLearningData | null }) {
  const progress = data && data.totalLessons
    ? Math.round((data.completedLessons / data.totalLessons) * 100)
    : 0;

  return (
    <section className="border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Continue Learning
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            {data?.title ?? "No active module yet"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {data ? `${data.completedLessons} of ${data.totalLessons} lessons completed` : "Choose a module to begin learning."}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center border border-border bg-secondary">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
      </div>

      {data ? (
        <div className="mt-8">
          <div className="h-2 bg-secondary">
            <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
          <Link href={`/modules/${data.slug}`} className="mt-6 inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover">
            Continue Module
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <Link href="/modules" className="mt-8 inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover">
          Browse Modules
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </section>
  );
}
