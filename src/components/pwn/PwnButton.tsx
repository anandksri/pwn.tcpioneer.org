import Link from "next/link";
import { Button as PrimitiveButton } from "@/components/ui/button";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function PwnButton({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <PrimitiveButton
      render={<Link href={href} />}
      variant={variant === "primary" ? "default" : "outline"}
      size="lg"
      className="px-7 py-3 text-sm"
    >
      {children}
    </PrimitiveButton>
  );
}
