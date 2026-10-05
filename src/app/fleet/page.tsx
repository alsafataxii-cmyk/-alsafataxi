import HubArticle from "@/components/ui/HubArticle";
import { hubExtras } from "@/lib/content/extra-hubs";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FleetCard from "@/components/ui/FleetCard";
import FleetModels from "@/components/ui/FleetModels";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";
import { fleet } from "@/lib/data";
import { fleetFaqs } from "@/lib/content/index-faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Taxi Fleet: Sedans, SUVs & Vans",
  description:
    "Executive sedans, premium SUVs, luxury vans and VIP chauffeur cars for airport transfers, Umrah trips and intercity travel in Makkah, Madinah, Jeddah, Taif.",
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

      <FleetModels />

      <section className="bg-brand-gray/40">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Matching Vehicle to Trip" title="Which Vehicle for Which Journey" />
          <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-brand-dark/70">
            <p>
              Start from the passengers and the bags, then think about the length of the trip. For
              a short city ride, a sedan is enough for two or three people. On a long road such as{" "}
              <Link
                href="/routes/makkah-to-madinah"
                className="font-medium text-brand-primary underline underline-offset-2"
              >
                Makkah to Madinah
              </Link>
              , about five hours, extra seat room and boot space matter more, so many families
              choose the SUV even for four.
            </p>
            <p>
              Pilgrims usually carry more on the way home than on the way in, with gifts and
              Zamzam water, so count the bags for the return before you decide. A group of six to
              eight with luggage needs the van. A group bigger than eight needs more than one
              vehicle, and we plan the pickups to happen together, for example at{" "}
              <Link
                href="/airports/jeddah-airport"
                className="font-medium text-brand-primary underline underline-offset-2"
              >
                Jeddah Airport
              </Link>
              . For executives and VIP guests, see{" "}
              <Link
                href="/services/business-transportation"
                className="font-medium text-brand-primary underline underline-offset-2"
              >
                business transportation
              </Link>
              .
            </p>
            <p>
              Vehicle models can vary with availability on the date, so tell us if you have a
              strong preference, and we will confirm what we can provide before you travel.
            </p>
          </div>
        </div>
      </section>

      <HubArticle sections={hubExtras.fleet} />

      <FaqSection faqs={fleetFaqs} tone="gray" title="Taxi Fleet FAQs" />

      <CTASection
        title="Reserve the Right Vehicle for Your Trip"
        description="Tell us your party size and destination, and we'll match you with the right vehicle from our fleet."
      />
    </>
  );
}
