'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Environment, Center } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion';

function Model({ scrollProgress, ...props }: { scrollProgress: MotionValue<number> } & any) {
  const { scene } = useGLTF('/rc_car/scene.gltf');
  const ref = useRef<any>();
  const active = useRef(false);

  useFrame((state) => {
    if (ref.current) {
      // Cursor Interaction
      const targetY = Math.PI / 2 + (state.pointer.x * 0.5);
      const targetX = 0.3 + (state.pointer.y * 0.1);
      
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.1);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, 0.1);

      // Scroll-driven Entry
      const progress = scrollProgress.get();
      // Map scroll 0 -> 0.6 to animation 0 -> 1
      const entryProgress = Math.min(Math.max(progress / 0.6, 0), 1);
      
      const startX = 10;
      const endX = 1.0; // Shifted left (was 3.0)
      const exitX = -10; 
      
      const startY = 10; 
      const endY = 1.2; // Lowered model (was 1.5)
      const exitY = -6;
      const startTiltZ = Math.PI / 4;
      const endTiltZ = 0.15; // Keep a slight tilt

      const targetPosX = THREE.MathUtils.lerp(startX, endX, entryProgress);
      const targetPosY = THREE.MathUtils.lerp(startY, endY, entryProgress);
      const targetTiltZ = THREE.MathUtils.lerp(startTiltZ, endTiltZ, entryProgress);

      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetPosX, 0.1);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetPosY, 0.1);
      ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, targetTiltZ, 0.1);
    }
  });

  return (
    <Center>
      <primitive ref={ref} object={scene} {...props} />
    </Center>
  );
}

const RCRaceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

   // Text Animations
   const opacityR = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
   const yR = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
   
   const opacityCAR = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
   const yCAR = useTransform(scrollYProgress, [0.3, 0.5], [-50, 0]); // Drop in from top
   
   const opacityRACING = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
   const letterSpacing = useTransform(scrollYProgress, [0.25, 0.4], ["-0.5em", "0em"]);
   const buttonOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
   const buttonY = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

   return (
     <section ref={containerRef} className="w-full h-screen bg-black relative overflow-hidden cursor-grab active:cursor-grabbing">
       <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none pl-32 md:pl-64">
         <style jsx global>{`
          @font-face {
            font-family: 'Vipnagorgialla Italic';
            src: url('/vipnagorgialla/Vipnagorgialla Bd It.otf') format('opentype');
            font-weight: bold;
            font-style: italic;
          }
          .text-3d-shadow {
             text-shadow: 
               1px 1px 0 #b91c1c,
               2px 2px 0 #991b1b,
               3px 3px 0 #7f1d1d,
               4px 4px 0 #450a0a,
               5px 5px 0 #450a0a,
               6px 6px 0 #450a0a,
               7px 7px 0 #450a0a,
               8px 8px 0 #450a0a,
               9px 9px 0 #450a0a,
               10px 10px 0 #450a0a,
               12px 12px 20px rgba(0,0,0,1);
           }
           .text-3d-shadow-grey {
             text-shadow: 
               1px 1px 0 #6b7280,
               2px 2px 0 #4b5563,
               3px 3px 0 #374151,
               4px 4px 0 #1f2937,
               5px 5px 0 #111827,
               6px 6px 0 #111827,
               7px 7px 0 #111827,
               8px 8px 0 #111827,
               9px 9px 0 #111827,
               10px 10px 0 #111827,
               12px 12px 20px rgba(0,0,0,1);
           }
           .text-3d-shadow-orange {
             text-shadow: 
               1px 1px 0 #fdba74,
               2px 2px 0 #fb923c,
               3px 3px 0 #ea580c,
               4px 4px 0 #c2410c,
               5px 5px 0 #9a3412,
               6px 6px 0 #9a3412,
               7px 7px 0 #9a3412,
               8px 8px 0 #9a3412,
               9px 9px 0 #9a3412,
               10px 10px 0 #9a3412,
               12px 12px 20px rgba(0,0,0,1);
           }
        `}</style>
         <div className="flex flex-col items-start justify-center">
            <motion.h1 
              style={{ opacity: opacityR, y: yR, fontFamily: 'Vipnagorgialla Italic, sans-serif' }}
              className="text-[#EF4444] text-[10rem] leading-[0.8] font-bold italic text-left text-3d-shadow"
            >
              R
            </motion.h1>
            <motion.h1 
              style={{ opacity: opacityCAR, y: yCAR, fontFamily: 'Vipnagorgialla Italic, sans-serif' }}
              className="text-[#9CA3AF] text-[10rem] leading-[0.8] font-bold italic text-left text-3d-shadow-grey"
            >
              <span className="text-[#EF4444] text-3d-shadow">C</span>A<span className="text-[#FB923C] text-3d-shadow-orange">R</span>
            </motion.h1>
            <div className="flex flex-row items-center">
              <motion.h1 
                style={{ opacity: opacityRACING, letterSpacing: letterSpacing, fontFamily: 'Vipnagorgialla Italic, sans-serif' }}
                className="text-[#9CA3AF] text-[10rem] leading-[0.8] font-bold italic text-left text-3d-shadow-grey"
              >
                RA<span className="text-[#FB923C] text-3d-shadow-orange">C</span>ING
              </motion.h1>

              {/* Vertical Capsule Button */}
              <motion.div 
                style={{ opacity: buttonOpacity, y: buttonY }}
                className="ml-8 pointer-events-auto"
              >
                <button className="w-8 h-24 rounded-full border-2 border-[#EF4444] bg-transparent text-white flex items-center justify-center hover:bg-[#EF4444] transition-colors duration-300">
                   <span className="transform -rotate-90 text-xs font-bold tracking-widest whitespace-nowrap">
                     EXPLORE
                   </span>
                </button>
              </motion.div>
            </div>
         </div>
      </div>

      <div className="absolute inset-0">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 45 }}>
          {/* Lighting Environment */}
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          
          <Suspense fallback={null}>
            <PresentationControls
              speed={1.5}
              global
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
              snap={{ mass: 4, tension: 400 }}
            >
              <Model 
                scrollProgress={scrollYProgress} 
                scale={9} 
                rotation={[0, Math.PI / 2, 0]} 
              />
            </PresentationControls>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default RCRaceSection;
