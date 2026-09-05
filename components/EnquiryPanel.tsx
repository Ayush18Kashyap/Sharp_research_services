"use client";

import { useState, FormEvent } from "react";
import { X } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function EnquiryPanel() {
  const [open, setOpen] = useState(false);
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
          phone: data.get("phone"),
          message: data.get("message"),
          source: "quick_panel",
          company_website: data.get("company_website"),
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => {
        setOpen(false);
        setStatus("idle");
      }, 2200);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-1/2 right-0 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] bg-gold text-navy-deep font-semibold text-[13.5px] px-2.5 py-5 rounded-l-lg z-[180] tracking-wide"
      >
        Quick enquiry
      </button>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-navy-deep/55 z-[250] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[380px] max-w-[88vw] bg-white z-[260] shadow-2xl transition-transform duration-300 px-7 py-8 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Quick enquiry form"
      >
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="text-[19px]">Quick enquiry</h3>
          <button onClick={() => setOpen(false)} aria-label="Close" className="text-[#5C6570]">
            <X size={20} />
          </button>
        </div>
        <p className="text-[13.5px] text-[#5C6570] mb-6">
          Leave your name and contact number and our team will get back to you ASAP.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sf-name" className="text-[13px] font-medium">Your name</label>
            <input id="sf-name" name="name" type="text" required placeholder="Full name" className="form-input" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sf-phone" className="text-[13px] font-medium">Contact number</label>
            <input id="sf-phone" name="phone" type="tel" required placeholder="+91" className="form-input" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sf-note" className="text-[13px] font-medium">What do you need? (optional)</label>
            <textarea id="sf-note" name="message" rows={3} placeholder="Briefly describe your requirement" className="form-input" />
          </div>

          {/* Honeypot — hidden from real visitors, bots often fill it in anyway */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <label htmlFor="sf-company_website">Leave this field blank</label>
            <input id="sf-company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-gold text-navy-deep font-semibold rounded-md py-3.5 mt-1 hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send & get a callback"}
          </button>
          {status === "success" && (
            <p className="text-sm text-[#2E7D4F] font-medium">Thanks! Our team will contact you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
          )}
        </form>
      </div>
    </>
  );
}
