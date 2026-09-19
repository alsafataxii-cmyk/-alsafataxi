import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data";
import { locationPages } from "@/lib/content/locations";
import { airportPages } from "@/lib/content/airports";
import { routePages } from "@/lib/content/routes";

export const dynamic = "force-static";

type Entry = { path: string; priority: number };

const entries: Entry[] = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/umrah-transportation", priority: 0.9 },
  ...services.map((service) => ({ path: `/services/${service.slug}`, priority: 0.8 })),
  { path: "/locations", priority: 0.8 },
  ...locationPages.map((location) => ({ path: `/locations/${location.slug}`, priority: 0.8 })),
  { path: "/airports", priority: 0.8 },
  ...airportPages.map((airport) => ({ path: `/airports/${airport.slug}`, priority: 0.8 })),
  { path: "/routes", priority: 0.7 },
  ...routePages.map((route) => ({ path: `/routes/${route.slug}`, priority: 0.7 })),
  { path: "/fleet", priority: 0.6 },
  { path: "/about", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/book", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return entries.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
