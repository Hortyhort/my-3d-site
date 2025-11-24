'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

interface TextRevealProps {
  children: string;
  className?: string;
}

export default function TextReveal({ children, className = "" }: TextRevealProps) {
  const container = useRef<HTMLDivElement>(null);
  
  // Split text into words manually to avoid paid plugins (SplitText)
  const words = children.split(" ");

  useGSAP(() => {
    // Register the plugin inside useGSAP to avoid SSR issues
    gsap.registerPlugin(ScrollTrigger);
    
    // Select all elements with the class .word
    const elements = gsap.utils.toArray('.word');

    gsap.fromTo(
      elements,
      {
        y: 100, // Start 100px down (out of view due to overflow-hidden)
        opacity: 0, 
      },
      {
        y: 0, // Slide up to natural position
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05, // Delay between each word
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Animation starts when top of text hits 80% of viewport
          end: "bottom 20%",
          toggleActions: "play none none reverse", // Replays if you scroll back up
        },
      }
    );
  }, { scope: container }); // Scope ensures we only select .word inside THIS component

  return (
    <h2 ref={container} className={`flex flex-wrap leading-none overflow-hidden ${className}`}>
      {words.map((word, i) => (
        // The "Mask" (overflow-hidden)
        <div key={i} className="overflow-hidden pb-2 pr-2">
          {/* The Animated Element */}
          <span className="word block translate-y-full">
            {word}
          </span>
        </div>
      ))}
    </h2>
  );
}
