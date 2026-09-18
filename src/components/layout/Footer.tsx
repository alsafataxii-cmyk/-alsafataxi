import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { FacebookGlyph, InstagramGlyph, XGlyph } from "@/components/icons/SocialIcons";
import { footerServiceLinks, mainNav, siteConfig, socialLinks } from "@/lib/site-config";
import { locations } from "@/lib/data";

const socialIcons = {
  instagram: InstagramGlyph,
  twitter: XGlyph,
  facebook: FacebookGlyph,
  whatsapp: MessageCircle,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const featuredLocations = locations.filter((location) => location.type === "city");

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-5 sm:col-span-3 lg:col-span-2">
            <Logo plate className="h-14 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-gold hover:text-brand-gold"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">
              Navigation
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">
              Locations
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {featuredLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations#${location.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-sm font-medium text-brand-gold transition-colors hover:text-white"
                >
                  View all locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Premium private transportation across Makkah, Madinah, Jeddah &amp; Taif.</p>
        </div>
      </div>
    </footer>
  );
}
