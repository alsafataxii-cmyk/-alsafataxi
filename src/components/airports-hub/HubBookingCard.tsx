"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { fleet } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const field =
  "min-h-11 w-full border border-brand-gray bg-white px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60";
const label = "text-xs font-semibold uppercase tracking-wide text-brand-dark/70";

const airports = ["Jeddah Airport (JED)", "Madinah Airport (MED)", "Taif Airport (TIF)"];
const destinations = ["Makkah", "Madinah", "Jeddah", "Taif", "A hotel in the same city"];

function value(data: FormData, key: string) {
  const entry = data.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

const openChat = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hello Al Safa Taxi, I would like to arrange an airport transfer. My details are:",
)}`;

export default function HubBookingCard() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Airport transfer request via alsafataxi.com",
      `Airport: ${value(data, "airport")}`,
      `Destination: ${value(data, "destination")}`,
      `Date: ${value(data, "date")}`,
      value(data, "flight") ? `Flight number: ${value(data, "flight")}` : null,
      `Passengers: ${value(data, "passengers")}`,
      value(data, "luggage") ? `Bags: ${value(data, "luggage")}` : null,
      `Vehicle: ${value(data, "vehicle") || "No preference"}`,
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
      aria-labelledby="hub-quote-title"
      className="anim-fade-up border border-white/20 bg-white p-6 shadow-2xl [--delay:300ms] sm:p-7"
    >
      <p id="hub-quote-title" className="text-lg font-bold text-brand-dark">
        Get an airport transfer quote
      </p>
      <p className="mt-1 text-sm text-brand-dark/60">
        Your details open as a WhatsApp message to us.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="hub-airport" className={label}>
            Arrival airport
          </label>
          <select id="hub-airport" name="airport" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose your airport
            </option>
            {airports.map((airport) => (
              <option key={airport} value={airport}>
                {airport}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="hub-destination" className={label}>
            Destination
          </label>
          <select id="hub-destination" name="destination" required defaultValue="" className={field}>
            <option value="" disabled>
              Where are you going?
            </option>
            {destinations.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="hub-date" className={label}>
            Travel date
          </label>
          <input id="hub-date" name="date" type="date" required className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="hub-flight" className={label}>
            Flight number
          </label>
          <input id="hub-flight" name="flight" type="text" placeholder="e.g. SV 1234" className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="hub-pax" className={label}>
            Passengers
          </label>
          <input
            id="hub-pax"
            name="passengers"
            type="number"
            min={1}
            max={50}
            required
            defaultValue={2}
            className={field}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="hub-bags" className={label}>
            Bags
          </label>
          <input id="hub-bags" name="luggage" type="number" min={0} max={60} className={field} />
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="hub-vehicle" className={label}>
            Vehicle preference
          </label>
          <select id="hub-vehicle" name="vehicle" defaultValue="" className={field}>
            <option value="">No preference</option>
            {fleet.map((vehicle) => (
              <option key={vehicle.slug} value={vehicle.name}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="btn-motion rounded-lg font-bold mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brand-primary px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        Get My Quote
      </button>

      <a
        href={openChat}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-motion rounded-lg font-bold mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-brand-dark/25 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Send Details on WhatsApp
      </a>

      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-xs text-brand-dark/60">
        {sent
          ? "WhatsApp opened in a new tab. Send the message and we will reply with the vehicle and price."
          : "We confirm the vehicle and price before you travel."}
      </p>
    </form>
  );
}
