import { siteConfig } from "@/lib/site-config";

const facts = [
  { label: "Established", value: "2012" },
  { label: "Organization type", value: "Proprietorship" },
  { label: "Proprietor", value: siteConfig.proprietor },
  { label: "Headquarters", value: "Lucknow, UP" },
];

const coreValues = [
  "Integrity",
  "Accuracy",
  "Confidentiality",
  "Professionalism",
  "Customer focus",
  "Quality",
  "Accountability",
  "Reliability",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-wrap mx-auto px-7 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="inline-block text-gold font-semibold text-sm mb-2.5">About us</span>
          <h2 className="text-[32px] mb-4 leading-snug">
            A decade of dependable verification, built on field experience.
          </h2>
          <p className="text-[#5C6570] text-[15.5px] mb-4">
            {siteConfig.name} is a Lucknow-based background verification and field
            investigation company established in {siteConfig.established}. With
            over a decade of experience in the verification industry, we support
            organizations in conducting accurate and dependable verification
            checks across multiple states in North India.
          </p>
          <p className="text-[#5C6570] text-[15.5px] mb-4">
            Our experienced team and extensive field network enable us to deliver
            high-quality verification services with a strong focus on accuracy,
            confidentiality, compliance, and turnaround time.
          </p>

          <div className="bg-bgalt border-l-[3px] border-gold rounded-r-md px-6 py-5 mt-5">
            <h4 className="text-[14.5px] mb-1.5 text-navy">Our mission</h4>
            <p className="text-[14.5px] text-[#5C6570] m-0">
              To provide reliable, accurate, and confidential background
              verification solutions that enable organizations to make informed
              hiring decisions while maintaining the highest standards of
              professionalism, integrity, and customer service.
            </p>
          </div>
          <div className="bg-bgalt border-l-[3px] border-gold rounded-r-md px-6 py-5 mt-4">
            <h4 className="text-[14.5px] mb-1.5 text-navy">Our vision</h4>
            <p className="text-[14.5px] text-[#5C6570] m-0">
              To become one of India&apos;s most trusted background verification and
              field investigation companies through exceptional service,
              operational excellence, and long-term client partnerships.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`rounded-lg p-6 ${i % 2 === 0 ? "bg-navy text-white" : "bg-gold text-navy-deep"}`}
            >
              <div className="text-xs opacity-80 mb-1.5">{f.label}</div>
              <div className="font-heading font-semibold text-lg">{f.value}</div>
            </div>
          ))}
          <div className="col-span-2 bg-navy text-white rounded-lg p-6">
            <div className="text-xs opacity-80 mb-1.5">Core values</div>
            <div className="text-[14.5px] leading-loose">{coreValues.join(" · ")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
