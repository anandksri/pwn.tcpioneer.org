"use client";

import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";

import AuthInput from "./AuthInput";

type Props = {
  onBack: () => void;
  onSuccess: (email: string) => void;
};

export default function ForgotPassword({
  onBack,
  onSuccess,
}: Props) {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      // TODO:
      // Send OTP using Better Auth / API

      onSuccess(email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <AuthInput
        label="Email Address"
        placeholder="john@example.com"
        type="email"
        icon={Mail}
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button
        type="submit"
        disabled={loading}
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
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading
          ? "Sending..."
          : "Send Verification Code"}
      </button>

      <button
        type="button"
        onClick={onBack}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          text-sm
          font-medium
          text-zinc-400
          transition
          hover:text-white
        "
      >
        <ArrowLeft className="h-4 w-4" />

        Back to Login

      </button>
    </form>
  );
}