import Image from "next/image";
import type { ContentImage } from "@/lib/content/images";

type VehiclePhotoProps = {
  image: ContentImage;
  // Tailwind sizes for the frame, e.g. "aspect-[4/3] w-full"
  frameClassName?: string;
  sizes?: string;
};

// A vehicle photo on a white frame, scaled to fit without cropping.
export default function VehiclePhoto({
  image,
  frameClassName = "aspect-[4/3] w-full",
  sizes = "(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw",
}: VehiclePhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-white ${frameClassName}`}>
      <Image
        src={image.src}
        alt={image.alt}
        title={image.title}
        fill
        loading="lazy"
        sizes={sizes}
        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
