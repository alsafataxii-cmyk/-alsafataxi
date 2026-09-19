import type { Metadata } from "next";
import DetailPage from "@/components/ui/DetailPage";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { buildRelated } from "@/lib/content/links";
import { umrahPage } from "@/lib/content/umrah";

export const metadata: Metadata = pageMetadata({
  title: umrahPage.metaTitle,
  description: umrahPage.metaDescription,
  path: "/umrah-transportation",
});

export default function UmrahTransportationPage() {
  return (
    <DetailPage
      eyebrow="Umrah Transportation"
      h1={umrahPage.h1}
      heroDescription={umrahPage.heroDescription}
      breadcrumbs={[{ label: "Umrah Transportation", href: "/umrah-transportation" }]}
      intro={umrahPage.intro}
      sections={umrahPage.sections}
      facts={umrahPage.facts}
      factsTitle="Umrah Transport at a Glance"
      related={buildRelated({
        services: umrahPage.serviceSlugs,
        locations: umrahPage.locationSlugs,
        airports: umrahPage.airportSlugs,
        routes: umrahPage.routeSlugs,
      })}
      faqs={umrahPage.faqs}
      faqTitle="Umrah Transportation FAQs"
      schema={serviceSchema({
        name: "Umrah Transportation",
        description: umrahPage.metaDescription,
        path: "/umrah-transportation",
        areas: ["Jeddah", "Makkah", "Madinah", "Taif"],
      })}
      ctaTitle="Plan Your Umrah Transportation"
      ctaDescription="Tell us your flights, hotels and dates and we will help plan each stage of your trip. Our booking line is open 24 hours a day."
    />
  );
}
