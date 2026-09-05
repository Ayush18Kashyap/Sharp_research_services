import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const badges = ["Established 2012", "Lucknow, India", "5 states & growing"];
const stats = [
  { value: "13+", label: "Years in verification" },
  { value: "15", label: "Verification services" },
  { value: "11", label: "Industries served" },
];
const statusRows: [string, string][] = [
  ["Address verification", "Complete"],
  ["Employment history", "Complete"],
  ["Education records", "Complete"],
  ["Reference check", "In review"],
];

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-navy-deep to-navy pt-[172px] pb-24 text-white">
      <div className="max-w-wrap mx-auto px-7 grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
        <div>
          <div className="flex flex-wrap gap-2.5 mb-5">
            {badges.map((b) => (
              <span key={b} className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/25 text-white/85">
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-white text-[36px] sm:text-[44px] leading-tight mb-4 max-w-xl">
            Helping organizations hire with confidence.
          </h1>
          <p className="text-white/80 text-[17px] max-w-md mb-8">
            Professional background verification and field investigation services
            for businesses across India — accurate, confidential, and delivered on
            time.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-11">
            <Button href="#contact" variant="primary">Request a quote</Button>
            <Button href="#services" variant="outline">View our services</Button>
          </div>
          <div className="flex flex-wrap gap-9">
            {stats.map((s) => (
              <div key={s.label}>
                <strong className="block font-heading text-2xl text-gold-light">{s.value}</strong>
                <span className="text-[13px] text-white/65">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative h-[400px]" aria-hidden="true">
          <div className="absolute w-[300px] h-[300px] top-14 right-2.5 opacity-50 rotate-3 bg-white rounded-2xl shadow-2xl" />
          <div className="absolute w-[320px] top-0 right-10 bg-white rounded-2xl shadow-2xl p-6 text-[#1C2530]">
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-1.5 bg-[#EAF4EA] text-[#2E7D4F] text-xs font-semibold px-2.5 py-1 rounded-full">
                <CheckCircle2 size={14} /> Verified
              </span>
              <span className="text-[11.5px] text-[#5C6570]">Case #SRS-2049</span>
            </div>
            {statusRows.map(([label, status]) => (
              <div key={label} className="flex justify-between py-2.5 border-b border-dashed border-line text-[13px]">
                <span className="text-[#5C6570]">{label}</span>
                <span className="font-semibold">{status}</span>
              </div>
            ))}
            <div className="h-1.5 rounded-full bg-bgalt mt-4 overflow-hidden">
              <div className="h-full w-[92%] bg-gold" />
            </div>
            <div className="text-[11.5px] text-[#5C6570] mt-2.5">
              Report quality reviewed &amp; ready for submission
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
