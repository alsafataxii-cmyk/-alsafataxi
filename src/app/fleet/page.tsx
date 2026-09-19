import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FleetCard from "@/components/ui/FleetCard";
import CTASection from "@/components/ui/CTASection";
import { fleet } from "@/lib/data";
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
        title="A Vehicle for Every Journey"
        description="Cars, SUVs and vans for individuals, families and groups, with room for luggage. Tell us your group size and we will suggest the right vehicle."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((vehicle) => (
              <FleetCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Reserve the Right Vehicle for Your Trip"
        description="Tell us your party size and destination, and we'll match you with the right vehicle from our fleet."
      />
    </>
  );
}
