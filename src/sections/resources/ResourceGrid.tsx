import Container from "@/components/Container";
import ResourceCard from "@/sections/resources/ResourceCard";

import { resources } from "@/data/resources";

type Props = {
  selectedCategory: string;
};

export default function ResourceGrid({ selectedCategory }: Props) {
  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter((resource) => resource.category === selectedCategory);

  return (
    <section className="bg-background py-16">
      <Container>
        {/* Heading */}

        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-brand-soft uppercase">
              Resource Library
            </span>

            <h2 className="mt-4 text-4xl font-bold text-foreground">
              Browse Resources
            </h2>
          </div>

          <span className="hidden text-sm text-subtle-foreground lg:block">
            {filteredResources.length} Resources
          </span>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              category={resource.category}
              type={resource.type}
              href={resource.href}
              icon={resource.icon}
              color={resource.color}
            />
          ))}
        </div>

        {/* Empty State */}

        {filteredResources.length === 0 && (
          <div className="rounded-lg border border-dashed border-border py-20 text-center">
            <h3 className="text-xl font-semibold text-foreground">
              No resources found
            </h3>

            <p className="mt-3 text-subtle-foreground">
              Try selecting another category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
