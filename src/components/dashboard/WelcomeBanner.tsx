"use client";

import { ArrowRight, Flame, Target } from "lucide-react";

export default function WelcomeBanner() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <section
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-violet-500/30
      "
    >
      <div className="flex items-center justify-between gap-10">
        {/* Left */}

        <div className="space-y-6">

          <div>

            <p className="text-sm font-medium text-violet-400">
              {greeting}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-white">
              Welcome back, Anand 👋
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Continue your cybersecurity journey by completing
              modules, solving labs and participating in CTF
              challenges.
            </p>

          </div>

          <div className="flex items-center gap-10">

            <div className="flex items-center gap-3">

              <div
                className="
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-3
                "
              >
                <Flame className="h-5 w-5 text-orange-400" />
              </div>

              <div>

                <p className="text-xl font-bold text-white">
                  7
                </p>

                <p className="text-sm text-zinc-500">
                  Day Streak
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-3
                "
              >
                <Target className="h-5 w-5 text-violet-400" />
              </div>

              <div>

                <p className="text-xl font-bold text-white">
                  82%
                </p>

                <p className="text-sm text-zinc-500">
                  Weekly Goal
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <button
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-violet-600
            px-6
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-violet-500
            hover:shadow-lg
            hover:shadow-violet-500/20
          "
        >
          Continue Learning

          <ArrowRight className="h-5 w-5" />
        </button>

      </div>
    </section>
  );
}