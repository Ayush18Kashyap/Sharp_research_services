"use client";

import { useState, FormEvent } from "react";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const serviceOptions = [
  "Address verification",
  "Employment verification",
  "Education verification",
  "Identity verification",
  "Criminal / court record check",
  "Vendor / merchant / dealer verification",
  "Customized field investigation",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
          source: "contact_form",
          company_website: data.get("company_website"),
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-wrap mx-auto px-7 grid lg:grid-cols-2 gap-14">
        <div>
          <span className="inline-block text-gold font-semibold text-sm mb-2.5">Get in touch</span>
          <h2 className="text-[32px] mb-6">Tell us what you need verified</h2>

          <div className="bg-navy text-white rounded-lg p-8">
            <h3 className="text-white text-[19px] mb-5">Contact details</h3>

            <div className="flex gap-3.5 mb-5 items-start">
              <Phone size={16} className="text-gold-light mt-1" />
              <div>
                <div className="text-xs text-white/60 mb-0.5">Phone</div>
                <div className="text-[14.5px] font-medium">{siteConfig.phone}</div>
              </div>
            </div>
            <div className="flex gap-3.5 mb-5 items-start">
              <Smartphone size={16} className="text-gold-light mt-1" />
              <div>
                <div className="text-xs text-white/60 mb-0.5">Mobile</div>
                <div className="text-[14.5px] font-medium">{siteConfig.mobiles.join("  /  ")}</div>
              </div>
            </div>
            <div className="flex gap-3.5 mb-5 items-start">
              <Mail size={16} className="text-gold-light mt-1" />
              <div>
                <div className="text-xs text-white/60 mb-0.5">Email</div>
                <div className="text-[14.5px] font-medium">{siteConfig.email}</div>
              </div>
            </div>
            <div className="flex gap-3.5 mb-5 items-start">
              <MapPin size={16} className="text-gold-light mt-1" />
              <div>
                <div className="text-xs text-white/60 mb-0.5">Head office</div>
                <div className="text-[14.5px] font-medium">{siteConfig.address}</div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mt-5 border border-white/15">
              <iframe
                src={siteConfig.mapEmbedUrl}
                loading="lazy"
                title="Sharp Research Services office location"
                className="w-full h-[190px] border-0 block"
              />
            </div>
          </div>
        </div>

        <div className="bg-bgalt rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-3.5 mb-3.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[13px] font-medium">Full name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" className="form-input" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[13px] font-medium">Phone number</label>
                <input id="phone" name="phone" type="tel" required placeholder="+91" className="form-input" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3.5 mb-3.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[13px] font-medium">Email address</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" className="form-input" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-[13px] font-medium">Service required</label>
                <select id="service" name="service" className="form-input">
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-3.5">
              <label htmlFor="message" className="text-[13px] font-medium">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us a bit about your requirement" className="form-input" />
            </div>

            {/* Honeypot — hidden from real visitors, bots often fill it in anyway */}
            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <label htmlFor="company_website">Leave this field blank</label>
              <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <label className="flex items-start gap-2 text-xs text-[#5C6570] mb-4">
              <input type="checkbox" required className="mt-0.5" />
              I agree to be contacted by {siteConfig.name} regarding my enquiry.
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gold text-navy-deep font-semibold rounded-md py-3.5 hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send enquiry"}
            </button>
            {status === "success" && (
              <p className="text-sm text-[#2E7D4F] font-medium mt-3.5">
                Thanks — your enquiry has been received. Our team will contact you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 font-medium mt-3.5">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
