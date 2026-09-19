import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/ui/DetailPage";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { buildRelated } from "@/lib/content/links";
import { airportPages, getAirportPage } from "@/lib/content/airports";

export const dynamicParams = false;

export function generateStaticParams() {
  return airportPages.map((airport) => ({ slug: airport.slug }));
}

type PageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getAirportPage(slug);
  if (!page) return {};

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/airports/${slug}`,
  });
}

export default async function AirportDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const page = getAirportPage(slug);
  if (!page) notFound();

  const otherAirports = airportPages.map((item) => item.slug).filter((item) => item !== slug);

  return (
    <DetailPage
      eyebrow={`${page.name} · ${page.code}`}
      h1={page.h1}
      heroDescription={page.heroDescription}
      breadcrumbs={[
        { label: "Airports", href: "/airports" },
        { label: `${page.city} Airport`, href: `/airports/${slug}` },
      ]}
      intro={page.intro}
      sections={page.sections}
      facts={page.facts}
      factsTitle={`${page.code} at a Glance`}
      related={buildRelated({
        services: ["airport-transfers", "hotel-transfers", "intercity-transfers"],
        locations: [page.locationSlug],
        airports: otherAirports,
        routes: page.routeSlugs,
        includeUmrah: page.locationSlug !== "taif",
      })}
      faqs={page.faqs}
      faqTitle={`${page.city} Airport Transfer FAQs`}
      schema={serviceSchema({
        name: `${page.city} Airport Taxi and Transfers`,
        description: page.metaDescription,
        path: `/airports/${slug}`,
        areas: [page.city],
      })}
      ctaTitle={`Book Your ${page.city} Airport Transfer`}
      ctaDescription="Share your flight details and destination and we will confirm the vehicle and price before you travel."
    />
  );
}
