import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import MobileContactBar from "@/components/ui/MobileContactBar";
import VehicleHero from "@/components/vehicle-routes/VehicleHero";
import { RenderBlock } from "@/components/vehicle-routes/Blocks";
import { getRoutePage } from "@/lib/content/routes";
import {
  getVehicleRoutePage,
  vehicleLabels,
  vehicleRoutePages,
} from "@/lib/content/vehicle-routes";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema, webPageSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return vehicleRoutePages.map((page) => ({ slug: page.route, vehicle: page.vehicle }));
}

type PageParams = { params: Promise<{ slug: string; vehicle: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug, vehicle } = await params;
  const page = getVehicleRoutePage(slug, vehicle);
  if (!page) return {};
  const share = page.heroImage ?? page.heroSideImage;
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/routes/${slug}/${vehicle}`,
    image: share ? { url: share.src, width: share.width, height: share.height, alt: share.alt } : undefined,
  });
}

export default async function VehicleRouteLanding({ params }: PageParams) {
  const { slug, vehicle } = await params;
  const page = getVehicleRoutePage(slug, vehicle);
  const route = getRoutePage(slug);
  if (!page || !route) notFound();

  const path = `/routes/${slug}/${vehicle}`;
  const vehicleLabel = vehicleLabels[page.vehicle];
  const ctx = {
    from: route.from,
    to: route.to,
    vehicle: vehicleLabel,
    airport: route.from.includes("Airport"),
  };

  return (
    <div className="has-mobile-bar">
      <JsonLd data={webPageSchema({ name: page.h1, description: page.metaDescription, path })} />
      <JsonLd
        data={serviceSchema({
          name: `${vehicleLabel} private transfer, ${route.from} to ${route.to}`,
          description: page.metaDescription,
          path,
          areas: Array.from(new Set([route.from.replace(" Airport", ""), route.to])),
        })}
      />

      <VehicleHero page={page} route={route} vehicleLabel={vehicleLabel} />
      <Breadcrumbs
        items={[
          { label: "Routes", href: "/routes" },
          { label: `${route.from} to ${route.to}`, href: `/routes/${slug}` },
          { label: vehicleLabel, href: path },
        ]}
      />

      {page.blocks.map((block, index) => (
        <RenderBlock key={`${block.type}-${index}`} block={block} ctx={ctx} />
      ))}

      <p className="mx-auto max-w-8xl px-4 pb-10 text-xs text-brand-dark/55 sm:px-6 lg:px-8">
        Distances and journey times are approximate and can vary with traffic, time of day, exact
        pickup and drop-off locations and travel conditions.
      </p>

      <MobileContactBar message={page.whatsappText} bookLabel={page.mobileCta} />
    </div>
  );
}
