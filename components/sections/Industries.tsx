import { industries } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHeading
          eyebrow="Who we serve"
          title="Industries we work with"
          description="Our verification solutions support hiring and compliance needs across a wide range of sectors."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.name} className="bg-bgalt rounded-lg py-6 px-4 text-center">
                <Icon className="text-navy mx-auto mb-2.5" size={22} />
                <span className="text-[13.5px] font-medium">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
