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
      <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-soft uppercase">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl leading-tight font-bold text-foreground md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}
