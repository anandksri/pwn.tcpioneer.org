import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero/Hero";
import EntryPoint from "@/sections/Hero/EntryPoint";
import ThePath from "@/sections/Hero/ThePath";
import WhyPwn from "@/sections/Hero/WhyPwn";
import TrainingGrounds from "@/sections/Hero/TrainingGrounds";
import Community from "@/sections/Hero/Community";
import FAQ from "@/sections/Hero/FAQ";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Hero />
          <EntryPoint />
          <ThePath />
          <WhyPwn />
          <TrainingGrounds />
          <Community />
          <FAQ />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
