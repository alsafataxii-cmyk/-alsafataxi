import Image from "next/image";
import { Check, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import MadinahBookingCard from "@/components/madinah-airport/MadinahBookingCard";
import { madinahPhoto } from "@/lib/content/madinah-airport-page";
import { siteConfig } from "@/lib/site-config";

const trustPoints = [
  "Private vehicle, not a shared shuttle",
  "Professional driver",
  "Pickup planned around your flight details",
  "Hotel drop-off agreed before you land",
  "Vehicles for families and groups",
];

export default function MadinahHero() {
  const image = madinahPhoto("approach-road");

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
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/25 max-lg:from-brand-dark/90 max-lg:via-brand-dark/80 max-lg:to-brand-dark/70"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6">
          <span className="anim-fade-up inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="anim-line h-px w-8 bg-brand-gold" aria-hidden="true" />
            Prince Mohammad bin Abdulaziz International Airport · MED
          </span>

          <h1 className="anim-rise text-4xl font-bold leading-tight text-white sm:text-5xl">
            Madinah Airport Taxi &amp; Private Transfers (MED)
          </h1>

          <p className="anim-fade-up max-w-xl text-lg leading-relaxed text-white/75 [--delay:200ms]">
            Private airport transfers from Prince Mohammad bin Abdulaziz International Airport to
            your Madinah hotel, with direct journeys to Makkah, Jeddah and selected Ziyarat stops.
          </p>

          <ul className="anim-fade-up grid grid-cols-1 gap-2.5 text-sm text-white/85 [--delay:300ms] sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="anim-fade-up flex flex-col gap-3 [--delay:400ms] sm:flex-row sm:items-center">
            <Button href="/book" variant="gold" size="lg">
              Book Your Airport Transfer
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              variant="whatsapp"
              size="lg"
            >
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

        <MadinahBookingCard />
      </div>
    </section>
  );
}
