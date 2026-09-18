import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import LocationCard from "@/components/ui/LocationCard";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CTASection from "@/components/ui/CTASection";
import { locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Airport Transfers",
  description:
    "Flight-tracked airport transfers at Jeddah, Madinah and Taif International Airports, with meet-and-greet service available.",
  alternates: { canonical: "/airports" },
};

const airportSteps = [
  {
    title: "Share Your Flight Details",
    description: "Provide your flight number and terminal when you book, so we can track your arrival.",
  },
  {
    title: "We Track Your Flight",
    description: "Your chauffeur monitors your flight in real time and adjusts pickup timing automatically.",
  },
  {
    title: "Meet & Greet on Arrival",
    description: "Your driver is waiting at the agreed point, ready to assist with luggage and departure.",
  },
];

export default function AirportsPage() {
  const airports = locations.filter((location) => location.type === "airport");

  return (
    <>
      <PageHero
        eyebrow="Airport Transfers"
        title="Punctual Transfers at Jeddah, Madinah & Taif Airports"
        description="Flight tracking and meet-and-greet service mean your ride is ready whether you land early, on time, or delayed."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Airports We Serve" title="Served Airports" />
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
            title="A Simple, Reliable Airport Pickup"
            description="From booking to arrival, here's how we make sure your transfer runs on time."
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
