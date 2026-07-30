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
          ? "rounded-xl bg-violet-600 px-7 py-3 font-medium text-white transition hover:bg-violet-500"
          : "rounded-xl border border-white/10 px-7 py-3 font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white"
      }
    >
      {children}
    </Link>
  );
}
