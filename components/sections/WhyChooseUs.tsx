import { whyChooseUs } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-bgalt">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHeading
          eyebrow={`Why ${siteConfig.name}`}
          title="What clients rely on us for"
          description="More than a decade of industry experience, backed by a dedicated operations team and an extensive field verification network."
        />
        <div className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white p-6 flex gap-4 items-start">
                <Icon className="text-gold mt-1 shrink-0" size={18} />
                <div>
                  <h4 className="text-[15.5px] mb-1">{item.title}</h4>
                  <p className="text-[13.5px] text-[#5C6570]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
