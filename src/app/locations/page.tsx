import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import LocationCard from "@/components/ui/LocationCard";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";
import { locationsFaqs } from "@/lib/content/index-faqs";
import { locations } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Taxi Locations: Makkah, Madinah, Jeddah & Taif",
  description:
    "Al Safa Taxi serves Makkah, Madinah, Jeddah and Taif, plus Jeddah (JED), Madinah (MED) and Taif (TIF) airports. Choose your city for taxi and transfer details.",
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
        description="We serve Makkah, Madinah, Jeddah and Taif. Choose a city or airport for taxi and transfer details."
      />
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-5">
            <SectionHeading eyebrow="Cities" title="Taxi Service in Four Cities" />
            <p className="text-base leading-relaxed text-brand-dark/70">
              We focus on the Western Region of Saudi Arabia. Each city has its own roads,
              restrictions and routines: vehicle access is limited around the Haram in Makkah and
              the Prophet&apos;s Mosque in Madinah, Jeddah is spread along the coast, and Taif sits
              in the mountains. Choose a city for practical details on how we plan journeys there.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

          <p className="mt-16 max-w-3xl text-base leading-relaxed text-brand-dark/70">
            Travelling between cities? See our{" "}
            <Link href="/routes" className="font-semibold text-brand-primary underline">
              popular taxi routes
            </Link>{" "}
            or our{" "}
            <Link
              href="/umrah-transportation"
              className="font-semibold text-brand-primary underline"
            >
              Umrah transportation
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <FaqSection faqs={locationsFaqs} tone="gray" title="Service Area FAQs" />

      <CTASection
        title="Don't See Your Destination?"
        description="Contact us to ask about a journey not listed here and we will plan it with you."
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
