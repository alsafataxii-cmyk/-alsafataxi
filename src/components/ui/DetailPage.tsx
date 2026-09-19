import { MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentBlocks from "@/components/ui/ContentBlocks";
import RelatedLinks, { type RelatedGroup } from "@/components/ui/RelatedLinks";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/ui/JsonLd";
import { siteConfig } from "@/lib/site-config";
import type { ContentSection, Fact, Faq } from "@/lib/content/types";

type DetailPageProps = {
  eyebrow: string;
  h1: string;
  heroDescription: string;
  breadcrumbs: { label: string; href: string }[];
  intro: string;
  sections: ContentSection[];
  facts?: Fact[];
  factsTitle?: string;
  related: RelatedGroup[];
  faqs: Faq[];
  faqTitle?: string;
  schema?: Record<string, unknown>;
  ctaTitle: string;
  ctaDescription: string;
};

export default function DetailPage({
  eyebrow,
  h1,
  heroDescription,
  breadcrumbs,
  intro,
  sections,
  facts,
  factsTitle = "At a Glance",
  related,
  faqs,
  faqTitle,
  schema,
  ctaTitle,
  ctaDescription,
}: DetailPageProps) {
  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <PageHero eyebrow={eyebrow} title={h1} description={heroDescription} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-white">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="lg:col-span-2">
            <ContentBlocks intro={intro} sections={sections} />
          </article>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            {facts && facts.length > 0 ? (
              <div className="border border-brand-gray p-7">
                <h2 className="text-lg font-semibold text-brand-dark">{factsTitle}</h2>
                <dl className="mt-4 flex flex-col divide-y divide-brand-gray">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-1 py-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                        {fact.label}
                      </dt>
                      <dd className="text-sm text-brand-dark/80">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            <div className="bg-brand-dark p-7">
              <h2 className="text-lg font-semibold text-white">Book This Ride</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Send your pickup, drop-off, date and number of passengers to get a quote and
                confirm your vehicle.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button href="/book" variant="gold" className="w-full">
                  Book Your Ride
                </Button>
                <Button
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  variant="outline-light"
                  className="w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Us
                </Button>
                <Button href={siteConfig.phoneHref} variant="outline-light" className="w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phone}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <RelatedLinks groups={related} />
      <FaqSection faqs={faqs} title={faqTitle} />
      <CTASection title={ctaTitle} description={ctaDescription} />
    </>
  );
}
