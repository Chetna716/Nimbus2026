'use client';

import LiquidEther from './liquidether';
import GlitchText from './GlitchText';
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
        <GlitchText 
          text="NIMBUS"
          className="absolute z-20 text-white text-[200px] tracking-widest pointer-events-none select-none top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
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
    </div>
  );
};

export default Hero;
