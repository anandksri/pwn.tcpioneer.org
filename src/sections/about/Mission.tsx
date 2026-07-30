import Container from "@/components/Container";
import FeatureCard from "@/components/ui/FeatureCard";

import {
  BookOpen,
  FlaskConical,
  Rocket,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-[#09090B] py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            OUR MISSION
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">
            Learn. Practice.
            <br />
            Grow. Contribute.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            Our mission is to empower every learner with the knowledge,
            practical skills and community support needed to thrive in the
            ever-evolving world of cybersecurity.
          </p>
        </div>

        {/* Journey */}

        <div className="relative mt-20">
          {/* Cards */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
              {/* Learn */}

              <FeatureCard
                title="Learn"
                description="Build a strong cybersecurity foundation through structured learning paths."
                icon={BookOpen}
                color="violet"
              />

              <div className="hidden items-center justify-center xl:flex">
                <ArrowRight className="h-8 w-8 text-violet-500/60" />
              </div>

              {/* Practice */}

              <FeatureCard
                title="Practice"
                description="Apply concepts through labs, practical exercises and security challenges."
                icon={FlaskConical}
                color="emerald"
              />

              <div className="hidden items-center justify-center xl:flex">
                <ArrowRight className="h-8 w-8 text-emerald-500/60" />
              </div>

              {/* Grow */}

              <FeatureCard
                title="Grow"
                description="Advance with mentorship, collaboration and continuous learning."
                icon={Rocket}
                color="sky"
              />

              <div className="hidden items-center justify-center xl:flex">
                <ArrowRight className="h-8 w-8 text-sky-500/60" />
              </div>

              {/* Contribute */}

              <FeatureCard
                title="Contribute"
                description="Share knowledge, build open-source tools and strengthen the community."
                icon={Globe}
                color="orange"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
