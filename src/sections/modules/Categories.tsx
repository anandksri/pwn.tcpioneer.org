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
    <section className="bg-background py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`cursor-pointer rounded-md border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "border-primary bg-primary text-foreground "
                  : "border-border bg-background text-secondary-foreground hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-foreground"
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
