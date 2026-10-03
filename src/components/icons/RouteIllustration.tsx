import { C, Pin, Svg, Vehicle } from "@/components/icons/svg-kit";

// One reusable route picture: place A, a road, place B and a vehicle on its way.
// Route names stay in HTML next to it.
export default function RouteIllustration({ className }: { className?: string }) {
  const road = "M64 98C160 98 180 62 290 62S450 102 560 88";
  return (
    <Svg viewBox="0 0 640 120" className={className}>
      <path d={road} stroke={C.dark} strokeWidth="14" />
      <path d={road} stroke={C.gold} strokeWidth="1.8" strokeDasharray="8 7" />
      <Vehicle kind="suv" x={248} y={36} scale={0.75} />
      <Pin x={44} y={100} scale={1.5} fill={C.primary} />
      <Pin x={594} y={92} scale={1.5} />
      <circle cx="140" cy="30" r="2.5" fill={C.gold} stroke="none" />
      <circle cx="170" cy="22" r="1.8" fill={C.gold} stroke="none" />
      <circle cx="470" cy="28" r="2.5" fill={C.gold} stroke="none" />
      <circle cx="500" cy="38" r="1.8" fill={C.gold} stroke="none" />
    </Svg>
  );
}
