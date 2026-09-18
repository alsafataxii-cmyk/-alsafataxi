import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline-light" | "outline-dark";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-dark",
  gold: "bg-brand-gold text-brand-dark hover:brightness-95",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10",
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
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap";

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
