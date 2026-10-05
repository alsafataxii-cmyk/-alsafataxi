"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ContentImage } from "@/lib/content/images";

type ImageSliderProps = {
  title: string;
  images: ContentImage[];
};

export default function ImageSlider({ title, images }: ImageSliderProps) {
  const track = useRef<HTMLUListElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <section className="flex flex-col gap-4" aria-label={title}>
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-brand-dark">{title}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous photos"
            className="inline-flex h-10 w-10 items-center justify-center border border-brand-gray text-brand-dark transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next photos"
            className="inline-flex h-10 w-10 items-center justify-center border border-brand-gray text-brand-dark transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:thin]"
      >
        {images.map((image) => (
          <li
            key={image.src}
            className="relative aspect-[4/3] w-[78%] shrink-0 snap-start overflow-hidden sm:w-[48%]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              title={image.title}
              width={image.width}
              height={image.height}
              loading="lazy"
              sizes="(min-width: 1024px) 340px, 78vw"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8 text-xs font-medium text-white">
              {image.title}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
