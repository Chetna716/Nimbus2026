'use client';

import dynamic from 'next/dynamic';
import GlitchText from './GlitchText';

const LiquidEther = dynamic(() => import('./liquidether'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});
const Model = dynamic(() => import('./model'), { ssr: false });

const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* 3D Model */}
        <Model />

        {/* Foreground Text */}
        <div className="absolute z-20 top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none flex flex-col items-center justify-center">
          <div className="relative">
            <span className="absolute -top-1 left-2 text-white text-5xl tracking-[0.2em] font-neoform">DATES</span>
            <GlitchText 
              text="NIMBUS"
              className="text-white text-[250px] tracking-widest leading-none"
            />
            <span className="absolute -bottom-4 right-2 text-white text-5xl tracking-widest font-neoform">2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
