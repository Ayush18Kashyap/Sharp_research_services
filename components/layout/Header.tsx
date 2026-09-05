"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[200] bg-white/95 backdrop-blur border-b border-line">
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-7 py-4">
        <Link href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[9px] bg-navy flex items-center justify-center text-gold-light font-heading font-bold text-lg shrink-0">
            S
          </div>
          <div className="leading-tight">
            <div className="font-heading font-semibold text-[16.5px] text-navy-deep">
              {siteConfig.name}
            </div>
            <div className="text-[11.5px] text-[#5C6570]">{siteConfig.tagline}</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[14.5px] font-medium hover:text-navy">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-navy"
          >
            <Phone size={15} /> {siteConfig.phone}
          </a>
          <Button href="#contact" variant="navy" className="hidden sm:inline-flex">
            Request a quote
          </Button>
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-navy-deep text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden flex flex-col gap-1 px-7 pb-6 border-t border-line bg-white">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
