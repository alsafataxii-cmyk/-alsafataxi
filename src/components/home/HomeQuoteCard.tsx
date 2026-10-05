"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const field =
  "min-h-11 w-full border border-brand-gray bg-white px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60";
const label = "text-xs font-semibold uppercase tracking-wide text-brand-dark/70";

const places = [
  "Jeddah Airport (JED)",
  "Madinah Airport (MED)",
  "Taif Airport (TIF)",
  "Hotel in Makkah",
  "Hotel in Madinah",
  "Hotel or address in Jeddah",
  "Hotel or address in Taif",
  "Other location",
];

function value(data: FormData, key: string) {
  const entry = data.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

const openChat = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hello Al Safa Taxi, I would like a quote for a private ride.",
)}`;

export default function HomeQuoteCard() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [sent, setSent] = useState(false);

  const airportInvolved = pickup.includes("Airport") || destination.includes("Airport");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Quote request via alsafataxi.com",
      `Pickup: ${pickup}`,
      `Destination: ${destination}`,
      `Date: ${value(data, "date")}`,
      value(data, "time") ? `Time: ${value(data, "time")}` : null,
      `Passengers: ${value(data, "passengers")}`,
      value(data, "luggage") ? `Luggage: ${value(data, "luggage")}` : null,
      airportInvolved && value(data, "flight") ? `Flight number: ${value(data, "flight")}` : null,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <form
      onSubmit={submit}
      aria-labelledby="home-quote-title"
      className="anim-fade-up border border-white/20 bg-white p-6 shadow-2xl [--delay:300ms] sm:p-7"
    >
      <p id="home-quote-title" className="text-lg font-bold text-brand-dark">
        Get a quote for your ride
      </p>
      <p className="mt-1 text-sm text-brand-dark/60">Your details open as a WhatsApp message to us.</p>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="home-pickup" className={label}>
            Pickup
          </label>
          <select
            id="home-pickup"
            name="pickup"
            required
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            className={field}
          >
            <option value="" disabled>
              Where do we collect you?
            </option>
            {places.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="home-destination" className={label}>
            Destination
          </label>
          <select
            id="home-destination"
            name="destination"
            required
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className={field}
          >
            <option value="" disabled>
              Where are you going?
            </option>
            {places.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="home-date" className={label}>
            Date
          </label>
          <input id="home-date" name="date" type="date" required className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="home-time" className={label}>
            Time
          </label>
          <input id="home-time" name="time" type="time" className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="home-pax" className={label}>
            Passengers
          </label>
          <input id="home-pax" name="passengers" type="number" min={1} max={50} required defaultValue={2} className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="home-bags" className={label}>
            Luggage
          </label>
          <input id="home-bags" name="luggage" type="text" placeholder="e.g. 3 bags" className={field} />
        </div>

        {airportInvolved ? (
          <div className="col-span-2 flex flex-col gap-1.5">
            <label htmlFor="home-flight" className={label}>
              Flight number
            </label>
            <input id="home-flight" name="flight" type="text" placeholder="e.g. SV 1234" className={field} />
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="btn-motion mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brand-primary px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        Get My Quote
      </button>

      <a
        href={openChat}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-motion mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-brand-dark/25 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp Us
      </a>

      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-xs text-brand-dark/60">
        {sent
          ? "WhatsApp opened in a new tab. Send the message and we will reply with the vehicle and price."
          : "We confirm the vehicle and price before you travel."}
      </p>
    </form>
  );
}
