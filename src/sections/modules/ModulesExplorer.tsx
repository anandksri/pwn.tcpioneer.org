"use client";

import { useMemo, useState } from "react";

import Categories from "@/sections/modules/Categories";
import ModulesGrid, { type PublishedModule } from "@/sections/modules/ModuleGrid";

type ModulesExplorerProps = {
  modules: PublishedModule[];
  error: boolean;
};

export default function ModulesExplorer({ modules, error }: ModulesExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(modules.map((module) => module.category)))],
    [modules],
  );

  return (
    <>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ModulesGrid
        modules={modules}
        selectedCategory={selectedCategory}
        error={error}
      />
    </>
  );
}
