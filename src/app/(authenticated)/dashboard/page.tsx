import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatsGrid from "@/components/dashboard/StatsGrid";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import QuickActions from "@/components/dashboard/QuickActions";
import CyberNews from "@/components/dashboard/CyberNews";
import { getCurrentUser } from "@/lib/auth";
import { getDashboardData } from "@/lib/dashboard";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const data = user ? await getDashboardData(user.id) : null;

  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <StatsGrid data={data?.stats ?? null} />

      <div className="grid gap-8 xl:grid-cols-3">
        {/* Left */}
        <div className="space-y-8 xl:col-span-2">
          <ContinueLearning data={data?.continueLearning ?? null} />

          <RecentActivity activities={data?.activities ?? []} />
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
