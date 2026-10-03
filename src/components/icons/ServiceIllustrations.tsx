import type { ComponentType } from "react";
import { C, Dome, Minaret, Pin, Plane, Road, Svg, Tile, Vehicle } from "@/components/icons/svg-kit";

type IllustrationProps = { className?: string };

const VB = "0 0 160 112";

export function AirportTransferIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <path d="M52 48Q64 24 94 30" stroke={C.gold} strokeDasharray="3 4" />
      <Plane x={92} y={14} scale={0.85} rotate={-12} />
      <Road x={8} y={90} w={144} />
      <Vehicle kind="sedan" x={14} y={71} scale={0.75} />
      <Pin x={51} y={67} scale={0.8} />
    </Svg>
  );
}

export function UmrahTransportIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <circle cx="132" cy="22" r="8" fill={C.gold} stroke="none" />
      <Minaret x={106} base={90} h={44} />
      <Dome x={125} base={90} r={11} />
      <Minaret x={144} base={90} h={36} />
      <Road x={8} y={90} w={144} />
      <Vehicle kind="suv" x={12} y={71} scale={0.75} />
      <Pin x={49} y={66} scale={0.8} />
    </Svg>
  );
}

export function ZiyaratIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <path d="M78 90L104 42L120 68L132 52L152 90Z" fill={C.gray} />
      <path d="M96 56L104 42L111 55" stroke={C.gold} />
      <path d="M50 64Q68 36 98 38" stroke={C.gold} strokeDasharray="3 4" />
      <Pin x={104} y={42} scale={0.7} />
      <Road x={8} y={90} w={144} />
      <Vehicle kind="suv" x={10} y={71} scale={0.75} />
      <Dome x={142} base={90} r={7} />
    </Svg>
  );
}

export function IntercityTaxiIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <path d="M30 42Q80 6 130 42" stroke={C.gold} strokeDasharray="3 4" />
      <Pin x={26} y={66} scale={0.9} fill={C.primary} />
      <Pin x={134} y={66} scale={0.9} />
      <Road x={8} y={80} w={144} />
      <Vehicle kind="suv" x={46} y={58} scale={0.68} />
    </Svg>
  );
}

export function HotelTransferIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <rect x="88" y="24" width="52" height="66" rx="3" fill={C.white} />
      <rect x="98" y="18" width="32" height="6" rx="2" fill={C.gold} />
      {[34, 48, 62].map((y) =>
        [96, 109, 122].map((x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" rx="1.5" fill={C.gray} strokeWidth="1.5" />
        )),
      )}
      <path d="M96 80H132L129 74H99Z" fill={C.gold} />
      <rect x="106" y="80" width="16" height="10" fill={C.dark} stroke="none" />
      <Road x={4} y={90} w={152} />
      <Vehicle kind="sedan" x={6} y={71} scale={0.7} />
      <Pin x={41} y={66} scale={0.8} />
    </Svg>
  );
}

export function PrivateTaxiIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <rect x="8" y="78" width="10" height="12" rx="2" fill={C.gold} />
      <rect x="20" y="64" width="12" height="26" rx="5" fill={C.primary} />
      <circle cx="26" cy="54" r="6" fill={C.gray} />
      <path d="M32 68L40 58" />
      <Road x={8} y={90} w={144} />
      <Vehicle kind="sedan" x={46} y={71} scale={0.75} />
      <Pin x={83} y={67} scale={0.8} />
    </Svg>
  );
}

export function ChauffeurIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <rect x="104" y="60" width="18" height="30" rx="6" fill={C.dark} />
      <path d="M111 62L113 72L115 62" stroke={C.gold} />
      <circle cx="113" cy="50" r="6" fill={C.gray} />
      <path d="M106 48Q113 38 120 48Z" fill={C.dark} />
      <Road x={8} y={90} w={144} />
      <Vehicle kind="vip" x={14} y={71} scale={0.8} body={C.dark} glass={C.gray} />
    </Svg>
  );
}

export function BusinessIcon({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile />
      <rect x="100" y="46" width="14" height="44" fill={C.white} />
      <rect x="116" y="28" width="16" height="62" fill={C.white} />
      <rect x="134" y="54" width="14" height="36" fill={C.white} />
      <rect x="120" y="36" width="3" height="3" fill={C.gold} stroke="none" />
      <rect x="126" y="36" width="3" height="3" fill={C.gold} stroke="none" />
      <rect x="120" y="46" width="3" height="3" fill={C.gold} stroke="none" />
      <rect x="126" y="46" width="3" height="3" fill={C.gold} stroke="none" />
      <Road x={8} y={90} w={144} />
      <Vehicle kind="sedan" x={8} y={71} scale={0.75} body={C.dark} />
      <path d="M96 76V72H104V76" />
      <rect x="92" y="76" width="22" height="14" rx="2.5" fill={C.gold} />
    </Svg>
  );
}

// Keyed by service slug, so a card can look up its picture.
export const serviceIllustrations: Record<string, ComponentType<IllustrationProps>> = {
  "airport-transfers": AirportTransferIcon,
  "umrah-transportation": UmrahTransportIcon,
  "ziyarat-tours": ZiyaratIcon,
  "city-taxi": PrivateTaxiIcon,
  "intercity-transfers": IntercityTaxiIcon,
  "private-chauffeur": ChauffeurIcon,
  "hotel-transfers": HotelTransferIcon,
  "business-transportation": BusinessIcon,
};
