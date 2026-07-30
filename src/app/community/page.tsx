import Hero from "@/sections/community/Hero";
import RecentActivity from "@/sections/community/RecentActivity";
import UpcomingEvents from "@/sections/community/UpcomingEvents";
import CommunityFeed from "@/sections/community/CommunityFeed";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Hero />
          <RecentActivity />
          <UpcomingEvents />
          <CommunityFeed />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
