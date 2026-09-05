import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sharp Research Services",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-wrap mx-auto px-7 py-32">
      <h1 className="text-3xl mb-6">Privacy policy</h1>
      <p className="text-[#5C6570] max-w-2xl">
        This page is a placeholder. Add your finalized privacy policy here —
        we&apos;d recommend having it reviewed by legal counsel before publishing,
        particularly around how enquiry and verification data is collected,
        stored, and used.
      </p>
      <a href="/" className="inline-block mt-8 text-navy font-medium">
        &larr; Back to home
      </a>
    </main>
  );
}
