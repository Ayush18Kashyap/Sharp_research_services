import { services } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHeading
          eyebrow="Our services"
          title="Background verification & field investigation"
          description="A comprehensive suite of verification services, each conducted with a strong focus on accuracy, confidentiality, and timely execution."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="border border-line rounded-lg p-6 transition-all hover:border-gold hover:-translate-y-1"
              >
                <Icon className="text-navy mb-3.5" size={22} />
                <h4 className="text-[15px] mb-1.5">{s.title}</h4>
                <p className="text-[13px] text-[#5C6570]">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
