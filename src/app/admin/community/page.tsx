import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import AdminCommunityModeration from "@/sections/admin/AdminCommunityModeration";

export default async function AdminCommunityPage() {
  const user = await getCurrentUser();
  if (!user || (user.role !== "ADMIN" && user.role !== "MODERATOR")) redirect("/");
  return <AdminCommunityModeration />;
}
