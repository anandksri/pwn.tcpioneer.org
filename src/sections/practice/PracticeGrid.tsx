import Container from "@/components/Container";
import PracticeCard from "./PracticeCard";

import { practice } from "@/data/practice";

type Props = {
  selectedCategory: string;
};

export default function PracticeGrid({ selectedCategory }: Props) {
  const filteredPractice =
    selectedCategory === "All"
      ? practice
      : practice.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-background py-16">
      <Container>
        {/* Heading */}

        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
              Hands-on Labs
            </span>

            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Browse Practice
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-secondary-foreground">
              Build real-world cybersecurity skills through interactive labs,
              Capture The Flag challenges and guided practice environments
              covering web security, networking, Linux, Windows and more.
            </p>
          </div>

          <span className="hidden text-sm text-subtle-foreground lg:block">
            {filteredPractice.length} Labs
          </span>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredPractice.map((item) => (
            <PracticeCard
              key={item.id}
              title={item.title}
              description={item.description}
              slug={item.slug}
              duration={item.duration}
              challenges={item.challenges}
              difficulty={item.difficulty}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>

        {/* Empty State */}

        {filteredPractice.length === 0 && (
          <div className="mt-12 rounded-lg border border-dashed border-border py-20 text-center">
            <h3 className="text-xl font-semibold text-foreground">No labs found</h3>

            <p className="mt-3 text-subtle-foreground">
              Try selecting another category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
