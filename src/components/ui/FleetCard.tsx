import { Luggage, Users } from "lucide-react";
import VehicleIllustration, { fleetKinds } from "@/components/icons/VehicleIllustration";
import type { FleetVehicle } from "@/lib/data";

type FleetCardProps = {
  vehicle: FleetVehicle;
};

export default function FleetCard({ vehicle }: FleetCardProps) {
  return (
    <div
      id={vehicle.slug}
      data-reveal
      className="card-lift group flex flex-col border border-brand-gray bg-white scroll-mt-28 hover:border-brand-gold"
    >
      <div className="bg-brand-beige px-4 pt-6">
        <VehicleIllustration kind={fleetKinds[vehicle.slug] ?? "sedan"} className="h-auto w-full" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">{vehicle.name}</h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
              {vehicle.className}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-brand-dark/70">{vehicle.description}</p>

        <div className="flex items-center gap-5 border-y border-brand-gray py-3 text-sm text-brand-dark/70">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-brand-primary" aria-hidden="true" />
            {vehicle.passengers} Passengers
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Luggage className="h-4 w-4 text-brand-primary" aria-hidden="true" />
            {vehicle.luggage} Bags
          </span>
        </div>

        <ul className="flex flex-col gap-1.5">
          {vehicle.features.map((feature) => (
            <li key={feature} className="text-sm text-brand-dark/70">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
