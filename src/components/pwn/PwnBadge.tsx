import { ReactNode } from "react";
import { Badge as PrimitiveBadge } from "@/components/ui/badge";

type BadgeProps = {
  children: ReactNode;
};

export default function PwnBadge({ children }: BadgeProps) {
  return (
    <PrimitiveBadge
      variant="outline"
      className="border-primary/30 bg-primary/10 px-3 py-1 text-primary"
    >
      {children}
    </PrimitiveBadge>
  );
}
