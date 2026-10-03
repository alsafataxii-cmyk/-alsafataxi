import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ReviewButton from "@/components/ui/ReviewButton";
import { locationPages } from "@/lib/content/locations";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Call or WhatsApp to Book a Taxi",
  description:
    "Contact Al Safa Taxi by phone, WhatsApp or email to book a taxi or ask a question in Makkah, Madinah, Jeddah or Taif. Our booking line is open 24/7.",
  path: "/contact",
});

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsappNumber}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

const messageChecklist = [
  "Pickup point and destination",
  "Date and time of travel",
  "Number of passengers and pieces of luggage",
  "Flight number, for airport pickups",
  "Hotel name, if you are staying near the Haram or the Prophet's Mosque",
  "Whether you need a return trip or a child seat",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're Available Around the Clock"
        description="Reach us by phone or WhatsApp for the fastest response, or send us an email for general enquiries."
      />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="group flex flex-col gap-4 border border-brand-gray p-8 transition-colors hover:border-brand-gold"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-primary text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                      {method.label}
                    </p>
                    <p className="mt-1 text-lg font-medium text-brand-dark [overflow-wrap:anywhere]">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 border border-brand-gray p-8">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-brand-beige text-brand-primary">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                  Base
                </p>
                <p className="mt-1 text-lg font-medium text-brand-dark">{siteConfig.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border border-brand-gray p-8">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-brand-beige text-brand-primary">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                  Opening Hours
                </p>
                <p className="mt-1 text-lg font-medium text-brand-dark">{siteConfig.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Service Areas" title="Where We Operate" />
              <p className="text-base leading-relaxed text-brand-dark/70">
                {siteConfig.name} provides private taxi, airport transfer, Umrah and Ziyarat
                transportation in four cities and on the roads between them.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {locationPages.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="block border border-brand-gray p-4 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-gold"
                    >
                      {location.name} taxi service
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Before You Message" title="What to Include in Your Message" />
              <p className="text-base leading-relaxed text-brand-dark/70">
                The more we know, the faster we can confirm your vehicle and price. Please send:
              </p>
              <ul className="flex flex-col gap-2">
                {messageChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-brand-dark/70">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border border-brand-gray p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-brand-dark">Already travelled with us?</h2>
              <p className="mt-1 text-sm text-brand-dark/70">
                Leave a review on Trustpilot and help other travellers choose.
              </p>
            </div>
            <ReviewButton variant="outline-dark" className="shrink-0" />
          </div>

          <div className="mt-6 flex flex-col items-start gap-6 bg-brand-dark p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Ready to ride?</h2>
              <p className="mt-2 text-white/70">
                Skip the wait and send your trip details through our booking form.
              </p>
            </div>
            <Button href="/book" variant="gold" size="lg">
              Book Your Ride
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
