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
        <div className="group relative">
          {/* Icon */}

          <Icon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-subtle-foreground transition-colors duration-300 group-focus-within:text-brand-soft" />

          {/* Input */}

          <input
            ref={ref}
            type={type}
            placeholder={placeholder ?? label}
            className={`h-12 w-full rounded-md border border-border bg-card/80 pr-4 pl-12 text-foreground transition-all duration-300 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 ${error ? "border-destructive" : ""} ${className ?? ""} `}
            {...props}
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
