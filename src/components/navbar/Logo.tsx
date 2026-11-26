import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 select-none"
      aria-label="PWN TCPIONEER"
    >
      <div className="flex flex-col leading-none">
        <span className="text-lg font-black tracking-[0.10em] text-foreground sm:text-xl">
          PWN.
          <span className="text-primary">TCPIONEER</span>
        </span>
      </div>
    </Link>
  );
}
