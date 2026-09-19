import { services } from "@/lib/data";
import { airportPages } from "@/lib/content/airports";
import { locationPages } from "@/lib/content/locations";
import { routePages } from "@/lib/content/routes";
import type { LinkItem } from "@/lib/content/types";
import type { RelatedGroup } from "@/components/ui/RelatedLinks";

export const umrahHref = "/umrah-transportation";

export function serviceLinks(slugs: string[]): LinkItem[] {
  return slugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service
      ? [{ label: service.title, href: `/services/${slug}`, description: service.description }]
      : [];
  });
}

export function locationLinks(slugs: string[]): LinkItem[] {
  return slugs.flatMap((slug) => {
    const location = locationPages.find((item) => item.slug === slug);
    return location
      ? [{ label: `${location.name} Taxi Service`, href: `/locations/${slug}` }]
      : [];
  });
}

export function airportLinks(slugs: string[]): LinkItem[] {
  return slugs.flatMap((slug) => {
    const airport = airportPages.find((item) => item.slug === slug);
    return airport
      ? [{ label: `${airport.city} Airport Taxi (${airport.code})`, href: `/airports/${slug}` }]
      : [];
  });
}

export function routeLinks(slugs: string[]): LinkItem[] {
  return slugs.flatMap((slug) => {
    const route = routePages.find((item) => item.slug === slug);
    return route
      ? [
          {
            label: `${route.from} to ${route.to} Taxi`,
            href: `/routes/${slug}`,
            description: `${route.distance} · ${route.duration}`,
          },
        ]
      : [];
  });
}

export const umrahLink: LinkItem = {
  label: "Umrah Transportation",
  href: umrahHref,
  description: "Airport, hotel, Makkah to Madinah and Ziyarat for your Umrah trip.",
};

type RelatedInput = {
  services?: string[];
  locations?: string[];
  airports?: string[];
  routes?: string[];
  includeUmrah?: boolean;
};

export function buildRelated({
  services: serviceSlugs = [],
  locations = [],
  airports = [],
  routes = [],
  includeUmrah = false,
}: RelatedInput): RelatedGroup[] {
  const services: LinkItem[] = [...serviceLinks(serviceSlugs)];
  if (includeUmrah) services.push(umrahLink);

  return [
    { title: "Services", links: services },
    {
      title: "Places",
      links: [...locationLinks(locations), ...airportLinks(airports)],
    },
    { title: "Popular Routes", links: routeLinks(routes) },
  ];
}
