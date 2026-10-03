import { C, Pin, Plane, Road, Svg, Vehicle } from "@/components/icons/svg-kit";

// Hero picture for the dark banner: a private SUV on the road, a pin over it, an
// aeroplane overhead and a generic city skyline behind. All code, no image file.
export default function HeroIllustration({ className }: { className?: string }) {
  const sky = "#14503b";
  return (
    <Svg viewBox="0 0 480 430" className={className}>
      <circle cx="250" cy="190" r="172" fill={C.mid} opacity="0.35" stroke="none" />
      <circle cx="372" cy="84" r="34" fill={C.gold} opacity="0.9" stroke="none" />

      <g stroke="none" fill={sky}>
        <rect x="44" y="214" width="30" height="86" />
        <rect x="78" y="190" width="26" height="110" />
        <rect x="108" y="236" width="34" height="64" />
        <rect x="336" y="210" width="28" height="90" />
        <rect x="368" y="172" width="38" height="128" />
        <rect x="410" y="226" width="28" height="74" />
      </g>
      <g stroke="none" fill={sky}>
        <rect x="147" y="226" width="6" height="74" />
        <path d="M145.5 226L150 208L154.5 226Z" />
        <rect x="197" y="226" width="6" height="74" />
        <path d="M195.5 226L200 208L204.5 226Z" />
        <rect x="156" y="274" width="38" height="26" />
        <path d="M158 274A17 17 0 0 1 192 274Z" />
        <rect x="174" y="250" width="2" height="8" />
      </g>

      <Plane x={96} y={64} scale={1.5} rotate={-16} fill={C.white} stroke="#0a2a1e" />
      <path d="M180 118Q230 96 280 100" stroke={C.gold} strokeWidth="2" strokeDasharray="4 6" opacity="0.8" />

      <Road x={12} y={308} w={456} h={44} fill="#0a3a29" dash={C.gold} />
      <Vehicle kind="suv" x={104} y={238} scale={2.7} body={C.beige} glass={C.dark} trim={C.gold} stroke="#0a2a1e" sw={2.5} />

      <g className="anim-float">
        <ellipse cx="240" cy="210" rx="20" ry="6" stroke={C.gold} strokeWidth="2" opacity="0.7" />
        <Pin x={240} y={206} scale={2.3} />
      </g>
    </Svg>
  );
}
