"use client";

import {
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  length?: number;
  onComplete: (code: string) => void;
};

export default function OTPInput({
  length = 6,
  onComplete,
}: Props) {
  const [otp, setOtp] = useState(
    Array(length).fill("")
  );

  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (otp.every((d) => d !== "")) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

  const handleChange = (
    value: string,
    index: number
  ) => {
    if (!/^\d?$/.test(value)) return;

    const copy = [...otp];
    copy[index] = value;

    setOtp(copy);

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    const values = pasted.split("");

    while (values.length < length) {
      values.push("");
    }

    setOtp(values);

    inputs.current[
      Math.min(pasted.length - 1, length - 1)
    ]?.focus();
  };

  return (
    <div className="flex justify-center gap-3">

      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputs.current[index] = el;
          }}
          value={digit}
          maxLength={1}
          onPaste={handlePaste}
          onChange={(e) =>
            handleChange(e.target.value, index)
          }
          onKeyDown={(e) =>
            handleKeyDown(e, index)
          }
          className="
            h-12
            w-12
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/80
            text-center
            text-xl
            font-bold
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-500/10
          "
        />
      ))}

    </div>
  );
}