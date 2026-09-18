import Button from "@/components/ui/Button";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  eyebrow = "Book Your Ride",
  title,
  description,
  primaryLabel = "Book Your Ride",
  primaryHref = "/book",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-gold/5" />
      </div>

      <div className="relative mx-auto flex max-w-8xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex max-w-xl flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
          {description ? (
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href={primaryHref} variant="gold" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline-light" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
