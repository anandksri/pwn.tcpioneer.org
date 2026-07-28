import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import EntryPoint from "@/sections/EntryPoint";
import LearningJourney from "@/sections/LearningJourney";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <EntryPoint />
        <LearningJourney />
      </main>
    </>
  );
}