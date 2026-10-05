"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ContentImage } from "@/lib/content/images";

type Highlight = { label: string; image: ContentImage };

type MadinahGalleryProps = {
  highlights: Highlight[];
  more: ContentImage[];
};

export default function MadinahGallery({ highlights, more }: MadinahGalleryProps) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = highlights[active];

  return (
    <section className="bg-brand-beige/60">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Photos"
          title="Inside Madinah Airport"
          description="What you will see after you land and on the way out."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          <figure className="relative overflow-hidden border border-brand-gray bg-white">
            <Image
              key={current.image.src}
              src={current.image.src}
              alt={current.image.alt}
              title={current.image.title}
              width={current.image.width}
              height={current.image.height}
              loading="lazy"
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="max-h-[520px] w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-white">
              {current.image.title}
            </figcaption>
          </figure>

          <div role="tablist" aria-label="Madinah Airport photos" className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={index === active}
                onClick={() => setActive(index)}
                className={`group relative flex min-h-11 items-stretch overflow-hidden border text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
                  index === active ? "border-brand-gold" : "border-brand-gray hover:border-brand-gold/60"
                }`}
              >
                <Image
                  src={item.image.src}
                  alt=""
                  width={160}
                  height={120}
                  loading="lazy"
                  sizes="96px"
                  className="h-20 w-24 shrink-0 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className={`flex flex-1 items-center px-3 text-sm font-semibold ${index === active ? "bg-brand-primary text-white" : "bg-white text-brand-dark"}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {more.length > 0 ? (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="med-more-photos"
              className="btn-motion inline-flex min-h-11 items-center justify-center border border-brand-dark/30 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              {open ? "Show fewer photos" : `Show ${more.length} more photos`}
            </button>

            <ul
              id="med-more-photos"
              hidden={!open}
              className="mt-6 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>li]:mb-3"
            >
              {more.map((image) => (
                <li key={image.src} className="break-inside-avoid overflow-hidden border border-brand-gray bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    sizes="(min-width: 1024px) 24vw, 45vw"
                    className="h-auto w-full transition-transform duration-300 hover:scale-[1.03]"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
