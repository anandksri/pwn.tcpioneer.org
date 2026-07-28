import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import EntryPoint from "@/sections/EntryPoint";
import ThePath from "@/sections/ThePath";
import WhyPwn from "@/sections/WhyPwn";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <EntryPoint />
        <ThePath />
        <WhyPwn />
      </main>
    </>
  );
}