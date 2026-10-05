import Image from "next/image";
import type { ContentImage } from "@/lib/content/images";

type ContentGalleryProps = {
  title: string;
  images: ContentImage[];
};

export default function ContentGallery({ title, images }: ContentGalleryProps) {
  return (
    <section className="mt-12 flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-brand-dark">{title}</h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image) => (
          <li key={image.src} className="overflow-hidden border border-brand-gray">
            <Image
              src={image.src}
              alt={image.alt}
              title={image.title}
              width={image.width}
              height={image.height}
              loading="lazy"
              sizes="(min-width: 1024px) 230px, 45vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
