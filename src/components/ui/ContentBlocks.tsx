import { MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { RichText } from "@/lib/content/rich-text";
import { siteConfig } from "@/lib/site-config";
import type { ContentSection } from "@/lib/content/types";

type ContentBlocksProps = {
  intro?: string;
  sections: ContentSection[];
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-1">
      {items.map((bullet) => (
        <li key={bullet} className="flex gap-3 text-base leading-relaxed text-brand-dark/70">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
          <span>
            <RichText text={bullet} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function InlineCta() {
  return (
    <div className="flex flex-col gap-4 border-l-4 border-brand-gold bg-brand-beige p-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-semibold text-brand-dark">
        Send your pickup, destination, date and passengers and we will confirm the vehicle and
        price.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/book" size="md">
          Book Your Ride
        </Button>
        <Button
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          variant="outline-dark"
          size="md"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </Button>
        <Button href={siteConfig.phoneHref} variant="outline-dark" size="md">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </Button>
      </div>
    </div>
  );
}

export default function ContentBlocks({ intro, sections }: ContentBlocksProps) {
  return (
    <div className="flex flex-col gap-10">
      {intro ? (
        <p className="text-lg leading-relaxed text-brand-dark/80">
          <RichText text={intro} />
        </p>
      ) : null}

      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-brand-dark">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-brand-dark/70">
              <RichText text={paragraph} />
            </p>
          ))}
          {section.bullets ? <Bullets items={section.bullets} /> : null}
          {section.subsections?.map((sub) => (
            <div key={sub.heading} className="mt-2 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-brand-dark">{sub.heading}</h3>
              {sub.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-brand-dark/70">
                  <RichText text={paragraph} />
                </p>
              ))}
              {sub.bullets ? <Bullets items={sub.bullets} /> : null}
            </div>
          ))}
          {section.cta ? <InlineCta /> : null}
        </section>
      ))}
    </div>
  );
}
