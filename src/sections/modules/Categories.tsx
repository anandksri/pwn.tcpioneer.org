import Container from "@/components/Container";

const categories = [
  "All",
  "Linux",
  "Networking",
  "Web",
  "Windows",
  "Active Directory",
  "Cloud",
  "Mobile",
  "Forensics",
  "OSINT",
  "Cryptography",
];

type CategoriesProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function Categories({
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <section className="bg-[#09090B] py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "border-violet-500 bg-violet-600 text-white shadow-[0_0_25px_rgba(139,92,246,.25)]"
                  : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
