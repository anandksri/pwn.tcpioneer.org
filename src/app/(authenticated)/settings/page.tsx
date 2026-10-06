import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";

import PasswordChangeForm from "@/components/settings/PasswordChangeForm";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">Account</p>
        <h1 className="mt-3 text-4xl font-bold text-foreground">Settings</h1>
        <p className="mt-3 max-w-2xl text-secondary-foreground">
          Manage your account security and review the status of your sign-in identity.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center border border-border bg-secondary">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Email address</h2>
              <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                {user.verified ? "Verified" : "Verification required"}
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center border border-border bg-secondary">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Session security</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Password changes invalidate all active sessions.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">Use a unique password of at least 8 characters.</p>
            </div>
          </div>
        </div>
      </section>

      <PasswordChangeForm />
    </div>
  );
}
