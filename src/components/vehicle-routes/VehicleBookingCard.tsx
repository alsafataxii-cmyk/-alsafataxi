"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Props = {
  from: string;
  to: string;
  vehicle: string;
  airport: boolean;
  button: string;
};

const field =
  "min-h-11 w-full rounded-md border border-brand-gray bg-white px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60";
const label = "text-xs font-semibold uppercase tracking-wide text-brand-dark/70";

function value(data: FormData, key: string) {
  const entry = data.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

export default function VehicleBookingCard({ from, to, vehicle, airport, button }: Props) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `${vehicle} request via alsafataxi.com`,
      `Name: ${value(data, "name")}`,
      `Route: ${from} to ${to}`,
      `Pickup: ${value(data, "pickup") || from}`,
      `Destination: ${value(data, "destination") || to}`,
      `Date: ${value(data, "date")}`,
      `Passengers: ${value(data, "passengers")}`,
      value(data, "luggage") ? `Luggage: ${value(data, "luggage")}` : null,
      airport && value(data, "flight") ? `Flight number: ${value(data, "flight")}` : null,
      `Vehicle: ${vehicle}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-brand-gray bg-white p-6 shadow-xl sm:p-7">
      <p className="text-lg font-bold text-brand-dark">
        {from} → {to}
      </p>
      <p className="mt-1 text-sm text-brand-dark/60">Vehicle: {vehicle}. Your details open as a WhatsApp message.</p>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-1.5">
          <label htmlFor="vr-name" className={label}>Name</label>
          <input id="vr-name" name="name" type="text" required className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vr-pickup" className={label}>Pickup</label>
          <input id="vr-pickup" name="pickup" type="text" placeholder={from} className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vr-dest" className={label}>Destination</label>
          <input id="vr-dest" name="destination" type="text" placeholder={`Hotel in ${to}`} className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vr-date" className={label}>Date</label>
          <input id="vr-date" name="date" type="date" required className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vr-pax" className={label}>Passengers</label>
          <input id="vr-pax" name="passengers" type="number" min={1} max={40} required defaultValue={4} className={field} />
        </div>
        <div className={`flex flex-col gap-1.5 ${airport ? "" : "col-span-2"}`}>
          <label htmlFor="vr-bags" className={label}>Luggage</label>
          <input id="vr-bags" name="luggage" type="text" placeholder="e.g. 5 suitcases" className={field} />
        </div>
        {airport ? (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="vr-flight" className={label}>Flight number</label>
            <input id="vr-flight" name="flight" type="text" placeholder="e.g. SV 1234" className={field} />
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="btn-motion mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-primary/30 transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {button}
      </button>
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-xs text-brand-dark/60">
        {sent
          ? "WhatsApp opened in a new tab. Send the message and we will confirm availability and price."
          : "We confirm availability and price before you travel."}
      </p>
    </form>
  );
}
