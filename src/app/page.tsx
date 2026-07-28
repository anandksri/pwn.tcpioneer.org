import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import EntryPoint from "@/sections/EntryPoint";
import ThePath from "@/sections/ThePath";
import WhyPwn from "@/sections/WhyPwn";
import TrainingGrounds from "@/sections/TrainingGrounds";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <EntryPoint />
        <ThePath />
        <WhyPwn />
        <TrainingGrounds />
      </main>
    </>
  );
}