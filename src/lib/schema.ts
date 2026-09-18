import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.png`,
    image: `${siteConfig.url}/brand/og-image.png`,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
    areaServed: ["Makkah", "Madinah", "Jeddah", "Taif"].map((name) => ({
      "@type": "City",
      name,
    })),
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
      itemListElement: services.map((service) => ({
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
