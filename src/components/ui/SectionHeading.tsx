type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-brand-dark" : "text-white";
  const descriptionColor = tone === "dark" ? "text-brand-dark/70" : "text-white/75";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} max-w-2xl`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={`text-3xl font-bold leading-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </Heading>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
