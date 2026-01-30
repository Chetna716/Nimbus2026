'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Ticket = ({ index, offset }: { index: number; offset: number }) => {
  const isActive = offset === 0;
  const isAllDays = index === 0;
  const isHidden = Math.abs(offset) > 1;

  return (
    <motion.div
      className={`absolute w-[500px] h-[180px] bg-[#F5E6C8] border-2 border-[#D4AF37] rounded-3xl flex overflow-hidden shadow-2xl origin-center`}
      style={{
        left: '50%',
        marginLeft: '-250px', // Center the 500px width
      }}
      animate={{
        scale: isActive ? 1 : 0.8,
        opacity: isActive ? 1 : (isHidden ? 0 : 0.4),
        zIndex: isActive ? 20 : 10,
        x: offset * 100,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37] rounded-br-xl" />

      {/* Left stub */}
      <div className="w-[80px] border-r border-dashed border-[#D4AF37]/50 flex flex-col items-center justify-center bg-[#EAD5A8]/30">
        <h3 className="text-[#333] font-bold tracking-widest text-[10px] -rotate-90">ADMIT ONE</h3>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-3 relative">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h2 className="text-[#333] text-base font-bold tracking-widest font-bankgothic">NIMBUS 2025</h2>
            <p className="text-[#666] text-[8px] tracking-wider mt-0.5">ADMIT ONE</p>
          </div>
          <div className="text-right">
            <h1 className="text-[#333] text-2xl font-black tracking-tighter">
              {isAllDays ? 'ALL DAYS' : `DAY ${index}`}
            </h1>
            <p className="text-[#666] text-xs font-bold mt-0.5">
              {isAllDays ? 'OCT 24-26 2025' : `OCT ${23 + index} 2025`}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          {/* QR Code Placeholder */}
          <div className="w-12 h-12 bg-black/10 border border-[#333] p-0.5">
            <div className="w-full h-full bg-black" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 20%, 80% 20%, 80% 80%, 20% 80%)' }}></div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="text-[#555] text-[8px] font-medium tracking-wide">
              Wheels | Robowars | Conclave
            </div>
            <div className="flex gap-1.5">
              <button className="bg-[#333] text-[#F5E6C8] px-3 py-0.5 text-[10px] font-bold tracking-wider hover:bg-black transition-colors clip-path-slant">
                LOGIN
              </button>
              <div className="bg-[#888] text-white px-2 py-0.5 text-[10px] font-bold tracking-wider clip-path-slant">
                {isAllDays ? '999/-' : '399/-'}
              </div>
            </div>
          </div>
        </div>
        
        {/* Gold sheen effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Chevron = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={className}
  >
    <path d="M9 5L16 12L9 19" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

export default function TathvaPassSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalTickets = 4;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalTickets - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < totalTickets - 1 ? prev + 1 : 0));
  };

  const getOffset = (index: number) => {
    const diff = (index - activeIndex + totalTickets) % totalTickets;
    if (diff === 0) return 0;
    if (diff === 1) return 1; // Right
    if (diff === totalTickets - 1) return -1; // Left
    return 2; // Hidden/Back
  };

  const features = activeIndex === 0 
    ? ["ALL WORKSHOPS", "ALL LECTURES", "ALL COMPETITIONS", "PRO SHOWS"]
    : ["WHEELS", "ROBOWARS", "TECH CONCLAVE", "INFORMALS"];

  return (
    <div className="w-full min-h-screen bg-black relative flex flex-col items-center justify-start pt-24 overflow-hidden">
      {/* Background Grid/Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      {/* Header */}
      <div className="text-center mb-6 z-10 mt-0">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-widest mb-4 font-neoform">
          NIMBUS PASS
        </h1>
        <p className="text-white/60 text-lg tracking-[0.2em] font-light">
          One pass. Every moment of Nimbus.
        </p>
      </div>

      {/* Ticket Carousel */}
      <div className="relative h-[220px] w-full max-w-4xl flex items-center justify-center mb-4 z-10">
        {[0, 1, 2, 3].map((i) => (
           <Ticket key={i} index={i} offset={getOffset(i)} />
        ))}
      </div>

      {/* Features List */}
      <div className="flex gap-8 md:gap-16 text-white/70 text-sm md:text-base font-bold tracking-widest mb-8 z-10">
        {features.map((feature, idx) => (
          <span key={idx}>{feature}</span>
        ))}
      </div>

      {/* Footer Navigation (Moved Up) */}
      <div className="w-full max-w-7xl px-8 flex items-center justify-between z-10 text-white mb-12">
        {/* Left Arrow */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={handlePrev}>
          <div className="flex">
             <img src="/fast-forward.png" alt="Prev" className="w-48 h-48 transform scale-x-[-1] invert" />
          </div>
          <span className="text-xl tracking-widest font-bold group-hover:translate-x-2 transition-transform">PREV</span>
        </div>

        {/* Center Indicator */}
        <div className="text-4xl font-black tracking-widest">
          {activeIndex === 0 ? 'ALL' : `0${activeIndex}`}
        </div>

        {/* Right Arrow */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={handleNext}>
          <span className="text-xl tracking-widest font-bold group-hover:-translate-x-2 transition-transform">NEXT</span>
          <div className="flex">
             <img src="/fast-forward.png" alt="Next" className="w-48 h-48 invert" />
          </div>
        </div>
      </div>

      {/* Bottom Coordinates */}
      <div className="absolute bottom-8 right-8 text-white/40 text-sm font-mono tracking-widest">
        11.3210°N
      </div>
      
      {/* Bottom Left Square */}
      <div className="absolute bottom-8 left-8 flex gap-2">
        <div className="w-4 h-4 border border-white/40"></div>
        <div className="w-4 h-4 border border-white/40"></div>
        <div className="w-4 h-4 border border-white/40"></div>
      </div>

      <style jsx>{`
        .clip-path-slant {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
