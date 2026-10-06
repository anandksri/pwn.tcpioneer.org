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
          title="Questions Before You Start?"
          description="Everything you need to know about learning paths, modules, certificates, labs and the TCPioneer community."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40 hover:bg-elevated"
              >
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs font-semibold text-primary">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-semibold text-foreground">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-md border transition-colors ${
                      open
                        ? "border-primary/30 bg-primary/10"
                        : "border-border bg-secondary"
                    }`}
                  >
                    {open ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Answer */}

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-7 py-6">
                      <p className="leading-8 text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10 text-center">
          <p className="text-lg font-medium text-foreground">
            Still have questions?
          </p>

          <p className="mt-3 text-muted-foreground">
            Join our Discord community and get help from mentors and fellow
            learners.
          </p>
        </div>
      </Container>
    </section>
  );
}
