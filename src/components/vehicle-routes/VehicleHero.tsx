import Image from "next/image";
import { ArrowRight, Check, Clock, MessageCircle, Phone, Plane, Route as RouteIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import type { RoutePage } from "@/lib/content/routes";
import type { VehicleRoutePage } from "@/lib/content/vehicle-routes/types";
import { siteConfig } from "@/lib/site-config";

type Props = { page: VehicleRoutePage; route: RoutePage; vehicleLabel: string };

const approx = (text: string) => text.replace("Roughly", "Approx.");

function Actions({ page, light }: { page: VehicleRoutePage; light: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="#book" variant="gold" size="lg">
          {page.primaryCta}
        </Button>
        <Button
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(page.whatsappText)}`}
          variant="whatsapp"
          size="lg"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp Us
        </Button>
      </div>
      <a
        href={siteConfig.phoneHref}
        className={`inline-flex w-fit items-center gap-2 text-base font-semibold ${light ? "text-brand-dark hover:text-brand-primary" : "text-white hover:text-brand-gold"}`}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call or WhatsApp {siteConfig.phone}
      </a>
    </div>
  );
}

function Points({ items, light }: { items: string[]; light: boolean }) {
  return (
    <ul className={`flex flex-col gap-2 text-sm ${light ? "text-brand-dark/80" : "text-white/85"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Title({ page, light }: { page: VehicleRoutePage; light: boolean }) {
  return (
    <>
      <span className="anim-fade-up inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
        <span className="anim-line h-px w-8 bg-brand-gold" aria-hidden="true" />
        {page.eyebrow}
      </span>
      <h1 className={`anim-rise text-4xl font-bold leading-tight sm:text-5xl ${light ? "text-brand-dark" : "text-white"}`}>
        {page.h1}
      </h1>
      <p className={`anim-fade-up max-w-xl text-lg leading-relaxed [--delay:200ms] ${light ? "text-brand-dark/75" : "text-white/75"}`}>
        {page.lead}
      </p>
    </>
  );
}

/* Family: light hero, vehicle in a card with route chips */
function FamilyHero({ page, route, vehicleLabel }: Props) {
  const image = page.heroImage;
  return (
    <section className="bg-brand-beige">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <Title page={page} light />
          <Points items={page.heroPoints} light />
          <Actions page={page} light />
        </div>
        <div className="anim-fade-up flex flex-col gap-4 rounded-2xl border border-brand-gray bg-white p-5 shadow-xl [--delay:250ms]">
          {image ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white">
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
          ) : null}
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-lg bg-brand-beige/70 p-3">
              <p className="text-xs uppercase tracking-wide text-brand-dark/60">Vehicle</p>
              <p className="font-bold text-brand-dark">{vehicleLabel}</p>
            </div>
            <div className="rounded-lg bg-brand-beige/70 p-3">
              <p className="text-xs uppercase tracking-wide text-brand-dark/60">Distance</p>
              <p className="font-bold text-brand-dark">{approx(route.distance).replace("Approx. ", "")}</p>
            </div>
            <div className="rounded-lg bg-brand-beige/70 p-3">
              <p className="text-xs uppercase tracking-wide text-brand-dark/60">Route</p>
              <p className="font-bold text-brand-dark">{route.from.split(" ")[0]} → {route.to}</p>
            </div>
          </div>
          {page.heroSideImage ? (
            <div className="flex items-center gap-3 rounded-lg border border-brand-gray p-2">
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded">
                <Image src={page.heroSideImage.src} alt={page.heroSideImage.alt} fill sizes="80px" className="object-cover" />
              </div>
              <p className="text-xs text-brand-dark/70">{page.heroSideImage.title}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* Airport: dark photo background with an arrival strip */
function AirportHero({ page, route }: Props) {
  const image = page.heroImage;
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark">
      {image ? (
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" aria-hidden="true" />
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20 lg:px-8">
        <div className="flex flex-col gap-6">
          <Title page={page} light={false} />
          <Points items={page.heroPoints} light={false} />
          <Actions page={page} light={false} />
        </div>
        <div className="anim-fade-up flex flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm [--delay:300ms]">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Arrival day</p>
          {["Flight lands at JED", "Clear immigration and collect bags", "Meet your driver", `Drive to ${route.to}, ${approx(route.distance).toLowerCase()}`].map((step, index) => (
            <div key={step} className="flex items-center gap-3 text-sm text-white">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-brand-dark">
                {index === 0 ? <Plane className="h-4 w-4" aria-hidden="true" /> : index + 1}
              </span>
              {step}
            </div>
          ))}
          {page.heroSideImage ? (
            <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-xl bg-white">
              <Image src={page.heroSideImage.src} alt={page.heroSideImage.alt} fill sizes="360px" className="object-contain p-2" />
            </div>
          ) : null}
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Clock className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            {route.duration} on the road
          </p>
        </div>
      </div>
    </section>
  );
}

/* Journey: route line visualization */
function JourneyHero({ page, route }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-primary">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20 lg:px-8">
        <div className="flex flex-col gap-6">
          <Title page={page} light={false} />
          <Points items={page.heroPoints} light={false} />
          <Actions page={page} light={false} />
        </div>
        <div className="anim-fade-up rounded-2xl bg-brand-dark p-6 shadow-2xl [--delay:300ms] sm:p-8">
          <div className="flex items-center justify-between gap-4 text-white">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">From</p>
              <p className="text-2xl font-bold">{route.from}</p>
            </div>
            <ArrowRight className="h-6 w-6 text-brand-gold" aria-hidden="true" />
            <div className="text-right">
              <p className="text-xs uppercase tracking-wide text-white/60">To</p>
              <p className="text-2xl font-bold">{route.to}</p>
            </div>
          </div>
          <svg viewBox="0 0 400 60" className="my-6 h-auto w-full" aria-hidden="true">
            <line x1="12" y1="30" x2="388" y2="30" stroke="#c9a14a" strokeWidth="3" strokeDasharray="8 8" />
            <circle cx="12" cy="30" r="10" fill="#c9a14a" />
            <circle cx="200" cy="30" r="6" fill="#fff" />
            <circle cx="388" cy="30" r="10" fill="#c9a14a" />
          </svg>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-white/10 p-3 text-white">
              <RouteIcon className="mb-1 h-4 w-4 text-brand-gold" aria-hidden="true" />
              {route.distance}
            </div>
            <div className="rounded-lg bg-white/10 p-3 text-white">
              <Clock className="mb-1 h-4 w-4 text-brand-gold" aria-hidden="true" />
              {route.duration}
            </div>
          </div>
          {page.heroSideImage ? (
            <div className="relative mt-5 aspect-[16/8] overflow-hidden rounded-xl bg-white">
              <Image src={page.heroSideImage.src} alt={page.heroSideImage.alt} fill priority sizes="420px" className="object-contain p-2" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* Vehicle: the car is the hero */
function VehicleFirstHero({ page, route, vehicleLabel }: Props) {
  const image = page.heroImage;
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-8 px-4 py-12 text-center sm:px-6 lg:py-16 lg:px-8">
        <div className="flex max-w-3xl flex-col items-center gap-5">
          <Title page={page} light />
        </div>
        {image ? (
          <div className="anim-fade-up relative aspect-[16/7] w-full max-w-4xl [--delay:250ms]">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 900px, 100vw" className="object-contain" />
          </div>
        ) : null}
        <dl className="grid w-full max-w-4xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
          {[
            ["Vehicle", vehicleLabel],
            ["Route", `${route.from} → ${route.to}`],
            ["Distance", route.distance],
            ["Typical time", route.duration],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-brand-gray bg-brand-beige/50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{label}</dt>
              <dd className="mt-1 text-sm font-semibold text-brand-dark">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col items-center gap-4">
          <Actions page={page} light />
        </div>
        {page.heroSideImage ? (
          <figure className="flex items-center gap-3 rounded-lg border border-brand-gray p-2 text-left">
            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded">
              <Image src={page.heroSideImage.src} alt={page.heroSideImage.alt} fill sizes="80px" className="object-cover" />
            </div>
            <figcaption className="text-xs text-brand-dark/70">{page.heroSideImage.title}</figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}

/* Premium: dark, gold-accented SUV presentation */
function PremiumHero({ page, route }: Props) {
  const image = page.heroImage;
  return (
    <section className="relative overflow-hidden bg-[#0b1f17]">
      <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20 lg:px-8">
        <div className="flex flex-col gap-6">
          <Title page={page} light={false} />
          <Points items={page.heroPoints} light={false} />
          <Actions page={page} light={false} />
        </div>
        <div className="anim-fade-up flex flex-col gap-5 [--delay:250ms]">
          {image ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-gold/30 bg-white shadow-2xl">
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-contain p-4" />
            </div>
          ) : null}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand-gold/30 px-5 py-4 text-white">
            <span className="font-semibold">{route.from} → {route.to}</span>
            <span className="text-sm text-white/75">{route.distance} · {route.duration}</span>
          </div>
          {page.heroSideImage ? (
            <div className="relative aspect-[16/6] overflow-hidden rounded-xl">
              <Image src={page.heroSideImage.src} alt={page.heroSideImage.alt} fill sizes="560px" className="object-cover opacity-80" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function VehicleHero(props: Props) {
  switch (props.page.hero) {
    case "family":
      return <FamilyHero {...props} />;
    case "airport":
      return <AirportHero {...props} />;
    case "journey":
      return <JourneyHero {...props} />;
    case "vehicle":
      return <VehicleFirstHero {...props} />;
    default:
      return <PremiumHero {...props} />;
  }
}
