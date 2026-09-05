export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-xl mb-14">
      <span className="inline-block text-gold font-semibold text-sm mb-2.5">
        {eyebrow}
      </span>
      <h2 className={`text-[32px] mb-3.5 ${light ? "text-white" : ""}`}>{title}</h2>
      {description && (
        <p className={light ? "text-white/70" : "text-[#5C6570]"}>{description}</p>
      )}
    </div>
  );
}
