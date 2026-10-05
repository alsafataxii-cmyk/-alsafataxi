import Link from "next/link";
import { Check } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { planSteps, seasons, varyReasons } from "@/lib/content/routes-hub";

const inline = "font-medium text-brand-primary underline underline-offset-2";

/* Why journey times vary */
export function WhyTimesVary() {
  return (
    <Band>
      <SectionHeading eyebrow="Realistic planning" title="Why Your Actual Journey May Take Longer" />
      <p data-reveal className="mt-5 max-w-3xl text-base leading-relaxed text-brand-dark/75">
        The times on this page are typical road times. Most of the difference between a typical
        journey and your journey comes from things other than the road itself.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {varyReasons.map((reason) => (
          <li key={reason.title} data-reveal className="border border-brand-gray bg-white p-4">
            <h3 className="text-sm font-bold text-brand-dark">{reason.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-brand-dark/70">{reason.copy}</p>
          </li>
        ))}
      </ul>
    </Band>
  );
}

/* Short / medium / long */
const lengths = [
  {
    title: "Short journeys",
    examples: [
      { label: "Jeddah ↔ Makkah", href: "/routes/jeddah-to-makkah" },
      { label: "Makkah ↔ Taif", href: "/routes/makkah-to-taif" },
    ],
    points: ["Pickup timing", "City traffic at both ends", "Hotel access near the mosques", "Flight connections when an airport is involved"],
    copy: "The road is the easy part. The minutes are lost leaving a hotel area or finding the right entrance, so be exact about where you start.",
  },
  {
    title: "Medium journeys",
    examples: [
      { label: "Jeddah ↔ Taif", href: "/routes/jeddah-to-taif" },
      { label: "Jeddah ↔ Madinah", href: "/routes/jeddah-to-madinah" },
    ],
    points: ["Travel time", "Luggage", "Departure planning", "Comfort"],
    copy: "Long enough that the vehicle and the departure time start to matter. Decide them early, and agree where you will stop.",
  },
  {
    title: "Long journeys",
    examples: [
      { label: "Makkah ↔ Madinah", href: "/routes/makkah-to-madinah" },
      { label: "Jeddah Airport ↔ Madinah", href: "/routes/jeddah-airport-to-madinah" },
    ],
    points: ["Vehicle comfort", "Luggage", "Rest and prayer stops", "Leaving enough time", "Family and group needs"],
    copy: "A day's travel in its own right. Plan the stops, size the vehicle for the bags, and do not schedule anything critical close to arrival.",
  },
];

export function ChooseByLength() {
  return (
    <Band tone="sand">
      <SectionHeading eyebrow="By distance" title="Choosing the Right Route for Your Journey" />
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {lengths.map((length) => (
          <article key={length.title} data-reveal className="flex flex-col gap-4 border border-brand-gray bg-white p-6">
            <h3 className="text-xl font-bold text-brand-dark">{length.title}</h3>
            <p className="text-sm leading-relaxed text-brand-dark/75">{length.copy}</p>
            <ul className="flex flex-wrap gap-2 text-xs font-medium text-brand-dark/80">
              {length.points.map((point) => (
                <li key={point} className="bg-brand-beige px-2.5 py-1">
                  {point}
                </li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-col gap-1.5 border-t border-brand-gray pt-4 text-sm">
              {length.examples.map((example) => (
                <li key={example.href}>
                  <Link href={example.href} className={inline}>
                    {example.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Band>
  );
}

/* Family, private travel, flights */
export function FamilyAndPrivate() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div data-reveal className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Traveling With Family or a Group?</h2>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Choose the vehicle from four things together: how many people, how many bags, whether
            there are children, and how long the road is. A short hop is easy in almost any car. A
            four-hour road with several suitcases needs room and comfort.
          </p>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            Ask about a child seat before the day, and count every bag, including hand luggage. Our{" "}
            <Link href="/fleet" className={inline}>
              fleet
            </Link>{" "}
            page shows the vehicle classes, and the{" "}
            <Link href="/" className={inline}>
              homepage vehicle selector
            </Link>{" "}
            gives a quick suggestion. Larger groups can be planned as more than one vehicle.
          </p>
          <div>
            <Button href="/book" variant="primary">
              Book a Private Taxi
            </Button>
          </div>
        </div>

        <div data-reveal className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Why Some Travelers Choose Private Transport</h2>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-brand-dark/75">
            {[
              "Direct pickup and direct drop-off.",
              "No other passengers to coordinate with.",
              "Luggage stays with your group.",
              "Flexible departure timing.",
              "Easier with children and older relatives.",
              "Easier for itineraries that cross several cities.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-dark/60">
            It is a different way of travelling, not a better one for every trip. Choose what suits
            your group.
          </p>
        </div>
      </div>
    </Band>
  );
}

export function FlightGuidance() {
  return (
    <Band tone="sand">
      <div data-reveal className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
          If Your Journey Ends at an Airport
        </h2>
        <p className="text-base leading-relaxed text-brand-dark/75">
          Do not plan using only the road-time estimate. Allow additional time for the hotel
          departure, city traffic, luggage loading, arrival at the airport and your airline&apos;s
          check-in and security requirements.
        </p>
        <p className="text-sm leading-relaxed text-brand-dark/65">
          Airline rules differ, so we do not give one fixed buffer. Tell us your flight and we help
          you work back to a pickup time. See{" "}
          <Link href="/routes/makkah-to-jeddah-airport" className={inline}>
            Makkah to Jeddah Airport
          </Link>{" "}
          or{" "}
          <Link href="/routes/madinah-to-jeddah" className={inline}>
            Madinah to Jeddah
          </Link>
          .
        </p>
      </div>
    </Band>
  );
}

/* Seasons and planning */
export function SeasonsAndPlanning() {
  return (
    <Band>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Time of year" title="Seasonal Factors That Can Affect Your Journey" />
          <dl className="mt-8 flex flex-col gap-4">
            {seasons.map((season) => (
              <div key={season.title} data-reveal className="border-l-4 border-brand-gold bg-brand-beige/60 p-4">
                <dt className="text-sm font-bold text-brand-dark">{season.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-brand-dark/75">{season.copy}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <SectionHeading eyebrow="Itineraries" title="Planning Several Taxi Journeys Together" />
          <p data-reveal className="mt-5 text-sm leading-relaxed text-brand-dark/75">
            For example: Day 1, Jeddah Airport to Makkah. Later, Makkah to Madinah. The final leg,
            Madinah to Jeddah. Each one is its own booking, planned with the others in mind.
          </p>
          <ol className="mt-6 flex flex-col gap-3">
            {planSteps.map((step, index) => (
              <li key={step} data-reveal className="flex items-start gap-4 border border-brand-gray bg-white p-4 text-sm text-brand-dark/80">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center bg-brand-primary text-xs font-bold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Band>
  );
}

/* Route not listed */
export function NotListed() {
  return (
    <Band tone="sand">
      <div data-reveal className="grid grid-cols-1 gap-6 border border-brand-gray bg-white p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Don&apos;t See Your Route?</h2>
          <p className="text-sm leading-relaxed text-brand-dark/75">
            The routes above are the journeys we are asked for most. You can still ask about other
            destinations, smaller towns, custom stops or a multi-stop itinerary, and we confirm
            whether it can be arranged before anything is agreed. See also{" "}
            <Link href="/services/intercity-transfers" className={inline}>
              intercity transfers
            </Link>{" "}
            and{" "}
            <Link href="/services/ziyarat-tours" className={inline}>
              Ziyarat tours
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button href="/book" variant="primary">
            Request a Route
          </Button>
          <Button href="/contact" variant="outline-dark">
            Contact Us
          </Button>
        </div>
      </div>
    </Band>
  );
}
