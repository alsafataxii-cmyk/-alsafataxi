import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Sticky Call / WhatsApp bar for small screens, padded for the iOS home indicator.
export default function MobileContactBar({ message }: { message: string }) {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const base =
    "inline-flex min-h-12 flex-1 items-center justify-center gap-2 px-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-gold";

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-brand-dark/20 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_-12px_rgba(15,47,35,0.45)] md:hidden print:hidden">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] text-white`}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
      <a href={siteConfig.phoneHref} className={`${base} bg-brand-primary text-white`}>
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call
      </a>
    </div>
  );
}
