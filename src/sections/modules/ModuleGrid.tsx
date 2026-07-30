import Container from "@/components/Container";
import ModuleCard from "@/sections/modules/ModuleCard";
import { modules } from "@/data/modules";

type Props = {
  selectedCategory: string;
};

export default function ModuleGrid({
  selectedCategory,
}: Props) {
  const filteredModules =
    selectedCategory === "All"
      ? modules
      : modules.filter(
          (module) => module.category === selectedCategory
        );

  return (
    <section className="bg-[#09090B] py-16">
      <Container>
        {/* Heading */}

        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Learning Paths
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Browse Modules
            </h2>

          </div>

          <span className="hidden text-sm text-zinc-500 lg:block">
            {filteredModules.length} Modules
          </span>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
  {filteredModules.map((module) => (
    <ModuleCard
      key={module.id}
      title={module.title}
      description={module.description}
      slug={module.slug}
      lessons={module.lessons}
      duration={module.duration}
      difficulty={module.difficulty}
      icon={module.icon}
      color={module.color}
    />
  ))}
</div>
      </Container>
    </section>
  );
}