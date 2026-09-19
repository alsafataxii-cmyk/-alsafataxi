import Link from "next/link";
import { PlaneTakeoff } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { airportPages } from "@/lib/content/airports";

export default function HomeAirports() {
  return (
    <section className="bg-brand-gray/40">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Airport Transfers"
          title="Airport Taxi at Jeddah, Madinah & Taif"
          description="Makkah has no commercial airport, so most Makkah-bound travellers land in Jeddah. Share your flight number and hotel and we plan the pickup around your arrival."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {airportPages.map((airport) => (
            <div key={airport.slug} className="flex flex-col gap-4 border border-brand-gray bg-white p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-beige text-brand-primary">
                <PlaneTakeoff className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-brand-dark">
                <Link
                  href={`/airports/${airport.slug}`}
                  className="transition-colors hover:text-brand-primary"
                >
                  {airport.city} Airport Taxi ({airport.code})
                </Link>
              </h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                {airport.heroDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
