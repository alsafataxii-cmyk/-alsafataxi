import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const introLinks = [
  { label: "Airport transfers", href: "/services/airport-transfers" },
  { label: "Umrah transportation", href: "/umrah-transportation" },
  { label: "Ziyarat tours", href: "/services/ziyarat-tours" },
  { label: "Intercity transfers", href: "/services/intercity-transfers" },
  { label: "Hotel transfers", href: "/services/hotel-transfers" },
  { label: "Private chauffeur", href: "/services/private-chauffeur" },
];

export default function HomeIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:col-span-3">
          <SectionHeading
            eyebrow="About the Service"
            title="Taxi Service Across Makkah, Madinah, Jeddah & Taif"
          />
          <p className="text-base leading-relaxed text-brand-dark/70">
            Al Safa Taxi is a private taxi and transfer service for the Western Region of Saudi
            Arabia. Whether you have just landed in Jeddah, are heading from Makkah to Madinah
            after Umrah, or need a driver for a day of Ziyarat, we arrange the journey around your
            plans.
          </p>
          <p className="text-base leading-relaxed text-brand-dark/70">
            Most visitors to Makkah arrive through Jeddah, so our{" "}
            <Link
              href="/airports/jeddah-airport"
              className="font-semibold text-brand-primary underline"
            >
              Jeddah Airport transfers
            </Link>{" "}
            connect King Abdulaziz International Airport with hotels in Makkah and Madinah, alongside
            pickups at Madinah and Taif airports. Between the cities, private{" "}
            <Link
              href="/services/intercity-transfers"
              className="font-semibold text-brand-primary underline"
            >
              intercity journeys
            </Link>{" "}
            let your family or group travel together with luggage, with stops planned for prayer
            and rest.
          </p>
          <p className="text-base leading-relaxed text-brand-dark/70">
            Vehicle access and pickup arrangements can vary around the Haram and the
            Prophet&apos;s Mosque, so we confirm your hotel and pickup point in advance. Tell us
            your flight, hotel, passenger count and luggage, and we confirm the vehicle and price
            before you travel.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">
            What We Arrange
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {introLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between border border-brand-gray p-4 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-gold"
                >
                  {link.label}
                  <ArrowUpRight
                    className="h-4 w-4 text-brand-dark/30 transition-colors group-hover:text-brand-gold"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
