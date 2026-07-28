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
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-zinc-900"
              >

             <button
  onClick={() => setActive(open ? null : index)}
  className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left"
>

  <div className="flex items-center gap-5">

    <span className="text-sm font-semibold text-violet-400">
      {(index + 1).toString().padStart(2, "0")}
    </span>

    <h3 className="text-base font-semibold text-white">
      {faq.question}
    </h3>

  </div>

  <div
    className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
      open
        ? "border-violet-500/30 bg-violet-500/10"
        : "border-zinc-700 bg-zinc-900"
    }`}
  >
    {open ? (
      <Minus className="h-4 w-4 text-violet-400" />
    ) : (
      <Plus className="h-4 w-4 text-zinc-400" />
    )}
  </div>

</button>

                {/* Answer */}

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-zinc-800 px-7 py-6">

                      <p className="leading-8 text-zinc-400">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-16 max-w-3xl border-t border-zinc-800 pt-10 text-center">

          <p className="text-lg font-medium text-white">
            Still have questions?
          </p>

          <p className="mt-3 text-zinc-500">
            Join our Discord community and get help from mentors and fellow learners.
          </p>

          

        </div>

      </Container>
    </section>
  );
}