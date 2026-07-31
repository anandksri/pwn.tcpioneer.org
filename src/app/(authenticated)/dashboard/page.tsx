import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatsGrid from "@/components/dashboard/StatsGrid";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import QuickActions from "@/components/dashboard/QuickActions";
import CyberNews from "@/components/dashboard/CyberNews";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <StatsGrid />

      <div className="grid gap-8 xl:grid-cols-3">
        {/* Left */}
        <div className="space-y-8 xl:col-span-2">
          <ContinueLearning />

          <RecentActivity />
        </div>

        {/* Right */}
        <div className="space-y-8">
          <UpcomingEvents />

          <QuickActions />

          <CyberNews />
        </div>
      </div>
    </div>
  );
}