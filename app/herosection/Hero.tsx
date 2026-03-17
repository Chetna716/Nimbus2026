'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

import Image from 'next/image';

const LiquidEther = dynamic(() => import('./liquidether'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});
const Model = dynamic(() => import('./model'), { ssr: false });

const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      <div className="absolute top-6 right-4 md:top-8 md:right-8 z-50 pointer-events-none">
        <Image
          src="/nimbuslogoW-01.png"
          alt="Nimbus Logo"
          width={60}
          height={20}
          className="object-contain opacity-90"
        />
      </div>
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
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={['#c35debff', '#FF9FFC', '#9333EA']}
            mouseForce={15}
            cursorSize={80}
            isViscous={false}
            viscous={10}
            iterationsViscous={8}
            iterationsPoisson={8}
            resolution={0.3}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.5}
            takeoverDuration={0.5}
            autoResumeDelay={5000}
            autoRampDuration={0.8}
          />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)] md:bg-[radial-gradient(circle_at_center,transparent_30%,black_90%)]" />
        <Model />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-[35] pointer-events-none bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute z-20 top-[25%] md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none flex flex-col items-center justify-center">
          <div className="relative">
            <span className="absolute -top-4 md:-top-1 left-2 text-white text-base md:text-3xl tracking-[0.2em] font-bankgothic uppercase">10-12 April</span>
            <GlitchText
              text="NIMBUS"
              className="text-white text-6xl sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[250px] tracking-widest leading-none"
            />
            <span className="absolute -bottom-8 md:-bottom-4 right-2 text-white text-2xl md:text-5xl tracking-widest font-bankgothic">2026</span>
          </div>
        </div>
        <div className="absolute bottom-6 right-4 md:bottom-10 md:right-6 z-50 pointer-events-none">
          <Image
            src="/PIXO LOGO.png"
            alt="Pixonoids Logo"
            width={90}
            height={30}
            className="object-contain opacity-80 w-10 md:w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
