import Link from "next/link";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Shell } from "@/components/madinah-airport/ArrivalSections";
import { fleet } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const whatsapp = (text: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

/* 6. Umrah */
export function UmrahTransfer() {
  return (
    <Shell tone="dark">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex flex-col gap-5">
          <SectionHeading
            tone="light"
            eyebrow="Umrah travel"
            title="From Madinah Airport to Makkah for Umrah"
          />
          <p data-reveal className="text-base leading-relaxed text-white/75">
            Some pilgrims arrive in Madinah first and travel to Makkah days later. Others go
            straight from the airport. Both work, and they plan differently: a direct journey
            starts with a flight and a queue at immigration, while a later journey starts at your
            hotel, with checkout and luggage to organise.
          </p>
          <p data-reveal className="text-base leading-relaxed text-white/75">
            The road to Makkah is about 450 km. We arrange a private vehicle sized for your group
            and bags, and if you want to stop at Dhul Hulayfah (Abyar Ali) on the way out of
            Madinah, say so when you book and the timing is planned for it. How you use that stop
            is a matter for your scholar or tour operator; our part is the road.
          </p>
          <ul data-reveal className="grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-2">
            {[
              "Direct from the airport or from your hotel",
              "Family and group vehicles",
              "Room for extra bags and gifts",
              "An optional stop when requested",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div data-reveal className="flex flex-wrap items-center gap-4">
            <Button href="/routes/madinah-airport-to-makkah" variant="gold">
              Plan My Makkah Transfer
            </Button>
            <Link
              href="/umrah-transportation"
              className="text-sm font-semibold text-white underline underline-offset-4 hover:text-brand-gold"
            >
              Umrah transportation
            </Link>
          </div>
        </div>

        <div data-reveal className="border border-white/15 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">If you leave from your hotel instead</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            After a few days in Madinah the same journey starts at your hotel. Send the checkout
            time and the pickup point, since vehicles cannot always wait outside hotels near the
            mosque. The route page for{" "}
            <Link href="/routes/madinah-to-makkah" className="text-brand-gold underline underline-offset-2">
              Madinah to Makkah
            </Link>{" "}
            covers that case.
          </p>
        </div>
      </div>
    </Shell>
  );
}

/* 7. Ziyarat */
const ziyaratPlaces = [
  { name: "Quba Mosque", note: "A well-known mosque on the south side of the city, often visited early in a stay." },
  { name: "Masjid al-Qiblatain", note: "The mosque associated with the change of the direction of prayer." },
  { name: "Mount Uhud", note: "The mountain and battlefield area north of the city." },
];

export function ZiyaratAddOn() {
  return (
    <Shell tone="sand">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="Optional" title="Add Madinah Ziyarat to Your Journey" />
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            If you arrive with time to spare, you can ask for Ziyarat as part of the transfer
            instead of booking it separately. Whether it fits depends on your route, your flight
            and how many hours the group can manage after landing.
          </p>
          <p data-reveal className="text-base leading-relaxed text-brand-dark/75">
            Many visitors prefer to check in first and go the next morning. Tell us which you
            would rather do, and we will suggest an order.
          </p>
          <div data-reveal>
            <Button href="/services/ziyarat-tours" variant="primary">
              Ask About Ziyarat
            </Button>
          </div>
        </div>

        <ul className="grid grid-cols-1 content-start gap-4 sm:grid-cols-3">
          {ziyaratPlaces.map((place) => (
            <li key={place.name} data-reveal className="card-lift flex flex-col gap-2 self-start border border-brand-gray bg-white p-5">
              <h3 className="text-base font-bold text-brand-dark">{place.name}</h3>
              <p className="text-sm leading-relaxed text-brand-dark/70">{place.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}

/* 8. Family and elderly travellers */
const familyPoints = [
  { title: "Long flights and slow queues", copy: "Immigration and baggage collection can take hours after a long flight. A pickup that waits for your actual arrival means you can sit down as soon as you are out." },
  { title: "Luggage and walking distance", copy: "Count every bag, and think about how far each person can comfortably walk from the car to the hotel entrance." },
  { title: "Vehicle size and seats", copy: "Older passengers often prefer a higher seat and a wider door. Children may need a child seat; ask us before the day." },
  { title: "Wheelchairs and assistance", copy: "Arrange wheelchair assistance with your airline or the airport where you need it. Tell us too, so the vehicle and meeting point suit it." },
];

export function FamilyTravel() {
  return (
    <Shell>
      <SectionHeading
        eyebrow="Families"
        title="Traveling With Parents, Children or Older Family Members?"
        description="A few small decisions before you fly make arrival much easier for everyone."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {familyPoints.map((point) => (
          <div key={point.title} data-reveal className="border border-brand-gray bg-white p-6">
            <h3 className="text-base font-semibold text-brand-dark">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{point.copy}</p>
          </div>
        ))}
      </div>
      <p data-reveal className="mt-8 max-w-3xl border-l-4 border-brand-gold bg-brand-beige/70 p-5 text-sm leading-relaxed text-brand-dark/80">
        Tell us about any mobility needs before your pickup so we can plan the most practical
        vehicle and meeting point.
      </p>
    </Shell>
  );
}

/* 9. Groups and vehicles */
const vehicleUse: Record<string, string> = {
  "executive-sedan": "Couples and solo travellers with light luggage, or short onward trips.",
  "premium-suv": "Families with several bags, or older passengers who want more room.",
  "luxury-van": "Large families and groups, or anyone carrying a lot of luggage.",
  "vip-chauffeur": "Guests who want a more formal arrival, including business visitors.",
};

export function GroupVehicles() {
  return (
    <Shell tone="sand">
      <SectionHeading
        eyebrow="Vehicles"
        title="Madinah Airport Transfers for Families & Groups"
        description="Choose by luggage first, then by people. The figures below are planning guides from our fleet page, not guarantees."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {fleet.map((vehicle) => {
          const Icon = vehicle.icon;
          return (
            <div key={vehicle.slug} data-reveal className="card-lift flex flex-col gap-3 border border-brand-gray bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-primary text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-brand-dark">{vehicle.name}</h3>
              <p className="flex items-center gap-2 text-sm text-brand-dark/70">
                <Users className="h-4 w-4 text-brand-primary" aria-hidden="true" />
                Up to {vehicle.passengers} passengers
              </p>
              <p className="flex items-center gap-2 text-sm text-brand-dark/70">
                <Briefcase className="h-4 w-4 text-brand-primary" aria-hidden="true" />
                About {vehicle.luggage} bags
              </p>
              <p className="text-sm leading-relaxed text-brand-dark/70">{vehicleUse[vehicle.slug]}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-brand-dark/60">
        Larger than eight? We can plan more than one vehicle to leave together. See the{" "}
        <Link href="/fleet" className="font-medium text-brand-primary underline underline-offset-2">
          fleet
        </Link>{" "}
        for details.
      </p>
    </Shell>
  );
}

/* 10. Split flights */
const splitOptions = [
  { title: "One vehicle waits", copy: "Good for a group that wants to travel together. The first arrivals wait for the last, so weigh that against the cost of a second car." },
  { title: "Separate vehicles", copy: "Better when flights land hours apart. Each group goes to the hotel as soon as it is ready." },
  { title: "Coordinated pickup", copy: "Useful for families arriving at different times: we plan each pickup and keep one contact person informed." },
];

export function SplitFlights() {
  return (
    <Shell>
      <SectionHeading eyebrow="Group arrivals" title="What If Your Group Arrives on Different Flights?" />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {splitOptions.map((option, index) => (
          <div key={option.title} data-reveal className="border border-brand-gray bg-white p-6">
            <span className="text-sm font-semibold text-brand-gold">Option {index + 1}</span>
            <h3 className="mt-1 text-lg font-bold text-brand-dark">{option.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{option.copy}</p>
          </div>
        ))}
      </div>
      <div data-reveal className="mt-8">
        <Button href={whatsapp("Hello Al Safa Taxi, my group arrives on different flights at Madinah Airport (MED). Flight details:")} variant="primary">
          Tell Us Your Flight Details
        </Button>
      </div>
    </Shell>
  );
}

/* 11. Delayed flights */
export function FlightDelay() {
  return (
    <Shell tone="sand">
      <div data-reveal className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
          What Happens If My Flight Is Delayed?
        </h2>
        <p className="text-base leading-relaxed text-brand-dark/75">
          Send your flight number when you book. If your arrival time changes, contact us as soon
          as possible so the pickup can be adjusted. The earlier we know, the more options we have.
        </p>
        <p className="text-sm text-brand-dark/60">
          Questions about waiting time on a particular day are best settled by message before you
          fly.
        </p>
      </div>
    </Shell>
  );
}

/* 12. Airport facts */
const facts = [
  { label: "Airport", value: "Prince Mohammad bin Abdulaziz International Airport" },
  { label: "Code", value: "MED" },
  { label: "City", value: "Madinah" },
  { label: "Country", value: "Saudi Arabia" },
  { label: "Purpose", value: "International and domestic passenger airport serving Madinah" },
];

export function AirportFacts() {
  return (
    <Shell>
      <SectionHeading eyebrow="Airport guide" title="Prince Mohammad bin Abdulaziz International Airport (MED)" />
      <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {facts.map((fact) => (
          <div key={fact.label} data-reveal className="border border-brand-gray bg-white p-5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{fact.label}</dt>
            <dd className="mt-1.5 text-sm font-medium leading-snug text-brand-dark">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm text-brand-dark/70">
        Flying in from Jeddah instead? See{" "}
        <Link href="/routes/jeddah-airport-to-madinah" className="font-medium text-brand-primary underline underline-offset-2">
          Jeddah Airport to Madinah
        </Link>
        , or our wider{" "}
        <Link href="/services/airport-transfers" className="font-medium text-brand-primary underline underline-offset-2">
          airport transfers
        </Link>{" "}
        page.{" "}
        <Link href="/contact" className="inline-flex items-center gap-1 font-medium text-brand-primary underline underline-offset-2">
          Contact us <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </p>
    </Shell>
  );
}
