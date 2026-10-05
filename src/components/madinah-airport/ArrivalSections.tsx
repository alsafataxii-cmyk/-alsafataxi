import Link from "next/link";
import { ArrowRight, Building2, Clock, Landmark, MapPin, Plane, Route } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export { default as Shell } from "@/components/ui/Band";
import Shell from "@/components/ui/Band";

const whatsapp = (text: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

/* 1. Immediate answer */
const quickAnswers = [
  {
    q: "Is this a shared shuttle?",
    a: "No. The vehicle and the driver are for your group only, and the pickup is planned around your flight.",
  },
  {
    q: "Can the driver take me to a hotel near the Prophet's Mosque?",
    a: "Yes, to the closest point the car can reach. Streets nearest the mosque can be restricted, so send the hotel name before you fly.",
  },
  {
    q: "Can I carry on to Makkah or Jeddah?",
    a: "Yes. Many pilgrims go straight from the airport to Makkah, and some continue to Jeddah later in the trip.",
  },
];

export function AnswerBlock() {
  return (
    <Shell>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="At a glance" title="Private Transfers From Madinah Airport" />
          <p data-reveal className="text-lg leading-relaxed text-brand-dark/80">
            Prince Mohammad bin Abdulaziz International Airport (MED) is the airport for Madinah.
            Most people who land here are going to a hotel around Al-Masjid an-Nabawi; a smaller
            number carry straight on to Makkah or Jeddah by road.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            A transfer with us is private. One vehicle and one driver are arranged for your group,
            so there is no shared shuttle and no waiting for other passengers to fill seats. We
            plan the pickup from the flight details you send, and tell the driver about your bags
            and any special needs before you land.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/70">
            The part that surprises first-time visitors is the last stretch. Roads around the
            central mosque area can be restricted, and some streets are pedestrian only, so a car
            cannot always stop at every hotel entrance. If you tell us the hotel name in advance,
            we confirm where the drop-off will be before you travel, not at the kerb.
          </p>
        </div>

        <dl className="flex flex-col gap-4">
          {quickAnswers.map((item) => (
            <div
              key={item.q}
              data-reveal
              className="card-lift border border-brand-gray bg-white p-5 shadow-sm"
            >
              <dt className="text-sm font-semibold text-brand-dark">{item.q}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-brand-dark/70">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Shell>
  );
}

/* 2. Destination cards */
const destinations = [
  {
    icon: Building2,
    title: "Madinah hotels",
    copy: "Direct private transfer from MED to your hotel in Madinah.",
    cta: "Madinah Hotel Transfers",
    href: "/services/hotel-transfers",
  },
  {
    icon: Route,
    title: "Makkah",
    copy: "Travel directly from Madinah Airport to Makkah, with an optional stop at Dhul Hulayfah / Abyar Ali when requested.",
    cta: "Madinah Airport to Makkah",
    href: "/routes/madinah-airport-to-makkah",
  },
  {
    icon: Plane,
    title: "Jeddah",
    copy: "Private road transfer from Madinah Airport or your Madinah hotel toward Jeddah.",
    cta: "Madinah to Jeddah",
    href: "/routes/madinah-to-jeddah",
  },
];

export function DestinationCards() {
  return (
    <Shell tone="sand">
      <SectionHeading
        eyebrow="Onward travel"
        title="Where Are You Going After MED?"
        description="Most journeys from Madinah Airport fall into one of three groups. Pick the one that matches your plan."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {destinations.map((place) => {
          const Icon = place.icon;
          return (
            <Link
              key={place.title}
              href={place.href}
              data-reveal
              className="card-lift group flex flex-col gap-4 border border-brand-gray bg-white p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-primary text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-brand-dark">{place.title}</h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">{place.copy}</p>
              <span className="mt-auto cta-chip">
                {place.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <Button href={whatsapp("Hello Al Safa Taxi, I would like a quote for a Madinah Airport (MED) transfer.")} variant="primary">
          Get a Transfer Quote
        </Button>
      </div>
    </Shell>
  );
}

/* 3. Pickup process */
const steps = [
  {
    n: "01",
    title: "Send your flight details",
    copy: "Your flight number, arrival date and expected landing time, plus the hotel or onward destination and how many of you are travelling.",
  },
  {
    n: "02",
    title: "We plan around your arrival",
    copy: "The pickup is planned from the flight information you gave us. If the airline changes the time, tell us and we adjust it.",
  },
  {
    n: "03",
    title: "Meet at the agreed point",
    copy: "The exact meeting point depends on airport access and terminal conditions that day. We agree it with you in advance and confirm it by message once you land.",
  },
  {
    n: "04",
    title: "Travel straight to your destination",
    copy: "The driver loads your luggage and takes you to the confirmed hotel, or on the road to Makkah or Jeddah.",
  },
];

export function PickupSteps() {
  return (
    <Shell>
      <SectionHeading
        eyebrow="Arrival day"
        title="How Your Madinah Airport Pickup Works"
        description="Four steps, most of them done before you leave home."
      />
      <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.n}
            data-reveal
            className="relative border border-brand-gray bg-white p-6 shadow-sm"
          >
            <span className="text-4xl font-bold text-brand-gold/70">{step.n}</span>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{step.copy}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button href={whatsapp("Hello Al Safa Taxi, please confirm my Madinah Airport pickup. My flight details are:")} variant="primary">
          Confirm My Pickup
        </Button>
        <p className="max-w-md text-sm text-brand-dark/60">
          Not sure which terminal you will use? Your airline decides, and you do not need to tell us.
        </p>
      </div>
    </Shell>
  );
}

/* 4. Hotels near the Prophet's Mosque */
const journeyStops = [
  { icon: Plane, label: "MED", note: "Madinah Airport" },
  { icon: MapPin, label: "Central Madinah", note: "Main roads into the city" },
  { icon: Landmark, label: "Prophet's Mosque area", note: "Restricted and pedestrian streets" },
  { icon: Building2, label: "Your hotel", note: "Closest practical drop-off" },
];

export function HotelDropoff() {
  return (
    <Shell tone="sand">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Hotels in Madinah"
            title="Getting From Madinah Airport to Hotels Near the Prophet's Mosque"
          />
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            Many visitors stay within walking distance of Al-Masjid an-Nabawi. That is convenient
            for prayer, but it changes how arrival works. Some roads around the central area have
            access restrictions, and a vehicle may not always be able to stop at a hotel&apos;s
            front door.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            So the useful question is not whether the car can reach your hotel, but where it can
            stop closest to it. Send the exact hotel name before you land, and we will confirm the
            practical drop-off point. Your hotel can usually tell you which entrance handles
            luggage and where cars wait; passing that on saves a lot of searching with bags.
          </p>
          <ul data-reveal className="flex flex-col gap-2 text-sm text-brand-dark/75">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              Mention mobility needs when you book, so we can look for the nearest stop.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              Prayer times, and the Friday prayer above all, are the busiest hours around the mosque.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              Keep your passport and hotel confirmation in hand luggage in case the hotel asks.
            </li>
          </ul>
          <p data-reveal className="text-sm text-brand-dark/60">
            See also our{" "}
            <Link href="/services/hotel-transfers" className="font-medium text-brand-primary underline underline-offset-2">
              hotel transfers
            </Link>{" "}
            and the{" "}
            <Link href="/locations/madinah" className="font-medium text-brand-primary underline underline-offset-2">
              Madinah taxi service
            </Link>{" "}
            for rides after you check in.
          </p>
        </div>

        <figure data-reveal className="self-start border border-brand-gray bg-white p-6 sm:p-8" aria-label="Journey from the airport to your hotel">
          <ol className="relative flex flex-col gap-0">
            {journeyStops.map((stop, index) => {
              const Icon = stop.icon;
              const last = index === journeyStops.length - 1;
              return (
                <li key={stop.label} className="relative flex gap-4 pb-8 last:pb-0">
                  {!last ? (
                    <span
                      className="absolute left-[21px] top-11 h-[calc(100%-2.75rem)] w-px border-l-2 border-dashed border-brand-gold/70"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-brand-primary text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-brand-dark">{stop.label}</p>
                    <p className="text-sm text-brand-dark/60">{stop.note}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <figcaption className="mt-6 border-t border-brand-gray pt-4 text-xs text-brand-dark/60">
            A simple outline of the journey, not a map. The last step depends on your hotel and the
            time of day.
          </figcaption>
        </figure>
      </div>
    </Shell>
  );
}

/* 5. Travel times */
const times = [
  {
    from: "MED",
    to: "Central Madinah",
    distance: "Approximately 15–20 km",
    time: "Usually around 20–30 minutes outside heavy traffic",
    href: "/locations/madinah",
    link: "Madinah taxi service",
  },
  {
    from: "MED",
    to: "Makkah",
    distance: "Approximately 450 km",
    time: "Around 4.5–5 hours by road, depending on traffic and stops",
    href: "/routes/madinah-airport-to-makkah",
    link: "Madinah Airport to Makkah",
  },
  {
    from: "Madinah",
    to: "Jeddah",
    distance: "Approximately 420 km",
    time: "Around 4–4.5 hours by road",
    href: "/routes/madinah-to-jeddah",
    link: "Madinah to Jeddah",
  },
];

export function TransferTimes() {
  return (
    <Shell>
      <SectionHeading eyebrow="Distance and time" title="Madinah Airport Transfer Times" />
      <div data-reveal className="mt-8 max-w-3xl border-l-4 border-brand-gold bg-brand-beige/70 p-5">
        <h3 className="text-base font-semibold text-brand-dark">
          How far is Madinah Airport from central Madinah?
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-brand-dark/75">
          Madinah Airport is roughly 15 to 20 km from central Madinah. The drive often takes around
          20 to 30 minutes outside heavy traffic, although traffic and access restrictions around
          the central mosque area can affect the final part of the journey.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {times.map((route) => (
          <div key={route.to} data-reveal className="card-lift flex flex-col gap-3 border border-brand-gray bg-white p-6">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-gold">
              {route.from}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              {route.to}
            </p>
            <p className="text-xl font-bold text-brand-dark">{route.distance}</p>
            <p className="flex gap-2 text-sm leading-relaxed text-brand-dark/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
              {route.time}
            </p>
            <Link
              href={route.href}
              className="mt-auto cta-chip"
            >
              {route.link}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm text-brand-dark/60">
        Road time can vary with traffic, prayer-time congestion, weather, road conditions and
        planned stops. Treat these as planning figures, not guarantees.
      </p>
    </Shell>
  );
}

