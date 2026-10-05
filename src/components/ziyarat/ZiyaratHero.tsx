import Image from "next/image";
import { Check, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import ZiyaratQuoteCard from "@/components/ziyarat/ZiyaratQuoteCard";
import { kaabaNightImage } from "@/lib/content/images";
import { siteConfig } from "@/lib/site-config";

const points = [
  "Private vehicle",
  "Flexible itinerary",
  "Driver waits during visits",
  "Family and group options",
  "Makkah & Madinah Ziyarat",
];

export default function ZiyaratHero() {
  const image = kaabaNightImage;

  return (
    <section className="relative isolate overflow-hidden bg-brand-dark">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/45 max-lg:from-brand-dark/90 max-lg:via-brand-dark/85 max-lg:to-brand-dark/75"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6">
          <span className="anim-fade-up inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="anim-line h-px w-8 bg-brand-gold" aria-hidden="true" />
            Ziyarat transportation
          </span>

          <h1 className="anim-rise text-4xl font-bold leading-tight text-white sm:text-5xl">
            Ziyarat Tours in Makkah &amp; Madinah by Private Taxi
          </h1>

          <p className="anim-fade-up max-w-xl text-lg leading-relaxed text-white/75 [--delay:200ms]">
            Visit the historical and religious places of Makkah and Madinah in a private vehicle,
            with a driver who follows your planned route and waits while you visit.
          </p>

          <ul className="anim-fade-up grid grid-cols-1 gap-2.5 text-sm text-white/85 [--delay:300ms] sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="anim-fade-up flex flex-col gap-3 [--delay:400ms] sm:flex-row sm:items-center">
            <Button href="#plan-my-ziyarat" variant="gold" size="lg">
              Plan My Ziyarat
            </Button>
            <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} variant="whatsapp" size="lg">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </div>

          <a
            href={siteConfig.phoneHref}
            className="anim-fade-up inline-flex w-fit items-center gap-2 text-base font-semibold text-white [--delay:450ms] hover:text-brand-gold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>

        <ZiyaratQuoteCard />
      </div>
    </section>
  );
}
