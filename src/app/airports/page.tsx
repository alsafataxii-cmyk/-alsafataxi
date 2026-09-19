import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import LocationCard from "@/components/ui/LocationCard";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";
import { locations } from "@/lib/data";
import { airportsFaqs } from "@/lib/content/index-faqs";
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

const cityAirports = [
  {
    city: "Makkah",
    airport: "Jeddah (JED)",
    note: "Makkah has no commercial airport. The road journey from Jeddah is roughly 100 km.",
    href: "/routes/jeddah-airport-to-makkah",
    link: "Jeddah Airport to Makkah taxi",
  },
  {
    city: "Madinah",
    airport: "Madinah (MED)",
    note: "The airport is roughly 15 to 20 km from central Madinah and the Prophet's Mosque.",
    href: "/airports/madinah-airport",
    link: "Madinah Airport taxi",
  },
  {
    city: "Jeddah",
    airport: "Jeddah (JED)",
    note: "King Abdulaziz International Airport is roughly 30 to 40 km from the city.",
    href: "/airports/jeddah-airport",
    link: "Jeddah Airport taxi",
  },
  {
    city: "Taif",
    airport: "Taif (TIF)",
    note: "Taif International Airport serves the highland city, with onward roads to Makkah and Jeddah.",
    href: "/airports/taif-airport",
    link: "Taif Airport taxi",
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
            eyebrow="Which Airport?"
            title="Which Airport Serves Which City"
            description="If you are not sure where to fly into, start with your destination."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cityAirports.map((item) => (
              <div key={item.city} className="border border-brand-gray bg-white p-6">
                <h3 className="text-lg font-semibold text-brand-dark">
                  {item.city}: fly into {item.airport}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{item.note}</p>
                <Link
                  href={item.href}
                  className="mt-3 inline-block text-sm font-semibold text-brand-primary underline"
                >
                  {item.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
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

      <FaqSection faqs={airportsFaqs} tone="gray" title="Airport Transfer FAQs" />

      <CTASection
        title="Landing Soon?"
        description="Book your airport transfer now and travel from the terminal to your destination without delay."
      />
    </>
  );
}
