"use client";

import { useState, type FormEvent } from "react";
import { Check, MessageCircle } from "lucide-react";
import { plannerStops } from "@/lib/content/ziyarat-page";
import { siteConfig } from "@/lib/site-config";

type City = "Makkah" | "Madinah";
type Duration = "Morning" | "Afternoon" | "Custom";

const durations: Duration[] = ["Morning", "Afternoon", "Custom"];
const climbs = ["Jabal al-Noor & Cave of Hira", "Jabal Thawr & Cave of Thawr"];

const field =
  "min-h-11 w-full border border-brand-gray bg-white px-3 py-2.5 text-sm text-brand-dark focus:border-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60";
const label = "text-xs font-semibold uppercase tracking-wide text-brand-dark/70";

export default function ZiyaratPlanner() {
  const [city, setCity] = useState<City>("Madinah");
  const [picked, setPicked] = useState<string[]>([]);
  const [duration, setDuration] = useState<Duration>("Morning");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [older, setOlder] = useState(0);
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  function chooseCity(next: City) {
    setCity(next);
    setPicked([]);
    setSent(false);
  }

  function toggle(stop: string) {
    setPicked((current) =>
      current.includes(stop) ? current.filter((item) => item !== stop) : [...current, stop],
    );
  }

  const climbing = picked.some((stop) => climbs.includes(stop));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      "Ziyarat plan request via alsafataxi.com",
      `City: ${city}`,
      `Stops: ${picked.length ? picked.join("; ") : "Not chosen yet, please suggest"}`,
      `Group: ${adults} adults, ${children} children, ${older} older travellers`,
      `Preferred time: ${duration}`,
      notes.trim() ? `Notes: ${notes.trim()}` : null,
    ].filter(Boolean);
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  const count = (id: string, value: number, set: (n: number) => void, min: number) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={label}>
        {id === "zp-adults" ? "Adults" : id === "zp-children" ? "Children" : "Older travellers"}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={40}
        value={value}
        onChange={(event) => set(Math.max(min, Number(event.target.value) || min))}
        className={field}
      />
    </div>
  );

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-6">
        <fieldset>
          <legend className={label}>1. Choose your city</legend>
          <div className="mt-3 inline-flex border border-brand-gray bg-white p-1" role="radiogroup" aria-label="City">
            {(["Madinah", "Makkah"] as City[]).map((option) => (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={city === option}
                onClick={() => chooseCity(option)}
                className={`min-h-11 px-6 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
                  city === option ? "bg-brand-primary text-white" : "text-brand-dark hover:bg-brand-beige"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={label}>2. Choose your stops</legend>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {plannerStops[city].map((stop) => {
              const on = picked.includes(stop);
              return (
                <label
                  key={stop}
                  className={`flex min-h-12 cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-all duration-300 focus-within:outline focus-within:outline-2 focus-within:outline-brand-gold ${
                    on ? "border-brand-primary bg-brand-primary/5 font-semibold" : "border-brand-gray bg-white hover:border-brand-gold/60"
                  }`}
                >
                  <input type="checkbox" checked={on} onChange={() => toggle(stop)} className="sr-only" />
                  <span
                    className={`inline-flex h-5 w-5 shrink-0 items-center justify-center border transition-colors ${
                      on ? "border-brand-primary bg-brand-primary text-white" : "border-brand-dark/30"
                    }`}
                    aria-hidden="true"
                  >
                    {on ? <Check className="h-3.5 w-3.5" /> : null}
                  </span>
                  {stop}
                </label>
              );
            })}
          </div>
          {climbing && older > 0 ? (
            <p className="mt-3 border-l-4 border-brand-gold bg-brand-beige/70 p-3 text-sm text-brand-dark/80">
              A mountain climb is on your list and older travellers are in the group. We will talk
              through what is realistic before the day.
            </p>
          ) : null}
        </fieldset>

        <fieldset>
          <legend className={label}>3. Your group</legend>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {count("zp-adults", adults, setAdults, 1)}
            {count("zp-children", children, setChildren, 0)}
            {count("zp-older", older, setOlder, 0)}
          </div>
        </fieldset>

        <fieldset>
          <legend className={label}>4. Preferred time</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {durations.map((option) => (
              <label
                key={option}
                className={`inline-flex min-h-11 cursor-pointer items-center border px-5 text-sm font-medium transition-colors duration-300 focus-within:outline focus-within:outline-2 focus-within:outline-brand-gold ${
                  duration === option ? "border-brand-primary bg-brand-primary text-white" : "border-brand-gray bg-white hover:border-brand-gold/60"
                }`}
              >
                <input
                  type="radio"
                  name="duration"
                  value={option}
                  checked={duration === option}
                  onChange={() => setDuration(option)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col gap-4 self-start border border-brand-gray bg-white p-6 lg:sticky lg:top-28">
        <h3 className="text-lg font-bold text-brand-dark">Your Ziyarat plan</h3>
        <dl className="flex flex-col gap-2 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">City</dt>
            <dd className="text-brand-dark">{city}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Stops</dt>
            <dd className="text-brand-dark/80">
              {picked.length ? picked.join(", ") : "None chosen yet. We can suggest a route."}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Group</dt>
            <dd className="text-brand-dark/80">
              {adults} adults, {children} children, {older} older travellers
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Time</dt>
            <dd className="text-brand-dark/80">{duration}</dd>
          </div>
        </dl>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="zp-notes" className={label}>
            Anything else? <span className="font-normal normal-case">(optional)</span>
          </label>
          <textarea
            id="zp-notes"
            rows={2}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Hotel, mobility needs, a child seat, a dates market stop"
            className={`${field} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="btn-motion rounded-lg font-bold inline-flex min-h-12 items-center justify-center gap-2 bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Request My Ziyarat Plan
        </button>
        <p role="status" aria-live="polite" className="min-h-5 text-xs text-brand-dark/60">
          {sent
            ? "WhatsApp opened in a new tab. Send the message and we will reply with a route and price."
            : "This sends a request. It does not calculate a price; we confirm the route and price with you."}
        </p>
      </div>
    </form>
  );
}
