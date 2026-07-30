"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/resources/Hero";
import Categories from "@/sections/resources/Categories";
import ResourceGrid from "@/sections/resources/ResourceGrid";
import PageWrapper from "@/components/PageWrapper";

export default function ResourcesPage() {
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

          <ResourceGrid selectedCategory={selectedCategory} />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
