import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Al Safa Taxi by phone, WhatsApp or email to book a ride or ask a question. Our team is available 24/7.",
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

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're Available Around the Clock"
        description="Reach our dispatch team by phone or WhatsApp for the fastest response, or send us an email for general enquiries."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
                    <p className="mt-1 text-lg font-medium text-brand-dark">{method.value}</p>
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
                  Address
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
                  Availability
                </p>
                <p className="mt-1 text-lg font-medium text-brand-dark">{siteConfig.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start gap-6 bg-brand-dark p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Ready to ride?</h2>
              <p className="mt-2 text-white/70">
                Skip the wait — book your ride directly online.
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
