"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { mainNav } from "@/lib/site-config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-300 ${
        isScrolled
          ? "border-transparent shadow-[0_4px_24px_rgba(15,47,35,0.08)]"
          : "border-brand-gray"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo className="h-14 w-auto sm:h-16" priority />

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  isActive ? "text-brand-primary" : "text-brand-dark/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/book" className="hidden sm:inline-flex">
            Book Your Ride
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center text-brand-dark lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
