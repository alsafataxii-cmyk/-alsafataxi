import { MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import FaqSection from "@/components/ui/FaqSection";
import JsonLd from "@/components/ui/JsonLd";
import MobileContactBar from "@/components/ui/MobileContactBar";
import {
  AirportRoutes,
  DirectAnswer,
  DistanceTable,
  FeaturedRoutes,
  FinderSection,
  Itineraries,
  RouteDirectory,
  RoutesHero,
  UmrahRoutes,
} from "@/components/routes-hub/RoutesSectionsA";
import {
  ChooseByLength,
  FamilyAndPrivate,
  FlightGuidance,
  NotListed,
  SeasonsAndPlanning,
  WhyTimesVary,
} from "@/components/routes-hub/RoutesSectionsB";
import { routePages } from "@/lib/content/routes";
import { routesHubFaqs } from "@/lib/content/routes-hub";
import { collectionSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const path = "/routes";
const description =
  "Private taxi routes between Makkah, Madinah, Jeddah, Taif and Jeddah Airport, with distances, journey times and booking information. Al Safa Taxi, 24/7.";

export default function RoutesHubPage() {
  return (
    <div className="has-mobile-bar">
      <JsonLd
        data={webPageSchema({
          name: "Taxi Routes Between Makkah, Madinah, Jeddah & Taif",
          description,
          path,
        })}
      />
      <JsonLd
        data={collectionSchema({
          name: "Taxi Routes",
          description: "Private taxi routes between Makkah, Madinah, Jeddah, Taif and their airports.",
          path,
          items: routePages.map((route) => ({
            name: `${route.from} to ${route.to} Taxi`,
            href: `/routes/${route.slug}`,
          })),
        })}
      />

      <RoutesHero />
      <Breadcrumbs items={[{ label: "Routes", href: path }]} />

      <DirectAnswer />
      <FinderSection />
      <RouteDirectory />
      <FeaturedRoutes />
      <UmrahRoutes />
      <Itineraries />
      <DistanceTable />
      <WhyTimesVary />
      <AirportRoutes />
      <ChooseByLength />
      <FamilyAndPrivate />
      <FlightGuidance />
      <SeasonsAndPlanning />
      <NotListed />
      <FaqSection faqs={routesHubFaqs} tone="gray" title="Taxi Route FAQs" />

      <section className="relative overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-gold/5" />
        </div>
        <div className="relative mx-auto flex max-w-8xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div data-reveal className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Need a Route Not Listed?</h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us where you&apos;re travelling from, where you&apos;re going, your travel date,
              passenger count and luggage details. We&apos;ll confirm whether the journey can be
              arranged and provide the appropriate vehicle and price.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex w-fit items-center gap-2 text-lg font-semibold text-white hover:text-brand-gold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
          <div data-reveal className="flex flex-col gap-4 sm:flex-row">
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <MobileContactBar message="Hello Al Safa Taxi, I would like to book a private taxi journey." />
    </div>
  );
}
