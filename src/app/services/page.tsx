import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import { services } from "@/lib/data";
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
        title="Transportation Services for Every Journey"
        description="Whether you need a single airport pickup or ongoing transportation for your business, Al Safa Taxi has a service built for it."
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Service Tailored to You?"
        description="Talk to us to arrange a service that matches your schedule and destination."
      />
    </>
  );
}
