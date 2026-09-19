import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/ui/DetailPage";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { buildRelated } from "@/lib/content/links";
import { getLocationPage, locationPages } from "@/lib/content/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

type PageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) return {};

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/locations/${slug}`,
  });
}

export default async function LocationDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) notFound();

  const otherLocations = locationPages.map((item) => item.slug).filter((item) => item !== slug);
  const isHolyCity = slug === "makkah" || slug === "madinah";

  return (
    <DetailPage
      eyebrow={`${page.name} · ${page.tagline}`}
      h1={page.h1}
      heroDescription={page.heroDescription}
      breadcrumbs={[
        { label: "Locations", href: "/locations" },
        { label: page.name, href: `/locations/${slug}` },
      ]}
      intro={page.intro}
      sections={page.sections}
      facts={page.facts}
      factsTitle={`${page.name} at a Glance`}
      related={buildRelated({
        services: isHolyCity
          ? ["airport-transfers", "ziyarat-tours", "hotel-transfers", "city-taxi"]
          : ["airport-transfers", "city-taxi", "intercity-transfers", "private-chauffeur"],
        locations: otherLocations,
        airports: page.airportSlug ? [page.airportSlug] : [],
        routes: page.routeSlugs,
        includeUmrah: slug !== "taif",
      })}
      faqs={page.faqs}
      faqTitle={`${page.name} Taxi FAQs`}
      schema={serviceSchema({
        name: `${page.name} Taxi Service`,
        description: page.metaDescription,
        path: `/locations/${slug}`,
        areas: [page.name],
      })}
      ctaTitle={`Book a Taxi in ${page.name}`}
      ctaDescription="Tell us your pickup, destination and travel date and we will confirm your vehicle. Our booking line is open 24 hours a day."
    />
  );
}
