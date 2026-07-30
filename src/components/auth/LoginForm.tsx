"use client";

// import Link from "next/link";
import { Mail } from "lucide-react";
import { useState } from "react";
import AuthInput from "./AuthInput";
import PasswordField from "./PasswordField";
import SocialLogin from "./SocialLogin";

type Props = {
  onRegister: () => void;
  onForgotPassword: () => void;
};

export default function LoginForm({ onRegister, onForgotPassword }: Props) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <form
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          setLoading(true);

          const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifier,
              password,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            alert(data.message);
            return;
          }

          alert(data.message);

          window.location.reload();
        } catch {
          alert("Something went wrong.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <AuthInput
        label="Email or Username"
        placeholder="Enter your email or username"
        icon={Mail}
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />

      <PasswordField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Divider */}

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />

        <span className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
          OR
        </span>

        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <SocialLogin />

      <p className="pt-2 text-center text-sm text-zinc-400">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onRegister}
          className="font-semibold text-violet-400 transition hover:text-violet-300"
        >
          Create Account
        </button>
      </p>
    </form>
  );
}
