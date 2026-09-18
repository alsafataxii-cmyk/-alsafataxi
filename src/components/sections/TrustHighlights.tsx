import { trustHighlights } from "@/lib/data";

export default function TrustHighlights() {
  return (
    <section className="border-b border-brand-gray bg-white">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {trustHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex flex-col items-center gap-3 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-brand-dark">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
