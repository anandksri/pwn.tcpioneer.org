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
      <span className="text-sm font-medium tracking-[0.2em] text-violet-400 uppercase">
        {badge}
      </span>

      <h2 className="mt-4 text-5xl leading-tight font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">{description}</p>
    </div>
  );
}
