import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { stats } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Al Safa Taxi provides premium private transportation across Makkah, Madinah, Jeddah and Taif, built on professional drivers, reliable vehicles and consistent service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Premium Transportation, Built on Trust"
        description="Al Safa Taxi was founded to bring a consistent, professional standard of private transportation to travelers and residents across Makkah, Madinah, Jeddah and Taif."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Our Story"
                title="Safe Journeys, Greater Destinations"
              />
              <p className="text-base leading-relaxed text-brand-dark/70">
                {siteConfig.name} was built around a simple idea: every ride should feel
                dependable, from the moment you book to the moment you arrive. What began
                as a small city taxi service has grown into a trusted network covering
                Makkah, Madinah, Jeddah and Taif.
              </p>
              <p className="text-base leading-relaxed text-brand-dark/70">
                Today, we serve residents, business travelers and visitors who expect
                punctuality, comfort and a professional driver they can trust — every
                time they book.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 border border-brand-gray p-6"
                >
                  <dt className="text-sm font-medium text-brand-dark/60">{stat.label}</dt>
                  <dd className="text-3xl font-bold text-brand-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <WhyChooseUs eyebrow="Our Commitment" title="What Guides Every Ride" />

      <CTASection
        title="Experience the Al Safa Standard"
        description="Book your next ride and see why riders across Makkah, Madinah, Jeddah and Taif trust us for premium transportation."
      />
    </>
  );
}
