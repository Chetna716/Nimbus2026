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
      {/* Pixonoids Logo - Top Right */}
      <div className="absolute top-6 right-4 md:top-8 md:right-8 z-50 pointer-events-none">
        <Image 
          src="/PIXO LOGO.png" 
          alt="Pixonoids Logo" 
          width={60} 
          height={20} 
          className="object-contain opacity-90"
        />
      </div>

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
            colors={['#7C3AED', '#FF9FFC', '#9333EA']}
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

        {/* 3D Model */}
        <Model />

        {/* Foreground Text */}
        <div className="absolute z-20 top-[25%] md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none flex flex-col items-center justify-center">
          <div className="relative">
            <span className="absolute -top-4 md:-top-1 left-2 text-white text-base md:text-3xl tracking-[0.2em] font-bankgothic uppercase">10-11 april</span>
            <GlitchText
              text="NIMBUS"
              className="text-white text-6xl sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[250px] tracking-widest leading-none"
            />
            <span className="absolute -bottom-8 md:-bottom-4 right-2 text-white text-2xl md:text-5xl tracking-widest font-bankgothic">2026</span>
          </div>
        </div>

        {/* Right Side Info Card */}
        <motion.div
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 }}
          animate={{ clipPath: "polygon(0 0, 110% 0, 100% 100%, -10% 100%)", opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "circOut" }}
          className="absolute right-4 md:right-10 bottom-8 md:bottom-12 z-30 max-w-[240px] md:max-w-sm"
        >
          <div className="relative overflow-hidden group cursor-pointer">
            <div className="relative z-10 pl-6 pr-8 py-6 border-l-8 border-[#B19EEF] bg-gray-900/40 backdrop-blur-xl rounded-r-2xl border-white/10 border-y border-r">
              <h3 className="text-xl md:text-3xl font-bold text-white font-bankgothic drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] tracking-widest mb-2">
                COMING SOON
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed tracking-wider">
                GET READY FOR THE FUTURE
              </p>
            </div>
            {/* Shine effect */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ delay: 1.6, duration: 0.8, ease: "linear", repeat: Infinity, repeatDelay: 4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
