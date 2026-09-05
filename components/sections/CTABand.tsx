import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CTABand() {
  return (
    <section className="bg-gold py-14">
      <div className="max-w-wrap mx-auto px-7 flex flex-wrap items-center justify-between gap-6">
        <div>
          <h3 className="text-navy-deep text-2xl">Ready to hire with confidence?</h3>
          <p className="text-navy-deep/75 text-sm mt-1.5">
            Get a customized verification plan for your organization.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#contact"
            className="bg-navy text-white rounded-md px-6 py-3.5 font-semibold text-[15px] hover:bg-navy-light transition-colors"
          >
            Request a quote
          </a>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 bg-navy-deep text-white rounded-md px-6 py-3.5 font-semibold text-[15px] hover:bg-navy transition-colors"
          >
            <Phone size={16} /> Call now
          </a>
        </div>
      </div>
    </section>
  );
}
