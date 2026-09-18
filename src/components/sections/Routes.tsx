import SectionHeading from "@/components/ui/SectionHeading";
import LocationCard from "@/components/ui/LocationCard";
import Button from "@/components/ui/Button";
import { locations } from "@/lib/data";

export default function Routes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Where We Drive"
            title="Popular Routes & Locations"
            description="We serve Makkah, Madinah, Jeddah and Taif, with our network growing to reach more destinations."
          />
          <Button href="/locations" variant="outline-dark" className="shrink-0">
            View All Locations
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
