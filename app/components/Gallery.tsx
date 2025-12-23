'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center py-20 relative overflow-hidden">
      {/* Images Container */}
      <div className="flex flex-col gap-4 z-10">
        {/* Section 1 */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-[1400px] h-[223px] group overflow-hidden cursor-pointer"
        >
          <Image
            src="/herosection/section1.jpeg"
            alt="Thrilling Competition"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          {/* Text Overlay */}
          <div className="absolute right-10 bottom-8 text-right z-20 pointer-events-none">
            <h3 className="text-white text-lg tracking-widest mb-0 font-light" style={{ fontFamily: 'Neoform, sans-serif' }}>THRILLING</h3>
            <h2 className="text-white text-4xl tracking-wider font-bold" style={{ fontFamily: 'Neoform, sans-serif' }}>COMPETITION</h2>
          </div>
        </motion.div>
        
        {/* Section 2 */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-[1400px] h-[223px] group overflow-hidden cursor-pointer"
        >
          <Image
            src="/herosection/section2.jpeg"
            alt="Technical Workshop"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          {/* Text Overlay */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-left z-20 pointer-events-none">
            <h3 className="text-white text-lg tracking-widest mb-0 font-light" style={{ fontFamily: 'Neoform, sans-serif' }}>TECHNICAL</h3>
            <h2 className="text-white text-4xl tracking-wider font-bold" style={{ fontFamily: 'Neoform, sans-serif' }}>WORKSHOP</h2>
          </div>
        </motion.div>
        
        {/* Section 3 */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-[1400px] h-[223px] group overflow-hidden cursor-pointer"
        >
          <Image
            src="/herosection/section3.jpeg"
            alt="Pre Nimbus 25"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
            <h3 className="text-white text-2xl tracking-widest mb-1 font-bold" style={{ fontFamily: 'Neoform, sans-serif' }}>PRE</h3>
            <h2 className="text-white text-5xl tracking-widest font-bold" style={{ fontFamily: 'Neoform, sans-serif' }}>NIMBUS'25</h2>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Marquee */}
      <div className="w-full mt-20 overflow-hidden py-4 border-t border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white text-xl font-bold tracking-widest mx-4 uppercase opacity-70" style={{ fontFamily: 'Neoform, sans-serif' }}>
              ///ROBOWAR
            </span>
          ))}
          {[...Array(10)].map((_, i) => (
            <span key={`dup-${i}`} className="text-white text-xl font-bold tracking-widest mx-4 uppercase opacity-70" style={{ fontFamily: 'Neoform, sans-serif' }}>
              ///ROBOWAR
            </span>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
