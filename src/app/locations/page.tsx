import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import LocationCard from "@/components/ui/LocationCard";
import CTASection from "@/components/ui/CTASection";
import { locations } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Locations",
  description:
    "Al Safa Taxi serves Makkah, Madinah, Jeddah and Taif, plus King Abdulaziz, Prince Mohammad bin Abdulaziz and Taif International Airports.",
  path: "/locations",
});

export default function LocationsPage() {
  const cities = locations.filter((location) => location.type === "city");
  const airports = locations.filter((location) => location.type === "airport");

  return (
    <>
      <PageHero
        eyebrow="Where We Drive"
        title="Cities & Airports We Serve"
        description="We serve Makkah, Madinah, Jeddah and Taif, with more destinations added as we grow."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Cities" title="City Coverage" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Airports" title="Airport Coverage" />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {airports.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Destination?"
        description="We're always expanding our network. Contact us to ask about a route not listed here."
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
