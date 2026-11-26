import Container from "@/components/Container";
import { getCategoryTheme } from "@/lib/category-theme";

type CategoriesProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function Categories({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <section className="bg-background py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const theme = getCategoryTheme(category);
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`cursor-pointer rounded-md border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? `${theme.solid} ${theme.border}`
                    : `border-border bg-card text-secondary-foreground hover:-translate-y-0.5 ${theme.hover} ${theme.text}`
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
