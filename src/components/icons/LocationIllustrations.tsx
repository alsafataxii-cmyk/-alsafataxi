import type { ComponentType } from "react";
import { C, Dome, Minaret, Palm, Pin, Plane, Road, Svg, Tile, Vehicle } from "@/components/icons/svg-kit";

type IllustrationProps = { className?: string };

const VB = "0 0 160 100";

// These scenes show the setting and the transport context only. They are generic
// (hills, towers, palms, coast) and do not try to reproduce any specific building.

export function MakkahIllustration({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile h={100} />
      <circle cx="132" cy="20" r="7" fill={C.gold} stroke="none" />
      <path d="M2 80L30 46L52 62L80 38L110 66L134 48L158 80Z" fill={C.gray} />
      <rect x="64" y="62" width="32" height="18" fill={C.white} />
      <Minaret x={70} base={80} h={34} />
      <Minaret x={90} base={80} h={34} />
      <Road x={6} y={80} w={148} h={12} />
      <Vehicle kind="sedan" x={10} y={61} scale={0.5} />
      <Vehicle kind="suv" x={104} y={61} scale={0.5} body={C.mid} />
    </Svg>
  );
}

export function MadinahIllustration({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile h={100} />
      <Palm x={20} base={80} h={30} />
      <Palm x={140} base={80} h={26} />
      <Minaret x={50} base={80} h={46} />
      <Minaret x={110} base={80} h={46} />
      <rect x="44" y="62" width="72" height="18" fill={C.white} />
      <Dome x={80} base={64} r={18} />
      <Road x={6} y={80} w={148} h={12} />
      <Vehicle kind="sedan" x={52} y={61} scale={0.5} />
    </Svg>
  );
}

export function JeddahIllustration({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile h={100} />
      <Plane x={104} y={10} scale={0.6} rotate={-10} />
      <rect x="12" y="34" width="14" height="36" fill={C.white} />
      <rect x="28" y="22" width="12" height="48" fill={C.white} />
      <rect x="42" y="42" width="16" height="28" fill={C.white} />
      <rect x="31" y="28" width="3" height="3" fill={C.gold} stroke="none" />
      <rect x="31" y="36" width="3" height="3" fill={C.gold} stroke="none" />
      <rect x="15" y="40" width="3" height="3" fill={C.gold} stroke="none" />
      <Road x={6} y={70} w={148} h={10} />
      <Vehicle kind="suv" x={72} y={54} scale={0.45} />
      <path d="M4 88Q14 82 24 88T44 88T64 88T84 88T104 88T124 88T144 88T156 88" stroke={C.primary} />
      <path d="M4 95Q14 89 24 95T44 95T64 95T84 95T104 95T124 95T144 95T156 95" stroke={C.gold} />
    </Svg>
  );
}

export function TaifIllustration({ className }: IllustrationProps) {
  return (
    <Svg viewBox={VB} className={className}>
      <Tile h={100} />
      <circle cx="26" cy="22" r="7" fill={C.gold} stroke="none" />
      <path d="M2 88L40 34L62 62L88 26L120 68L136 48L158 88Z" fill={C.gray} />
      <path d="M22 90Q72 84 60 74Q40 68 82 60Q112 54 94 46Q88 42 88 32" stroke={C.dark} strokeWidth="6" />
      <path d="M22 90Q72 84 60 74Q40 68 82 60Q112 54 94 46Q88 42 88 32" stroke={C.gold} strokeWidth="1.4" strokeDasharray="4 4" />
      <Pin x={88} y={28} scale={0.7} />
      <Vehicle kind="sedan" x={96} y={66} scale={0.4} />
    </Svg>
  );
}

export const locationIllustrations: Record<string, ComponentType<IllustrationProps>> = {
  makkah: MakkahIllustration,
  madinah: MadinahIllustration,
  jeddah: JeddahIllustration,
  taif: TaifIllustration,
};
