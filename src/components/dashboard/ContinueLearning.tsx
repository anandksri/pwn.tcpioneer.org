import { ArrowRight, BookOpen } from "lucide-react";

export default function ContinueLearning() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">
            Continue Learning
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Linux Fundamentals
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Module 7 of 10
          </p>
        </div>

        <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-4">
          <BookOpen className="h-6 w-6 text-violet-400" />
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-zinc-400">
            Progress
          </span>

          <span className="font-medium text-white">
            72%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-[72%] rounded-full bg-violet-500 transition-all duration-500" />
        </div>
      </div>

      <button
        className="
          mt-8
          flex
          items-center
          gap-2
          rounded-xl
          bg-violet-600
          px-5
          py-3
          font-medium
          text-white
          transition
          hover:bg-violet-500
        "
      >
        Continue

        <ArrowRight className="h-5 w-5" />
      </button>
    </section>
  );
}