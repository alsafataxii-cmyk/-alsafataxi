import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { jeddahPhoto, madinahPhoto, taifPhoto } from "@/lib/content/airports-hub";

function RouteChip({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-9 items-center gap-1.5 border border-brand-gray bg-white px-3 py-1.5 text-xs font-semibold text-brand-dark transition-colors hover:border-brand-gold hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
    >
      {children}
    </Link>
  );
}

function CardLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

/* Direct answer */
export function AnswerBlock() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="What we do" title="Airport Transfers We Provide" />
          <p data-reveal className="text-lg leading-relaxed text-brand-dark/80">
            Al Safa Taxi provides private airport transfers from Jeddah, Madinah and Taif airports.
            Depending on where you land, you can arrange a direct transfer to a hotel, or on to
            Makkah, Madinah, Jeddah or Taif.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            Every transfer is private: one vehicle and one driver for your group, sized to your
            passengers and bags. You send the flight details, we confirm the vehicle and the price
            before you travel, and the driver meets you at a point agreed in advance.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            Most visitors need only the airport leg. Others book the next journey at the same time,
            for example Jeddah Airport to Makkah and then Makkah to Madinah a few days later, so
            the whole trip is arranged by one team.
          </p>
        </div>
        <ul data-reveal className="flex flex-col gap-3 self-start border border-brand-gray bg-brand-beige/60 p-6 text-sm text-brand-dark/80">
          {[
            "Three airports: JED, MED and TIF",
            "Four cities: Makkah, Madinah, Jeddah and Taif",
            "Hotel, city or onward transfers from each airport",
            "Vehicles for individuals, families and groups",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

/* Airport selector: three cards, each with its own layout and content */
export function AirportSelector() {
  const jeddah = jeddahPhoto("concourse-white-arches");
  const madinah = madinahPhoto("check-in-counters-e1");
  const taif = taifPhoto("terminal-facade");

  return (
    <Band tone="sand">
      <SectionHeading
        eyebrow="Start here"
        title="Choose Your Airport"
        description="Select your arrival airport to see transfer options, destinations, travel information and booking details."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr]">
        {/* Jeddah: the featured card */}
        <article data-reveal className="card-lift group flex flex-col overflow-hidden border border-brand-gray bg-white lg:row-span-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={jeddah.src}
              alt={jeddah.alt}
              width={jeddah.width}
              height={jeddah.height}
              loading="lazy"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 bg-brand-dark px-3 py-1 text-sm font-bold tracking-widest text-brand-gold">
              JED
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-7">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark">Jeddah Airport</h3>
              <p className="text-sm text-brand-dark/60">King Abdulaziz International Airport</p>
            </div>
            <p className="text-sm leading-relaxed text-brand-dark/75">
              Jeddah Airport is the main arrival point for many travellers heading to Jeddah and
              Makkah, including Umrah passengers. Makkah has no commercial airport, so most
              Makkah-bound pilgrims land here and continue by road.
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Transfers from Jeddah Airport">
              <RouteChip href="/airports/jeddah-airport">Jeddah hotel</RouteChip>
              <RouteChip href="/routes/jeddah-airport-to-makkah">Makkah</RouteChip>
              <RouteChip href="/routes/jeddah-airport-to-madinah">Madinah</RouteChip>
              <RouteChip href="/routes/jeddah-to-taif">Taif</RouteChip>
            </div>
            <div className="mt-auto pt-2">
              <CardLink href="/airports/jeddah-airport">Jeddah Airport Transfers</CardLink>
            </div>
          </div>
        </article>

        {/* Madinah: photo beside the text */}
        <article data-reveal className="card-lift group grid overflow-hidden border border-brand-gray bg-white sm:grid-cols-[2fr_3fr]">
          <div className="relative min-h-44 overflow-hidden">
            <Image
              src={madinah.src}
              alt={madinah.alt}
              width={madinah.width}
              height={madinah.height}
              loading="lazy"
              sizes="(min-width: 640px) 220px, 100vw"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 bg-brand-dark px-3 py-1 text-sm font-bold tracking-widest text-brand-gold">
              MED
            </span>
          </div>
          <div className="flex flex-col gap-3 p-6">
            <div>
              <h3 className="text-xl font-bold text-brand-dark">Madinah Airport</h3>
              <p className="text-xs text-brand-dark/60">Prince Mohammad bin Abdulaziz International Airport</p>
            </div>
            <p className="text-sm leading-relaxed text-brand-dark/75">
              Serves visitors arriving in the Prophet&apos;s City, with private transfers to hotels
              around Al-Masjid an-Nabawi and onward journeys to Makkah and Jeddah. Ziyarat can be
              added on the day you land.
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Transfers from Madinah Airport">
              <RouteChip href="/airports/madinah-airport">Madinah hotel</RouteChip>
              <RouteChip href="/routes/madinah-airport-to-makkah">Makkah</RouteChip>
              <RouteChip href="/routes/madinah-to-jeddah">Jeddah</RouteChip>
            </div>
            <div className="mt-auto pt-1">
              <CardLink href="/airports/madinah-airport">Madinah Airport Transfers</CardLink>
            </div>
          </div>
        </article>

        {/* Taif: compact card with the Taif illustration */}
        <article data-reveal className="card-lift flex flex-col gap-4 border border-brand-gray bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-28 shrink-0 overflow-hidden border border-brand-gray">
              <Image
                src={taif.src}
                alt={taif.alt}
                fill
                
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-brand-dark px-3 py-1 text-sm font-bold tracking-widest text-brand-gold">
                TIF
              </span>
              <h3 className="mt-2 text-xl font-bold text-brand-dark">Taif Airport</h3>
              <p className="text-xs text-brand-dark/60">Taif International Airport</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            For visitors flying into the highlands. Private transfers from the airport to Taif,
            Makkah and Jeddah. With fewer flights than the other two airports, it helps to tell us
            early if your time changes.
          </p>
          <div className="flex flex-wrap gap-2" aria-label="Transfers from Taif Airport">
            <RouteChip href="/airports/taif-airport">Taif hotel</RouteChip>
            <RouteChip href="/routes/taif-airport-to-makkah">Makkah</RouteChip>
            <RouteChip href="/routes/taif-to-jeddah">Jeddah</RouteChip>
          </div>
          <div className="mt-auto pt-1">
            <CardLink href="/airports/taif-airport">Taif Airport Transfers</CardLink>
          </div>
        </article>
      </div>
    </Band>
  );
}

/* Comparison */
const comparison = [
  {
    airport: "Jeddah",
    href: "/airports/jeddah-airport",
    code: "JED",
    use: "Jeddah and Makkah, including most Umrah arrivals",
    transfer: "JED to Makkah",
    transferHref: "/routes/jeddah-airport-to-makkah",
  },
  {
    airport: "Madinah",
    href: "/airports/madinah-airport",
    code: "MED",
    use: "Madinah and the area around the Prophet's Mosque",
    transfer: "MED to a Madinah hotel",
    transferHref: "/airports/madinah-airport",
  },
  {
    airport: "Taif",
    href: "/airports/taif-airport",
    code: "TIF",
    use: "Taif and the highlands, with onward travel to Makkah",
    transfer: "TIF to Makkah",
    transferHref: "/routes/taif-airport-to-makkah",
  },
];

export function AirportComparison() {
  return (
    <Band>
      <SectionHeading eyebrow="Compare" title="Which Airport Are You Arriving At?" />
      <p data-reveal className="mt-4 max-w-2xl text-base leading-relaxed text-brand-dark/70">
        If your ticket is already booked, find your airport. If you are still choosing, pick the one
        closest to the city where your trip begins.
      </p>

      {/* Table on larger screens */}
      <div data-reveal className="mt-8 hidden border border-brand-gray md:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">Airports served and their most common transfer</caption>
          <thead className="bg-brand-dark text-white">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold">Airport</th>
              <th scope="col" className="px-5 py-3 font-semibold">Code</th>
              <th scope="col" className="px-5 py-3 font-semibold">Main arrival use</th>
              <th scope="col" className="px-5 py-3 font-semibold">Popular transfer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray bg-white">
            {comparison.map((row) => (
              <tr key={row.code} className="transition-colors hover:bg-brand-beige/50">
                <th scope="row" className="px-5 py-4 font-semibold">
                  <Link href={row.href} className="text-brand-primary underline-offset-2 hover:underline">
                    {row.airport}
                  </Link>
                </th>
                <td className="px-5 py-4 font-bold tracking-widest text-brand-gold">{row.code}</td>
                <td className="px-5 py-4 text-brand-dark/75">{row.use}</td>
                <td className="px-5 py-4">
                  <Link href={row.transferHref} className="font-medium text-brand-primary underline-offset-2 hover:underline">
                    {row.transfer}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards on small screens */}
      <div className="mt-8 flex flex-col gap-4 md:hidden">
        {comparison.map((row) => (
          <dl key={row.code} data-reveal className="flex flex-col gap-2 border border-brand-gray bg-white p-5 text-sm">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="sr-only">Airport</dt>
              <dd>
                <Link href={row.href} className="text-lg font-bold text-brand-primary">
                  {row.airport}
                </Link>
              </dd>
              <dt className="sr-only">Code</dt>
              <dd className="font-bold tracking-widest text-brand-gold">{row.code}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-dark/50">Main arrival use</dt>
              <dd className="text-brand-dark/75">{row.use}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-dark/50">Popular transfer</dt>
              <dd>
                <Link href={row.transferHref} className="font-medium text-brand-primary underline underline-offset-2">
                  {row.transfer}
                </Link>
              </dd>
            </div>
          </dl>
        ))}
      </div>
    </Band>
  );
}

/* Destination explorer */
const destinations = [
  {
    city: "Makkah",
    lead: "No airport of its own, so it is reached by road from all three.",
    primary: { label: "Airport Transfers to Makkah", href: "/routes/jeddah-airport-to-makkah" },
    links: [
      { label: "From Jeddah Airport", href: "/routes/jeddah-airport-to-makkah" },
      { label: "From Madinah Airport", href: "/routes/madinah-airport-to-makkah" },
      { label: "From Taif Airport", href: "/routes/taif-airport-to-makkah" },
    ],
  },
  {
    city: "Madinah",
    lead: "Straight from MED to your hotel, or by road from Jeddah.",
    primary: { label: "Airport Transfers to Madinah", href: "/airports/madinah-airport" },
    links: [
      { label: "From Madinah Airport", href: "/airports/madinah-airport" },
      { label: "From Jeddah Airport", href: "/routes/jeddah-airport-to-madinah" },
    ],
  },
  {
    city: "Jeddah",
    lead: "Hotels and addresses in the city, or the road back to JED.",
    primary: { label: "Airport Transfers to Jeddah", href: "/airports/jeddah-airport" },
    links: [
      { label: "From Jeddah Airport", href: "/airports/jeddah-airport" },
      { label: "From Madinah Airport", href: "/routes/madinah-to-jeddah" },
      { label: "From Taif Airport", href: "/routes/taif-to-jeddah" },
    ],
  },
  {
    city: "Taif",
    lead: "A short flight in, or a drive up from the coast.",
    primary: { label: "Airport Transfers to Taif", href: "/airports/taif-airport" },
    links: [
      { label: "From Taif Airport", href: "/airports/taif-airport" },
      { label: "From Jeddah", href: "/routes/jeddah-to-taif" },
    ],
  },
];

const origins = [
  { code: "JED", y: 62, to: ["Makkah", "Madinah", "Jeddah", "Taif"], color: "#0a4d36" },
  { code: "MED", y: 165, to: ["Madinah", "Makkah", "Jeddah"], color: "#c9a14a" },
  { code: "TIF", y: 268, to: ["Taif", "Makkah", "Jeddah"], color: "#0f2f23" },
];
const targets: Record<string, number> = { Makkah: 42, Madinah: 127, Jeddah: 212, Taif: 297 };

export function RouteDiagram() {
  return (
    <figure data-reveal className="border border-brand-gray bg-white p-5 sm:p-8">
      <svg
        viewBox="0 0 640 330"
        role="img"
        aria-labelledby="route-diagram-title route-diagram-desc"
        className="h-auto w-full"
      >
        <title id="route-diagram-title">Airports and the cities they connect to</title>
        <desc id="route-diagram-desc">
          Jeddah Airport connects to Makkah, Madinah, Jeddah and Taif. Madinah Airport connects to
          Madinah, Makkah and Jeddah. Taif Airport connects to Taif, Makkah and Jeddah.
        </desc>

        {origins.flatMap((origin) =>
          origin.to.map((city) => (
            <path
              key={`${origin.code}-${city}`}
              d={`M120 ${origin.y} C 320 ${origin.y}, 320 ${targets[city]}, 520 ${targets[city]}`}
              fill="none"
              stroke={origin.color}
              strokeWidth={2}
              strokeOpacity={0.55}
              strokeLinecap="round"
              pathLength={1}
              className="draw-line"
            />
          )),
        )}

        {origins.map((origin) => (
          <g key={origin.code}>
            <rect x={20} y={origin.y - 22} width={100} height={44} fill="#0f2f23" />
            <text x={70} y={origin.y + 6} textAnchor="middle" fill="#c9a14a" fontSize={18} fontWeight={700} letterSpacing={3}>
              {origin.code}
            </text>
          </g>
        ))}
        {Object.entries(targets).map(([city, y]) => (
          <g key={city}>
            <rect x={520} y={y - 22} width={110} height={44} fill="#f7f1e6" stroke="#e8ece6" />
            <text x={575} y={y + 5} textAnchor="middle" fill="#0f2f23" fontSize={15} fontWeight={600}>
              {city}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-5 grid grid-cols-1 gap-2 border-t border-brand-gray pt-4 text-xs text-brand-dark/70 sm:grid-cols-3">
        {origins.map((origin) => (
          <p key={origin.code}>
            <span className="font-bold text-brand-dark">{origin.code}</span>: {origin.to.join(", ")}
          </p>
        ))}
        <p className="sm:col-span-3 text-brand-dark/50">
          A schematic of the connections we arrange, not a map. Jeddah means hotels and addresses in
          the city.
        </p>
      </figcaption>
    </figure>
  );
}

export function DestinationExplorer() {
  return (
    <Band tone="sand">
      <SectionHeading
        eyebrow="After landing"
        title="Airport Transfer Options by Destination"
        description="Start from where you are going and see which airports connect to it."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((item) => (
          <article key={item.city} data-reveal className="card-lift flex flex-col gap-3 border border-brand-gray bg-white p-6">
            <h3 className="text-xl font-bold text-brand-dark">{item.city}</h3>
            <p className="text-sm leading-relaxed text-brand-dark/70">{item.lead}</p>
            <ul className="flex flex-col gap-1.5 text-sm">
              {item.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-brand-dark/80 underline-offset-2 hover:text-brand-primary hover:underline">
                    <Plane className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <CardLink href={item.primary.href}>{item.primary.label}</CardLink>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <RouteDiagram />
      </div>

      <div data-reveal className="mt-8">
        <Button href="/book" variant="primary">
          Plan My Airport Journey
        </Button>
      </div>
    </Band>
  );
}

/* Umrah */
const umrahRoutes = [
  {
    title: "Jeddah Airport to Makkah",
    copy: "The most common route for travellers going directly to Makkah, since the Holy City has no commercial airport.",
    href: "/routes/jeddah-airport-to-makkah",
  },
  {
    title: "Madinah Airport to Madinah",
    copy: "For pilgrims who begin in the Prophet's City and want to reach a hotel near the mosque.",
    href: "/airports/madinah-airport",
  },
  {
    title: "Madinah to Makkah",
    copy: "For pilgrims who continue to Makkah after their days in Madinah, from the hotel or the airport.",
    href: "/routes/madinah-to-makkah",
  },
  {
    title: "Taif Airport to Makkah",
    copy: "For travellers who arrive through Taif when the route suits their itinerary.",
    href: "/routes/taif-airport-to-makkah",
  },
];

export function UmrahAirports() {
  return (
    <Band tone="dark">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading
            tone="light"
            eyebrow="Umrah travel"
            title="Airport Transfers for Umrah Travelers"
          />
          <p data-reveal className="text-base leading-relaxed text-white/75">
            Which airport you use depends on your itinerary, not only on where Umrah begins. Some
            travellers land in Jeddah and go straight to Makkah. Others start in Madinah and travel
            on afterwards.
          </p>
          <p data-reveal className="text-base leading-relaxed text-white/75">
            We keep to the transport side: the right vehicle for your group and bags, and timing
            that works with your flight. For rituals and rules, follow your tour operator or
            scholar.
          </p>
          <div data-reveal>
            <Link href="/umrah-transportation" className="text-sm font-semibold text-white underline underline-offset-4 hover:text-brand-gold">
              Umrah transportation, start to finish
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {umrahRoutes.map((route) => (
            <li key={route.title} data-reveal className="flex flex-col gap-2 border border-white/15 bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">{route.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{route.copy}</p>
              <Link href={route.href} className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-brand-gold hover:underline">
                See this route <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}
