import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { pageMetadata } from "@/lib/seo";
import { routePages } from "@/lib/content/routes";

export const metadata: Metadata = pageMetadata({
  title: "Taxi Routes: Makkah, Madinah, Jeddah & Taif",
  description:
    "Private taxi routes between Makkah, Madinah, Jeddah, Taif and Jeddah Airport, with distances, journey times and booking information. Al Safa Taxi, 24/7.",
  path: "/routes",
});

export default function RoutesPage() {
  const origins = Array.from(new Set(routePages.map((route) => route.from)));

  return (
    <>
      <PageHero
        eyebrow="Popular Routes"
        title="Taxi Routes Between Makkah, Madinah, Jeddah & Taif"
        description="Distances, typical journey times and practical notes for the journeys our customers book most."
      />
      <Breadcrumbs items={[{ label: "Routes", href: "/routes" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {origins.map((origin) => (
              <div key={origin}>
                <SectionHeading eyebrow="From" title={`Taxi from ${origin}`} />
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {routePages
                    .filter((route) => route.from === origin)
                    .map((route) => (
                      <Link
                        key={route.slug}
                        href={`/routes/${route.slug}`}
                        className="group flex items-start justify-between gap-4 border border-brand-gray bg-white p-6 transition-colors hover:border-brand-gold"
                      >
                        <span>
                          <span className="block font-semibold text-brand-dark">
                            {route.from} to {route.to}
                          </span>
                          <span className="mt-1 block text-sm text-brand-dark/60">
                            {route.distance} · {route.duration}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-brand-dark/30 transition-colors group-hover:text-brand-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-3xl text-base leading-relaxed text-brand-dark/70">
            Distances and journey times are approximate and depend on traffic, the time of day and
            the exact pickup and drop-off points. Don&apos;t see your route? We arrange private
            journeys across Makkah, Madinah, Jeddah and Taif. Contact us and we will plan it with
            you.
          </p>
        </div>
      </section>

      <CTASection
        title="Need a Route Not Listed?"
        description="Tell us where you are travelling from and to and we will confirm the vehicle and price."
      />
    </>
  );
}
