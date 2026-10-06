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
          className="text-sm font-medium text-brand-soft transition hover:text-brand-soft"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-primary py-3 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-lg"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Divider */}

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-elevated" />

        <span className="text-xs tracking-[0.3em] text-subtle-foreground uppercase">
          OR
        </span>

        <div className="h-px flex-1 bg-elevated" />
      </div>

      <SocialLogin />

      <p className="pt-2 text-center text-sm text-secondary-foreground">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onRegister}
          className="font-semibold text-brand-soft transition hover:text-brand-soft"
        >
          Create Account
        </button>
      </p>
    </form>
  );
}
