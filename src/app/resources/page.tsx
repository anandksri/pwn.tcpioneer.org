"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/resources/Hero";
import Categories from "@/sections/resources/Categories";
import ResourceGrid from "@/sections/resources/ResourceGrid";

export default function ResourcesPage() {
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

        <ResourceGrid selectedCategory={selectedCategory} />
      </main>

      <Footer />
    </>
  );
}
