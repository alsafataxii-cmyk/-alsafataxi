import SectionHeading from "@/components/ui/SectionHeading";
import FleetCard from "@/components/ui/FleetCard";
import Button from "@/components/ui/Button";
import { fleet } from "@/lib/data";

export default function Fleet() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Fleet"
            title="A Vehicle for Every Journey"
            description="Every vehicle in our fleet is cleaned, inspected and maintained to a consistently high standard before it reaches the road."
          />
          <Button href="/fleet" variant="outline-dark" className="shrink-0">
            View Full Fleet
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((vehicle) => (
            <FleetCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
