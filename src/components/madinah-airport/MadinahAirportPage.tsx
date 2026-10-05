import { MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import FaqSection from "@/components/ui/FaqSection";
import JsonLd from "@/components/ui/JsonLd";
import MobileContactBar from "@/components/ui/MobileContactBar";
import MadinahHero from "@/components/madinah-airport/MadinahHero";
import MadinahGallery from "@/components/madinah-airport/MadinahGallery";
import {
  AnswerBlock,
  DestinationCards,
  HotelDropoff,
  PickupSteps,
  TransferTimes,
} from "@/components/madinah-airport/ArrivalSections";
import {
  AirportFacts,
  FamilyTravel,
  FlightDelay,
  GroupVehicles,
  SplitFlights,
  UmrahTransfer,
  ZiyaratAddOn,
} from "@/components/madinah-airport/TravellerSections";
import { madinahFaqs, madinahPhoto, otherMadinahPhotos } from "@/lib/content/madinah-airport-page";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const path = "/airports/madinah-airport";
const description =
  "Private transfers from Madinah Airport (MED) to hotels near the Prophet's Mosque, or on to Makkah with a miqat stop. Ziyarat can be added on arrival day.";

const airportSchema = {
  "@context": "https://schema.org",
  "@type": "Airport",
  name: "Prince Mohammad bin Abdulaziz International Airport",
  iataCode: "MED",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madinah",
    addressCountry: "SA",
  },
};

export default function MadinahAirportPage() {
  const highlights = [
    { label: "Terminal exterior", image: madinahPhoto("terminal-facade") },
    { label: "Arrivals", image: madinahPhoto("international-arrivals") },
    { label: "Terminal interior", image: madinahPhoto("white-canopy-roof") },
    { label: "Check-in and departures", image: madinahPhoto("check-in-counters-e1") },
  ];
  const more = otherMadinahPhotos([madinahPhoto("approach-road"), ...highlights.map((h) => h.image)]);

  return (
    <div className="has-mobile-bar">
      <JsonLd
        data={webPageSchema({
          name: "Madinah Airport Taxi & Private Transfers (MED)",
          description,
          path,
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Madinah Airport Taxi and Transfers",
          description,
          path,
          areas: ["Madinah"],
        })}
      />
      <JsonLd data={airportSchema} />

      <MadinahHero />
      <Breadcrumbs
        items={[
          { label: "Airports", href: "/airports" },
          { label: "Madinah Airport", href: path },
        ]}
      />

      <AnswerBlock />
      <DestinationCards />
      <PickupSteps />
      <HotelDropoff />
      <TransferTimes />
      <UmrahTransfer />
      <ZiyaratAddOn />
      <FamilyTravel />
      <GroupVehicles />
      <SplitFlights />
      <FlightDelay />
      <AirportFacts />
      <MadinahGallery highlights={highlights} more={more} />
      <FaqSection faqs={madinahFaqs} tone="white" title="Madinah Airport Transfer FAQs" />

      <section className="relative overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-gold/5" />
        </div>
        <div className="relative mx-auto flex max-w-8xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div data-reveal className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Book Your Madinah Airport Transfer
            </h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Send your flight number, arrival date, hotel or onward destination, passenger count
              and luggage details. We&apos;ll confirm the most suitable vehicle, pickup
              arrangements and price.
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
            <Button
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              variant="outline-light"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <MobileContactBar message="Hello Al Safa Taxi, I would like to arrange a Madinah Airport (MED) transfer." />
    </div>
  );
}
