import Hero from "@/sections/community/Hero";
import UpcomingEvents from "@/sections/community/UpcomingEvents";
import CommunityFeed from "@/sections/community/CommunityFeed";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export const dynamic = "force-dynamic";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Hero />
          <UpcomingEvents />
          <CommunityFeed />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
