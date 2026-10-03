import { C, Pin, Svg, Vehicle } from "@/components/icons/svg-kit";

export type BenefitName = "driver" | "schedule" | "pricing" | "vehicle" | "region" | "available";

// Small 40x40 icons for the "why choose us" list. Drawn with currentColor so the
// parent controls the stroke colour.
export default function BenefitIcon({ name, className }: { name: BenefitName; className?: string }) {
  return (
    <Svg viewBox="0 0 40 40" className={className}>
      <g stroke="currentColor">
        {name === "driver" ? (
          <>
            <circle cx="20" cy="12" r="6" />
            <path d="M8 35Q8 23 20 23Q32 23 32 35Z" />
            <path d="M20 24L18 30L20 33L22 30Z" fill={C.gold} />
          </>
        ) : null}
        {name === "schedule" ? (
          <>
            <circle cx="20" cy="21" r="13" />
            <path d="M20 13V21L26 24" />
            <circle cx="20" cy="5" r="2" fill={C.gold} stroke="none" />
          </>
        ) : null}
        {name === "pricing" ? (
          <>
            <path d="M5 7H21L35 21L21 35L5 21Z" />
            <circle cx="13" cy="15" r="2.4" fill={C.gold} stroke="none" />
            <path d="M18 24L22 20" />
          </>
        ) : null}
        {name === "vehicle" ? (
          <Vehicle kind="suv" x={1} y={9} scale={0.38} body="none" glass="none" stroke="currentColor" sw={2} />
        ) : null}
        {name === "region" ? (
          <>
            <Pin x={14} y={27} scale={0.95} fill={C.gold} />
            <Pin x={29} y={34} scale={0.75} fill="none" />
            <path d="M4 37H22" />
          </>
        ) : null}
        {name === "available" ? (
          <>
            <circle cx="20" cy="20" r="14" />
            <path d="M20 6A14 14 0 0 0 20 34Z" fill={C.primary} opacity="0.2" stroke="none" />
            <path d="M20 6V34" />
            <circle cx="28" cy="20" r="3.2" fill={C.gold} stroke="none" />
            <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
          </>
        ) : null}
      </g>
    </Svg>
  );
}
