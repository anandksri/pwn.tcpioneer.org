"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/practice/Hero";
import Categories from "@/sections/practice/Categories";
import PracticeGrid from "@/sections/practice/PracticeGrid";

export default function PracticePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <PracticeGrid
          selectedCategory={selectedCategory}
        />
      </main>

      <Footer />
    </>
  );
}