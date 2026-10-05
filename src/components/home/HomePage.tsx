import { MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import FaqSection from "@/components/ui/FaqSection";
import JsonLd from "@/components/ui/JsonLd";
import MobileContactBar from "@/components/ui/MobileContactBar";
import HomeHero from "@/components/home/HomeHero";
import {
  AirportHub,
  AnswerBlock,
  ServiceSelector,
  UmrahSection,
  ZiyaratSection,
} from "@/components/home/HomeSectionsA";
import {
  BookingSteps,
  BusinessChauffeur,
  CityCoverage,
  FleetSection,
  PopularRoutes,
  PracticalNotes,
  WhatToExpect,
} from "@/components/home/HomeSectionsB";
import { homePageFaqs } from "@/lib/content/home-page";
import { webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="has-mobile-bar">
      <JsonLd
        data={webPageSchema({
          name: "Taxi Service in Makkah, Madinah, Jeddah & Taif",
          description:
            "Private taxi, airport transfers, Umrah transportation and Ziyarat tours in Makkah, Madinah, Jeddah and Taif. Book 24/7 with Al Safa Taxi.",
          path: "/",
        })}
      />

      <HomeHero />
      <AnswerBlock />
      <ServiceSelector />
      <AirportHub />
      <UmrahSection />
      <ZiyaratSection />
      <CityCoverage />
      <PopularRoutes />
      <FleetSection />
      <WhatToExpect />
      <PracticalNotes />
      <BookingSteps />
      <BusinessChauffeur />
      <FaqSection faqs={homePageFaqs} tone="white" title="Taxi Service FAQs" />

      <section className="relative overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-gold/5" />
        </div>
        <div className="relative mx-auto flex max-w-8xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div data-reveal className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Book Your Private Taxi</h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Send your pickup location, destination, date, passengers, luggage and flight number if
              you&apos;re traveling through an airport. We&apos;ll confirm the suitable vehicle and price
              before your journey.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex w-fit items-center gap-2 text-lg font-semibold text-white hover:text-brand-gold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
          <div data-reveal className="flex flex-col gap-4 sm:flex-row">
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
            </Button>
            <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} variant="outline-light" size="lg">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <MobileContactBar message="Hello Al Safa Taxi, I would like to book a private ride." />
    </div>
  );
}
