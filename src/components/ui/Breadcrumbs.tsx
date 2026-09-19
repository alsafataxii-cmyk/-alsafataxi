import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-brand-gray bg-brand-beige/60">
      <JsonLd
        data={breadcrumbSchema(trail.map((item) => ({ name: item.label, href: item.href })))}
      />
      <ol className="mx-auto flex max-w-8xl flex-wrap items-center gap-1 px-4 py-3 text-xs text-brand-dark/60 sm:px-6 lg:px-8">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.href} className="inline-flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="font-medium text-brand-dark">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="transition-colors hover:text-brand-primary">
                    {item.label}
                  </Link>
                  <ChevronRight className="h-3 w-3" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
