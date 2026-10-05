import { MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import FaqSection from "@/components/ui/FaqSection";
import JsonLd from "@/components/ui/JsonLd";
import MobileContactBar from "@/components/ui/MobileContactBar";
import ZiyaratHero from "@/components/ziyarat/ZiyaratHero";
import {
  AnswerAndCities,
  ArrivalAndAirport,
  GroupNeeds,
  HeatAndEtiquette,
  MadinahSection,
  MakkahSection,
  PlannerSection,
  ProcessSteps,
  RelatedLinks,
  VehiclesAndPricing,
} from "@/components/ziyarat/ZiyaratSections";
import { ziyaratFaqs } from "@/lib/content/ziyarat-page";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const path = "/services/ziyarat-tours";
const description =
  "Plan a private Ziyarat by car in Makkah or Madinah: Jabal al-Noor, Jabal Thawr, Quba, Qiblatain and Uhud, with a driver who waits and prayer times respected.";

export default function ZiyaratPage() {
  return (
    <div className="has-mobile-bar">
      <JsonLd
        data={webPageSchema({
          name: "Ziyarat Tours in Makkah & Madinah by Private Taxi",
          description,
          path,
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Private Ziyarat Tours in Makkah and Madinah",
          description,
          path,
          areas: ["Makkah", "Madinah"],
        })}
      />

      <ZiyaratHero />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Ziyarat Tours", href: path },
        ]}
      />

      <AnswerAndCities />
      <MakkahSection />
      <MadinahSection />
      <ProcessSteps />
      <div id="plan-my-ziyarat" className="scroll-mt-20">
        <PlannerSection />
      </div>
      <ArrivalAndAirport />
      <GroupNeeds />
      <HeatAndEtiquette />
      <VehiclesAndPricing />
      <FaqSection faqs={ziyaratFaqs} tone="gray" title="Ziyarat Tours FAQs" />

      <section className="relative overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-gold/5" />
        </div>
        <div className="relative mx-auto flex max-w-8xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div data-reveal className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Book Your Private Ziyarat Tour
            </h2>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us whether you&apos;re in Makkah or Madinah, which places you want to visit, your
              preferred date and time, and how many people are traveling. We&apos;ll confirm the
              practical route, vehicle and price.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex w-fit items-center gap-2 text-lg font-semibold text-white hover:text-brand-gold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
          <div data-reveal className="flex flex-col gap-4 sm:flex-row">
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              variant="outline-light"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <RelatedLinks />
      <MobileContactBar message="Hello Al Safa Taxi, I would like to plan a private Ziyarat trip." />
    </div>
  );
}
