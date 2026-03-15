'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full bg-black flex flex-col items-center pt-10 pb-10 md:pb-20 relative overflow-hidden">
      {/* Images Container */}
      <div className="flex flex-col gap-2 md:gap-4 z-10 w-full px-4 md:px-0 items-center">
        {/* Section 1 */}
        <motion.div
          initial={isMobile ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          whileInView={isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full max-w-[500px] md:max-w-none md:w-[1500px] h-[180px] md:h-[223px] group overflow-hidden cursor-pointer rounded-lg md:rounded-none"
        >
          <Image
            src="/herosection/section1.jpeg"
            alt="Thrilling Competition"
            fill
            sizes="(max-width: 1500px) 100vw, 1500px"
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          {/* Text Overlay */}
          <div className="absolute right-4 md:right-10 bottom-8 text-right z-20 pointer-events-none">
            <h3 className="text-white text-sm md:text-lg tracking-widest mb-0 font-light font-bankgothic">THRILLING</h3>
            <h2 className="text-white text-2xl md:text-4xl tracking-wider font-bold font-bankgothic">COMPETITION</h2>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={isMobile ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          whileInView={isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full max-w-[500px] md:max-w-none md:w-[1500px] h-[180px] md:h-[223px] group overflow-hidden cursor-pointer rounded-lg md:rounded-none"
        >
          <Image
            src="/herosection/section2.jpeg"
            alt="Technical Workshop"
            fill
            sizes="(max-width: 1500px) 100vw, 1500px"
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          {/* Text Overlay */}
          <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-left z-20 pointer-events-none">
            <h3 className="text-white text-sm md:text-lg tracking-widest mb-0 font-light font-bankgothic">TECHNICAL</h3>
            <h2 className="text-white text-2xl md:text-4xl tracking-wider font-bold font-bankgothic">WORKSHOP</h2>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={isMobile ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          whileInView={isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full max-w-[500px] md:max-w-none md:w-[1500px] h-[180px] md:h-[223px] group overflow-hidden cursor-pointer rounded-lg md:rounded-none"
        >
          <Image
            src="/guestlecture.jpg"
            alt="Guest Lecture"
            fill
            sizes="(max-width: 1500px) 100vw, 1500px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          {/* Text Overlay */}
          <div className="absolute right-4 md:right-10 bottom-8 text-right z-20 pointer-events-none">
            <h3 className="text-white text-sm md:text-lg tracking-widest mb-0 font-light font-bankgothic">GUEST</h3>
            <h2 className="text-white text-2xl md:text-4xl tracking-wider font-bold font-bankgothic">LECTURE</h2>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Marquee */}
      <div className="w-full mt-10 overflow-hidden py-4 border-t border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex">
              <span className="text-white text-xl font-bold tracking-widest mx-8 uppercase opacity-70 font-bankgothic">
                ///ROBOWAR
              </span>
              <span className="text-white text-xl font-bold tracking-widest mx-8 uppercase opacity-70 font-bankgothic">
                ///DRONE SOCCER
              </span>
              <span className="text-white text-xl font-bold tracking-widest mx-8 uppercase opacity-70 font-bankgothic">
                ///RC RACE
              </span>
            </div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`dup-${i}`} className="flex">
              <span className="text-white text-xl font-bold tracking-widest mx-8 uppercase opacity-70 font-bankgothic">
                ///ROBOWAR
              </span>
              <span className="text-white text-xl font-bold tracking-widest mx-8 uppercase opacity-70 font-bankgothic">
                ///DRONE SOCCER
              </span>
              <span className="text-white text-xl font-bold tracking-widest mx-8 uppercase opacity-70 font-bankgothic">
                ///RC RACE
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
