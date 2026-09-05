import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import EnquiryPanel from "@/components/EnquiryPanel";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharp Research Services | Background Verification & Field Investigation in India",
  description:
    "Sharp Research Services is a Lucknow-based background verification and field investigation company serving Uttar Pradesh, Delhi NCR, Rajasthan, Punjab and Uttarakhand since 2012. Address, employment, education and criminal record checks for confident hiring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
        <EnquiryPanel />
        <WhatsAppButton />
      </body>
    </html>
  );
}
