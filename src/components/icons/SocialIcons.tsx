type IconProps = {
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XGlyph({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function FacebookGlyph({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="12" cy="12" r="9" />
      <line x1="10" y1="7" x2="10" y2="17" />
      <line x1="10" y1="7" x2="15" y2="7" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}
