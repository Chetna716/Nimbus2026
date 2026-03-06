"use client";

import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";

export default function Model() {
  const objRef = useRef<any>(null);
  const initialRotation = useRef<{ x: number; y: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function onLoad(splineApp: any) {
    setIsLoading(false);
    // Try to find Head or Eye objects
    const target = splineApp.findObjectByName('Head') ||
      splineApp.findObjectByName('head') ||
      splineApp.findObjectByName('Eye') ||
      splineApp.findObjectByName('eye');

    if (target) {
      objRef.current = target;
      initialRotation.current = { x: target.rotation.x, y: target.rotation.y };
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (objRef.current && initialRotation.current) {
        const { innerWidth, innerHeight } = window;
        // Normalize mouse position (-1 to 1)
        const x = (e.clientX / innerWidth) * 2 - 1;
        const y = -(e.clientY / innerHeight) * 2 + 1; // Invert Y for standard 3D coords

        // Rotation sensitivity
        const sensitivity = 0.5;

        // Apply rotation relative to initial rotation
        // Rotate Y axis based on mouse X (looking left/right)
        // Rotate X axis based on mouse Y (looking up/down)
        objRef.current.rotation.y = initialRotation.current.y + x * sensitivity;
        objRef.current.rotation.x = initialRotation.current.x + y * sensitivity;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-[130%] md:w-full h-full absolute -left-[15%] md:left-0 top-0 z-30 pointer-events-none translate-y-[120px] md:translate-y-[180px] scale-[0.9] xl:scale-90">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm tracking-widest animate-pulse">
          LOADING MODEL...
        </div>
      )}
      <div className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/VTslyCeVrhY5VGYO/scene.splinecode"
        />
      </div>
    </div>
  );
}
