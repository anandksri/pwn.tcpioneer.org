import Hero from "@/sections/community/Hero";
import RecentActivity from "@/sections/community/RecentActivity";
import UpcomingEvents from "@/sections/community/UpcomingEvents";
import CommunityFeed from "@/sections/community/CommunityFeed";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  return (
    <>
    <Navbar />
   < main>
      <Hero />
      <RecentActivity />
      <UpcomingEvents />
      <CommunityFeed />
     <Footer />
    </main>
    </>
  );
}