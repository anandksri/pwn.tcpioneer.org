"use client";

import { useMemo, useState } from "react";

import Categories from "@/sections/practice/Categories";
import PracticeGrid, { type PublishedChallenge } from "@/sections/practice/PracticeGrid";

type PracticeExplorerProps = {
  challenges: PublishedChallenge[];
  error: boolean;
};

export default function PracticeExplorer({ challenges, error }: PracticeExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [search, setSearch] = useState("");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(challenges.map((challenge) => challenge.category)))],
    [challenges],
  );

  return (
    <>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        search={search}
        onCategoryChange={setSelectedCategory}
        onDifficultyChange={setSelectedDifficulty}
        onSearchChange={setSearch}
      />
      <PracticeGrid
        challenges={challenges}
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        search={search}
        error={error}
      />
    </>
  );
}
