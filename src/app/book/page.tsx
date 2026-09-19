import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FaqSection from "@/components/ui/FaqSection";
import Button from "@/components/ui/Button";
import BookingForm from "@/components/sections/BookingForm";
import { bookFaqs } from "@/lib/content/index-faqs";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a Taxi in Makkah, Madinah, Jeddah & Taif",
  description:
    "Book a private taxi online, by phone or WhatsApp. Airport transfers, Umrah and Ziyarat transportation, city taxi and intercity travel, available 24/7.",
  path: "/book",
});

const bookingSteps = [
  {
    title: "Send Your Trip Details",
    description:
      "Fill in the form, message us on WhatsApp or call, with pickup, destination, date, passengers and flight number if needed.",
  },
  {
    title: "Confirm Vehicle and Price",
    description:
      "We reply with the vehicle that suits your group and luggage, and the price, before you travel.",
  },
  {
    title: "Meet Your Driver",
    description:
      "Your driver collects you at the agreed time and place. Message us if your plans change.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Your Ride"
        title="Book a Taxi in Makkah, Madinah, Jeddah & Taif"
        description="Fill in your trip details below and send them straight to us on WhatsApp, or call us directly for immediate assistance."
      />
      <Breadcrumbs items={[{ label: "Book", href: "/book" }]} />

      <section className="bg-white">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-brand-gray p-8">
              <h2 className="text-lg font-semibold text-brand-dark">Prefer to talk?</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
                Call or message us at any time for immediate bookings and changes to existing
                trips.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href={siteConfig.phoneHref} variant="outline-dark">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phone}
                </Button>
                <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} variant="outline-dark">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <div className="bg-brand-beige p-8">
              <h2 className="text-lg font-semibold text-brand-dark">What to Expect</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-brand-dark/70">
                <li>Your vehicle and price confirmed before you travel</li>
                <li>A booking line open 24 hours a day</li>
                <li>Your flight, hotel and luggage details used to plan the pickup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray/40">
        <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="How Booking Works"
            description="Three simple steps from your first message to your pickup."
          />
          <div className="mt-12">
            <ProcessSteps steps={bookingSteps} />
          </div>
        </div>
      </section>

      <FaqSection faqs={bookFaqs} title="Booking FAQs" />
    </>
  );
}
