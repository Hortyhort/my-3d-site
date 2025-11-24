'use client';

import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef(null);
  
  useGSAP(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
  
    // Add Lenis's ticker to GSAP's ticker
    gsap.ticker.add(update);
  
    // Disable GSAP's lag smoothing to prevent stutter
    gsap.ticker.lagSmoothing(0);
  
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis ref={lenisRef} root autoRaf={false}>
      {children}
    </ReactLenis>
  );
}
