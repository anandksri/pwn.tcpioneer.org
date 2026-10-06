import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 select-none"
      aria-label="PWN TCPIONEER"
    >
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-[0.12em] text-foreground">
          PWN.
          <span className="text-primary">TCPIONEER</span>
        </span>
      </div>
    </Link>
  );
}
