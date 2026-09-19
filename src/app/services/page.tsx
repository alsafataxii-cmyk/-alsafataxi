import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";
import { serviceCards } from "@/lib/data";
import { servicesFaqs } from "@/lib/content/index-faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Taxi Services in Makkah, Madinah, Jeddah & Taif",
  description:
    "Airport transfers, Ziyarat tours, city taxi, intercity, chauffeur, hotel and business transportation in Makkah, Madinah, Jeddah and Taif. Book 24/7.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Taxi & Private Transportation Services in Makkah, Madinah, Jeddah & Taif"
        description="Whether you need a single airport pickup or ongoing transportation for your business, Al Safa Taxi has a service built for it."
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-5">
            <SectionHeading
              eyebrow="Our Services"
              title="Airport Transfers, Ziyarat, Intercity Travel & City Taxi"
            />
            <p className="text-base leading-relaxed text-brand-dark/70">
              Every service below is a private booking: you tell us where you are going and when,
              and we confirm the vehicle and price before you travel. Visitors usually start with
              an{" "}
              <Link
                href="/services/airport-transfers"
                className="font-semibold text-brand-primary underline"
              >
                airport transfer
              </Link>
              , add{" "}
              <Link
                href="/services/ziyarat-tours"
                className="font-semibold text-brand-primary underline"
              >
                Ziyarat tours
              </Link>{" "}
              or an{" "}
              <Link
                href="/services/intercity-transfers"
                className="font-semibold text-brand-primary underline"
              >
                intercity transfer
              </Link>{" "}
              between the Holy Cities, and finish with a departure transfer.
            </p>
            <p className="text-base leading-relaxed text-brand-dark/70">
              Travelling for Umrah? Our{" "}
              <Link
                href="/umrah-transportation"
                className="font-semibold text-brand-primary underline"
              >
                Umrah transportation
              </Link>{" "}
              page explains how the stages of a trip fit together, and our{" "}
              <Link href="/routes" className="font-semibold text-brand-primary underline">
                popular routes
              </Link>{" "}
              list shows distances and journey times between the cities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceCards.map(({ service, href }) => (
              <ServiceCard key={service.slug} service={service} href={href} detailed />
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={servicesFaqs} tone="gray" title="Taxi Services FAQs" />

      <CTASection
        title="Need a Service Tailored to You?"
        description="Talk to us to arrange a service that matches your schedule and destination."
      />
    </>
  );
}
