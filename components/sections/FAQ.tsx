"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bgalt">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHeading eyebrow="FAQs" title="Common questions" />
        <div className="max-w-2xl">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between gap-5 py-5 w-full text-left font-heading font-medium text-[15.5px] text-navy-deep"
                >
                  {faq.question}
                  <Plus
                    size={18}
                    className={`text-gold shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="text-[14.5px] text-[#5C6570] pb-5 max-w-xl">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
