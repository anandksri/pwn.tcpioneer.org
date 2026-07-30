import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/getStarted/Hero";
import Goals from "@/sections/getStarted/Goals";
import LearningPath from "@/sections/getStarted/LearningPath";
import WhyPWN from "@/sections/getStarted/WhyPWN";
import PageWrapper from "@/components/PageWrapper";

export default function GetStartedPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Hero />
          <Goals />
          <LearningPath />
          <WhyPWN />
         
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
