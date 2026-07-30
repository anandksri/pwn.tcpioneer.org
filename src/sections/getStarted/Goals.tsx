import Container from "@/components/Container";

import CareerCard from "./CareerCard";

import { careerPaths } from "@/data/careerPaths";

export default function Goals() {
  return (
    <section className="bg-[#09090B] lg:py-6">
      <Container>
        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {careerPaths.map((career) => (
            <CareerCard key={career.slug} {...career} />
          ))}
        </div>
      </Container>
    </section>
  );
}
