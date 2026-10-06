import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "border border-primary bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#7C3AED]"
          : "border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
      }
    >
      {children}
    </Link>
  );
}
