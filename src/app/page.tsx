import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import EntryPoint from "@/sections/EntryPoint";
import ThePath from "@/sections/ThePath";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <EntryPoint />
        <ThePath />
      </main>
    </>
  );
}