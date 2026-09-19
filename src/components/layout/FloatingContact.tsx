"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { WhatsAppGlyph } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  `Hello ${siteConfig.name}, I would like to book a ride.`,
)}`;

const focusClasses =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

export default function FloatingContact() {
  const pathname = usePathname();

  if (pathname === "/book") return null;

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-3 print:hidden sm:bottom-6 sm:right-6">
      <a
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.name}`}
        className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg ring-2 ring-brand-gold transition-transform hover:scale-105 md:hidden ${focusClasses}`}
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp (opens in a new tab)`}
        className={`inline-flex h-14 w-14 items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:w-auto md:px-6 ${focusClasses}`}
      >
        <WhatsAppGlyph className="h-7 w-7" />
        <span className="hidden text-sm font-semibold md:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
