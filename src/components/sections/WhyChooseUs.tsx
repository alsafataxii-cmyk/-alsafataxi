import SectionHeading from "@/components/ui/SectionHeading";
import { whyAlSafa } from "@/lib/data";

type WhyChooseUsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function WhyChooseUs({
  eyebrow = "Why Al Safa Taxi",
  title = "The Practical Reasons Riders Choose Us",
  description = "Premium transportation is about consistency, not just comfort. Here's how we deliver it on every trip.",
}: WhyChooseUsProps) {
  return (
    <section className="bg-brand-gray/40">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyAlSafa.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold text-brand-dark">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-dark/70">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
