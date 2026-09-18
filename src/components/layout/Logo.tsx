import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  plate?: boolean;
  priority?: boolean;
};

export default function Logo({
  className = "h-14 w-auto",
  plate = false,
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src="/brand/logo.png"
      alt="Al Safa Taxi"
      width={969}
      height={1027}
      priority={priority}
      className={`${className} object-contain`}
    />
  );

  return (
    <Link href="/" aria-label="Al Safa Taxi — Home" className="inline-flex shrink-0">
      {plate ? (
        <span className="inline-flex items-center justify-center rounded-2xl bg-brand-beige px-4 py-3 shadow-sm">
          {image}
        </span>
      ) : (
        image
      )}
    </Link>
  );
}
