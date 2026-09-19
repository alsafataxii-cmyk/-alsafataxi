import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import LocationCard from "@/components/ui/LocationCard";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CTASection from "@/components/ui/CTASection";
import { locations } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Saudi Airport Transfers | Jeddah, Madinah & Taif",
  description:
    "Private airport transfers at Jeddah (JED), Madinah (MED) and Taif (TIF) airports, with onward travel to Makkah and Madinah hotels. Book 24/7.",
  path: "/airports",
});

const airportSteps = [
  {
    title: "Share Your Flight Details",
    description:
      "Send your flight number, arrival time, passenger count and hotel name when you book.",
  },
  {
    title: "Confirm Your Vehicle",
    description:
      "We confirm the vehicle and price before you travel, sized to your group and luggage.",
  },
  {
    title: "Meet Your Driver",
    description:
      "Your driver collects you for the transfer to your hotel or onward destination. Message us if your plans change.",
  },
];

export default function AirportsPage() {
  const airports = locations.filter((location) => location.type === "airport");

  return (
    <>
      <PageHero
        eyebrow="Airport Transfers"
        title="Punctual Transfers at Jeddah, Madinah & Taif Airports"
        description="Private pickups and drop-offs planned around your flight, with onward travel to Makkah, Madinah, Jeddah and Taif."
      />
      <Breadcrumbs items={[{ label: "Airports", href: "/airports" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Airports We Serve"
            title="Choose Your Airport"
            description="Makkah has no commercial airport, so most Makkah-bound travellers arrive through Jeddah. Select an airport for transfer details, journey times and FAQs."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {airports.map((airport) => (
              <LocationCard key={airport.slug} location={airport} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-gray/40">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple Airport Pickup"
            description="From booking to arrival, here is how an airport transfer with Al Safa Taxi works."
          />
          <div className="mt-12">
            <ProcessSteps steps={airportSteps} />
          </div>
        </div>
      </section>

      <CTASection
        title="Landing Soon?"
        description="Book your airport transfer now and travel from the terminal to your destination without delay."
      />
    </>
  );
}
