import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/components/ui/Button";

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
            Premium Private Transportation
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Taxi &amp; Private Transportation Across Makkah, Madinah, Jeddah &amp; Taif
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-white/70">
            Al Safa Taxi delivers punctual, professionally driven transport for
            airport transfers, Ziyarat tours and journeys between Makkah, Madinah,
            Jeddah and Taif — available around the clock.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
            </Button>
            <Button href="/services" variant="outline-light" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <span className="flex text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </span>
              4.9/5 average rating
            </span>
            <span className="h-4 w-px bg-white/20" aria-hidden="true" />
            <span>500+ daily rides</span>
            <span className="h-4 w-px bg-white/20" aria-hidden="true" />
            <span>Available 24/7</span>
          </div>
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
              <p className="text-2xl font-bold text-brand-primary">10+ Years</p>
              <p className="text-xs font-medium uppercase tracking-wide text-brand-dark/60">
                Trusted on Saudi roads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
