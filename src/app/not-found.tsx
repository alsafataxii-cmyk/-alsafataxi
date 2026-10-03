import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Taxi Services", href: "/services" },
  { label: "Umrah Transportation", href: "/umrah-transportation" },
  { label: "Airport Transfers", href: "/airports" },
  { label: "Taxi Locations", href: "/locations" },
  { label: "Popular Routes", href: "/routes" },
  { label: "Our Fleet", href: "/fleet" },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        description="The page you are looking for does not exist or has moved. These pages may help."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-4 px-4 py-20 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-brand-gray p-6 font-semibold text-brand-dark transition-colors hover:border-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
      <CTASection
        title="Need a Taxi Now?"
        description="Call or message us and we will arrange your ride. Our booking line is open around the clock."
      />
    </>
  );
}
