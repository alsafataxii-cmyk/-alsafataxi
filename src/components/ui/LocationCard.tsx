import Link from "next/link";
import { ArrowUpRight, MapPin, PlaneTakeoff } from "lucide-react";
import type { LocationEntry } from "@/lib/data";

type LocationCardProps = {
  location: LocationEntry;
};

export default function LocationCard({ location }: LocationCardProps) {
  const Icon = location.type === "airport" ? PlaneTakeoff : MapPin;

  return (
    <Link
      id={location.slug}
      href="/book"
      className="group flex items-center justify-between gap-4 border border-brand-gray bg-white p-6 transition-colors duration-200 hover:border-brand-gold scroll-mt-28"
    >
      <div className="flex items-center gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-beige text-brand-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-semibold text-brand-dark">{location.name}</p>
          <p className="text-sm text-brand-dark/60">{location.subtitle}</p>
        </div>
      </div>
      <ArrowUpRight
        className="h-5 w-5 shrink-0 text-brand-dark/30 transition-colors group-hover:text-brand-gold"
        aria-hidden="true"
      />
    </Link>
  );
}
