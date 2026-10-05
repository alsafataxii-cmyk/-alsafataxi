import { jeddahAirportPagePhotos } from "@/lib/content/jeddah-airport-images";
import { ctaLines } from "@/lib/content/cta-lines";
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
  const photos = jeddahAirportPagePhotos[`airports/${slug}`];

  const otherAirports = airportPages.map((item) => item.slug).filter((item) => item !== slug);

  return (
    <DetailPage
      eyebrow={`${page.name} · ${page.code}`}
      h1={page.h1}
      heroDescription={page.heroDescription}
      path={`/airports/${slug}`}
      breadcrumbs={[
        { label: "Airports", href: "/airports" },
        { label: `${page.city} Airport`, href: `/airports/${slug}` },
      ]}
      intro={page.intro}
      figure={photos?.figure}
      galleryTitle={photos?.galleryTitle}
      gallery={photos?.gallery}
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
      ctaDescription={ctaLines[`airports/${slug}`]}
    />
  );
}
