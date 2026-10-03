import { C, Svg, Vehicle, type VehicleKind } from "@/components/icons/svg-kit";

const styles: Record<VehicleKind, { body: string }> = {
  sedan: { body: C.primary },
  suv: { body: C.mid },
  van: { body: C.white },
  vip: { body: C.dark },
};

// Fleet slug to generic silhouette. These are shape categories, not specific models.
export const fleetKinds: Record<string, VehicleKind> = {
  "executive-sedan": "sedan",
  "premium-suv": "suv",
  "luxury-van": "van",
  "vip-chauffeur": "vip",
};

export default function VehicleIllustration({
  kind,
  className,
}: {
  kind: VehicleKind;
  className?: string;
}) {
  return (
    <Svg viewBox="0 0 200 110" className={className}>
      <ellipse cx="100" cy="98" rx="74" ry="5" fill={C.gold} opacity="0.25" stroke="none" />
      <Vehicle kind={kind} x={15} y={32} scale={1.7} body={styles[kind].body} glass={C.gray} sw={2.2} />
    </Svg>
  );
}
