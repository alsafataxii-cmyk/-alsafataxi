import { Plus } from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/lib/content/types";

type FaqSectionProps = {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  tone?: "white" | "gray";
};

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  tone = "white",
}: FaqSectionProps) {
  return (
    <section className={tone === "gray" ? "bg-brand-gray/40" : "bg-white"}>
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <div className="mt-12 divide-y divide-brand-gray border-y border-brand-gray">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                <h3 className="text-base font-semibold text-brand-dark">{faq.question}</h3>
                <Plus
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
