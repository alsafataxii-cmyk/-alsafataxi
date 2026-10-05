import Image from "next/image";
import { Check, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import HomeQuoteCard from "@/components/home/HomeQuoteCard";
import { kaabaNightImage } from "@/lib/content/images";
import { siteConfig } from "@/lib/site-config";

const strip = [
  "Private vehicles",
  "Professional drivers",
  "Airport & intercity transfers",
  "Makkah, Madinah, Jeddah & Taif",
  "24/7 booking",
];

export default function HomeHero() {
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

      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6">
          <span className="anim-fade-up inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="anim-line h-px w-8 bg-brand-gold" aria-hidden="true" />
            Al Safa Taxi
          </span>

          <h1 className="anim-rise text-4xl font-bold leading-tight text-white sm:text-5xl">
            Reliable Taxi &amp; Private Transportation Across Makkah, Madinah, Jeddah &amp; Taif
          </h1>

          <p className="anim-fade-up max-w-xl text-lg leading-relaxed text-white/75 [--delay:200ms]">
            Private taxi and chauffeur transportation across Makkah, Madinah, Jeddah and Taif,
            including airport transfers, Umrah journeys, Ziyarat and direct intercity travel. Send
            your trip details, and we confirm the vehicle and price before you go.
          </p>

          <div className="anim-fade-up flex flex-col gap-3 [--delay:350ms] sm:flex-row sm:items-center">
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
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

        <HomeQuoteCard />
      </div>

      <div className="border-t border-white/10 bg-brand-dark/70 backdrop-blur-sm">
        <ul className="mx-auto flex max-w-8xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-sm text-white/85 sm:px-6 lg:px-8">
          {strip.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
