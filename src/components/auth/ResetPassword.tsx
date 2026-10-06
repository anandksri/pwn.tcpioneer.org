"use client";

import { useMemo, useState } from "react";

import PasswordField from "./PasswordField";

type Props = {
  email: string;
  otp: string;
  onSuccess: () => void;
};

export default function ResetPassword({ email, otp, onSuccess }: Props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const strength = useMemo(() => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  }, [password]);

  const strengthColor = [
    "bg-elevated",
    "bg-destructive",
    "bg-warning",
    "bg-info",
    "bg-emerald-500",
    "bg-success",
  ][strength];

  const strengthText = [
    "",
    "Very Weak",
    "Weak",
    "Medium",
    "Strong",
    "Very Strong",
  ][strength];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);
      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Internal server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <PasswordField
        label="New Password"
        placeholder="Create a new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Password Strength */}

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-subtle-foreground">Password Strength</span>

          <span className="text-xs font-medium text-secondary-foreground">
            {strengthText}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-elevated">
          <div
            className={`h-full transition-all duration-500 ${strengthColor}`}
            style={{
              width: `${strength * 20}%`,
            }}
          />
        </div>
      </div>

      <PasswordField
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={
          confirmPassword && password !== confirmPassword
            ? "Passwords do not match."
            : undefined
        }
      />

      <button
        type="submit"
        disabled={
          loading || password !== confirmPassword || password.length < 8
        }
        className="w-full rounded-md bg-primary py-3 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-lg disabled:cursor-not-allowed disabled:bg-elevated disabled:text-subtle-foreground"
      >
        {loading ? "Updating..." : "Update Password"}
      </button>
    </form>
  );
}
