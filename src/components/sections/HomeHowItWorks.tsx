import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/ui/ProcessSteps";
import BookingStepIcon from "@/components/icons/BookingStepIcon";

const steps = [
  {
    title: "Send Your Trip Details",
    description:
      "Use the booking form, message us on WhatsApp or call. Include your pickup, destination, date, number of passengers and luggage, and your flight number for airport trips.",
    icon: <BookingStepIcon step={1} className="h-full w-full" />,
  },
  {
    title: "Confirm Vehicle and Price",
    description:
      "We reply with the vehicle that suits your group and the price, so both are agreed before you travel.",
    icon: <BookingStepIcon step={2} className="h-full w-full" />,
  },
  {
    title: "Meet Your Driver",
    description:
      "Your driver collects you at the agreed time and place. If your plans change, message us and we will adjust.",
    icon: <BookingStepIcon step={3} className="h-full w-full" />,
  },
  {
    title: "Complete Your Journey",
    description:
      "Travel to your destination. If you need a return trip or a further journey, message us and we will arrange it.",
    icon: <BookingStepIcon step={4} className="h-full w-full" />,
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="bg-brand-gray/40">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="How Our Booking Works"
          description="Booking a private taxi takes a few minutes and works through WhatsApp, the booking form or a phone call."
        />
        <div className="mt-12">
          <ProcessSteps steps={steps} />
        </div>
        <p className="mt-12 max-w-3xl text-base leading-relaxed text-brand-dark/70">
          Booking through WhatsApp is the fastest way to reach us: the{" "}
          <Link href="/book" className="font-semibold text-brand-primary underline">
            booking form
          </Link>{" "}
          opens WhatsApp with your trip details already written, so you only have to press send.
          Our booking line is open 24 hours a day, so night and early-morning flights can be
          arranged too.
        </p>
      </div>
    </section>
  );
}
