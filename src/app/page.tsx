import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import LearningJourney from "@/sections/LearningJourney";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LearningJourney />
      </main>
    </>
  );
}