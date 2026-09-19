"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { mainNav, siteConfig } from "@/lib/site-config";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-white transition-opacity duration-200 lg:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <nav className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8">
        {mainNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`border-b border-brand-gray py-4 text-lg font-medium ${
                isActive ? "text-brand-primary" : "text-brand-dark"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="mt-8 flex flex-col gap-4">
          <Button href="/book" size="lg" onClick={onClose} className="w-full">
            Book Your Ride
          </Button>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-dark/70"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>
      </nav>
    </div>
  );
}
