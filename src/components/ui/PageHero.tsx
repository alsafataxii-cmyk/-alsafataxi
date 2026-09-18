type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex max-w-2xl flex-col gap-4">
          {eyebrow ? (
            <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
          {description ? (
            <p className="text-lg leading-relaxed text-white/70">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
