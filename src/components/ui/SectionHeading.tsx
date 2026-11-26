type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl leading-tight font-bold text-foreground md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}
