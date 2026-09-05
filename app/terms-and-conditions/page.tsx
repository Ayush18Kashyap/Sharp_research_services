import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sharp Research Services",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-wrap mx-auto px-7 py-32">
      <h1 className="text-3xl mb-6">Terms &amp; conditions</h1>
      <p className="text-[#5C6570] max-w-2xl">
        This page is a placeholder. Add your finalized terms of service here —
        we&apos;d recommend having it reviewed by legal counsel before publishing,
        particularly around verification report usage, liability, and turnaround
        commitments.
      </p>
      <a href="/" className="inline-block mt-8 text-navy font-medium">
        &larr; Back to home
      </a>
    </main>
  );
}
