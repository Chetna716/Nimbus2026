'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const TeamsSection = () => {
  const teams = [
    {
      id: 1,
      name: 'MEDEXTROUS',
      fullName: 'TEAM MEDEXTROUS',
      image: '/teams/medex.jpg',
      description: 'Medical Innovation'
    },
    {
      id: 2,
      name: 'EXE',
      fullName: 'TEAM EXE',
      image: '/teams/exe.jpg',
      description: 'Executive Technical'
    },
    {
      id: 3,
      name: 'VIBHAV',
      fullName: 'TEAM VIBHAV',
      image: '/teams/vibhav.jpg',
      description: 'Vibrant Creation'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * teams.length),
        teams.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, teams.length]);

  const activeTeam = teams[activeIndex];

  // Layout constants
  const IMAGE_HEIGHT = 350;
  const GAP = 32; // gap-8 = 32px
  
  // Calculate vertical travel for images
  const totalTravel = (teams.length - 1) * (IMAGE_HEIGHT + GAP);
  
  // Initial: Center the first image (75vh - half image height)
  const initialOffset = `calc(75vh - ${IMAGE_HEIGHT / 2}px)`;
  // Final: Center the last image (keep it at the same level)
  const finalOffset = `calc(75vh - ${IMAGE_HEIGHT / 2 + totalTravel}px)`;
  
  const y = useTransform(scrollYProgress, [0, 1], [initialOffset, finalOffset]);

  // Text Animation Constants
  const TEXT_ITEM_HEIGHT = 100; // Restored height
  const TEXT_GAP = 20; // Restored gap
  const TEXT_CONTAINER_HEIGHT = 400; // Increased container slightly to accommodate larger spacing
  const textStride = TEXT_ITEM_HEIGHT + TEXT_GAP;
  
  // To make the text move "till up of the screen", we want a larger range of motion.
  // We'll center the active item within this larger container.
  const textInitialOffset = (TEXT_CONTAINER_HEIGHT - TEXT_ITEM_HEIGHT) / 2;
  const textTotalTravel = (teams.length - 1) * textStride;
  const textY = useTransform(scrollYProgress, [0, 1], [textInitialOffset, textInitialOffset - textTotalTravel]);

  // Number Indicator Animation
  // Move down as we scroll (parallax effect)
  const numberY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div ref={containerRef} className="w-full relative bg-black" style={{ height: `${teams.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden pl-[60px]">
      {/* Top Right: Header */}
      <h3 className="absolute top-10 right-10 z-50 text-white text-sm tracking-[0.3em] font-bankgothic">PARTICIPATING CLUBS</h3>

      {/* Left: Number Indicator */}
      <motion.div style={{ y: numberY }} className="absolute left-20 top-10 z-10">
        <div className="flex items-end leading-none">
          <span className="text-white text-[120px] tracking-tighter font-bankgothic">
            0{activeTeam.id}
          </span>
          <span className="text-white/50 text-2xl mb-6 ml-2 font-bankgothic">
            /0{teams.length}
          </span>
        </div>
      </motion.div>

      {/* Center: Image Display */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[450px] h-screen">
           {/* Circular Decoration - Behind Images */}
           <div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
             style={{ width: 600, height: 600 }}
           >
              {/* Outer Ring - Clockwise */}
              <div className="absolute inset-0 flex items-center justify-center scale-[1.3]">
                <div className="w-full h-full border-[3px] border-white/40 border-dashed rounded-full animate-spin-slow" />
              </div>
              
              {/* Inner Ring - Anti-clockwise */}
              <div className="absolute inset-0 flex items-center justify-center scale-[1.0]">
                <div className="w-full h-full border-[2px] border-white/30 border-dashed rounded-full animate-spin-reverse-slow" />
              </div>
           </div>

           {/* Image Trail Strip */}
           <motion.div 
             style={{ y }}
             className="flex flex-col gap-8 w-full relative z-10"
           >
             {teams.map((team, index) => (
               <div key={team.id} className="w-full relative flex-shrink-0" style={{ height: IMAGE_HEIGHT }}>
                  <Image
                    src={team.image}
                    alt={team.fullName}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      activeIndex === index ? 'grayscale-0' : 'grayscale'
                    }`}
                  />
               </div>
             ))}
           </motion.div>
        </div>
      </div>

      {/* Right: Team List */}
      <div className="absolute right-10 z-20 pointer-events-none" 
           style={{ top: `calc(75vh - ${IMAGE_HEIGHT/2}px - ${(TEXT_CONTAINER_HEIGHT - TEXT_ITEM_HEIGHT)/2}px)` }}>
        
        <div className="relative overflow-hidden pointer-events-auto" style={{ height: TEXT_CONTAINER_HEIGHT, width: 400 }}>
          <motion.div 
            style={{ y: textY }}
            className="flex flex-col items-end w-full"
          >
            {teams.map((team, index) => (
              <div 
                key={team.id}
                onClick={() => {
                    // Optional: Scroll to section
                    const sectionHeight = containerRef.current?.scrollHeight || 0;
                    const scrollPos = (sectionHeight / teams.length) * index + (containerRef.current?.offsetTop || 0);
                    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
                }}
                className="flex-shrink-0 flex flex-col items-end justify-center cursor-pointer group"
                style={{ height: TEXT_ITEM_HEIGHT, marginBottom: TEXT_GAP }}
              >
                <h2 
                  className={`text-3xl md:text-3xl font-bold tracking-wider transition-all duration-300 ${
                    activeIndex === index ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {team.fullName}
                </h2>
                <div className={`h-[1px] bg-white mt-2 transition-all duration-300 ${
                  activeIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default TeamsSection;
