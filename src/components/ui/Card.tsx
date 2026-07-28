import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}