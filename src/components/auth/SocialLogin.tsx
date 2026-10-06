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
rounded-md
border
border-border/50
bg-card/70
px-5
text-sm
font-medium
text-secondary-foreground
whitespace-nowrap
transition-all
duration-300
hover:border-primary/50
hover:bg-elevated
hover:shadow-lg
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
