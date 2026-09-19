import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group flex flex-col gap-5 border border-brand-gray bg-white p-8 transition-colors duration-200 hover:border-brand-gold">
      <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-primary text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-brand-dark">
          <Link
            href={`/services/${service.slug}`}
            className="transition-colors hover:text-brand-primary"
          >
            {service.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-brand-dark/70">
          {detailed ? service.longDescription : service.description}
        </p>
      </div>

      <Link
        href={`/services/${service.slug}`}
        aria-label={`Learn more about ${service.title}`}
        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-gold"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
