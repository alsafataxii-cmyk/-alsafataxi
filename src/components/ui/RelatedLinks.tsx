import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LinkItem } from "@/lib/content/types";

export type RelatedGroup = {
  title: string;
  links: LinkItem[];
};

type RelatedLinksProps = {
  groups: RelatedGroup[];
};

export default function RelatedLinks({ groups }: RelatedLinksProps) {
  const visibleGroups = groups.filter((group) => group.links.length > 0);
  if (visibleGroups.length === 0) return null;

  return (
    <section className="bg-brand-gray/40">
      <div className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Explore More" title="Related Services, Places & Routes" />
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {visibleGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-reveal
                      className="card-lift group flex items-start justify-between gap-3 border border-brand-gray bg-white p-4 hover:border-brand-gold"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-brand-dark">
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="mt-1 block text-xs leading-relaxed text-brand-dark/60">
                            {link.description}
                          </span>
                        ) : null}
                      </span>
                      <ArrowUpRight
        className="h-8 w-8 shrink-0 rounded-full bg-brand-primary p-1.5 text-white transition-colors group-hover:bg-brand-gold group-hover:text-brand-dark"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
