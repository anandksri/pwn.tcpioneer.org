"use client";

import { useState, forwardRef } from "react";
import { Eye, EyeOff, Lock, LucideIcon } from "lucide-react";

type Props = {
  label: string;
  placeholder: string;
  error?: string;
  icon?: LucideIcon;
} & React.InputHTMLAttributes<HTMLInputElement>;

const PasswordField = forwardRef<HTMLInputElement, Props>(
  (
    {
      
      placeholder,
      error,
      icon: Icon = Lock,
      className,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2">


        <div className="relative group">

          {/* Lock Icon */}

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
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={`
              h-12
              w-full
              rounded-xl
              border
              border-zinc-800
              bg-zinc-900/80
              pl-12
              pr-12
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

          {/* Show / Hide */}

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              transition
              hover:text-white
            "
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>

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

PasswordField.displayName = "PasswordField";

export default PasswordField;