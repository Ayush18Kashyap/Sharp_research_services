import { Check } from "lucide-react";
import { bgvPoints } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyBGVMatters() {
  return (
    <section className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHeading
          eyebrow="Why it matters"
          title="Why background verification matters"
          description="Hiring the right people is essential to building a secure, productive and trustworthy workforce."
        />
        <div className="grid sm:grid-cols-2 gap-x-10">
          {bgvPoints.map((point, i) => (
            <div
              key={point}
              className={`flex gap-3 items-start py-3.5 ${i !== bgvPoints.length - 1 ? "border-b border-line" : ""}`}
            >
              <Check className="text-gold mt-1 shrink-0" size={16} />
              <p className="text-[14.5px]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
