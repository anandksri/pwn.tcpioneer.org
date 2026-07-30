"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

import OTPInput from "./OTPInput";

type Props = {
  email: string;
  title?: string;
  description?: string;
  onVerify: (code: string) => Promise<boolean>;
  onBack?: () => void;
  onResend?: () => Promise<void> | void;
};

export default function VerifyOTP({
  email,
  title = "Verify Your Email",
  description = "We've sent a 6-digit verification code to",
  onVerify,
  onBack,
  onResend,
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

  const handleComplete = async (code: string) => {
    try {
      setLoading(true);

      const verified = await onVerify(code);

      if (!verified) return;

      setVerified(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
          {verified ? (
            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
          ) : (
            <Mail className="h-8 w-8 text-violet-400" />
          )}
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white">
          {verified ? "Verified!" : title}
        </h2>

        <p className="mt-3 text-zinc-400">
          {verified
            ? "Your email has been verified successfully."
            : description}
        </p>

        {!verified && <p className="mt-2 font-medium text-white">{email}</p>}
      </div>

      {/* OTP */}

      {!verified && <OTPInput onComplete={handleComplete} />}

      {/* Loading */}

      {loading && (
        <p className="text-center text-sm text-violet-400">Verifying...</p>
      )}

      {/* Footer */}

      {!verified && (
        <div className="flex items-center justify-between text-sm">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="text-zinc-400 transition hover:text-white"
            >
              Change Email
            </button>
          ) : (
            <div />
          )}

          {seconds > 0 ? (
            <span className="text-zinc-500">Resend in {seconds}s</span>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSeconds(60);
                onResend?.();
              }}
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
