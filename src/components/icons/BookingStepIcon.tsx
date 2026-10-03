import { C, Pin, Svg, Vehicle } from "@/components/icons/svg-kit";

// Four simple 64x64 pictures for the booking steps.
export default function BookingStepIcon({ step, className }: { step: 1 | 2 | 3 | 4; className?: string }) {
  return (
    <Svg viewBox="0 0 64 64" className={className}>
      <rect x="1" y="1" width="62" height="62" rx="14" fill={C.beige} stroke="none" />
      {step === 1 ? (
        <>
          <rect x="20" y="9" width="24" height="46" rx="5" fill={C.white} />
          <path d="M26 17H38" />
          <path d="M26 23H34" />
          <Pin x={32} y={46} scale={0.9} />
        </>
      ) : null}
      {step === 2 ? (
        <>
          <Vehicle kind="sedan" x={5} y={22} scale={0.54} />
          <circle cx="47" cy="15" r="9" fill={C.gold} />
          <path d="M42 15L46 19L52 11" />
        </>
      ) : null}
      {step === 3 ? (
        <>
          <circle cx="17" cy="23" r="6" fill={C.gray} />
          <rect x="11" y="31" width="12" height="22" rx="5" fill={C.primary} />
          <path d="M23 36L30 33" />
          <Vehicle kind="suv" x={26} y={26} scale={0.37} />
        </>
      ) : null}
      {step === 4 ? (
        <>
          <path d="M8 52Q24 40 32 50" stroke={C.gold} strokeDasharray="3 4" />
          <Pin x={42} y={50} scale={1.4} fill={C.primary} />
          <circle cx="46" cy="14" r="8" fill={C.gold} />
          <path d="M42 14L45 17L50 10" />
        </>
      ) : null}
    </Svg>
  );
}
