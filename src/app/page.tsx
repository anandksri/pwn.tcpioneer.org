import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/home/Hero";
import EntryPoint from "@/sections/home/EntryPoint";
import ThePath from "@/sections/home/ThePath";
import WhyPwn from "@/sections/home/WhyPwn";
import TrainingGrounds from "@/sections/home/TrainingGrounds";
import Community from "@/sections/home/Community";
import FAQ from "@/sections/home/FAQ";
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
