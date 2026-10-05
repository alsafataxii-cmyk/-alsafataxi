"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Passengers = "1-3" | "4-5" | "6-8" | "9+";
type Luggage = "Light" | "Medium" | "Large";

const passengerOptions: Passengers[] = ["1-3", "4-5", "6-8", "9+"];
const luggageOptions: Luggage[] = ["Light", "Medium", "Large"];

// Suggestion only: it points at a class and always says availability is confirmed.
function suggest(passengers: Passengers, luggage: Luggage): string {
  if (passengers === "9+") {
    return "A group this size needs more than one vehicle. We plan the cars so that they leave together.";
  }
  if (passengers === "6-8") {
    return luggage === "Large"
      ? "A Luxury Van, and with this much luggage it is worth telling us the exact number of bags so we can check the fit."
      : "A Luxury Van.";
  }
  if (passengers === "4-5") {
    return luggage === "Large"
      ? "A Premium SUV or a Luxury Van, depending on how many bags there are."
      : "A Premium SUV.";
  }
  return luggage === "Large"
    ? "A Premium SUV, since large bags take space that a sedan may not have."
    : "An Executive Sedan.";
}

const pill =
  "inline-flex min-h-11 cursor-pointer items-center justify-center border px-5 text-sm font-medium transition-colors duration-300 focus-within:outline focus-within:outline-2 focus-within:outline-brand-gold";

export default function VehicleSelector() {
  const [passengers, setPassengers] = useState<Passengers>("1-3");
  const [luggage, setLuggage] = useState<Luggage>("Light");

  const suggestion = suggest(passengers, luggage);
  const message = `Hello Al Safa Taxi, I am travelling with ${passengers} passengers and ${luggage.toLowerCase()} luggage. Which vehicle do you suggest?`;

  return (
    <div className="grid grid-cols-1 gap-8 border border-brand-gray bg-white p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="flex flex-col gap-6">
        <fieldset>
          <legend className="text-sm font-semibold text-brand-dark">How many passengers?</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {passengerOptions.map((option) => (
              <label
                key={option}
                className={`${pill} ${passengers === option ? "border-brand-primary bg-brand-primary text-white" : "border-brand-gray bg-white hover:border-brand-gold/60"}`}
              >
                <input
                  type="radio"
                  name="vehicle-passengers"
                  value={option}
                  checked={passengers === option}
                  onChange={() => setPassengers(option)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-brand-dark">How much luggage?</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {luggageOptions.map((option) => (
              <label
                key={option}
                className={`${pill} ${luggage === option ? "border-brand-primary bg-brand-primary text-white" : "border-brand-gray bg-white hover:border-brand-gold/60"}`}
              >
                <input
                  type="radio"
                  name="vehicle-luggage"
                  value={option}
                  checked={luggage === option}
                  onChange={() => setLuggage(option)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col justify-between gap-4 bg-brand-beige/60 p-6">
        <div role="status" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">We would suggest</p>
          <p className="mt-2 text-base font-semibold leading-snug text-brand-dark">{suggestion}</p>
          <p className="mt-2 text-xs text-brand-dark/60">
            This is a guide. We confirm the vehicle and its availability before you travel.
          </p>
        </div>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-motion rounded-lg font-bold inline-flex min-h-12 items-center justify-center gap-2 bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Ask Us About This
        </a>
      </div>
    </div>
  );
}
