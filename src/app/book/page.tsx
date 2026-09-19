import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import BookingForm from "@/components/sections/BookingForm";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book Your Ride",
  description:
    "Book your Al Safa Taxi ride online, by phone or WhatsApp. Available 24/7 for airport transfers, Ziyarat tours, city taxi and intercity travel.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Your Ride"
        title="Let's Get You Moving"
        description="Fill in your trip details below and send them straight to us on WhatsApp, or call us directly for immediate assistance."
      />

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
    </>
  );
}
