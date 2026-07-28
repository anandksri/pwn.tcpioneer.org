import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/modules/Hero";
import Categories from "@/sections/modules/Categories";
import ModuleGrid from "@/sections/modules/ModuleGrid";
import LearningPath from "@/sections/modules/LearningPath";

export default function ModulesPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <ModuleGrid />
        <LearningPath />

      </main>

      <Footer />
    </>
  );
}