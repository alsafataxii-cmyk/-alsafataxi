import { MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import FaqSection from "@/components/ui/FaqSection";
import JsonLd from "@/components/ui/JsonLd";
import MobileContactBar from "@/components/ui/MobileContactBar";
import HubHero from "@/components/airports-hub/HubHero";
import {
  AirportComparison,
  AirportSelector,
  AnswerBlock,
  DestinationExplorer,
  UmrahAirports,
} from "@/components/airports-hub/HubSections";
import {
  BookingChecklist,
  DelayGuide,
  FamilyGroup,
  LuggageGuide,
  NextSteps,
  TerminalToHotel,
  TransferSteps,
} from "@/components/airports-hub/HubGuideSections";
import { airportsHubFaqs } from "@/lib/content/airports-hub";
import { collectionSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const path = "/airports";
const description =
  "Private airport transfers at Jeddah (JED), Madinah (MED) and Taif (TIF) airports, with onward travel to Makkah and Madinah hotels. Book 24/7.";

export default function AirportsHubPage() {
  return (
    <div className="has-mobile-bar">
      <JsonLd
        data={webPageSchema({
          name: "Punctual Transfers at Jeddah, Madinah & Taif Airports",
          description,
          path,
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Airport Transfers at Jeddah, Madinah and Taif",
          description,
          path,
          areas: ["Jeddah", "Madinah", "Taif", "Makkah"],
        })}
      />
      <JsonLd
        data={collectionSchema({
          name: "Airports served by Al Safa Taxi",
          description,
          path,
          items: [
            { name: "Jeddah Airport (JED)", href: "/airports/jeddah-airport" },
            { name: "Madinah Airport (MED)", href: "/airports/madinah-airport" },
            { name: "Taif Airport (TIF)", href: "/airports/taif-airport" },
          ],
        })}
      />

      <HubHero />
      <Breadcrumbs items={[{ label: "Airports", href: path }]} />

      <AnswerBlock />
      <AirportSelector />
      <AirportComparison />
      <DestinationExplorer />
      <UmrahAirports />
      <TransferSteps />
      <BookingChecklist />
      <FamilyGroup />
      <LuggageGuide />
      <TerminalToHotel />
      <DelayGuide />
      <NextSteps />
      <FaqSection faqs={airportsHubFaqs} tone="gray" title="Airport Transfer FAQs" />

      <section className="relative overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-gold/5" />
        </div>
        <div className="relative mx-auto flex max-w-8xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div data-reveal className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Book Your Airport Transfer
            </h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us your airport, flight details, destination, passenger count and luggage.
              We&apos;ll confirm the available vehicle, pickup arrangements and price.
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
              Get My Airport Transfer Quote
            </Button>
            <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} variant="outline-light" size="lg">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <MobileContactBar message="Hello Al Safa Taxi, I would like to arrange an airport transfer." />
    </div>
  );
}
