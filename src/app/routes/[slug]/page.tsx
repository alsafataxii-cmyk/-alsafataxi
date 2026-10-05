import { jeddahAirportPagePhotos } from "@/lib/content/jeddah-airport-images";
import { kaabaNightImage } from "@/lib/content/images";
import { ctaLines } from "@/lib/content/cta-lines";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/ui/DetailPage";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { buildRelated } from "@/lib/content/links";
import { getRoutePage, routePages } from "@/lib/content/routes";
import { locationPages } from "@/lib/content/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return routePages.map((route) => ({ slug: route.slug }));
}

type PageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getRoutePage(slug);
  if (!page) return {};

  return pageMetadata({
    title: `${page.from} to ${page.to} Taxi | Private Transfer`,
    description: page.metaDescription,
    path: `/routes/${slug}`,
  });
}

export default async function RouteDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const page = getRoutePage(slug);
  if (!page) notFound();

  const label = `${page.from} to ${page.to}`;
  const photos = jeddahAirportPagePhotos[`routes/${slug}`];
  const involvesHolyCity = slug.includes("makkah") || slug.includes("madinah");

  return (
    <DetailPage
      eyebrow={`${page.distance} · ${page.duration}`}
      h1={page.h1}
      heroDescription={page.heroDescription}
      path={`/routes/${slug}`}
      breadcrumbs={[
        { label: "Routes", href: "/routes" },
        { label, href: `/routes/${slug}` },
      ]}
      intro={page.intro}
      figure={slug === "jeddah-airport-to-makkah" ? kaabaNightImage : undefined}
      galleryTitle={photos?.galleryTitle}
      gallery={photos?.gallery}
      sections={page.sections}
      facts={[
        { label: "From", value: page.from },
        { label: "To", value: page.to },
        { label: "Distance", value: page.distance },
        { label: "Typical journey time", value: page.duration },
      ]}
      factsTitle="Route at a Glance"
      related={buildRelated({
        services: page.serviceSlugs,
        locations: page.locationSlugs,
        airports: page.airportSlug ? [page.airportSlug] : [],
        routes: page.relatedRouteSlugs,
        includeUmrah: involvesHolyCity,
      })}
      faqs={page.faqs}
      faqTitle={`${label} Taxi FAQs`}
      schema={serviceSchema({
        name: `${label} Taxi`,
        description: page.metaDescription,
        path: `/routes/${slug}`,
        areas: page.locationSlugs.flatMap((location) => {
          const match = locationPages.find((item) => item.slug === location);
          return match ? [match.name] : [];
        }),
      })}
      ctaTitle={`Book Your ${label} Taxi`}
      ctaDescription={ctaLines[`routes/${slug}`]}
    />
  );
}
