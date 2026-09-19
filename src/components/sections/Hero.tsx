import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const heroLinks = [
  { label: "Airport transfers", href: "/services/airport-transfers" },
  { label: "Umrah transportation", href: "/umrah-transportation" },
  { label: "Ziyarat tours", href: "/services/ziyarat-tours" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-brand-primary/40 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
            Private Taxi &amp; Transfers
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Taxi &amp; Private Transportation Across Makkah, Madinah, Jeddah &amp; Taif
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-white/70">
            Al Safa Taxi provides private taxi and transportation services in the Western Region
            of Saudi Arabia: airport transfers, Umrah transportation, Ziyarat tours and journeys
            between Makkah, Madinah, Jeddah and Taif, with bookings taken around the clock.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
            </Button>
            <Button href="/services" variant="outline-light" size="lg">
              Explore Services
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-white/60">
            <li>Available 24/7</li>
            {heroLinks.map((link) => (
              <li key={link.href} className="inline-flex items-center gap-6">
                <span className="h-4 w-px bg-white/20" aria-hidden="true" />
                <Link href={link.href} className="transition-colors hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative w-64 sm:w-80 lg:w-96">
            <Image
              src="/brand/al-safa-taxi-icon.webp"
              alt="Al Safa Taxi emblem"
              width={512}
              height={512}
              priority
              className="relative z-10 w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
            <div className="absolute -bottom-6 left-1/2 z-20 w-56 -translate-x-1/2 rounded-lg bg-white px-5 py-4 text-center shadow-xl sm:left-auto sm:right-0 sm:translate-x-0 sm:text-left">
              <p className="text-2xl font-bold text-brand-primary">24/7 Booking</p>
              <p className="text-xs font-medium uppercase tracking-wide text-brand-dark/60">
                Call or WhatsApp anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
