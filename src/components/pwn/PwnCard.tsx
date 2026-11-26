import { ReactNode } from "react";
import { Card as PrimitiveCard } from "@/components/ui/card";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function PwnCard({ children, className = "" }: CardProps) {
  return (
    <PrimitiveCard
      className={`border border-border bg-card p-6 ring-0 transition-colors hover:border-primary/40 hover:bg-elevated ${className}`}
    >
      {children}
    </PrimitiveCard>
  );
}
