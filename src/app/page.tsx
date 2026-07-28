import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import EntryPoint from "@/sections/EntryPoint";
import ThePath from "@/sections/ThePath";
import WhyPwn from "@/sections/WhyPwn";
import TrainingGrounds from "@/sections/TrainingGrounds";
import Community from "@/sections/Community";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

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
        <Community />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}