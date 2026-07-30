import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";

export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold">Welcome {user.username} 🚀</h1>

      <p className="mt-4 text-gray-400">{user.email}</p>

      <p className="mt-2 text-gray-500">Role: {user.role}</p>
    </main>
  );
}
