import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const companyLinks = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Coverage", href: "#coverage" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white/70 pt-16 pb-7">
      <div className="max-w-wrap mx-auto px-7">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-10 h-10 rounded-[9px] bg-white/10 flex items-center justify-center text-gold-light font-heading font-bold text-lg">
                S
              </div>
              <div className="font-heading font-semibold text-white">{siteConfig.name}</div>
            </div>
            <p className="text-[13.5px] text-white/55 max-w-[280px]">
              Delivering trust through verification since {siteConfig.established}.
              Professional background verification and field investigation
              services across North India.
            </p>
          </div>

          <div>
            <h5 className="text-white font-heading font-medium text-sm mb-4">Company</h5>
            <ul className="space-y-2.5 text-[13.5px]">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-heading font-medium text-sm mb-4">Resources</h5>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><a href="#faq" className="hover:text-white">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white">Contact us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-white">Terms &amp; conditions</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-heading font-medium text-sm mb-4">Contact</h5>
            <ul className="space-y-2.5 text-[13.5px]">
              <li className="flex items-center gap-2"><Phone size={14} className="text-gold-light" /> {siteConfig.phone}</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-gold-light" /> {siteConfig.email}</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-gold-light" /> Lucknow, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-2.5 text-xs text-white/45">
          <span>&copy; {year} {siteConfig.name}. All rights reserved.</span>
          <span>Proprietor: {siteConfig.proprietor}</span>
        </div>
      </div>
    </footer>
  );
}
