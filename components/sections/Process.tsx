import { processSteps } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section className="py-24 bg-bgalt">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHeading
          eyebrow="How it works"
          title="Our verification process"
          description="Every assignment follows a structured, quality-controlled workflow from request through to final report."
        />
        <div className="border-l-2 border-line ml-2">
          {processSteps.map((step, i) => (
            <div key={step.title} className="relative pl-9 pb-10 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-[26px] h-[26px] rounded-full bg-navy text-white text-xs font-semibold flex items-center justify-center font-heading">
                {i + 1}
              </div>
              <h4 className="text-base mb-1">{step.title}</h4>
              <p className="text-sm text-[#5C6570] max-w-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
