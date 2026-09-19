import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FleetCard from "@/components/ui/FleetCard";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";
import { fleet } from "@/lib/data";
import { fleetFaqs } from "@/lib/content/index-faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Taxi Fleet: Sedans, SUVs & Vans",
  description:
    "Executive sedans, premium SUVs, luxury vans and VIP chauffeur cars for airport transfers, Umrah trips and intercity travel in Makkah, Madinah, Jeddah and Taif.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title="Our Taxi Fleet: Sedans, SUVs & Vans for Every Journey"
        description="Cars, SUVs and vans for individuals, families and groups, with room for luggage. Tell us your group size and we will suggest the right vehicle."
      />
      <Breadcrumbs items={[{ label: "Fleet", href: "/fleet" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-5">
            <SectionHeading eyebrow="Choose a Vehicle" title="Vehicles for Airport, Umrah & Intercity Travel" />
            <p className="text-base leading-relaxed text-brand-dark/70">
              The right vehicle depends on how many people are travelling and how much luggage they
              carry. A sedan suits a couple or a business traveller on a city ride. Families
              arriving from{" "}
              <Link
                href="/airports/jeddah-airport"
                className="font-semibold text-brand-primary underline"
              >
                Jeddah Airport
              </Link>{" "}
              or travelling{" "}
              <Link
                href="/routes/makkah-to-madinah"
                className="font-semibold text-brand-primary underline"
              >
                between Makkah and Madinah
              </Link>{" "}
              usually need an SUV or a van for the passengers and their bags.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((vehicle) => (
              <FleetCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={fleetFaqs} tone="gray" title="Taxi Fleet FAQs" />

      <CTASection
        title="Reserve the Right Vehicle for Your Trip"
        description="Tell us your party size and destination, and we'll match you with the right vehicle from our fleet."
      />
    </>
  );
}
