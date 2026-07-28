import Container from "@/components/Container";
import LearningModuleCard from "@/components/ui/LearningModuleCard";
import { modules } from "@/data/modules";
export default function ModuleGrid() {
  return (
    <section className="bg-[#09090B] py-12">

      <Container>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {modules.map((module) => (

            <LearningModuleCard
              key={module.slug}
              {...module}
            />

          ))}

        </div>

      </Container>

    </section>
  );
}