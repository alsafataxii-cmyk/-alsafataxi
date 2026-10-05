"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

export type FinderRoute = {
  slug: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
};

const field =
  "min-h-11 w-full border border-brand-gray bg-white px-3 py-2.5 text-sm text-brand-dark focus:border-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60";
const label = "text-xs font-semibold uppercase tracking-wide text-brand-dark/70";

export default function RouteFinder({ routes, origins }: { routes: FinderRoute[]; origins: string[] }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const destinations = useMemo(
    () => (from ? routes.filter((route) => route.from === from).map((route) => route.to) : []),
    [from, routes],
  );
  const match = routes.find((route) => route.from === from && route.to === to);

  return (
    <div className="grid grid-cols-1 gap-6 border border-brand-gray bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="rf-from" className={label}>
            Starting point
          </label>
          <select
            id="rf-from"
            value={from}
            onChange={(event) => {
              setFrom(event.target.value);
              setTo("");
            }}
            className={field}
          >
            <option value="">Choose where you start</option>
            {origins.map((origin) => (
              <option key={origin} value={origin}>
                {origin}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="rf-to" className={label}>
            Destination
          </label>
          <select
            id="rf-to"
            value={to}
            disabled={!from}
            onChange={(event) => setTo(event.target.value)}
            className={`${field} disabled:bg-brand-beige/60 disabled:text-brand-dark/40`}
          >
            <option value="">{from ? "Choose where you are going" : "Choose a starting point first"}</option>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>

        <p className="text-xs text-brand-dark/60">
          Every route is also listed in full below, so you can browse without using the finder.
        </p>
      </div>

      <div
        role="status"
        aria-live="polite"
        className="flex min-h-48 flex-col justify-center gap-4 bg-brand-beige/60 p-6 transition-all duration-300"
      >
        {match ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Your route</p>
            <h3 className="flex flex-wrap items-center gap-2 text-2xl font-bold text-brand-dark">
              {match.from}
              <ArrowRight className="h-5 w-5 text-brand-gold" aria-hidden="true" />
              {match.to}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="border border-brand-gray bg-white px-3 py-1 font-semibold text-brand-dark">
                {match.distance.replace("Roughly", "Approx.")}
              </span>
              <span className="border border-brand-gray bg-white px-3 py-1 text-brand-dark/80">{match.duration}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/routes/${match.slug}`}
                className="btn-motion inline-flex min-h-11 items-center justify-center gap-2 bg-brand-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                View Route
              </Link>
              <Link
                href="/book"
                className="btn-motion inline-flex min-h-11 items-center justify-center border border-brand-dark/30 px-5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                Book This Journey
              </Link>
            </div>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-brand-dark/70">
            Choose where you start and where you are going. The distance, the typical time and a link
            to the route page appear here. If your pair is not offered, it is not one of our listed
            routes, but you can still ask for it.
          </p>
        )}
      </div>
    </div>
  );
}
