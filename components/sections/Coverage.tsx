import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { label: "States covered", value: "5" },
  { label: "Coverage type", value: "Urban, semi-urban & rural" },
  { label: "Years operating", value: "13+" },
  { label: "Network status", value: "Expanding PAN India" },
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-24 bg-bgalt">
      <div className="max-w-wrap mx-auto px-7 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block text-gold font-semibold text-sm mb-2.5">Coverage</span>
          <h2 className="text-[32px] mb-3.5">Currently serving five states — and expanding.</h2>
          <p className="text-[#5C6570] max-w-md">
            Our field network conducts verification assignments in urban,
            semi-urban, and rural locations across every region we cover, with no
            location left out.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {siteConfig.states.map((state) => (
              <span
                key={state}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-white text-[13.5px] font-medium"
              >
                <MapPin size={12} className="text-gold-light" /> {state}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#5C6570] mt-5">
            We&apos;re continuously expanding our service network across India — get
            in touch if your requirement falls outside these regions.
          </p>
        </div>

        <div className="bg-navy-deep rounded-lg p-8 text-white">
          <h4 className="text-white text-[17px] mb-3.5">Field network snapshot</h4>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex justify-between py-3 text-sm ${i !== stats.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <span>{s.label}</span>
              <span className="text-gold-light font-semibold font-heading">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
