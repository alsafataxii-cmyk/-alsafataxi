import { siteConfig } from "@/lib/site-config";
import { services, umrahService } from "@/lib/data";
import type { Faq } from "@/lib/content/types";
import { stripLinks } from "@/lib/content/rich-text";

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

const serviceAreas = ["Makkah", "Madinah", "Jeddah", "Taif"].map((name) => ({
  "@type": "City",
  name,
}));

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.png`,
    image: `${siteConfig.url}/brand/og-image.png`,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    sameAs: [siteConfig.trustpilotUrl, `https://wa.me/${siteConfig.whatsappNumber}`],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      addressCountry: "SA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      email: siteConfig.email,
    },
    areaServed: serviceAreas,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transportation Services",
      itemListElement: [...services, umrahService].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en",
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "en",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripLinks(faq.answer),
      },
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  areas?: string[];
};

export function serviceSchema({ name, description, path, areas }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: "Taxi and private transportation",
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: areas ? areas.map((area) => ({ "@type": "City", name: area })) : serviceAreas,
  };
}

export function collectionSchema({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: { name: string; href: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.href),
      })),
    },
  };
}
