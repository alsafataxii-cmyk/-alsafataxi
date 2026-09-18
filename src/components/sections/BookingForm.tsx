"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

const inputClasses =
  "w-full border border-brand-gray bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none";
const labelClasses = "text-sm font-medium text-brand-dark";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const pickup = formData.get("pickup");
    const dropoff = formData.get("dropoff");
    const date = formData.get("date");
    const time = formData.get("time");
    const notes = formData.get("notes");

    const lines = [
      `New booking request via alsafataxi.com`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Pickup: ${pickup}`,
      `Drop-off: ${dropoff}`,
      `Date: ${date}`,
      `Time: ${time}`,
      notes ? `Notes: ${notes}` : null,
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
          Phone Number
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

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="notes" className={labelClasses}>
          Notes (optional)
        </label>
        <textarea id="notes" name="notes" rows={3} className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Booking Request via WhatsApp
        </Button>
        {submitted ? (
          <p className="mt-3 text-sm text-brand-primary">
            WhatsApp is opening with your booking details — send the message to confirm.
          </p>
        ) : null}
      </div>
    </form>
  );
}
