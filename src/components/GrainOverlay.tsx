'use client';

export default function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {/* opacity-20: Controls the intensity of the grain (Adjust this: 0.1 to 0.3)
         mix-blend-overlay: Ensures it lightens darks and darkens lights (Film style)
      */}
      <div className="absolute -inset-[100%] w-[400%] h-[400%] animate-grain opacity-20 mix-blend-overlay bg-noise"></div>
    </div>
  );
}
