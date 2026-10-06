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
  ({ placeholder, error, icon: Icon = Lock, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2">
        <div className="group relative">
          {/* Lock Icon */}

          <Icon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-subtle-foreground transition-colors duration-300 group-focus-within:text-brand-soft" />

          {/* Input */}

          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={`h-12 w-full rounded-md border border-border bg-card/80 pr-12 pl-12 text-foreground transition-all duration-300 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 ${error ? "border-destructive" : ""} ${className ?? ""} `}
            {...props}
          />

          {/* Show / Hide */}

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-subtle-foreground transition hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;
