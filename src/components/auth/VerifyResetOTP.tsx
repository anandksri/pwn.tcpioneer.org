"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

import OTPInput from "./OTPInput";

type Props = {
  email: string;
  onSuccess: (otp: string) => void;
  onBack: () => void;
};

export default function VerifyResetOTP({
  email,
  onSuccess,
  onBack,
}: Props) {
  const [seconds, setSeconds] = useState(60);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const handleVerify = async (code: string) => {
    if (loading) return;

    try {
      setLoading(true);

      const res = await fetch("/api/auth/verify-reset-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp: code,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      setVerified(true);

      setTimeout(() => {
        onSuccess(code);
      }, 800);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    try {
      const res = await fetch("/api/auth/resend-reset-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);

      setSeconds(60);
    } catch (error) {
      console.error(error);
      alert("Unable to resend reset code.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
          {verified ? (
            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
          ) : (
            <Mail className="h-8 w-8 text-violet-400" />
          )}
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white">
          {verified ? "Verified!" : "Verify Reset Code"}
        </h2>

        <p className="mt-3 text-zinc-400">
          {verified
            ? "Reset code verified successfully."
            : "We've sent a 6-digit reset code to"}
        </p>

        {!verified && (
          <p className="mt-2 font-medium text-white">
            {email}
          </p>
        )}
      </div>

      {!verified && (
        <OTPInput onComplete={handleVerify} />
      )}

      {loading && (
        <p className="text-center text-sm text-violet-400">
          Verifying...
        </p>
      )}

      {!verified && (
        <div className="flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={onBack}
            className="text-zinc-400 transition hover:text-white"
          >
            Change Email
          </button>

          {seconds > 0 ? (
            <span className="text-zinc-500">
              Resend in {seconds}s
            </span>
          ) : (
            <button
              type="button"
              onClick={resendCode}
              className="font-medium text-violet-400 transition hover:text-violet-300"
            >
              Resend Code
            </button>
          )}
        </div>
      )}
    </div>
  );
}