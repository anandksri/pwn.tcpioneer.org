import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
      {children}
    </span>
  );
}