import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceIllustrations } from "@/components/icons/ServiceIllustrations";
import type { Service } from "@/lib/data";

type ServiceCardProps = {
  service: Service;
  href?: string;
  detailed?: boolean;
};

export default function ServiceCard({ service, href, detailed = false }: ServiceCardProps) {
  const Icon = service.icon;
  const Illustration = serviceIllustrations[service.slug];
  const target = href ?? `/services/${service.slug}`;

  return (
    <div
      data-reveal
      className="card-lift group flex flex-col gap-5 border border-brand-gray bg-white p-8 hover:border-brand-gold"
    >
      {Illustration ? (
        <Illustration className="aspect-[160/112] w-full" />
      ) : (
        <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-primary text-white transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-dark">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-brand-dark">
          <Link href={target} className="transition-colors hover:text-brand-primary">
            {service.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-brand-dark/70">
          {detailed ? service.longDescription : service.description}
        </p>
      </div>

      <Link
        href={target}
        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-gold"
      >
        Explore {service.title}
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
