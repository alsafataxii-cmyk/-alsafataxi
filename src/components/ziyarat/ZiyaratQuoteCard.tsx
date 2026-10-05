"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const field =
  "min-h-11 w-full border border-brand-gray bg-white px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60";
const label = "text-xs font-semibold uppercase tracking-wide text-brand-dark/70";

function value(data: FormData, key: string) {
  const entry = data.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

const openChat = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hello Al Safa Taxi, I would like to plan a private Ziyarat trip.",
)}`;

export default function ZiyaratQuoteCard() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Ziyarat quote request via alsafataxi.com",
      `City: ${value(data, "city")}`,
      `Pickup: ${value(data, "pickup")}`,
      `Date: ${value(data, "date")}`,
      value(data, "time") ? `Preferred start time: ${value(data, "time")}` : null,
      `Passengers: ${value(data, "passengers")}`,
      value(data, "luggage") ? `Luggage: ${value(data, "luggage")}` : null,
      value(data, "places") ? `Places: ${value(data, "places")}` : null,
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
      aria-labelledby="ziyarat-quote-title"
      className="anim-fade-up border border-white/20 bg-white p-6 shadow-2xl [--delay:300ms] sm:p-7"
    >
      <p id="ziyarat-quote-title" className="text-lg font-bold text-brand-dark">
        Get a Ziyarat quote
      </p>
      <p className="mt-1 text-sm text-brand-dark/60">Your details open as a WhatsApp message to us.</p>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="z-city" className={label}>
            City
          </label>
          <select id="z-city" name="city" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose
            </option>
            <option value="Makkah">Makkah</option>
            <option value="Madinah">Madinah</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="z-pickup" className={label}>
            Pickup
          </label>
          <select id="z-pickup" name="pickup" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose
            </option>
            <option value="Hotel">Hotel</option>
            <option value="Airport">Airport</option>
            <option value="Other location">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="z-date" className={label}>
            Date
          </label>
          <input id="z-date" name="date" type="date" required className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="z-time" className={label}>
            Start time
          </label>
          <input id="z-time" name="time" type="time" className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="z-pax" className={label}>
            Passengers
          </label>
          <input id="z-pax" name="passengers" type="number" min={1} max={50} required defaultValue={2} className={field} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="z-bags" className={label}>
            Luggage
          </label>
          <input id="z-bags" name="luggage" type="text" placeholder="e.g. 2 bags" className={field} />
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="z-places" className={label}>
            Ziyarat places <span className="font-normal normal-case">(optional)</span>
          </label>
          <textarea
            id="z-places"
            name="places"
            rows={2}
            placeholder="Tell us which places you want to visit"
            className={`${field} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-motion mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brand-primary px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        Get My Ziyarat Quote
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
          ? "WhatsApp opened in a new tab. Send the message and we will reply with the route, vehicle and price."
          : "We confirm the route, vehicle and price before you travel."}
      </p>
    </form>
  );
}
