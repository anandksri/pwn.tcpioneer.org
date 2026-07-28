import Navbar from "@/components/Navbar";

import Hero from "@/sections/about/Hero";
import WhoWeAre from "@/sections/about/WhoWeAre";
import Mission from "@/sections/about/Mission";
import CTA from "@/sections/about/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhoWeAre />
        <Mission />
        <CTA />
        <Footer />
      </main>
    </>
  );
}