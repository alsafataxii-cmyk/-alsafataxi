import { C, Pin, Svg, Vehicle } from "@/components/icons/svg-kit";

// Quiet decorative picture for the closing call to action: vehicle, route, pin.
export default function CtaIllustration({ className }: { className?: string }) {
  const road = "M16 128C70 128 90 98 150 98S226 124 248 112";
  return (
    <Svg viewBox="0 0 264 160" className={className}>
      <g opacity="0.5">
        <path d={road} stroke={C.white} strokeWidth="10" opacity="0.25" />
        <path d={road} stroke={C.gold} strokeWidth="1.6" strokeDasharray="7 6" />
        <Vehicle kind="suv" x={104} y={64} scale={0.62} body="none" glass="none" stroke={C.white} trim={C.gold} sw={2} />
      </g>
      <Pin x={246} y={112} scale={1.5} />
      <circle cx="40" cy="40" r="2.4" fill={C.gold} stroke="none" opacity="0.6" />
      <circle cx="64" cy="30" r="1.8" fill={C.gold} stroke="none" opacity="0.6" />
    </Svg>
  );
}
