import Container from "@/components/Container";
import ResourceCard from "@/sections/resources/ResourceCard";

import { resources } from "@/data/resources";

type Props = {
  selectedCategory: string;
};

export default function ResourceGrid({
  selectedCategory,
}: Props) {
  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter(
          (resource) => resource.category === selectedCategory
        );

  return (
    <section className="bg-[#09090B] py-16">
      <Container>
        {/* Heading */}

        <div className="mb-12 flex items-end justify-between ">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Resource Library
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Browse Resources
            </h2>
          </div>

          <span className="hidden text-sm text-zinc-500 lg:block">
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
          <div className="rounded-2xl border border-dashed border-zinc-800 py-20 text-center">
            <h3 className="text-xl font-semibold text-white">
              No resources found
            </h3>

            <p className="mt-3 text-zinc-500">
              Try selecting another category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}