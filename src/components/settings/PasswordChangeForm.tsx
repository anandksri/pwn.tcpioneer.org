"use client";

import { FormEvent, useState } from "react";

export default function PasswordChangeForm() {
  const [values, setValues] = useState({ currentPassword: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/account/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };
      setMessage(result.message ?? "Unable to change password.");
      setSuccess(Boolean(result.success));

      if (result.success) {
        setValues({ currentPassword: "", password: "", confirmPassword: "" });
        window.setTimeout(() => {
          window.location.href = "/";
        }, 800);
      }
    } catch {
      setMessage("Unable to change password. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">Security</p>
        <h2 className="mt-2 text-xl font-semibold text-foreground">Change password</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Changing your password signs out all active sessions.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          ["currentPassword", "Current password"],
          ["password", "New password"],
          ["confirmPassword", "Confirm new password"],
        ].map(([name, label]) => (
          <label key={name} className="text-sm text-muted-foreground">
            {label}
            <input
              required
              type="password"
              autoComplete={name === "currentPassword" ? "current-password" : "new-password"}
              value={values[name as keyof typeof values]}
              onChange={(event) => setValues({ ...values, [name]: event.target.value })}
              className="mt-2 h-11 w-full border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-sm ${success ? "text-emerald-400" : "text-muted-foreground"}`}>
          {message}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="h-11 border border-primary bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? "Updating…" : "Update password"}
        </button>
      </div>
    </form>
  );
}
