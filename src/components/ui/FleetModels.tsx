import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { fleetModels } from "@/lib/content/fleet-models";

export default function FleetModels() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Models"
          title="Vehicle Models You May Travel In"
          description="The classes above are made up of models like these. Which one is assigned depends on the date and availability, and we confirm it before you travel."
        />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleetModels.map((model) => (
            <li
              key={model.slug}
              data-reveal
              className="card-lift group flex flex-col overflow-hidden border border-brand-gray bg-white hover:border-brand-gold"
            >
              <figure className="bg-white px-4 pt-6">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden">
                  <Image
                    src={model.image.src}
                    alt={model.image.alt}
                    title={model.image.title}
                    width={model.image.width}
                    height={model.image.height}
                    loading="lazy"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </figure>
              <div className="flex flex-1 flex-col gap-2 border-t border-brand-gray p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {model.body}
                </p>
                <h3 className="text-lg font-semibold text-brand-dark">{model.name}</h3>
                <p className="text-sm leading-relaxed text-brand-dark/70">{model.use}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-sm text-brand-dark/60">
          Photos are representative. The vehicle sent may be a similar model, and seats and luggage
          space vary by model, so tell us your passengers and bags and we will confirm what fits.
        </p>
      </div>
    </section>
  );
}
