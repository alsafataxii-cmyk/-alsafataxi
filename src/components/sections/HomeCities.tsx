import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { locationPages } from "@/lib/content/locations";

export default function HomeCities() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Work"
          title="Taxi Service by City"
          description="Each city has its own roads and routines. Choose yours for practical details and how we plan the journey."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locationPages.map((location) => (
            <div
              key={location.slug}
              className="group flex flex-col gap-4 border border-brand-gray p-8 transition-colors hover:border-brand-gold"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {location.tagline}
              </span>
              <h3 className="text-xl font-semibold text-brand-dark">
                <Link
                  href={`/locations/${location.slug}`}
                  className="transition-colors hover:text-brand-primary"
                >
                  {location.name} Taxi Service
                </Link>
              </h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                {location.heroDescription}
              </p>
              <Link
                href={`/locations/${location.slug}`}
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-gold"
              >
                Explore {location.name} taxi service
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
