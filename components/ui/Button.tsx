import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "navy" | "dark";

const variantClasses: Record<Variant, string> = {
  primary: "bg-gold text-navy-deep hover:bg-gold-light",
  outline: "border-white/55 text-white hover:bg-white/10",
  navy: "bg-navy text-white hover:bg-navy-light",
  dark: "bg-navy-deep text-white hover:bg-navy",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-semibold font-body transition-colors border border-transparent ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
