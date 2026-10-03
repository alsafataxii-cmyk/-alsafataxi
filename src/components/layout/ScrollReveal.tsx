"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades elements marked with data-reveal into view as they enter the viewport.
// Elements already on screen are marked visible before the hiding class is applied,
// so nothing flashes, and the page is unaffected when JavaScript or the observer is missing.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    );
    const pending: HTMLElement[] = [];

    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        pending.push(el);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    pending.forEach((el) => observer.observe(el));
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
