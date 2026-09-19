import Link from "next/link";
import Button from "@/components/ui/Button";
import { routeLinks } from "@/lib/content/links";

const stages = [
  "Airport transfer to your hotel",
  "Hotel transfers in Makkah and Madinah",
  "Makkah to Madinah by private car, with stops planned",
  "Ziyarat trips in Makkah and Madinah",
  "Hotel to the airport for your flight home",
];

const umrahRoutes = routeLinks([
  "jeddah-airport-to-makkah",
  "jeddah-airport-to-madinah",
  "makkah-to-madinah",
  "madinah-to-makkah",
]);

export default function HomeUmrah() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-primary/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-8xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
            For Pilgrims
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Umrah Transportation in Makkah & Madinah
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            An Umrah trip involves several journeys, from the airport to your hotel, between the
            Holy Cities and to places of Ziyarat. We arrange private transport for each one, for
            individuals, families and groups, and you can book the whole trip or only the stages
            you need.
          </p>
          <p className="text-base leading-relaxed text-white/70">
            Most pilgrims land at Jeddah and continue to Makkah, then travel on to Madinah. Tell us
            your flights, hotels and any stops you need, including the miqat, and we plan the
            timing around them.
          </p>

          <ul className="flex flex-col gap-2 text-sm">
            {umrahRoutes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="font-semibold text-brand-gold underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {route.label}
                </Link>
                <span className="text-white/50"> · {route.description}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/umrah-transportation" variant="gold">
              Umrah Transportation
            </Button>
            <Button href="/services/ziyarat-tours" variant="outline-light">
              Ziyarat Tours
            </Button>
          </div>
        </div>

        <ol className="flex flex-col gap-3">
          {stages.map((stage, index) => (
            <li
              key={stage}
              className="flex items-center gap-4 border border-white/10 bg-white/5 p-4 text-sm text-white/80"
            >
              <span className="text-lg font-bold text-brand-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              {stage}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
