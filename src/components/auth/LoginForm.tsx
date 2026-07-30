"use client";

// import Link from "next/link";
import { Mail } from "lucide-react";

import AuthInput from "./AuthInput";
import PasswordField from "./PasswordField";
import SocialLogin from "./SocialLogin";

type Props = {
  onRegister: () => void;
  onForgotPassword: () => void;
};

export default function LoginForm({ onRegister, onForgotPassword }: Props) {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();

        // TODO:
        // Login with Better Auth
      }}
    >
      <AuthInput
        label="Email or Username"
        placeholder="Enter your email or username"
        icon={Mail}
      />

      <PasswordField label="Password" placeholder="Enter your password" />

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
        className="
          w-full
          rounded-xl
          bg-violet-600
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-violet-500
          hover:shadow-lg
          hover:shadow-violet-500/20
        "
      >
        Login
      </button>

      {/* Divider */}

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
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
