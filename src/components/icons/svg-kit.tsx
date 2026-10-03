import type { ReactNode } from "react";

// Shared drawing kit for the custom illustrations. Every illustration uses the same
// 2px stroke, rounded joins and the brand palette so they read as one set.
export const C = {
  primary: "#0a4d36",
  mid: "#13694a",
  dark: "#0f2f23",
  gold: "#c9a14a",
  beige: "#f7f1e6",
  gray: "#e8ece6",
  white: "#ffffff",
} as const;

type SvgProps = {
  viewBox: string;
  className?: string;
  children: ReactNode;
  strokeWidth?: number;
};

export function Svg({ viewBox, className, children, strokeWidth = 2 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke={C.dark}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export type VehicleKind = "sedan" | "suv" | "van" | "vip";

const bodies: Record<VehicleKind, { body: string; glass: string[] }> = {
  sedan: {
    body: "M3 31V26Q3 22 8 21L25 18L34 8Q36 6 39 6H63Q66 6 68 8L77 18L92 21Q97 22 97 26V31Z",
    glass: ["M37 17L42 9.5H54V17Z", "M57 17V9.5H63L70 17Z"],
  },
  suv: {
    body: "M3 31V22Q3 18 8 17L20 15L26 4Q27 2 30 2H71Q74 2 76 5L89 17Q97 18 97 24V31Z",
    glass: ["M29 14L33 5.5H49V14Z", "M52 14V5.5H70L78 14Z"],
  },
  van: {
    body: "M3 31V10Q3 5 8 5H72Q76 5 78 8L92 20Q97 22 97 26V31Z",
    glass: ["M9 16V9H24V16Z", "M28 16V9H44V16Z", "M48 16V9H64V16Z", "M68 16V9H72L82 16Z"],
  },
  vip: {
    body: "M3 31V26Q3 22 8 21L24 18L33 8Q35 6 38 6H64Q67 6 69 8L78 18L92 21Q97 22 97 26V31Z",
    glass: ["M36 17L41 9.5H54V17Z", "M57 17V9.5H64L71 17Z"],
  },
};

type VehicleProps = {
  kind: VehicleKind;
  x: number;
  y: number;
  scale?: number;
  body?: string;
  glass?: string;
  trim?: string;
  stroke?: string;
  sw?: number;
};

// A generic vehicle silhouette, 100 units wide with the wheels' lowest point at y=38.
// It is deliberately not modelled on any real car.
export function Vehicle({
  kind,
  x,
  y,
  scale = 1,
  body = C.mid,
  glass = C.gray,
  trim = C.gold,
  stroke = C.dark,
  sw = 2,
}: VehicleProps) {
  const shape = bodies[kind];
  const w = sw / scale;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} strokeWidth={w} stroke={stroke}>
      <path d={shape.body} fill={body} />
      {shape.glass.map((d) => (
        <path key={d} d={d} fill={glass} />
      ))}
      <path d="M3 26.5H97" stroke={trim} strokeWidth={w * 0.8} />
      <path d="M91 23.5H95" stroke={trim} strokeWidth={w * 1.4} />
      <circle cx="24" cy="31" r="7" fill={stroke} />
      <circle cx="76" cy="31" r="7" fill={stroke} />
      <circle cx="24" cy="31" r="2.4" fill={C.gray} stroke="none" />
      <circle cx="76" cy="31" r="2.4" fill={C.gray} stroke="none" />
    </g>
  );
}

type PinProps = {
  x: number;
  y: number;
  scale?: number;
  fill?: string;
  className?: string;
};

// Map pin with its tip at (x, y).
export function Pin({ x, y, scale = 1, fill = C.gold, className }: PinProps) {
  return (
    <g
      className={className}
      transform={`translate(${x - 12 * scale} ${y - 22 * scale}) scale(${scale})`}
      strokeWidth={2 / scale}
    >
      <path d="M12 2C7.6 2 4 5.5 4 9.8c0 5.6 8 12.2 8 12.2s8-6.6 8-12.2C20 5.5 16.4 2 12 2z" fill={fill} />
      <circle cx="12" cy="9.8" r="3" fill={C.white} stroke="none" />
    </g>
  );
}

type RoadProps = { x: number; y: number; w: number; h?: number; fill?: string; dash?: string };

export function Road({ x, y, w, h = 14, fill = C.dark, dash = C.gold }: RoadProps) {
  return (
    <g stroke="none">
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />
      <path
        d={`M${x + h} ${y + h / 2}H${x + w - h}`}
        stroke={dash}
        strokeWidth="1.6"
        strokeDasharray="7 6"
      />
    </g>
  );
}

type PlaneProps = { x: number; y: number; scale?: number; rotate?: number; fill?: string; stroke?: string };

// Simple top-view aeroplane pointing right, about 52 wide.
export function Plane({ x, y, scale = 1, rotate = 0, fill = C.white, stroke = C.dark }: PlaneProps) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      strokeWidth={2 / scale}
      stroke={stroke}
    >
      <rect x="2" y="14" width="50" height="6" rx="3" fill={fill} />
      <path d="M20 14L30 2H35L30 14Z" fill={fill} />
      <path d="M20 20L30 32H35L30 20Z" fill={fill} />
      <path d="M4 14L8 8H11L9 14Z" fill={fill} />
      <path d="M4 20L8 26H11L9 20Z" fill={fill} />
    </g>
  );
}

type MinaretProps = { x: number; base: number; h: number; fill?: string; stroke?: string };

// A slender tower with a pointed cap and a gold finial. Generic, not any specific mosque.
export function Minaret({ x, base, h, fill = C.beige, stroke = C.dark }: MinaretProps) {
  return (
    <g stroke={stroke}>
      <rect x={x - 3} y={base - h} width="6" height={h} fill={fill} />
      <path d={`M${x - 4.5} ${base - h}H${x + 4.5}`} />
      <path d={`M${x - 3} ${base - h}L${x} ${base - h - 9}L${x + 3} ${base - h}Z`} fill={C.gold} />
    </g>
  );
}

type DomeProps = { x: number; base: number; r: number; fill?: string; stroke?: string };

export function Dome({ x, base, r, fill = C.primary, stroke = C.dark }: DomeProps) {
  return (
    <g stroke={stroke}>
      <rect x={x - r - 2} y={base - r * 0.6} width={(r + 2) * 2} height={r * 0.6} fill={C.beige} />
      <path d={`M${x - r} ${base - r * 0.6}A${r} ${r} 0 0 1 ${x + r} ${base - r * 0.6}Z`} fill={fill} />
      <path d={`M${x} ${base - r * 1.6}V${base - r * 1.15}`} stroke={C.gold} />
    </g>
  );
}

type PalmProps = { x: number; base: number; h?: number };

export function Palm({ x, base, h = 26 }: PalmProps) {
  const top = base - h;
  return (
    <g stroke={C.dark}>
      <path d={`M${x} ${base}Q${x + 2} ${base - h / 2} ${x} ${top}`} />
      <path d={`M${x} ${top}Q${x - 8} ${top - 4} ${x - 12} ${top + 3}`} stroke={C.primary} />
      <path d={`M${x} ${top}Q${x + 8} ${top - 4} ${x + 12} ${top + 3}`} stroke={C.primary} />
      <path d={`M${x} ${top}Q${x - 4} ${top - 9} ${x - 9} ${top - 8}`} stroke={C.primary} />
      <path d={`M${x} ${top}Q${x + 4} ${top - 9} ${x + 9} ${top - 8}`} stroke={C.primary} />
    </g>
  );
}

// Tile background shared by the small scene illustrations.
export function Tile({ w = 160, h = 112, fill = C.beige }: { w?: number; h?: number; fill?: string }) {
  return <rect x="1" y="1" width={w - 2} height={h - 2} rx="14" fill={fill} stroke="none" />;
}
