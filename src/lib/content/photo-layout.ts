import type { ContentImage } from "@/lib/content/images";

export type SplitPlacement = {
  image: ContentImage;
  side: "left" | "right";
};

export type PhotoLayout = {
  slider: ContentImage[];
  splits: Record<number, SplitPlacement>;
  mosaic: ContentImage[];
};

// Spreads a page's photos over three layouts so the page does not repeat one
// grid: a slider after the first section, single photos beside the text of
// every other section (alternating sides), and a mosaic for what is left.
export function planPhotoLayout(images: ContentImage[], sectionCount: number): PhotoLayout {
  const total = images.length;
  const maxSplits = Math.min(5, Math.floor(Math.max(sectionCount - 1, 0) / 2));

  let splitCount: number;
  let sliderCount: number;
  if (total <= 3) {
    splitCount = Math.min(total, maxSplits);
    sliderCount = 0;
  } else if (total <= 6) {
    splitCount = Math.min(2, maxSplits);
    sliderCount = total - splitCount;
  } else {
    splitCount = maxSplits;
    sliderCount = Math.min(8, total - splitCount);
  }

  const slider = images.slice(0, sliderCount);
  const splitImages = images.slice(sliderCount, sliderCount + splitCount);
  const mosaic = images.slice(sliderCount + splitCount);

  const splits: Record<number, SplitPlacement> = {};
  splitImages.forEach((image, i) => {
    splits[1 + i * 2] = { image, side: i % 2 === 0 ? "right" : "left" };
  });

  return { slider, splits, mosaic };
}
