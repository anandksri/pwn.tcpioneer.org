"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  const [loading, setLoading] = useState<"google" | "github" | null>(null);

  const handleLogin = async (provider: "google" | "github") => {
    setLoading(provider);

    window.location.href = `/api/auth/${provider}`;
  };

  const buttonClass = `
group
flex
h-12
w-full
items-center
justify-center
gap-3
rounded-xl
border
border-white/10
bg-zinc-900/70
px-5
text-sm
font-medium
text-zinc-200
whitespace-nowrap
transition-all
duration-300
hover:border-violet-500/50
hover:bg-zinc-800
hover:shadow-lg
hover:shadow-violet-500/10
disabled:cursor-not-allowed
disabled:opacity-50
`;

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Google */}

      <button
        type="button"
        disabled={loading !== null}
        onClick={() => handleLogin("google")}
        className={buttonClass}
      >
        <FcGoogle className="h-5 w-5 shrink-0" />

        <span className="whitespace-nowrap">
          {loading === "google" ? "Connecting..." : "Continue with Google"}
        </span>
      </button>

      <button
        type="button"
        disabled={loading !== null}
        onClick={() => handleLogin("github")}
        className={buttonClass}
      >
        <FaGithub className="h-5 w-5 shrink-0" />

        <span className="whitespace-nowrap">
          {loading === "github" ? "Connecting..." : "Continue with GitHub"}
        </span>
      </button>
    </div>
  );
}
