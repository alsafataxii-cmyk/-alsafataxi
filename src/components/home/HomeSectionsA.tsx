import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, Landmark, MapPin, Plane, Route } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { TaifIllustration } from "@/components/icons/LocationIllustrations";
import { jeddahPhoto, madinahPhoto } from "@/lib/content/airports-hub";
import { quickAnswers } from "@/lib/content/home-page";
import { getRoutePage } from "@/lib/content/routes";
import { siteConfig } from "@/lib/site-config";

const whatsapp = (text: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

const inline = "font-medium text-brand-primary underline underline-offset-2";

function Arrow() {
  return (
    <ArrowRight
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

/* Direct answer with quick facts */
export function AnswerBlock() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="What we do" title="Private Taxi & Transfers Across Western Saudi Arabia" />
          <p data-reveal className="text-lg leading-relaxed text-brand-dark/80">
            Al Safa Taxi provides private transportation across Makkah, Madinah, Jeddah and Taif. You
            can arrange an airport pickup, a hotel transfer, Umrah transportation, a Ziyarat trip, a
            city ride, a journey between the cities, or a private chauffeur for the day.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            Every ride is private: one vehicle and one driver for your group, chosen by passengers
            and luggage. It suits individuals, families and groups, travellers with heavy bags,
            pilgrims and business visitors.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            You send your trip details, we confirm the vehicle and the price before you travel, and
            your driver meets you at an agreed point. Roads near the Haram in Makkah and the
            Prophet&apos;s Mosque in Madinah can be restricted, so we plan the drop-off with you in
            advance.
          </p>
        </div>

        <dl className="flex flex-col gap-3">
          {quickAnswers.map((item) => (
            <div key={item.q} data-reveal className="border border-brand-gray bg-white p-4">
              <dt className="text-sm font-semibold text-brand-dark">{item.q}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-brand-dark/70">
                {item.a}{" "}
                <Link href={item.href} className={inline}>
                  {item.link}
                </Link>
                .
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Band>
  );
}

/* Service selector: a bento grid, not six identical cards */
export function ServiceSelector() {
  const jeddah = jeddahPhoto("terminal-exterior-night");

  return (
    <Band tone="sand">
      <SectionHeading eyebrow="Our services" title="What Do You Need?" />

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Link
          href="/services/airport-transfers"
          data-reveal
          className="card-lift group relative flex min-h-64 flex-col justify-end overflow-hidden border border-brand-gray bg-brand-dark p-7 lg:col-span-2"
        >
          <Image
            src={jeddah.src}
            alt={jeddah.alt}
            width={jeddah.width}
            height={jeddah.height}
            loading="lazy"
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" aria-hidden="true" />
          <div className="relative flex flex-col gap-2">
            <Plane className="h-7 w-7 text-brand-gold" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-white">Airport Transfer</h3>
            <p className="max-w-md text-sm leading-relaxed text-white/75">Arriving at JED, MED or TIF?</p>
            <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold">
              Airport Transfers <Arrow />
            </span>
          </div>
        </Link>

        <Link
          href="/umrah-transportation"
          data-reveal
          className="card-lift group flex flex-col justify-between gap-6 border border-brand-primary bg-brand-primary p-7"
        >
          <Landmark className="h-7 w-7 text-brand-gold" aria-hidden="true" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white">Umrah Transportation</h3>
            <p className="text-sm leading-relaxed text-white/75">
              Need transport throughout your Umrah journey?
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold">
              Umrah Transportation <Arrow />
            </span>
          </div>
        </Link>

        <Link
          href="/services/ziyarat-tours"
          data-reveal
          className="card-lift group flex flex-col gap-3 border border-brand-gray bg-white p-6"
        >
          <MapPin className="h-6 w-6 text-brand-primary" aria-hidden="true" />
          <h3 className="text-xl font-bold text-brand-dark">Ziyarat</h3>
          <p className="text-sm leading-relaxed text-brand-dark/70">
            Want to visit historical places in Makkah or Madinah?
          </p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            Ziyarat Tours <Arrow />
          </span>
        </Link>

        <Link
          href="/services/intercity-transfers"
          data-reveal
          className="card-lift group flex flex-col gap-3 border border-brand-gray bg-white p-6"
        >
          <Route className="h-6 w-6 text-brand-primary" aria-hidden="true" />
          <h3 className="text-xl font-bold text-brand-dark">Intercity</h3>
          <p className="text-sm leading-relaxed text-brand-dark/70">
            Traveling between Makkah, Madinah, Jeddah or Taif?
          </p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            Intercity Transfers <Arrow />
          </span>
        </Link>

        <Link
          href="/services/hotel-transfers"
          data-reveal
          className="card-lift group flex flex-col gap-3 border border-brand-gray bg-white p-6"
        >
          <Building2 className="h-6 w-6 text-brand-primary" aria-hidden="true" />
          <h3 className="text-xl font-bold text-brand-dark">Hotel Transfer</h3>
          <p className="text-sm leading-relaxed text-brand-dark/70">
            Airport, hotel or hotel-to-hotel transportation.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            Hotel Transfers <Arrow />
          </span>
        </Link>

        <Link
          href="/services/private-chauffeur"
          data-reveal
          className="card-lift group flex flex-col gap-3 border border-brand-gray bg-white p-6 sm:flex-row sm:items-center sm:justify-between lg:col-span-3"
        >
          <div className="flex items-center gap-4">
            <Briefcase className="h-6 w-6 shrink-0 text-brand-primary" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold text-brand-dark">Private Chauffeur</h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                Need a driver for several hours or a full day?
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            Private Chauffeur <Arrow />
          </span>
        </Link>
      </div>
    </Band>
  );
}

/* Airport hub */
export function AirportHub() {
  const jeddah = jeddahPhoto("concourse-white-arches");
  const madinah = madinahPhoto("check-in-counters-e1");

  const airports = [
    {
      code: "JED",
      name: "Jeddah Airport",
      full: "King Abdulaziz International Airport",
      to: ["Jeddah", "Makkah", "Madinah", "Taif"],
      note: "The busiest gateway, and the one most Umrah travellers use. Pilgrim and regular flights can arrive at different terminals, so your airline tells you where you will come out.",
      cta: "Jeddah Airport Transfers",
      href: "/airports/jeddah-airport",
      image: jeddah,
    },
    {
      code: "MED",
      name: "Madinah Airport",
      full: "Prince Mohammad bin Abdulaziz International Airport",
      to: ["Madinah hotels", "Makkah", "Jeddah"],
      note: "Close to the city. The hard part is the last stretch to a hotel near the Prophet's Mosque, and Ziyarat can be added on the day you land.",
      cta: "Madinah Airport Transfers",
      href: "/airports/madinah-airport",
      image: madinah,
    },
    {
      code: "TIF",
      name: "Taif Airport",
      full: "Taif International Airport",
      to: ["Taif", "Makkah", "Jeddah"],
      note: "A smaller airport for visitors to the highlands. Flights are fewer, so tell us early if your time changes.",
      cta: "Taif Airport Transfers",
      href: "/airports/taif-airport",
      image: null,
    },
  ];

  return (
    <Band>
      <SectionHeading
        eyebrow="Airports"
        title="Airport Transfers in Western Saudi Arabia"
        description="Makkah does not have a commercial passenger airport, so many Makkah-bound travellers arrive through Jeddah Airport."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {airports.map((airport) => (
          <Link
            key={airport.code}
            href={airport.href}
            data-reveal
            className="card-lift group flex flex-col overflow-hidden border border-brand-gray bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-beige">
              {airport.image ? (
                <Image
                  src={airport.image.src}
                  alt={airport.image.alt}
                  width={airport.image.width}
                  height={airport.image.height}
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <TaifIllustration className="h-full w-full" />
              )}
              <span className="absolute left-3 top-3 bg-brand-dark px-3 py-1 text-sm font-bold tracking-widest text-brand-gold">
                {airport.code}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div>
                <h3 className="text-xl font-bold text-brand-dark">{airport.name}</h3>
                <p className="text-xs text-brand-dark/60">{airport.full}</p>
              </div>
              <p className="text-sm text-brand-dark/70">
                <span className="font-semibold text-brand-dark">Private transfers to: </span>
                {airport.to.join(", ")}
              </p>
              <p className="text-sm leading-relaxed text-brand-dark/65">{airport.note}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                {airport.cta} <Arrow />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div data-reveal className="mt-10 flex flex-col gap-4 border border-brand-gray bg-brand-beige/60 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-brand-dark">Not sure which airport transfer you need?</h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-brand-dark/75">
            Send us your flight number, airport, hotel and destination and we&apos;ll confirm the
            practical pickup and vehicle. See all three on the{" "}
            <Link href="/airports" className={inline}>
              airports page
            </Link>
            .
          </p>
        </div>
        <Button href={whatsapp("Hello Al Safa Taxi, here are my flight details for an airport transfer:")} variant="primary" className="shrink-0">
          Send My Flight Details
        </Button>
      </div>
    </Band>
  );
}

/* Umrah */
const journey = ["Airport", "Hotel", "Makkah", "Ziyarat", "Madinah", "Airport"];

const umrahRoutes: { slug: string; from: string; to: string }[] = [
  { slug: "jeddah-airport-to-makkah", from: "Jeddah Airport", to: "Makkah" },
  { slug: "jeddah-airport-to-madinah", from: "Jeddah Airport", to: "Madinah" },
  { slug: "makkah-to-madinah", from: "Makkah", to: "Madinah" },
  { slug: "madinah-to-makkah", from: "Madinah", to: "Makkah" },
];

export function UmrahSection() {
  return (
    <Band tone="dark">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading
            tone="light"
            eyebrow="Umrah"
            title="Private Umrah Transportation in Makkah & Madinah"
          />
          <p data-reveal className="text-base leading-relaxed text-white/75">
            An Umrah trip is usually several journeys, not one. We arrange each of them, and you can
            book them together or one at a time as your plans settle: the airport transfer, hotel
            moves, the road between Makkah and Madinah, Ziyarat, a stop at a miqat when you ask for
            it, and the return to the airport.
          </p>
          <p data-reveal className="text-base leading-relaxed text-white/75">
            We keep to the transport side. For rituals and rules, follow your tour operator or
            scholar.
          </p>
          <div data-reveal>
            <Button href="/umrah-transportation" variant="gold">
              Plan My Umrah Transportation
            </Button>
          </div>
        </div>

        <ol data-reveal className="flex flex-wrap content-start items-center gap-2 self-center">
          {journey.map((stop, index) => (
            <li key={`${stop}-${index}`} className="inline-flex items-center gap-2">
              <span className="border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white">
                {stop}
              </span>
              {index < journey.length - 1 ? (
                <ArrowRight className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-4 text-sm leading-relaxed text-white/70 md:grid-cols-2">
        <li data-reveal className="border-l-2 border-brand-gold pl-4">
          <span className="font-semibold text-white">The arrival.</span> Most Umrah travellers land at Jeddah, then drive to Makkah. Send your flight number and Makkah hotel and we plan the pickup around your actual arrival.
        </li>
        <li data-reveal className="border-l-2 border-brand-gold pl-4">
          <span className="font-semibold text-white">The road to Madinah.</span> A long drive, so we size the vehicle for your bags and plan stops for prayer and rest, with a miqat stop when you ask for it.
        </li>
        <li data-reveal className="border-l-2 border-brand-gold pl-4">
          <span className="font-semibold text-white">Ziyarat in between.</span> Add it on a day you are already travelling, or give it a morning of its own in Makkah or Madinah.
        </li>
        <li data-reveal className="border-l-2 border-brand-gold pl-4">
          <span className="font-semibold text-white">The way home.</span> Bags are heavier on the return, so tell us the count when you book the drive to the airport.
        </li>
      </ul>

      <div className="mt-14">
        <h3 data-reveal className="text-xl font-bold text-white">Popular Umrah routes</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {umrahRoutes.map((route) => {
            const page = getRoutePage(route.slug);
            return (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                data-reveal
                className="group flex flex-col gap-2 border border-white/15 bg-white/5 p-5 transition-colors hover:border-brand-gold"
              >
                <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white">
                  {route.from}
                  <ArrowRight className="h-4 w-4 text-brand-gold transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  {route.to}
                </p>
                <p className="text-sm text-brand-gold">{page?.distance.replace("Roughly", "Approximately")}</p>
                <p className="text-xs leading-relaxed text-white/60">{page?.duration}</p>
              </Link>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-white/50">
          Distances and times are approximate and depend on traffic, the exact pickup and any stops.
        </p>
      </div>
    </Band>
  );
}

/* Ziyarat */
const makkahPlaces = ["Jabal al-Noor", "Jabal Thawr", "Mina", "Arafat", "Muzdalifah", "Jannat al-Mu'alla"];
const madinahPlaces = ["Quba Mosque", "Masjid al-Qiblatain", "Mount Uhud", "Seven Mosques / Al-Khandaq", "Masjid al-Ghamama"];

export function ZiyaratSection() {
  return (
    <Band tone="sand">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="Ziyarat" title="Private Ziyarat Tours in Makkah & Madinah" />
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            A private vehicle and a driver, a route you choose, and a driver who waits while you
            visit. Some places involve climbing, so tell us who is travelling and we plan what is
            realistic.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            Ziyarat can be added to an airport transfer or a hotel move, or booked for a morning of its
            own. We provide the transport; the page on Ziyarat explains each place, how much walking it
            involves and how to plan a morning in each city.
          </p>
          <div data-reveal>
            <Button href="/services/ziyarat-tours" variant="primary">
              Explore Ziyarat Tours
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div data-reveal className="border border-brand-gray bg-white p-5">
            <h3 className="text-base font-bold text-brand-dark">Makkah</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {makkahPlaces.map((place) => (
                <li key={place} className="bg-brand-beige px-2.5 py-1 text-xs font-medium text-brand-dark/80">
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="border border-brand-gray bg-white p-5">
            <h3 className="text-base font-bold text-brand-dark">Madinah</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {madinahPlaces.map((place) => (
                <li key={place} className="bg-brand-beige px-2.5 py-1 text-xs font-medium text-brand-dark/80">
                  {place}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Band>
  );
}

