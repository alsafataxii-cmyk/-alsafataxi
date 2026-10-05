import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import ImageSlider from "@/components/ui/ImageSlider";
import Button from "@/components/ui/Button";
import { RichText } from "@/lib/content/rich-text";
import { siteConfig } from "@/lib/site-config";
import type { ContentSection } from "@/lib/content/types";
import type { ContentImage } from "@/lib/content/images";
import type { SplitPlacement } from "@/lib/content/photo-layout";

type ContentBlocksProps = {
  intro?: string;
  sections: ContentSection[];
  // Slider shown after the first section.
  slider?: { title: string; images: ContentImage[] };
  // Single photos shown beside the text of a section, keyed by section index.
  splits?: Record<number, SplitPlacement>;
};

function SplitPhoto({ placement }: { placement: SplitPlacement }) {
  const { image } = placement;
  return (
    <figure className="overflow-hidden border border-brand-gray lg:sticky lg:top-28 lg:self-start">
      <Image
        src={image.src}
        alt={image.alt}
        title={image.title}
        width={image.width}
        height={image.height}
        loading="lazy"
        sizes="(min-width: 1024px) 280px, 100vw"
        className="aspect-[4/5] w-full object-cover"
      />
      <figcaption className="bg-brand-beige px-3 py-2 text-xs text-brand-dark/70">
        {image.title}
      </figcaption>
    </figure>
  );
}

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
          variant="whatsapp"
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

export default function ContentBlocks({ intro, sections, slider, splits }: ContentBlocksProps) {
  return (
    <div className="flex flex-col gap-10">
      {intro ? (
        <p className="text-lg leading-relaxed text-brand-dark/80">
          <RichText text={intro} />
        </p>
      ) : null}

      {sections.map((section, index) => {
        const split = splits?.[index];
        const body = (
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
        );

        return (
          <div key={section.heading} className="flex flex-col gap-10">
            {split ? (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
                <div className={split.side === "left" ? "lg:order-2" : undefined}>{body}</div>
                <div className={split.side === "left" ? "lg:order-1" : undefined}>
                  <SplitPhoto placement={split} />
                </div>
              </div>
            ) : (
              body
            )}
            {index === 0 && slider && slider.images.length > 0 ? (
              <ImageSlider title={slider.title} images={slider.images} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
