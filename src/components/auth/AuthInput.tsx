"use client";

import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  placeholder: string;
  type?: string;
  icon: LucideIcon;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const AuthInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      placeholder,
      type = "text",
      icon: Icon,
      error,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">

        <div className="relative group">

          {/* Icon */}

          <Icon
            className="
              absolute
              left-4
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-zinc-500
              transition-colors
              duration-300
              group-focus-within:text-violet-400
            "
          />

          {/* Input */}

          <input
            ref={ref}
            type={type}
            placeholder={placeholder ?? label}
            className={`
              h-12
              w-full
              rounded-xl
              border
              border-zinc-800
              bg-zinc-900/80
              pl-12
              pr-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-4
              focus:ring-violet-500/10
              ${error ? "border-red-500" : ""}
              ${className ?? ""}
            `}
            {...props}
          />

        </div>

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;