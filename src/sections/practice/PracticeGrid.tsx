"use client";

import { useMemo } from "react";

import Container from "@/components/Container";
import PracticeCard from "./PracticeCard";

export type PublishedChallenge = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  points: number;
  moduleId: string | null;
};

type Props = {
  challenges: PublishedChallenge[];
  selectedCategory: string;
  selectedDifficulty: string;
  search: string;
  error: boolean;
};

export default function PracticeGrid({
  challenges,
  selectedCategory,
  selectedDifficulty,
  search,
  error,
}: Props) {
  const filteredChallenges = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return challenges.filter((challenge) => {
      const matchesCategory =
        selectedCategory === "All" || challenge.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" || challenge.difficulty === selectedDifficulty;
      const matchesSearch =
        !normalizedSearch ||
        `${challenge.title} ${challenge.description} ${challenge.category}`
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [challenges, search, selectedCategory, selectedDifficulty]);

  return (
    <section className="bg-background py-16">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
              Hands-on Challenges
            </span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">Browse Practice</h2>
            <p className="mt-4 max-w-2xl leading-8 text-secondary-foreground">
              Solve published challenges and build practical cybersecurity skills through focused,
              measurable exercises.
            </p>
          </div>
          <span className="hidden text-sm text-subtle-foreground lg:block">
            {filteredChallenges.length} Challenges
          </span>
        </div>

        {error ? (
          <div className="border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">
            Challenges are temporarily unavailable. Please try again later.
          </div>
        ) : filteredChallenges.length === 0 ? (
          <div className="border border-dashed border-border bg-card p-12 text-center">
            <h3 className="text-xl font-semibold text-foreground">No challenges found</h3>
            <p className="mt-3 text-muted-foreground">
              Try a different search term or filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredChallenges.map((challenge) => (
              <PracticeCard key={challenge.id} {...challenge} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
