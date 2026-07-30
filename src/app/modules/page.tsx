"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/modules/Hero";
import Categories from "@/sections/modules/Categories";
import ModulesGrid from "@/sections/modules/ModuleGrid";
import PageWrapper from "@/components/PageWrapper";
export default function ModulesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Hero />

          <Categories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ModulesGrid selectedCategory={selectedCategory} />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
