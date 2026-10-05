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
      href={location.href}
      data-reveal
      className="card-lift group flex items-center justify-between gap-4 border border-brand-gray bg-white p-6 hover:border-brand-gold"
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
        className="h-8 w-8 shrink-0 rounded-full bg-brand-primary p-1.5 text-white transition-colors group-hover:bg-brand-gold group-hover:text-brand-dark"
        aria-hidden="true"
      />
    </Link>
  );
}
