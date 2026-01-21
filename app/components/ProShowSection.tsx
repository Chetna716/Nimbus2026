'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const artists = [
  {
    id: 1,
    name: 'MITHOON',
    description: 'A master of soulful melodies, Mithoon crafts compositions that blend classical richness with modern soundscapes. Each song resonates deeply, leaving a lasting emotional imprint on listeners, making him one of the most sought-after composers in contemporary Indian music.',
    image: '/herosection/section1.jpeg', // Placeholder
  },
  {
    id: 2,
    name: 'ARTIST TWO',
    description: 'An electrifying performer known for high-energy beats and unforgettable stage presence. Bringing the best of electronic dance music to the floor.',
    image: '/herosection/section2.jpeg', // Placeholder
  },
  {
    id: 3,
    name: 'ARTIST THREE',
    description: 'The voice of a generation, blending indie pop with traditional influences. A storyteller through song who captures the essence of modern youth.',
    image: '/herosection/section3.jpeg', // Placeholder
  },
];

const ProShowSection = () => {
  const [activeId, setActiveId] = useState(1);

  const activeArtist = artists.find(a => a.id === activeId) || artists[0];

  const handleArtistClick = (id: number) => {
    setActiveId(id);
  };

  // Helper to get ordered artists based on active one to maintain the 3-item layout
  // We want the active one in the middle.
  // Actually, simplest is just to render all 3 in a fixed order (1, 2, 3) or specific slots?
  // The user said "three image/ circle should be horizontally be align and when we click on the circle the image should swap".
  // This implies position swapping or just content swapping?
  // "image should swap and the text content also like the passes"
  // In passes (TathvaPassSection), we scroll through them.
  // Here, let's keep three fixed slots: Left, Center (Active), Right.
  // But we have 3 artists total.
  // So if Artist 1 is active: Left=3, Center=1, Right=2? Or just fixed positions and scale changes?
  // "horizontally be align" suggests a row.
  
  // Let's try a fixed row of 3 images. The one that is active is larger. The others are smaller.
  // If I click a smaller one, it becomes active (larger) and the text updates.
  // To make them "swap", maybe the user implies the active one is always in the center?
  // If so, we need to rotate the array or positions.
  
  // Let's go with: Active is always center. Left and Right are the other two.
  const getDisplayOrder = () => {
    const activeIndex = artists.findIndex(a => a.id === activeId);
    const prevIndex = (activeIndex - 1 + artists.length) % artists.length;
    const nextIndex = (activeIndex + 1) % artists.length;
    
    return [
      { ...artists[prevIndex], position: 'left' },
      { ...artists[activeIndex], position: 'center' },
      { ...artists[nextIndex], position: 'right' }
    ];
  };

  const displayArtists = getDisplayOrder();

  return (
    <section className="w-full min-h-screen bg-black text-white relative flex items-center justify-center overflow-hidden py-20">
      {/* Background Grid/Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      {/* Top Left Squares */}
      <div className="absolute top-10 left-10 md:left-20 flex flex-col gap-2 z-10">
        <div className="flex gap-2">
          <div className="w-4 h-4 border border-white"></div>
          <div className="w-4 h-4 border border-white"></div>
          <div className="w-4 h-4 border border-white"></div>
          <div className="w-4 h-4 border border-white"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 border border-white"></div>
          <div className="w-4 h-4 border border-white"></div>
          <div className="w-4 h-4 border border-white"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 border border-white"></div>
          <div className="w-4 h-4 border border-white"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 border border-white"></div>
        </div>
      </div>

      {/* Top Right Coordinates */}
      <div className="absolute top-10 right-10 md:right-20 text-right z-10">
        <p className="font-mono text-sm tracking-widest text-white/70">11.3210°N</p>
        <p className="font-mono text-sm tracking-widest text-white/70">75.9320°E</p>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Circular Animation & Images */}
        <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center">
          {/* Rotating Text Ring */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
             <svg viewBox="0 0 300 300" className="w-[230px] h-[230px] md:w-[300px] md:h-[300px]">
               <defs>
                 <path id="circlePath" d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 " />
               </defs>
               <text fill="white" fontSize="18" fontWeight="bold" letterSpacing="4">
                 <textPath href="#circlePath" startOffset="0%">
                   PROSHOW • PROSHOW • PROSHOW • PROSHOW •
                 </textPath>
               </text>
             </svg>
          </motion.div>

          {/* Images Container - Horizontally Aligned */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8 z-20">
            {displayArtists.map((item) => {
              const isCenter = item.position === 'center';
              return (
                <motion.div
                  key={item.id}
                  layoutId={`artist-${item.id}`}
                  className={`relative rounded-full overflow-hidden border-2 border-white/20 bg-gray-800 cursor-pointer transition-all duration-500 ${
                    isCenter 
                      ? 'w-40 h-40 md:w-52 md:h-52 border-4 border-white/30 z-30 shadow-[0_0_30px_rgba(255,255,255,0.1)]' 
                      : 'w-24 h-24 md:w-32 md:h-32 opacity-60 hover:opacity-100 hover:scale-105 z-20'
                  }`}
                  onClick={() => handleArtistClick(item.id)}
                  whileHover={{ scale: isCenter ? 1.05 : 1.1 }}
                >
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors duration-300" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left pl-0 md:pl-10 h-[400px] justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArtist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase" style={{ fontFamily: 'BankGothic, sans-serif' }}>
                {activeArtist.name}
              </h2>
              
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                {activeArtist.description}
              </p>
              
              <button className="relative px-8 py-3 bg-black border border-white/30 text-white tracking-[0.2em] font-bold overflow-hidden group">
                <span className="relative z-10">SEE MORE</span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-10 left-10 md:left-20 text-white/50 text-sm md:text-base font-light tracking-wide z-10">
        <p>Be there</p>
        <p>Feel it</p>
        <p>Live it</p>
      </div>

      {/* Bottom Right Barcode/Dots */}
      <div className="absolute bottom-10 right-10 md:right-20 flex gap-1 z-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`w-2 h-2 ${i % 3 === 0 ? 'bg-white' : 'bg-white/30'}`}></div>
        ))}
        <div className="w-20 h-2 bg-transparent"></div>
        {[...Array(10)].map((_, i) => (
          <div key={i+20} className={`w-2 h-2 ${i % 2 === 0 ? 'bg-white' : 'bg-white/30'}`}></div>
        ))}
      </div>

    </section>
  );
};

export default ProShowSection;
