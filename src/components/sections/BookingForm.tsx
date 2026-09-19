"use client";

import { useState, type FormEvent } from "react";
import { fleet, services } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

const inputClasses =
  "w-full border border-brand-gray bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none";
const labelClasses = "text-sm font-medium text-brand-dark";
const checkboxLabelClasses = "flex items-center gap-3 text-sm text-brand-dark";

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const lines = [
      "New booking request via alsafataxi.com",
      `Name: ${text(formData, "name")}`,
      `Phone: ${text(formData, "phone")}`,
      `Service: ${text(formData, "service")}`,
      `Pickup: ${text(formData, "pickup")}`,
      `Drop-off: ${text(formData, "dropoff")}`,
      `Date: ${text(formData, "date")}`,
      `Time: ${text(formData, "time")}`,
      `Passengers: ${text(formData, "passengers")}`,
      `Luggage: ${text(formData, "luggage") || "Not specified"}`,
      `Vehicle: ${text(formData, "vehicle") || "No preference"}`,
      text(formData, "flight") ? `Flight number: ${text(formData, "flight")}` : null,
      formData.get("return") ? "Return trip: Yes" : null,
      formData.get("childSeat") ? "Child seat needed: Yes" : null,
      text(formData, "notes") ? `Notes: ${text(formData, "notes")}` : null,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClasses}>
          Full Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelClasses}>
          Phone / WhatsApp Number
        </label>
        <input id="phone" name="phone" type="tel" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="service" className={labelClasses}>
          Service Type
        </label>
        <select id="service" name="service" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Umrah Transportation">Umrah Transportation</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pickup" className={labelClasses}>
          Pickup Location
        </label>
        <input id="pickup" name="pickup" type="text" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dropoff" className={labelClasses}>
          Drop-off Location
        </label>
        <input id="dropoff" name="dropoff" type="text" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className={labelClasses}>
          Date
        </label>
        <input id="date" name="date" type="date" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="time" className={labelClasses}>
          Time
        </label>
        <input id="time" name="time" type="time" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="passengers" className={labelClasses}>
          Passengers
        </label>
        <input
          id="passengers"
          name="passengers"
          type="number"
          min={1}
          max={50}
          defaultValue={1}
          required
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="luggage" className={labelClasses}>
          Pieces of Luggage
        </label>
        <input
          id="luggage"
          name="luggage"
          type="number"
          min={0}
          max={50}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="vehicle" className={labelClasses}>
          Vehicle Preference
        </label>
        <select id="vehicle" name="vehicle" defaultValue="" className={inputClasses}>
          <option value="">No preference</option>
          {fleet.map((vehicle) => (
            <option key={vehicle.slug} value={vehicle.name}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="flight" className={labelClasses}>
          Flight Number (airport trips)
        </label>
        <input
          id="flight"
          name="flight"
          type="text"
          placeholder="e.g. SV 123"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:gap-8">
        <label className={checkboxLabelClasses}>
          <input type="checkbox" name="return" className="h-4 w-4 accent-brand-primary" />
          I also need a return trip
        </label>
        <label className={checkboxLabelClasses}>
          <input type="checkbox" name="childSeat" className="h-4 w-4 accent-brand-primary" />
          I need a child seat
        </label>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="notes" className={labelClasses}>
          Special requirements or notes (optional)
        </label>
        <textarea id="notes" name="notes" rows={3} className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Booking Request via WhatsApp
        </Button>
        {submitted ? (
          <p className="mt-3 text-sm text-brand-primary">
            WhatsApp is opening with your booking details. Send the message to confirm.
          </p>
        ) : null}
      </div>
    </form>
  );
}
