"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { faqs } from "@/data/faq";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your cybersecurity journey."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60"
              >
                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>

                  {open ? (
                    <Minus className="text-violet-400" />
                  ) : (
                    <Plus className="text-zinc-400" />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-6 leading-8 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}