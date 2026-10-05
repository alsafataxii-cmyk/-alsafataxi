import type { ReactNode } from "react";

// Full-width page band with the site's standard container and vertical rhythm.
export default function Band({
  tone = "white",
  children,
}: {
  tone?: "white" | "sand" | "dark";
  children: ReactNode;
}) {
  const background =
    tone === "sand" ? "bg-brand-beige/60" : tone === "dark" ? "bg-brand-dark" : "bg-white";
  return (
    <section className={background}>
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">{children}</div>
    </section>
  );
}
