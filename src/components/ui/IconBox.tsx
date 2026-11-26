import { ReactNode } from "react";

type IconBoxProps = {
  children: ReactNode;
  className?: string;
};

export default function IconBox({ children, className = "" }: IconBoxProps) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/15 ${className}`}
    >
      {children}
    </div>
  );
}
