import Navbar from "@/components/Navbar";
import Hero from "@/sections/about/Hero";
import Mission from "@/sections/about/Mission";
import Footer from "@/components/Footer";
import AboutPWN from "@/sections/about/AboutPWN";
import Community from "@/sections/about/Community";
import PageWrapper from "@/components/PageWrapper";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Hero />
          <AboutPWN />
          <Community />
          <Mission />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
