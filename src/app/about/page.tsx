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

      <section className="bg-white">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-4">
            <SectionHeading eyebrow="Booking" title="How a Booking Works" />
            <ol className="mt-4 flex list-decimal flex-col gap-3 pl-5 text-base leading-relaxed text-brand-dark/70">
              <li>
                You send the pickup, the destination, the date and time, the number of passengers
                and bags, and the flight number if it is an airport pickup.
              </li>
              <li>We reply with the vehicle that fits and the price, before you travel.</li>
              <li>
                Your driver meets you at the agreed time and place. If your plans change, message
                us on WhatsApp or call.
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <SectionHeading eyebrow="Good to Know" title="What We Can and Cannot Promise" />
            <ul className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-brand-dark/70">
              <li>
                We arrange transport. For questions about the rites of Umrah, follow your group
                leader or a qualified scholar.
              </li>
              <li>
                Journey times are estimates. Traffic, prayer times, Fridays and the Umrah and Hajj
                seasons change them.
              </li>
              <li>
                Vehicle access near the Masjid al-Haram and Al-Masjid an-Nabawi is restricted and
                changes with the crowds, so the drop-off may be a short walk from your hotel.
              </li>
              <li>Entry to Makkah is restricted to Muslims.</li>
            </ul>
          </div>
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
