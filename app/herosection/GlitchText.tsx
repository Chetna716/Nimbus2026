'use client';

import { useEffect, useState, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // 1.5s total duration matches original feel

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate how many letters to fix based on time progress
      // easing slightly for better feel
      const fraction = Math.min(progress / duration, 1);
      const iterations = fraction * text.length;

      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < Math.floor(iterations)) {
              return text[index];
            }
            // Update random character every frame for high-energy glitch
            // or we could throttle this if it's too chaotic
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (fraction < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text]);

  return (
    <h1 
      className={`${className || ''} font-neoform`}
    >
      {displayText}
    </h1>
  );
}
