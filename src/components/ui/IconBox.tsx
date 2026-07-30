import { ReactNode } from "react";

type IconBoxProps = {
  children: ReactNode;
  className?: string;
};

export default function IconBox({ children, className = "" }: IconBoxProps) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500/40 group-hover:bg-violet-500/15 ${className}`}
    >
      {children}
    </div>
  );
}
