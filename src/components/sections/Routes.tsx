import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { routeLinks } from "@/lib/content/links";

const popularRoutes = [
  "jeddah-airport-to-makkah",
  "jeddah-to-makkah",
  "makkah-to-madinah",
  "madinah-to-makkah",
  "jeddah-to-madinah",
  "madinah-to-jeddah",
  "makkah-to-jeddah",
  "makkah-to-taif",
  "jeddah-to-taif",
];

export default function Routes() {
  const links = routeLinks(popularRoutes);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Popular Routes"
            title="Popular Taxi Routes Between Makkah, Madinah, Jeddah & Taif"
            description="The journeys our customers book most, with distances and typical journey times."
          />
          <Button href="/routes" variant="outline-dark" className="shrink-0">
            View All Routes
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start justify-between gap-4 border border-brand-gray bg-white p-6 transition-colors hover:border-brand-gold"
            >
              <span>
                <span className="block font-semibold text-brand-dark">{link.label}</span>
                <span className="mt-1 block text-sm text-brand-dark/60">{link.description}</span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-brand-dark/30 transition-colors group-hover:text-brand-gold"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
