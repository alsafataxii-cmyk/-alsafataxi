import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import VehiclePhoto from "@/components/ui/VehiclePhoto";
import { fleetClassPhotos } from "@/lib/content/fleet-models";
import { siteConfig } from "@/lib/site-config";

const whatsapp = (text: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

/* How it works */
const steps = [
  {
    n: "01",
    title: "Send your flight details",
    copy: "The airport, flight number, arrival date and time, passengers, luggage and where you are going.",
  },
  {
    n: "02",
    title: "Confirm vehicle and price",
    copy: "We choose the vehicle from your passenger count and luggage, and confirm the price before you travel.",
  },
  {
    n: "03",
    title: "Receive pickup instructions",
    copy: "The meeting point is confirmed according to the airport and the arrangements for your booking.",
  },
  {
    n: "04",
    title: "Meet your driver",
    copy: "Your driver takes you and your luggage straight to your hotel or the agreed destination.",
  },
];

export function TransferSteps() {
  return (
    <Band>
      <SectionHeading eyebrow="The process" title="How Your Airport Transfer Works" />
      <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.n} data-reveal className="border border-brand-gray bg-white p-6 shadow-sm">
            <span className="text-4xl font-bold text-brand-gold/70">{step.n}</span>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{step.copy}</p>
          </li>
        ))}
      </ol>
      <div data-reveal className="mt-8">
        <Button href={whatsapp("Hello Al Safa Taxi, here are my airport flight details:")} variant="primary">
          Send My Flight Details
        </Button>
      </div>
    </Band>
  );
}

/* Checklist */
const checklist = [
  "Airport (Jeddah, Madinah or Taif)",
  "Flight number",
  "Arrival date",
  "Arrival time",
  "Hotel or destination",
  "Number of passengers",
  "Number of luggage pieces",
  "Vehicle preference, if any",
  "Child seat requirement, if applicable",
  "Mobility requirements, if applicable",
];

export function BookingChecklist() {
  return (
    <Band tone="sand">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Before you book"
            title="What We Need to Arrange Your Airport Pickup"
            description="Ten details, most of which are on your booking confirmation."
          />
          <div data-reveal>
            <Button href={whatsapp("Hello Al Safa Taxi, here are my trip details for an airport pickup:")} variant="primary">
              Send My Trip Details
            </Button>
          </div>
        </div>
        <ul data-reveal className="grid grid-cols-1 gap-x-6 gap-y-3 border border-brand-gray bg-white p-6 sm:grid-cols-2">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-brand-dark/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

/* Family and group */
const vehicles = [
  { slug: "executive-sedan", name: "Executive Sedan", use: "One to three people with light luggage, or a short onward trip." },
  { slug: "premium-suv", name: "Premium SUV", use: "Families with several bags, or older passengers who want more room." },
  { slug: "luxury-van", name: "Luxury Van", use: "Large families and groups, or anyone carrying a lot of luggage." },
  { slug: "vip-chauffeur", name: "VIP Chauffeur Car", use: "Guests who want a more formal arrival, including business visitors." },
];

export function FamilyGroup() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="Vehicles" title="Traveling With Family or a Group?" />
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            The right vehicle depends on the people and the journey together: how many of you,
            how many bags, whether there are children or older relatives, how long the road is,
            and where you go next.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            A short hop from the airport to a hotel is easy in almost any car. A long road to
            Makkah or Madinah is where space and comfort matter. Groups too large for one vehicle
            can be planned as two or more cars that leave together.
          </p>
          <div data-reveal>
            <Button href="/fleet" variant="primary">
              Find the Right Vehicle
            </Button>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {vehicles.map((vehicle) => (
            <li key={vehicle.name} data-reveal className="card-lift group overflow-hidden border border-brand-gray bg-white">
              {fleetClassPhotos[vehicle.slug] ? (
                <VehiclePhoto image={fleetClassPhotos[vehicle.slug]} frameClassName="aspect-[16/9] w-full border-b border-brand-gray" />
              ) : null}
              <div className="p-5">
              <h3 className="text-base font-bold text-brand-dark">{vehicle.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-dark/70">{vehicle.use}</p>
              </div>
            </li>
          ))}
          <li className="text-xs text-brand-dark/60 sm:col-span-2">
            Seats and luggage space for each vehicle are on the{" "}
            <Link href="/fleet" className="font-medium text-brand-primary underline underline-offset-2">
              fleet page
            </Link>
            .
          </li>
        </ul>
      </div>
    </Band>
  );
}

/* Luggage */
export function LuggageGuide() {
  return (
    <Band tone="sand">
      <div data-reveal className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
          Traveling With Luggage?
        </h2>
        <p className="text-base leading-relaxed text-brand-dark/75">
          Choose the vehicle by luggage as well as passengers. A vehicle that fits six passengers may
          not be the best choice for six passengers carrying large suitcases.
        </p>
        <p className="text-sm leading-relaxed text-brand-dark/65">
          Count every piece, including hand luggage, and think about the way home: pilgrims often
          carry gifts, dates and Zamzam containers on the return trip.
        </p>
        <div>
          <Button href="/fleet" variant="outline-dark">
            Check Vehicle Options
          </Button>
        </div>
      </div>
    </Band>
  );
}

/* Terminal to hotel */
const journey = [
  "Arrive and clear immigration",
  "Collect your baggage",
  "Leave the terminal",
  "Meet your driver",
  "Load your luggage",
  "Private transfer",
  "Hotel or destination",
];

export function TerminalToHotel() {
  return (
    <Band>
      <SectionHeading
        eyebrow="First time in Saudi Arabia?"
        title="From Terminal to Hotel — What Happens Next?"
        description="Most of the time between landing and leaving is spent inside the terminal, not on the road."
      />
      <ol className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
        {journey.map((stage, index) => (
          <li key={stage} data-reveal className="relative border border-brand-gray bg-white p-4">
            <span className="text-xs font-bold tracking-widest text-brand-gold">{index + 1}</span>
            <p className="mt-1 text-sm font-semibold leading-snug text-brand-dark">{stage}</p>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-10 grid grid-cols-1 gap-6 border border-brand-gray bg-brand-beige/60 p-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="text-xl font-bold text-brand-dark">Going Straight to Your Hotel?</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-dark/75">
            Send the exact hotel name and the area or city. Around the Haram in Makkah and the
            Prophet&apos;s Mosque in Madinah, access for cars can be restricted, so the driver
            confirms the practical drop-off point before you arrive and a short walk may be needed.
          </p>
        </div>
        <Link
          href="/services/hotel-transfers"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
        >
          Hotel transfers
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Band>
  );
}

/* Delay */
export function DelayGuide() {
  return (
    <Band tone="sand">
      <div data-reveal className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
          What If My Flight Is Delayed?
        </h2>
        <p className="text-base leading-relaxed text-brand-dark/75">
          Provide your flight number when booking and contact us if your travel plans change.
          We&apos;ll use the updated information to coordinate the pickup.
        </p>
      </div>
    </Band>
  );
}

/* Where to go next */
const groups = [
  {
    title: "Airports",
    links: [
      { label: "Jeddah Airport (JED)", href: "/airports/jeddah-airport" },
      { label: "Madinah Airport (MED)", href: "/airports/madinah-airport" },
      { label: "Taif Airport (TIF)", href: "/airports/taif-airport" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Airport transfers", href: "/services/airport-transfers" },
      { label: "Hotel transfers", href: "/services/hotel-transfers" },
      { label: "Umrah transportation", href: "/umrah-transportation" },
      { label: "Intercity transfers", href: "/services/intercity-transfers" },
      { label: "Private chauffeur", href: "/services/private-chauffeur" },
    ],
  },
  {
    title: "Cities",
    links: [
      { label: "Makkah taxi service", href: "/locations/makkah" },
      { label: "Madinah taxi service", href: "/locations/madinah" },
      { label: "Jeddah taxi service", href: "/locations/jeddah" },
      { label: "Taif taxi service", href: "/locations/taif" },
    ],
  },
  {
    title: "Popular routes",
    links: [
      { label: "Jeddah Airport to Makkah", href: "/routes/jeddah-airport-to-makkah" },
      { label: "Madinah Airport to Makkah", href: "/routes/madinah-airport-to-makkah" },
      { label: "Jeddah Airport to Madinah", href: "/routes/jeddah-airport-to-madinah" },
      { label: "Madinah to Jeddah", href: "/routes/madinah-to-jeddah" },
      { label: "Jeddah to Madinah", href: "/routes/jeddah-to-madinah" },
    ],
  },
];

export function NextSteps() {
  return (
    <Band>
      <SectionHeading eyebrow="Keep planning" title="Plan the Rest of Your Journey" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
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
