import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline-light" | "outline-dark" | "whatsapp";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-dark",
  gold: "bg-brand-gold text-brand-dark hover:brightness-95",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10",
  whatsapp:
    "border-2 border-[#25D366] bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:border-[#1ebe5a] hover:bg-[#1ebe5a]",
  "outline-dark":
    "border border-brand-dark/30 text-brand-dark hover:bg-brand-dark/5",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClasses =
  "btn-motion inline-flex items-center justify-center gap-2 rounded-lg font-bold tracking-wide transition-colors duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as Omit<ComponentPropsWithoutRef<"button">, "className">)}
    >
      {children}
    </button>
  );
}
