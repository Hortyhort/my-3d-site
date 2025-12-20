'use client';

import { useEffect, useRef } from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';

export default function Loader() {
  // R3F Hook that tracks asset loading (0 to 100)
  const { progress } = useProgress();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Update the counter number
    if (progressTextRef.current) {
      progressTextRef.current.textContent = Math.round(progress).toString();
    }

    // 2. Animate the progress bar width
    if (barRef.current) {
        gsap.to(barRef.current, {
            width: `${progress}%`,
            duration: 0.5,
            ease: "power1.out"
        });
    }

    // 3. Exit Animation when loaded
    if (progress === 100) {
        const tl = gsap.timeline();
        
        // Slight delay to ensure user sees "100"
        tl.to(containerRef.current, {
            yPercent: -100, // Slide up
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.5, 
            onComplete: () => {
                // Optional: Kill the scroll locker here if you had one
            }
        });
    }
  }, [progress]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center gap-4">
        {/* The Percentage Text */}
        <h1 className="text-9xl font-bold tracking-tighter">
          <span ref={progressTextRef}>0</span>%
        </h1>
        
        {/* The Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div ref={barRef} className="h-full bg-white w-0" />
        </div>

        <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
            Loading Experience
        </p>
      </div>
    </div>
  );
}
