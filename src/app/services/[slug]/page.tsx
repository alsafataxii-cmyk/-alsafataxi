import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/ui/DetailPage";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { buildRelated } from "@/lib/content/links";
import { getServicePage, servicePages } from "@/lib/content/services";
import { services } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

type PageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const service = services.find((item) => item.slug === slug);
  if (!page || !service) notFound();

  const otherServices = services.map((item) => item.slug).filter((item) => item !== slug);

  return (
    <DetailPage
      eyebrow={service.title}
      h1={page.h1}
      heroDescription={page.heroDescription}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${slug}` },
      ]}
      intro={page.intro}
      sections={page.sections}
      facts={page.facts}
      related={buildRelated({
        services: otherServices.slice(0, 4),
        locations: page.locationSlugs,
        airports: page.airportSlugs,
        routes: page.routeSlugs,
        includeUmrah: true,
      })}
      faqs={page.faqs}
      faqTitle={`${service.title} FAQs`}
      schema={serviceSchema({
        name: service.title,
        description: page.metaDescription,
        path: `/services/${slug}`,
      })}
      ctaTitle={`Book ${service.title}`}
      ctaDescription="Send your plans and we will confirm the vehicle and price before you travel. Our booking line is open 24 hours a day."
    />
  );
}
