import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import FleetCard from "@/components/ui/FleetCard";
import SectionHeading from "@/components/ui/SectionHeading";
import VehicleSelector from "@/components/home/VehicleSelector";
import { locationIllustrations } from "@/components/icons/LocationIllustrations";
import { getRoutePage } from "@/lib/content/routes";
import { fleet } from "@/lib/data";

const inline = "font-medium text-brand-primary underline underline-offset-2";

/* Cities: each card has its own context */
const cities = [
  {
    slug: "makkah",
    name: "Makkah Taxi Service",
    copy: "Hotels around the Haram, where cars may have to stop short of the door; Umrah runs and Ziyarat; and the roads to Jeddah, Madinah and Taif.",
  },
  {
    slug: "madinah",
    name: "Madinah Taxi Service",
    copy: "Arrivals at MED, hotels near the Prophet's Mosque, a morning of Ziyarat, then on to Makkah or Jeddah.",
  },
  {
    slug: "jeddah",
    name: "Jeddah Taxi Service",
    copy: "The usual gateway: pickups at JED, rides across a long coastal city, and the road out to Makkah, Madinah and Taif.",
  },
  {
    slug: "taif",
    name: "Taif Taxi Service",
    copy: "Cooler air in the mountains: transfers from TIF, city rides and sightseeing, and the drive down to Makkah or Jeddah.",
  },
];

export function CityCoverage() {
  return (
    <Band>
      <SectionHeading eyebrow="Where we drive" title="Taxi Services Across Makkah, Madinah, Jeddah & Taif" />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((city) => {
          const Illustration = locationIllustrations[city.slug];
          return (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              data-reveal
              className="card-lift group flex flex-col overflow-hidden border border-brand-gray bg-white"
            >
              <div className="overflow-hidden border-b border-brand-gray bg-brand-beige">
                {Illustration ? <Illustration className="aspect-[160/100] w-full" /> : null}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-bold text-brand-dark">{city.name}</h3>
                <p className="text-sm leading-relaxed text-brand-dark/70">{city.copy}</p>
                <span className="mt-auto cta-chip">
                  See {city.slug.charAt(0).toUpperCase() + city.slug.slice(1)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Band>
  );
}

/* Other popular routes (the Umrah routes are shown above) */
const routeList: { slug: string; from: string; to: string }[] = [
  { slug: "jeddah-to-makkah", from: "Jeddah", to: "Makkah" },
  { slug: "makkah-to-jeddah", from: "Makkah", to: "Jeddah" },
  { slug: "jeddah-to-madinah", from: "Jeddah", to: "Madinah" },
  { slug: "madinah-to-jeddah", from: "Madinah", to: "Jeddah" },
  { slug: "makkah-to-taif", from: "Makkah", to: "Taif" },
  { slug: "jeddah-to-taif", from: "Jeddah", to: "Taif" },
];

export function PopularRoutes() {
  return (
    <Band tone="sand">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Routes"
          title="Popular Taxi Routes"
          description="More of the journeys between the cities, with approximate distances and times."
        />
        <Button href="/routes" variant="outline-dark" className="shrink-0">
          View All Routes
        </Button>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {routeList.map((route) => {
          const page = getRoutePage(route.slug);
          return (
            <li key={route.slug} data-reveal>
              <Link
                href={`/routes/${route.slug}`}
                className="card-lift group flex items-center justify-between gap-4 border border-brand-gray bg-white p-5"
              >
                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-2 text-base font-bold text-brand-dark">
                    {route.from}
                    <ArrowRight className="h-4 w-4 text-brand-gold transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    {route.to}
                  </p>
                  <p className="text-sm text-brand-dark/70">
                    {page?.distance.replace("Roughly", "Approximately")}
                  </p>
                </div>
                <p className="max-w-[9rem] text-right text-xs leading-snug text-brand-dark/60">{page?.duration}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-sm text-brand-dark/60">
        Planning a longer trip? The{" "}
        <Link href="/services/intercity-transfers" className={inline}>
          intercity transfers
        </Link>{" "}
        page explains stops and comfort on the long roads.
      </p>
    </Band>
  );
}

/* Fleet */
export function FleetSection() {
  return (
    <Band>
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Our fleet"
          title="Vehicles for Individuals, Families & Groups"
          description="We choose the vehicle from your passengers, your luggage and the length of the journey, not from the number of seats alone."
        />
        <Button href="/fleet" variant="outline-dark" className="shrink-0">
          View Our Fleet
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fleet.map((vehicle) => (
          <FleetCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>

      <div className="mt-14">
        <h3 data-reveal className="mb-6 text-2xl font-bold text-brand-dark">
          Which vehicle suits your group?
        </h3>
        <VehicleSelector />
        <p data-reveal className="mt-6 max-w-3xl text-sm leading-relaxed text-brand-dark/65">
          The classes above are made up of models such as a Toyota Camry, GMC Yukon XL or Hyundai Staria; the
          fleet page shows them with photos. Larger groups can travel in a Toyota Hiace or Coaster. Which
          vehicle is assigned depends on the date and availability, and we confirm it before you travel.
        </p>
      </div>
    </Band>
  );
}

/* What you can expect */
const expect = [
  { title: "Professional drivers", copy: "A driver arranged for your trip, who knows the local roads." },
  { title: "Clear booking", copy: "We confirm the vehicle and the price before you travel." },
  { title: "Pickup planned from your details", copy: "Flight, hotel and passenger information is used to plan the trip." },
  { title: "Suitable vehicles", copy: "Cars, SUVs and vans for individuals, families and groups." },
  { title: "Direct communication", copy: "Call or message us on WhatsApp, with no booking platform in between." },
  { title: "Regional coverage and 24/7 booking", copy: "Makkah, Madinah, Jeddah and Taif, with the booking line open around the clock." },
];

export function WhatToExpect() {
  return (
    <Band tone="sand">
      <SectionHeading eyebrow="Why Al Safa Taxi" title="What You Can Expect" />
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expect.map((item) => (
          <li key={item.title} data-reveal className="flex gap-4 border border-brand-gray bg-white p-5">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
            <div>
              <h3 className="text-base font-semibold text-brand-dark">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-dark/70">{item.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </Band>
  );
}

/* Practical notes */
const notes = [
  {
    title: "Hotels near the holy mosques",
    copy: "Streets around the Haram in Makkah and the Prophet's Mosque in Madinah can be restricted, and some are pedestrian only. A car may stop a short walk from your hotel entrance. Send the exact hotel name before you travel and we confirm the closest practical drop-off, so you are not looking for it with your bags.",
    href: "/services/hotel-transfers",
    link: "Hotel transfers",
  },
  {
    title: "Travelling with parents or children",
    copy: "A long flight, a slow immigration queue and a late check-in are hard on older relatives and young children. Tell us who is travelling, and whether anyone needs help with steps or a child seat, and we plan the vehicle and the meeting point around them.",
    href: "/fleet",
    link: "Choose a vehicle",
  },
  {
    title: "Luggage decides the vehicle",
    copy: "Pilgrims often leave with more than they arrived with: gifts, dates and Zamzam containers. Count every bag, including hand luggage, because a vehicle that seats six people may not carry six people's suitcases.",
    href: "/airports",
    link: "Airport transfers",
  },
  {
    title: "The long roads between the cities",
    copy: "Makkah to Madinah is about 450 km, and a stop for prayer, food or rest is part of the journey, not a delay. Say at booking where you would like to stop and we build it into the plan, along with a miqat stop if you want one.",
    href: "/services/intercity-transfers",
    link: "Intercity transfers",
  },
];

export function PracticalNotes() {
  return (
    <Band>
      <SectionHeading
        eyebrow="Before you travel"
        title="Practical Notes for Your Trip"
        description="Small details that decide whether a journey in this region is calm or stressful."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {notes.map((note) => (
          <article key={note.title} data-reveal className="flex flex-col gap-3 border border-brand-gray bg-white p-6">
            <h3 className="text-lg font-bold text-brand-dark">{note.title}</h3>
            <p className="text-sm leading-relaxed text-brand-dark/75">{note.copy}</p>
            <Link href={note.href} className="mt-auto cta-chip">
              {note.link}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </Band>
  );
}

/* Booking steps */
const steps = [
  {
    n: "01",
    title: "Send your trip details",
    copy: "Pickup, destination, date, passengers, luggage, and a flight number when an airport is involved.",
  },
  {
    n: "02",
    title: "Confirm vehicle and price",
    copy: "We recommend a vehicle and quote the price for your trip.",
  },
  { n: "03", title: "Confirm the pickup", copy: "We agree the time and the meeting point with you." },
  { n: "04", title: "Meet your driver", copy: "Your driver collects you and completes the journey." },
];

export function BookingSteps() {
  return (
    <Band>
      <SectionHeading eyebrow="Booking" title="How Booking Works" />
      <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.n} data-reveal className="border border-brand-gray bg-white p-6 shadow-sm">
            <span className="text-4xl font-bold text-brand-gold/70">{step.n}</span>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{step.copy}</p>
          </li>
        ))}
      </ol>
    </Band>
  );
}

/* Business and chauffeur */
export function BusinessChauffeur() {
  return (
    <Band tone="sand">
      <div data-reveal className="grid grid-cols-1 gap-6 border border-brand-gray bg-white p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Business & Private Chauffeur Travel</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-dark/75">
            A dedicated driver for airport pickups, meetings and events, several stops in one day, or
            hours and days at a time. Tell us the schedule, the stops and the times that matter, and we plan the day around it, with the driver waiting between meetings so you are not booking a new ride each time. See{" "}
            <Link href="/services/business-transportation" className={inline}>
              business transportation
            </Link>{" "}
            for companies and delegations.
          </p>
        </div>
        <div className="lg:text-right">
          <Button href="/services/private-chauffeur" variant="primary">
            Private Chauffeur
          </Button>
        </div>
      </div>
    </Band>
  );
}
