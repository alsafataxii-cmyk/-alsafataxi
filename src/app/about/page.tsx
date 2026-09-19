import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import ReviewButton from "@/components/ui/ReviewButton";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { locationPages } from "@/lib/content/locations";
import { services } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "About Our Private Taxi & Transfer Service",
  description:
    "Al Safa Taxi provides private taxi, airport transfer, Umrah and Ziyarat transportation across Makkah, Madinah, Jeddah and Taif.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Private Transportation, Built on Trust"
        description="Al Safa Taxi provides private transportation for travellers and residents across Makkah, Madinah, Jeddah and Taif."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Who We Are" title="Safe Journeys, Greater Destinations" />
              <p className="text-base leading-relaxed text-brand-dark/70">
                {siteConfig.name} is a private transportation service focused on the Western
                Region of Saudi Arabia. We arrange airport transfers, Umrah transportation,
                Ziyarat tours, city rides and journeys between Makkah, Madinah, Jeddah and Taif.
              </p>
              <p className="text-base leading-relaxed text-brand-dark/70">
                Our approach is simple: understand your plans, confirm the vehicle and price
                before you travel, and be available when you need us. Our booking line is open 24
                hours a day.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-brand-dark">Business details</h2>
              <dl className="divide-y divide-brand-gray border-y border-brand-gray text-sm">
                {[
                  { label: "Business", value: siteConfig.legalName },
                  { label: "Owner", value: siteConfig.owner },
                  { label: "Service area", value: "Makkah, Madinah, Jeddah and Taif" },
                  { label: "Phone / WhatsApp", value: siteConfig.phone },
                  { label: "Email", value: siteConfig.email },
                  { label: "Booking line", value: siteConfig.hours },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                    <dt className="w-40 shrink-0 font-semibold text-brand-dark">{row.label}</dt>
                    <dd className="text-brand-dark/70 [overflow-wrap:anywhere]">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <h2 className="mt-6 text-lg font-semibold text-brand-dark">Where we work</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {locationPages.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="block border border-brand-gray p-5 transition-colors hover:border-brand-gold"
                    >
                      <span className="block font-semibold text-brand-dark">{location.name}</span>
                      <span className="mt-1 block text-sm text-brand-dark/60">
                        {location.tagline}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray/40">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Private Transportation for Visitors and Residents"
            description="We arrange the journeys that pilgrims, families, business travellers and residents make between the airports, hotels and cities of the Western Region."
          />
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block border border-brand-gray bg-white p-5 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/umrah-transportation"
                className="block border border-brand-gray bg-white p-5 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-gold"
              >
                Umrah Transportation
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <WhyChooseUs eyebrow="Our Commitment" title="Why Choose Al Safa Taxi" />

      <section className="bg-white">
        <div className="mx-auto flex max-w-8xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-brand-dark">Travelled With Us?</h2>
            <p className="mt-2 text-base leading-relaxed text-brand-dark/70">
              Your feedback helps other travellers choose with confidence and helps us improve.
              Tell us how your journey went by leaving a review on Trustpilot.
            </p>
          </div>
          <ReviewButton variant="primary" className="shrink-0" />
        </div>
      </section>

      <CTASection
        title="Experience the Al Safa Standard"
        description="Book your next ride in Makkah, Madinah, Jeddah or Taif and tell us how we can help."
      />
    </>
  );
}
