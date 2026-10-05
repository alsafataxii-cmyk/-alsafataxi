import Link from "next/link";
import { ArrowRight, Check, Mountain, Plane } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ZiyaratPlanner from "@/components/ziyarat/ZiyaratPlanner";
import { MadinahIllustration, MakkahIllustration } from "@/components/icons/LocationIllustrations";
import VehiclePhoto from "@/components/ui/VehiclePhoto";
import { fleetClassPhotos } from "@/lib/content/fleet-models";
import { fleet } from "@/lib/data";
import { madinahSites, makkahSites, type ZiyaratSite } from "@/lib/content/ziyarat-page";
import { siteConfig } from "@/lib/site-config";

const whatsapp = (text: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

const inline = "font-medium text-brand-primary underline underline-offset-2";

/* Direct answer and city selector */
export function AnswerAndCities() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="At a glance" title="Private Ziyarat Tours in Makkah & Madinah" />
          <p data-reveal className="text-lg leading-relaxed text-brand-dark/80">
            Ziyarat means visiting the historical and religious places connected with Islamic
            history. In Makkah and Madinah those places are spread across the cities and the land
            around them, and a few are on hillsides.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            A private vehicle lets you plan the route around the time you have, move between stops
            in comfort and avoid finding a new taxi at every place. You tell us where you want to
            go; the driver follows the plan and waits while you visit.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            One distinction matters: Al Safa Taxi provides transportation, not religious guidance.
            The descriptions on this page say what each place is traditionally associated with, so
            you can choose where to go. For anything about how to visit, follow your scholar or
            tour operator.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="sr-only">Choose your city</h2>
          <a
            href="#makkah-ziyarat"
            data-reveal
            className="card-lift group flex items-center gap-5 border border-brand-gray bg-white p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          >
            <div className="w-28 shrink-0 overflow-hidden border border-brand-gray">
              <MakkahIllustration className="aspect-[160/100] w-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-brand-dark">Makkah Ziyarat</h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                Two mountains with caves, the places of the Hajj rites, and the historic cemetery.
              </p>
              <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                Explore Makkah Ziyarat
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </a>
          <a
            href="#madinah-ziyarat"
            data-reveal
            className="card-lift group flex items-center gap-5 border border-brand-gray bg-white p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          >
            <div className="w-28 shrink-0 overflow-hidden border border-brand-gray">
              <MadinahIllustration className="aspect-[160/100] w-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-brand-dark">Madinah Ziyarat</h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                Quba, the two qiblas, Uhud, the Seven Mosques area and a good morning of short stops.
              </p>
              <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                Explore Madinah Ziyarat
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </Band>
  );
}

function SiteCard({ site }: { site: ZiyaratSite }) {
  return (
    <article data-reveal className="card-lift flex flex-col gap-3 border border-brand-gray bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug text-brand-dark">{site.name}</h3>
        <span className="shrink-0 bg-brand-beige px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-dark/70">
          {site.tag}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-brand-dark/75">{site.about}</p>
      <p className="text-sm leading-relaxed text-brand-dark/70">{site.practical}</p>
      <div className="mt-auto flex flex-col gap-2 border-t border-brand-gray pt-3 text-sm">
        <p
          className={`inline-flex items-center gap-2 font-semibold ${
            site.effort === "climb" ? "text-brand-gold" : "text-brand-primary"
          }`}
        >
          {site.effort === "climb" ? (
            <Mountain className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Check className="h-4 w-4" aria-hidden="true" />
          )}
          {site.effortLabel}
        </p>
        <p className="text-brand-dark/60">
          <span className="font-semibold text-brand-dark/80">Best for:</span> {site.bestFor}
        </p>
      </div>
    </article>
  );
}

/* Makkah */
export function MakkahSection() {
  return (
    <Band tone="sand">
      <div id="makkah-ziyarat" className="scroll-mt-28">
        <SectionHeading eyebrow="Makkah" title="Makkah Ziyarat by Private Car" />
        <p data-reveal className="mt-5 max-w-3xl text-base leading-relaxed text-brand-dark/75">
          Visitors to Makkah commonly ask about several historical places in and around the city.
          The practical route depends on how much time your group has, the weather, and how much
          walking or climbing everyone can manage.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {makkahSites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>

      <div data-reveal className="mt-10 grid grid-cols-1 gap-6 border border-brand-gray bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr]">
        <h3 className="text-2xl font-bold leading-tight text-brand-dark">
          How to Plan a Makkah Ziyarat Morning
        </h3>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-brand-dark/75">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
            Jabal al-Noor and Jabal Thawr involve climbing, so they suit an early start before the
            heat, and they ask more of everyone than a normal stop.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
            Mina, Arafat and Muzdalifah can be grouped into one route where access conditions allow.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
            Families with children, older travellers and anyone with limited mobility should tell us
            before booking, so we plan places that are realistic for the group.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
            We cannot promise that every place is open or reachable on a given day; the order may
            change on the morning.
          </li>
        </ul>
      </div>
    </Band>
  );
}

/* Madinah */
const flow = [
  "Hotel pickup",
  "Quba Mosque",
  "Masjid al-Qiblatain",
  "Mount Uhud and the cemetery",
  "Seven Mosques / Al-Khandaq",
  "Masjid al-Ghamama",
  "Optional dates market",
  "Back to the hotel",
];

export function MadinahSection() {
  return (
    <Band>
      <div id="madinah-ziyarat" className="scroll-mt-28">
        <SectionHeading eyebrow="Madinah" title="Madinah Ziyarat by Private Car" />
        <p data-reveal className="mt-5 max-w-3xl text-base leading-relaxed text-brand-dark/75">
          Madinah has several important historical and religious places spread across different
          parts of the city. A private car makes it easier to move between them without waiting for
          separate taxis. For getting around the city outside a Ziyarat route, see our{" "}
          <Link href="/locations/madinah" className={inline}>
            Madinah taxi service
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {madinahSites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div data-reveal className="border border-brand-gray bg-brand-beige/60 p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-brand-dark">Planning a Madinah Ziyarat Morning</h3>
          <ol className="mt-5 flex flex-wrap gap-2 text-sm">
            {flow.map((step, index) => (
              <li key={step} className="inline-flex items-center gap-2 border border-brand-gray bg-white px-3 py-2">
                <span className="text-xs font-bold text-brand-gold">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-brand-dark/75">
            This is a common flow, not the only correct route. The order can change depending on
            your hotel, traffic, prayer times, site access and how long your group wants to stay at
            each stop.
          </p>
        </div>

        <div data-reveal className="flex flex-col gap-3 border border-brand-gray bg-white p-6 sm:p-8">
          <h3 className="text-xl font-bold text-brand-dark">Add a Dates Market Stop</h3>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Many visitors ask for a dates market on the way back to the hotel. If time and the
            route allow, we add it. We do not send groups to one fixed market, so tell us if you
            have a preference.
          </p>
        </div>
      </div>

      <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
        <Button href={whatsapp("Hello Al Safa Taxi, I would like a Ziyarat quote for Madinah.")} variant="primary">
          Get a Ziyarat Quote
        </Button>
        <p className="text-sm text-brand-dark/60">
          Going on to Makkah afterwards? See{" "}
          <Link href="/routes/madinah-to-makkah" className={inline}>
            Madinah to Makkah
          </Link>
          .
        </p>
      </div>
    </Band>
  );
}

/* How it works */
const steps = [
  { n: "01", title: "Tell us your city", copy: "Makkah or Madinah. Each has its own places and its own route." },
  { n: "02", title: "Choose your places", copy: "Tell us the sites you want to visit, or ask us to suggest a route." },
  { n: "03", title: "We plan the practical route", copy: "The route is set around travel time, traffic, access and the needs of your group." },
  { n: "04", title: "Your driver takes you between stops", copy: "The driver waits according to the arrangement agreed while you visit each place." },
];

export function ProcessSteps() {
  return (
    <Band tone="sand">
      <SectionHeading eyebrow="The process" title="How Your Ziyarat Trip Works" />
      <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.n} data-reveal className="border border-brand-gray bg-white p-6 shadow-sm">
            <span className="text-4xl font-bold text-brand-gold/70">{step.n}</span>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{step.copy}</p>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-8 max-w-3xl border-l-4 border-brand-gold bg-white p-5">
        <h3 className="text-base font-semibold text-brand-dark">How long does a Ziyarat tour take?</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-brand-dark/75">
          There is no single fixed duration. A short itinerary with a few stops takes less time,
          while routes with more places, climbing or longer visits take more. Tell us the places
          you want to see and we can suggest a practical schedule.
        </p>
      </div>
    </Band>
  );
}

/* Planner */
export function PlannerSection() {
  return (
    <Band>
      <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <SectionHeading
          eyebrow="Your plan"
          title="Build Your Own Ziyarat Route"
          description="Not every group wants the same itinerary. Choose the stops, tell us who is coming and send it as a request."
        />
        <ul data-reveal className="grid grid-cols-1 gap-2 text-sm text-brand-dark/75 sm:grid-cols-2">
          {[
            "Three or four major stops",
            "A short morning trip",
            "A longer private tour",
            "Family-friendly stops",
            "Less walking",
            "A dates or shopping stop",
            "Ziyarat with another transfer",
          ].map((item) => (
            <li key={item} className="flex gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ZiyaratPlanner />
    </Band>
  );
}

/* Arrival day and airport combination */
const combos = [
  { from: "Madinah Airport", via: "Ziyarat", to: "Hotel" },
  { from: "Hotel", via: "Ziyarat", to: "Makkah" },
  { from: "Hotel", via: "Ziyarat", to: "Airport" },
];

export function ArrivalAndAirport() {
  return (
    <Band tone="sand">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div data-reveal className="flex flex-col gap-4 border border-brand-gray bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Can You Do Ziyarat on Arrival Day?</h2>
          <p className="text-base leading-relaxed text-brand-dark/80">
            Yes, a Ziyarat trip can be planned around an arrival or departure day when timing
            allows. The practical itinerary depends on your flight, hotel check-in, luggage,
            traffic and how much time you want to spend at each location.
          </p>
          <p className="text-sm leading-relaxed text-brand-dark/70">
            Be honest about the day: after a long flight and immigration, tiredness and prayer times
            decide more than the schedule does, and daylight runs out. We would rather plan a
            shorter, comfortable trip than promise a full tour we cannot deliver.
          </p>
        </div>

        <div data-reveal className="flex flex-col gap-4 border border-brand-gray bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Add Ziyarat to Your Airport Transfer</h2>
          <ul className="flex flex-col gap-3">
            {combos.map((combo) => (
              <li key={`${combo.from}-${combo.to}`} className="flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-dark">
                <span className="bg-brand-beige px-3 py-1.5">{combo.from}</span>
                <ArrowRight className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                <span className="bg-brand-primary px-3 py-1.5 text-white">{combo.via}</span>
                <ArrowRight className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                <span className="bg-brand-beige px-3 py-1.5">{combo.to}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-brand-dark/70">
            Whether a combination fits depends on your flight time and the places you choose. Arriving
            at MED? See our{" "}
            <Link href="/airports/madinah-airport" className={inline}>
              Madinah Airport transfer
            </Link>
            , or{" "}
            <Link href="/services/airport-transfers" className={inline}>
              airport transfers
            </Link>{" "}
            in general.
          </p>
          <p className="flex items-center gap-2 text-xs text-brand-dark/50">
            <Plane className="h-3.5 w-3.5" aria-hidden="true" />
            Planned together, so the driver knows the whole day.
          </p>
        </div>
      </div>
    </Band>
  );
}

/* Elderly, children, heat */
export function GroupNeeds() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div data-reveal className="flex flex-col gap-4 border border-brand-gray bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
            Traveling With Parents or Older Family Members?
          </h2>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Ziyarat can involve walking, steps, heat, standing, waiting, and uneven or crowded
            ground. None of that rules it out, but it is worth planning for.
          </p>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Mention any mobility limitations before booking. We choose the vehicle from your
            passengers and luggage, and suggest the places that suit the group. Where a site
            involves significant climbing, the driver can take you as close as practical by road, but
            the final approach may still require walking.
          </p>
          <p className="text-sm text-brand-dark/60">
            We do not claim wheelchair access for every vehicle or site; tell us what you need and we
            will say what is possible.
          </p>
        </div>

        <div data-reveal className="flex flex-col gap-4 border border-brand-gray bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Traveling With Children?</h2>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-brand-dark/75">
            {[
              "Plan fewer stops than you think you need, and allow rest breaks.",
              "Carry water, and think about the heat before the climbs.",
              "Choose the vehicle by passengers and luggage together.",
              "Ask us before the day if you need a child seat, so we can tell you what is available.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Band>
  );
}

export function HeatAndEtiquette() {
  return (
    <Band tone="sand">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div data-reveal className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-brand-dark">Plan for Heat, Walking & Time Outdoors</h2>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Ziyarat usually involves more walking than visitors expect. Comfortable footwear, water
            and sun protection make a real difference, and so does appropriate clothing.
          </p>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Put the demanding sites earlier when you can, and allow extra time for older travellers.
          </p>
        </div>

        <div data-reveal className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-brand-dark">Dress & Visit Etiquette</h2>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Dress modestly and follow the instructions at each site. Rules on photography, entry,
            access and timings can change, so follow site staff or the authorities on the day.
          </p>
        </div>

        <div data-reveal className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-brand-dark">Keeping Your Group Together</h2>
          <ul className="flex flex-col gap-2 text-sm leading-relaxed text-brand-dark/75">
            {[
              "Agree a meeting point at each stop.",
              "Share the driver's number with two adults.",
              "Note the vehicle's colour, model and plate.",
              "Keep children with an adult.",
              "Stay near the agreed meeting area.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Band>
  );
}

/* Vehicles, private vs shared, pricing */
const vehicleUse: Record<string, string> = {
  "executive-sedan": "A couple or a small family with light luggage, on a morning of short stops.",
  "premium-suv": "Families with bags, or older passengers who want a roomier, easier seat.",
  "luxury-van": "Larger families and groups travelling together on one route.",
  "vip-chauffeur": "Guests who want a more formal day, including business visitors.",
};

export function VehiclesAndPricing() {
  return (
    <Band>
      <SectionHeading eyebrow="Vehicles" title="Which Vehicle Is Right for Your Ziyarat Trip?" />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {fleet.map((vehicle) => {
          const Icon = vehicle.icon;
          return (
            <div key={vehicle.slug} data-reveal className="card-lift flex flex-col gap-3 border border-brand-gray bg-white p-6">
              {fleetClassPhotos[vehicle.slug] ? (
                <VehiclePhoto image={fleetClassPhotos[vehicle.slug]} frameClassName="aspect-[16/10] w-full border-b border-brand-gray" />
              ) : (
                <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-primary text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
              <h3 className="text-lg font-bold text-brand-dark">{vehicle.name}</h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">{vehicleUse[vehicle.slug]}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-sm text-brand-dark/60">
        Seats and luggage space are on the{" "}
        <Link href="/fleet" className={inline}>
          fleet page
        </Link>
        . A Ziyarat day often adds bags, water and shopping, so choose with some room to spare.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div data-reveal className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Why Choose a Private Ziyarat Vehicle?</h2>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Private transport gives your group control over the things a fixed tour sets for you:
            when you leave, the order of the stops, how long you stay, when you rest, where the
            luggage goes and what your family needs on the day.
          </p>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            It is simply a different way of travelling. If you want a driver for several days, see{" "}
            <Link href="/services/private-chauffeur" className={inline}>
              private chauffeur
            </Link>
            ; for a whole pilgrimage, see{" "}
            <Link href="/umrah-transportation" className={inline}>
              Umrah transportation
            </Link>
            .
          </p>
        </div>

        <div data-reveal className="flex flex-col gap-4 border border-brand-gray bg-brand-beige/60 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">How Is a Private Ziyarat Tour Priced?</h2>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            We do not publish a standard price, because two Ziyarat days are rarely the same. The
            price depends on:
          </p>
          <ul className="grid grid-cols-1 gap-1.5 text-sm text-brand-dark/75 sm:grid-cols-2">
            {["The city", "The vehicle", "Number of passengers", "Duration", "Number of stops", "Pickup location", "The route", "Waiting time"].map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div>
            <Button href={whatsapp("Hello Al Safa Taxi, I would like a price for a private Ziyarat tour.")} variant="primary">
              Get a Ziyarat Quote
            </Button>
          </div>
        </div>
      </div>
    </Band>
  );
}

/* Related */
const related = [
  { title: "Services", links: [
    { label: "Airport transfers", href: "/services/airport-transfers" },
    { label: "City taxi", href: "/services/city-taxi" },
    { label: "Intercity transfers", href: "/services/intercity-transfers" },
    { label: "Private chauffeur", href: "/services/private-chauffeur" },
    { label: "Umrah transportation", href: "/umrah-transportation" },
  ] },
  { title: "Cities and airports", links: [
    { label: "Makkah taxi service", href: "/locations/makkah" },
    { label: "Madinah taxi service", href: "/locations/madinah" },
    { label: "Jeddah Airport (JED)", href: "/airports/jeddah-airport" },
    { label: "Madinah Airport (MED)", href: "/airports/madinah-airport" },
  ] },
  { title: "Routes", links: [
    { label: "Makkah to Madinah", href: "/routes/makkah-to-madinah" },
    { label: "Madinah to Makkah", href: "/routes/madinah-to-makkah" },
    { label: "Madinah Airport to Makkah", href: "/routes/madinah-airport-to-makkah" },
  ] },
];

export function RelatedLinks() {
  return (
    <Band tone="sand">
      <SectionHeading eyebrow="Keep planning" title="Services and Routes That Go With Ziyarat" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {related.map((group) => (
          <div key={group.title} data-reveal>
            <h3 className="border-b border-brand-gray pb-2 text-sm font-semibold uppercase tracking-wide text-brand-gold">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brand-dark/80 underline-offset-2 hover:text-brand-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Band>
  );
}
