import Image from "next/image";
import type { ContentImage } from "@/lib/content/images";

export default function ContentFigure({ image }: { image: ContentImage }) {
  return (
    <figure className="mb-10 overflow-hidden border border-brand-gray">
      <Image
        src={image.src}
        alt={image.alt}
        title={image.title}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 700px, 100vw"
        className="aspect-[4/3] w-full object-cover"
      />
      <figcaption className="bg-brand-beige px-4 py-3 text-sm text-brand-dark/70">
        {image.title}
      </figcaption>
    </figure>
  );
}
