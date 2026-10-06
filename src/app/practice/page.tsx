import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { listPublishedChallenges } from "@/lib/content";
import Hero from "@/sections/practice/Hero";
import PracticeExplorer from "@/sections/practice/PracticeExplorer";

export const dynamic = "force-dynamic";

export default async function PracticePage() {
  let challenges: Awaited<ReturnType<typeof listPublishedChallenges>> = [];
  let error = false;

  try {
    challenges = await listPublishedChallenges();
  } catch {
    error = true;
  }

  return (
    <>
      <Navbar />

      <PageWrapper>
        <main>
          <Hero />

          <PracticeExplorer challenges={challenges} error={error} />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
