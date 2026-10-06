"use client";

import { Search } from "lucide-react";

import Container from "@/components/Container";

type CategoriesProps = {
  categories: string[];
  selectedCategory: string;
  selectedDifficulty: string;
  search: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  onSearchChange: (search: string) => void;
};

const difficulties = ["All", "BEGINNER", "INTERMEDIATE", "ADVANCED"];

function label(value: string) {
  return value === "All" ? value : value.charAt(0) + value.slice(1).toLowerCase();
}

export default function Categories({
  categories,
  selectedCategory,
  selectedDifficulty,
  search,
  onCategoryChange,
  onDifficultyChange,
  onSearchChange,
}: CategoriesProps) {
  return (
    <section className="border-y border-border bg-background py-6">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`cursor-pointer rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "border-primary bg-primary text-foreground"
                    : "border-border bg-background text-secondary-foreground hover:border-primary hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative block sm:min-w-64">
              <span className="sr-only">Search challenges</span>
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search challenges"
                className="h-10 w-full border border-border bg-card pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </label>

            <label>
              <span className="sr-only">Filter by difficulty</span>
              <select
                value={selectedDifficulty}
                onChange={(event) => onDifficultyChange(event.target.value)}
                className="h-10 w-full border border-border bg-card px-3 text-sm text-foreground outline-none focus:border-primary sm:w-44"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {label(difficulty)} difficulty
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </Container>
    </section>
  );
}
