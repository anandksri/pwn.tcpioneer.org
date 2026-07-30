"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Mail, AtSign, Loader2 } from "lucide-react";

import AuthInput from "./AuthInput";
import PasswordField from "./PasswordField";
import SocialLogin from "./SocialLogin";

type Props = {
  onLogin: () => void;
  onSuccess: (email: string) => void;
};

export default function RegisterForm({ onLogin, onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [agreed, setAgreed] = useState(false);
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
    "bg-zinc-800",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-emerald-500",
    "bg-green-500",
  ][strength];

  const strengthText = [
    "",
    "Very Weak",
    "Weak",
    "Medium",
    "Strong",
    "Very Strong",
  ][strength];

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (!agreed) return;

        try {
          setLoading(true);
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              email,
              password,
              confirmPassword,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            alert(data.message);
            return;
          }

          onSuccess(email);
        } catch (err) {
          console.error(err);

          alert("Something went wrong.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] lg:gap-8">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          <AuthInput
            label=""
            icon={AtSign}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <AuthInput
            label=""
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordField
            label=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordField
            label=""
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={
              confirmPassword && password !== confirmPassword
                ? "Passwords do not match."
                : undefined
            }
          />

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Password Strength</span>

              <span className="text-xs text-zinc-400">{strengthText}</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className={`h-full transition-all duration-500 ${strengthColor}`}
                style={{
                  width: `${strength * 20}%`,
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !agreed || password !== confirmPassword}
            className={`w-full rounded-xl py-2.5 font-semibold transition-all duration-300 ${
              agreed && password === confirmPassword
                ? "bg-violet-600 text-white hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
                : "cursor-not-allowed bg-zinc-800 text-zinc-500"
            } `}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </div>{" "}
        {/* RIGHT COLUMN (Desktop Only) */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:border-l lg:border-white/10 lg:px-8">
          <SocialLogin />

          <label className="mt-8 flex items-start gap-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 accent-violet-600"
            />

            <span className="text-sm leading-6 text-zinc-400">
              I agree to the{" "}
              <Link
                href="https://tcpioneer.org/terms"
                target="_blank"
                className="font-medium text-violet-400 underline underline-offset-4 hover:text-violet-300"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="https://tcpioneer.org/privacy"
                target="_blank"
                className="font-medium text-violet-400 underline underline-offset-4 hover:text-violet-300"
              >
                Privacy Policy
              </Link>
            </span>
          </label>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-zinc-400">Already have an account?</p>

            <button
              type="button"
              onClick={onLogin}
              className="mt-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Only */}

      <div className="mt-6 space-y-5 lg:hidden">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 accent-violet-600"
          />

          <span className="text-sm leading-6 text-zinc-400">
            I agree to the{" "}
            <button
              type="button"
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Privacy Policy
            </button>
          </span>
        </label>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-800" />

          <span className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
            OR
          </span>

          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <SocialLogin />

        <p className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onLogin}
            className="font-semibold text-violet-400 hover:text-violet-300"
          >
            Login
          </button>
        </p>
      </div>
    </form>
  );
}
