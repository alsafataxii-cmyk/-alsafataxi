import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import FaqSection from "@/components/ui/FaqSection";
import VehicleBookingCard from "@/components/vehicle-routes/VehicleBookingCard";
import type { Block } from "@/lib/content/vehicle-routes/types";
import { siteConfig } from "@/lib/site-config";

type Ctx = { from: string; to: string; vehicle: string; airport: boolean };

function H2({ children, light }: { children: string; light?: boolean }) {
  return (
    <h2 data-reveal className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-brand-dark"}`}>
      {children}
    </h2>
  );
}

export function RenderBlock({ block, ctx }: { block: Block; ctx: Ctx }) {
  switch (block.type) {
    case "answer":
      return (
        <Band>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-4">
              <H2>{block.question}</H2>
              <p data-reveal className="text-lg leading-relaxed text-brand-dark/85">{block.answer}</p>
              {block.detail ? <p data-reveal className="text-base leading-relaxed text-brand-dark/70">{block.detail}</p> : null}
            </div>
            {block.facts ? (
              <dl data-reveal className="flex flex-col gap-3 self-start rounded-xl border border-brand-gray bg-brand-beige/60 p-5">
                {block.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{fact.label}</dt>
                    <dd className="text-sm font-medium text-brand-dark">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </Band>
      );

    case "prose":
      return (
        <Band tone={block.tone ?? "white"}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="flex flex-col gap-4">
              <H2>{block.heading}</H2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} data-reveal className="text-base leading-relaxed text-brand-dark/75">
                  {paragraph}
                </p>
              ))}
              {block.bullets ? (
                <ul data-reveal className="flex flex-col gap-2 text-sm text-brand-dark/80">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {block.aside ? (
              <aside data-reveal className="flex gap-3 self-start rounded-xl border-l-4 border-brand-gold bg-white p-5 text-sm leading-relaxed text-brand-dark/75 shadow-sm">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                {block.aside}
              </aside>
            ) : null}
          </div>
        </Band>
      );

    case "checklist":
      return (
        <Band tone={block.tone ?? "white"}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div className="flex flex-col gap-3">
              <H2>{block.heading}</H2>
              {block.intro ? <p data-reveal className="text-base text-brand-dark/70">{block.intro}</p> : null}
            </div>
            <ul data-reveal className="grid grid-cols-1 gap-3 rounded-xl border border-brand-gray bg-white p-6 sm:grid-cols-2">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-dark/85">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-primary text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Band>
      );

    case "timeline":
      if (block.style === "arrival") {
        return (
          <Band tone="sand">
            <H2>{block.heading}</H2>
            {block.intro ? <p data-reveal className="mt-3 text-base text-brand-dark/70">{block.intro}</p> : null}
            <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {block.steps.map((step, index) => (
                <li key={step.title} data-reveal className="relative rounded-xl border border-brand-gray bg-white p-4">
                  <span className="text-xs font-bold tracking-widest text-brand-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-sm font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-dark/70">{step.copy}</p>
                </li>
              ))}
            </ol>
          </Band>
        );
      }
      if (block.style === "journey") {
        return (
          <Band>
            <H2>{block.heading}</H2>
            <ol className="relative mt-8 flex flex-col gap-0 border-l-2 border-dashed border-brand-gold pl-8">
              {block.steps.map((step) => (
                <li key={step.title} data-reveal className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white bg-brand-primary shadow" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-1 text-sm text-brand-dark/70">{step.copy}</p>
                </li>
              ))}
            </ol>
          </Band>
        );
      }
      return (
        <Band>
          <H2>{block.heading}</H2>
          <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {block.steps.map((step, index) => (
              <li key={step.title} data-reveal className="rounded-xl border border-brand-gray bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-3 text-base font-semibold text-brand-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Band>
      );

    case "compare":
      return (
        <Band tone="sand">
          <H2>{block.heading}</H2>
          {block.intro ? <p data-reveal className="mt-3 max-w-3xl text-base text-brand-dark/70">{block.intro}</p> : null}
          <div data-reveal className="mt-8 hidden overflow-hidden rounded-xl border border-brand-gray bg-white md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="px-5 py-3 font-semibold">{block.columns[0]}</th>
                  <th scope="col" className="px-5 py-3 font-semibold">{block.columns[1]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray">
                {block.rows.map(([row, a, b]) => (
                  <tr key={row}>
                    <th scope="row" className="px-5 py-3 font-semibold text-brand-dark">{row}</th>
                    <td className="px-5 py-3 text-brand-dark/80">{a}</td>
                    <td className="px-5 py-3 text-brand-dark/80">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col gap-3 md:hidden">
            {block.rows.map(([row, a, b]) => (
              <dl key={row} className="rounded-xl border border-brand-gray bg-white p-4 text-sm">
                <dt className="font-bold text-brand-dark">{row}</dt>
                <dd className="mt-1 text-brand-dark/80"><span className="font-semibold">{block.columns[0]}:</span> {a}</dd>
                <dd className="text-brand-dark/80"><span className="font-semibold">{block.columns[1]}:</span> {b}</dd>
              </dl>
            ))}
          </div>
          {block.note ? <p className="mt-5 max-w-3xl text-sm text-brand-dark/65">{block.note}</p> : null}
        </Band>
      );

    case "cards":
      return (
        <Band>
          <H2>{block.heading}</H2>
          {block.intro ? <p data-reveal className="mt-3 max-w-3xl text-base text-brand-dark/70">{block.intro}</p> : null}
          <div className={`mt-8 grid grid-cols-1 gap-5 ${block.columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {block.items.map((item) => (
              <article key={item.title} data-reveal className="card-lift rounded-xl border border-brand-gray bg-white p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/75">{item.copy}</p>
              </article>
            ))}
          </div>
        </Band>
      );

    case "capacity":
      return (
        <Band tone="sand">
          <div className="rounded-2xl bg-brand-dark p-6 sm:p-10">
            <H2 light>{block.heading}</H2>
            {block.intro ? <p className="mt-3 text-base text-white/70">{block.intro}</p> : null}
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {block.items.map((item) => (
                <div key={item.label} data-reveal className="rounded-xl border border-white/15 bg-white/5 p-5">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{item.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium leading-snug text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-white/65">
              {block.note}{" "}
              <Link href="/fleet" className="font-semibold text-brand-gold underline underline-offset-2">
                See the fleet
              </Link>
              .
            </p>
          </div>
        </Band>
      );

    case "split":
      return (
        <Band>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className={`flex flex-col gap-4 ${block.side === "right" ? "" : "lg:order-2"}`}>
              <H2>{block.heading}</H2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} data-reveal className="text-base leading-relaxed text-brand-dark/75">{paragraph}</p>
              ))}
            </div>
            <figure data-reveal className={`overflow-hidden rounded-2xl border border-brand-gray bg-white p-4 ${block.side === "right" ? "" : "lg:order-1"}`}>
              <div className="relative aspect-[16/10]">
                <Image src={block.image.src} alt={block.image.alt} fill loading="lazy" sizes="(min-width: 1024px) 560px, 100vw" className="object-contain" />
              </div>
              <figcaption className="mt-2 text-xs text-brand-dark/60">{block.image.title}</figcaption>
            </figure>
          </div>
        </Band>
      );

    case "cta":
      return (
        <section id="book" className={`scroll-mt-24 ${block.dark ? "bg-brand-dark" : "bg-brand-beige"}`}>
          <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:py-20 lg:px-8">
            <div className="flex flex-col gap-4">
              <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${block.dark ? "text-white" : "text-brand-dark"}`}>{block.heading}</h2>
              <p className={`text-base leading-relaxed ${block.dark ? "text-white/75" : "text-brand-dark/75"}`}>{block.copy}</p>
              <div className="flex flex-wrap gap-3">
                <Button
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(block.whatsapp)}`}
                  variant="whatsapp"
                >
                  WhatsApp Us
                </Button>
                <Button href={siteConfig.phoneHref} variant={block.dark ? "outline-light" : "outline-dark"}>
                  Call {siteConfig.phone}
                </Button>
                <Button href="/book" variant={block.dark ? "gold" : "primary"}>
                  Book Your Ride
                </Button>
              </div>
            </div>
            <VehicleBookingCard from={ctx.from} to={ctx.to} vehicle={ctx.vehicle} airport={ctx.airport} button={block.button} />
          </div>
        </section>
      );

    case "faq":
      return <FaqSection faqs={block.faqs} tone="white" title={block.title} />;

    case "related":
      return (
        <Band tone="sand">
          <H2>{block.heading}</H2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {block.links.map((link) => (
              <li key={link.href} data-reveal>
                <Link href={link.href} className="card-lift group flex h-full flex-col gap-2 rounded-xl border border-brand-gray bg-white p-5">
                  <span className="text-base font-bold text-brand-dark">{link.label}</span>
                  <span className="text-sm leading-relaxed text-brand-dark/70">{link.note}</span>
                  <span className="cta-chip mt-auto">
                    Open <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Band>
      );
  }
}
