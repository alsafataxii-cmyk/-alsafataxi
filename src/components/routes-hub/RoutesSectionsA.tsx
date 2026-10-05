import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, Route as RouteIcon } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteFinder from "@/components/routes-hub/RouteFinder";
import { jeddahPhoto, madinahPhoto, taifPhoto } from "@/lib/content/airports-hub";
import {
  featured,
  itineraries,
  originOrder,
  routeNotes,
  umrahPatterns,
} from "@/lib/content/routes-hub";
import { getRoutePage, routePages } from "@/lib/content/routes";

const inline = "font-medium text-brand-primary underline underline-offset-2";
const dist = (text: string) => text.replace("Roughly", "Approx.");

function Arrow() {
  return (
    <ArrowRight
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

/* Hero */
const trust = ["Private vehicles", "Professional drivers", "Flexible pickup", "24/7 booking", "Makkah • Madinah • Jeddah • Taif"];

export function RoutesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="anim-drift absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-primary/40 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6">
          <span className="anim-fade-up inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="anim-line h-px w-8 bg-brand-gold" aria-hidden="true" />
            Popular taxi routes
          </span>
          <h1 className="anim-rise text-4xl font-bold leading-tight text-white sm:text-5xl">
            Taxi Routes Between Makkah, Madinah, Jeddah &amp; Taif
          </h1>
          <p className="anim-fade-up max-w-xl text-lg leading-relaxed text-white/75 [--delay:200ms]">
            Browse the common private taxi journeys between the main cities and airports of Western
            Saudi Arabia, with approximate distances, typical journey times and the practical points
            worth knowing before you book.
          </p>
          <div className="anim-fade-up flex flex-col gap-3 [--delay:350ms] sm:flex-row sm:items-center">
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
            </Button>
            <Button href="/airports" variant="outline-light" size="lg">
              Explore Airport Transfers
            </Button>
          </div>
        </div>

        <figure aria-hidden="true" className="anim-fade-up hidden border border-white/15 bg-white/5 p-6 [--delay:300ms] lg:block">
          <svg viewBox="0 0 320 220" className="h-auto w-full">
            <path d="M40 40 L160 110 L280 40 M160 110 L160 190" fill="none" stroke="#c9a14a" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />
            {[
              { x: 40, y: 40, t: "Madinah" },
              { x: 280, y: 40, t: "Taif" },
              { x: 160, y: 110, t: "Makkah" },
              { x: 160, y: 190, t: "Jeddah" },
            ].map((city) => (
              <g key={city.t}>
                <circle cx={city.x} cy={city.y} r="9" fill="#c9a14a" />
                <text x={city.x} y={city.y - 16} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">
                  {city.t}
                </text>
              </g>
            ))}
          </svg>
          <figcaption className="mt-2 text-center text-xs text-white/50">A schematic of how the cities connect, not a map.</figcaption>
        </figure>
      </div>

      <div className="border-t border-white/10 bg-brand-dark/70">
        <ul className="mx-auto flex max-w-8xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-sm text-white/85 sm:px-6 lg:px-8">
          {trust.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Direct answer */
export function DirectAnswer() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="At a glance" title="Popular Taxi Routes in Western Saudi Arabia" />
          <p data-reveal className="text-lg leading-relaxed text-brand-dark/80">
            Al Safa Taxi arranges private journeys between Makkah, Madinah, Jeddah and Taif, and
            transfers from Jeddah, Madinah and Taif airports. Common routes include Jeddah Airport to
            Makkah, Makkah to Madinah, Jeddah to Madinah, Makkah to Taif and Madinah to Jeddah.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            Journey times shown here are approximate, because traffic, pickup locations, road
            conditions, checkpoints and travel periods all affect the real journey.
          </p>
        </div>
        <dl data-reveal className="grid grid-cols-3 gap-3 self-start text-center">
          {[
            ["4", "cities"],
            ["3", "airports"],
            [String(routePages.length), "listed routes"],
          ].map(([n, l]) => (
            <div key={l} className="border border-brand-gray bg-brand-beige/60 p-4">
              <dt className="sr-only">{l}</dt>
              <dd className="text-3xl font-bold text-brand-primary">{n}</dd>
              <dd className="text-xs uppercase tracking-wide text-brand-dark/60">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Band>
  );
}

/* Route finder */
export function FinderSection() {
  return (
    <Band tone="sand">
      <SectionHeading eyebrow="Route finder" title="Find Your Route" description="Pick where you start and where you are going." />
      <div className="mt-8">
        <RouteFinder
          origins={originOrder}
          routes={routePages.map((route) => ({
            slug: route.slug,
            from: route.from,
            to: route.to,
            distance: route.distance,
            duration: route.duration,
          }))}
        />
      </div>
    </Band>
  );
}

/* Directory grouped by starting point */
export function RouteDirectory() {
  return (
    <Band>
      <SectionHeading
        eyebrow="All routes"
        title="Taxi Routes by Starting Point"
        description="Every listed route, grouped by where you start. Each links to its own page."
      />
      <div className="mt-10 flex flex-col gap-12">
        {originOrder.map((origin) => {
          const routes = routePages.filter((route) => route.from === origin);
          if (!routes.length) return null;
          return (
            <div key={origin}>
              <h3 data-reveal className="border-b border-brand-gray pb-3 text-2xl font-bold text-brand-dark">
                From {origin}
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {routes.map((route) => {
                  const note = routeNotes[route.slug];
                  return (
                    <li key={route.slug} data-reveal className="card-lift flex flex-col gap-3 border border-brand-gray bg-white p-5">
                      <h4 className="flex flex-wrap items-center gap-2 text-lg font-bold text-brand-dark">
                        {route.from}
                        <ArrowRight className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                        {route.to}
                      </h4>
                      <div className="flex flex-wrap gap-2 text-xs font-semibold">
                        <span className="inline-flex items-center gap-1.5 bg-brand-beige px-2.5 py-1 text-brand-dark">
                          <RouteIcon className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
                          {dist(route.distance)}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-brand-beige px-2.5 py-1 text-brand-dark">
                          <Clock className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
                          {route.duration}
                        </span>
                      </div>
                      {note ? (
                        <dl className="flex flex-col gap-2 text-sm leading-relaxed">
                          <div>
                            <dt className="font-semibold text-brand-dark">Good for</dt>
                            <dd className="text-brand-dark/70">{note.goodFor}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-brand-dark">Plan for</dt>
                            <dd className="text-brand-dark/70">{note.planFor}</dd>
                          </div>
                        </dl>
                      ) : null}
                      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                        <Link href={`/routes/${route.slug}`} className="group cta-chip">
                          View Route <Arrow />
                        </Link>
                        <Link href="/book" className="cta-chip-outline">
                          Book This Journey
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Band>
  );
}

/* Featured */
export function FeaturedRoutes() {
  return (
    <Band tone="sand">
      <SectionHeading eyebrow="Deciding" title="Most Popular Taxi Journeys" description="The directory is for finding a route. These notes are for choosing between them." />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((item, index) => {
          const page = getRoutePage(item.slug);
          return (
            <article key={item.slug} data-reveal className="card-lift group flex flex-col gap-3 border border-brand-gray bg-white p-6">
              <span className="text-4xl font-bold text-brand-gold/60">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-bold text-brand-dark">{item.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                {page ? `${dist(page.distance)} · ${page.duration}` : null}
              </p>
              <p className="text-sm leading-relaxed text-brand-dark/75">{item.why}</p>
              <Link href={`/routes/${item.slug}`} className="mt-auto cta-chip">
                {item.title} taxi <Arrow />
              </Link>
            </article>
          );
        })}
      </div>
    </Band>
  );
}

/* Umrah */
export function UmrahRoutes() {
  return (
    <Band tone="dark">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading tone="light" eyebrow="Umrah" title="Popular Routes for Umrah Travelers" />
          <p data-reveal className="text-base leading-relaxed text-white/75">
            These are the journey patterns we are asked for most. Plan yours around your own
            itinerary, your flights and any travel requirements that apply to you.
          </p>
          <p data-reveal className="text-base leading-relaxed text-white/75">
            We keep to the transport side. For rituals and rules, follow your tour operator or
            scholar. For the whole trip, see{" "}
            <Link href="/umrah-transportation" className="text-brand-gold underline underline-offset-2">
              Umrah transportation
            </Link>
            .
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {umrahPatterns.map((item) => (
            <li key={item.slug} data-reveal className="flex flex-col gap-2 border border-white/15 bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{item.copy}</p>
              <Link href={`/routes/${item.slug}`} className="mt-auto cta-chip-gold">
                {item.title} taxi <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

/* Itineraries */
export function Itineraries() {
  return (
    <Band>
      <SectionHeading eyebrow="Longer trips" title="How Travelers Combine These Routes" />
      <p data-reveal className="mt-5 max-w-3xl text-base leading-relaxed text-brand-dark/75">
        Many trips are not one transfer but a chain of them. These are examples, not fixed packages:
        you can request several private transfers as one wider itinerary, and we plan each leg
        around the one before it.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {itineraries.map((trip) => (
          <article key={trip.title} data-reveal className="flex flex-col gap-4 border border-brand-gray bg-white p-6">
            <h3 className="text-lg font-bold leading-snug text-brand-dark">{trip.title}</h3>
            <p className="text-sm leading-relaxed text-brand-dark/70">{trip.note}</p>
            <ol className="mt-auto flex flex-col gap-2 border-t border-brand-gray pt-4 text-sm">
              {trip.legs.map((leg, i) => (
                <li key={leg.slug} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center bg-brand-primary text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <Link href={`/routes/${leg.slug}`} className={inline}>
                    {leg.label}
                  </Link>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Band>
  );
}

/* Distance table */
export function DistanceTable() {
  return (
    <Band tone="sand">
      <SectionHeading eyebrow="Distances" title="How Far Are Makkah, Madinah, Jeddah & Taif?" />

      <div data-reveal className="mt-8 hidden border border-brand-gray bg-white md:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">Approximate distance and typical journey time for each route</caption>
          <thead className="bg-brand-dark text-white">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold">Route</th>
              <th scope="col" className="px-5 py-3 text-right font-semibold">Approx. distance</th>
              <th scope="col" className="px-5 py-3 text-right font-semibold">Typical time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray">
            {routePages.map((route) => (
              <tr key={route.slug} className="transition-colors hover:bg-brand-beige/50">
                <th scope="row" className="px-5 py-3 font-medium">
                  <Link href={`/routes/${route.slug}`} className="text-brand-primary underline-offset-2 hover:underline">
                    {route.from} to {route.to}
                  </Link>
                </th>
                <td className="px-5 py-3 text-right text-brand-dark/80">{dist(route.distance).replace("Approx. ", "")}</td>
                <td className="px-5 py-3 text-right text-brand-dark/80">{route.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-8 flex flex-col gap-3 md:hidden">
        {routePages.map((route) => (
          <li key={route.slug} className="border border-brand-gray bg-white p-4 text-sm">
            <Link href={`/routes/${route.slug}`} className="font-semibold text-brand-primary">
              {route.from} to {route.to}
            </Link>
            <p className="mt-1 text-brand-dark/70">
              {dist(route.distance)} · {route.duration}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-5 max-w-3xl border-l-4 border-brand-gold bg-white p-4 text-sm leading-relaxed text-brand-dark/75">
        Distances and journey times are approximate and can vary depending on traffic, time of day,
        exact pickup and drop-off locations, road conditions and travel periods.
      </p>
    </Band>
  );
}

/* Airport routes with photos */
export function AirportRoutes() {
  const airports = [
    {
      code: "JED",
      name: "Jeddah Airport",
      href: "/airports/jeddah-airport",
      image: jeddahPhoto("concourse-white-arches"),
      routes: ["jeddah-airport-to-makkah", "jeddah-airport-to-madinah", "makkah-to-jeddah-airport"],
    },
    {
      code: "MED",
      name: "Madinah Airport",
      href: "/airports/madinah-airport",
      image: madinahPhoto("check-in-counters-e1"),
      routes: ["madinah-airport-to-makkah"],
    },
    {
      code: "TIF",
      name: "Taif Airport",
      href: "/airports/taif-airport",
      image: taifPhoto("terminal-facade"),
      routes: ["taif-airport-to-makkah"],
    },
  ];

  return (
    <Band>
      <SectionHeading eyebrow="Airports" title="Airport Taxi Routes" description="King Abdulaziz International (JED), Prince Mohammad bin Abdulaziz International (MED) and Taif International (TIF)." />
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {airports.map((airport) => (
          <article key={airport.code} data-reveal className="card-lift group flex flex-col overflow-hidden border border-brand-gray bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={airport.image.src}
                alt={airport.image.alt}
                width={airport.image.width}
                height={airport.image.height}
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 bg-brand-dark px-3 py-1 text-sm font-bold tracking-widest text-brand-gold">
                {airport.code}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-xl font-bold text-brand-dark">
                <Link href={airport.href} className="hover:text-brand-primary">
                  {airport.name}
                </Link>
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm">
                {airport.routes.map((slug) => {
                  const page = getRoutePage(slug);
                  return (
                    <li key={slug}>
                      <Link href={`/routes/${slug}`} className={inline}>
                        {page?.from} to {page?.to}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href={airport.href} className="mt-auto cta-chip mt-1">
                {airport.name} transfers <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div data-reveal className="mt-8">
        <Button href="/airports" variant="primary">
          Explore All Airport Transfers
        </Button>
      </div>
    </Band>
  );
}
