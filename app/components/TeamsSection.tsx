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
  const CONTAINER_HEIGHT = 800;
  
  // Calculate vertical travel for images
  // We want the active image to be centered in the container.
  // Initial position (index 0): Top of first image is at (CONTAINER_HEIGHT - IMAGE_HEIGHT) / 2
  // Final position (index N-1): Top of last image is at (CONTAINER_HEIGHT - IMAGE_HEIGHT) / 2
  // The list moves up by (IMAGE_HEIGHT + GAP) for each step.
  const initialOffset = (CONTAINER_HEIGHT - IMAGE_HEIGHT) / 2;
  const totalTravel = (teams.length - 1) * (IMAGE_HEIGHT + GAP);
  
  const y = useTransform(scrollYProgress, [0, 1], [initialOffset, initialOffset - totalTravel]);

  // Text Animation Constants
  const TEXT_ITEM_HEIGHT = 100; // Height of one text block
  const TEXT_GAP = 20;
  const TEXT_CONTAINER_HEIGHT = 600; // Much larger viewport to allow full screen movement
  const textStride = TEXT_ITEM_HEIGHT + TEXT_GAP;
  
  // To make the text move "till up of the screen", we want a larger range of motion.
  // We'll center the active item within this larger container.
  const textInitialOffset = (TEXT_CONTAINER_HEIGHT - TEXT_ITEM_HEIGHT) / 2;
  const textTotalTravel = (teams.length - 1) * textStride;
  const textY = useTransform(scrollYProgress, [0, 1], [textInitialOffset, textInitialOffset - textTotalTravel]);

  return (
    <div ref={containerRef} className="w-full relative bg-black" style={{ height: `${teams.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden pl-[80px]">
      {/* Left: Number Indicator */}
      <div className="absolute left-10 top-10 z-10">
        <div className="flex items-end leading-none">
          <span className="text-white text-[120px] font-thin tracking-tighter">
            0{activeTeam.id}
          </span>
          <span className="text-white/50 text-2xl mb-6 ml-2 font-mono">
            /0{teams.length}
          </span>
        </div>
      </div>

      {/* Center: Image Display */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 translate-y-43">
        <div className="relative w-[450px] overflow-hidden" style={{ height: CONTAINER_HEIGHT }}>
           {/* Image Trail Strip */}
           <motion.div 
             style={{ y }}
             className="flex flex-col gap-8 w-full"
           >
             {teams.map((team) => (
               <div key={team.id} className="w-full relative flex-shrink-0" style={{ height: IMAGE_HEIGHT }}>
                  <Image
                    src={team.image}
                    alt={team.fullName}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
               </div>
             ))}
           </motion.div>
           
           {/* Circular Decoration - scaled to fit larger container if needed, or kept centered */}
           <div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
             style={{ width: 450, height: IMAGE_HEIGHT }}
           >
              <div className="absolute inset-0 border border-white/10 rounded-full scale-[1.5] animate-spin-slow" />
           </div>
        </div>
      </div>

      {/* Right: Team List */}
      <div className="absolute right-10 top-0 h-screen flex flex-col justify-center items-end z-20 gap-8 pointer-events-none">
        <h3 className="text-white/50 text-sm tracking-[0.3em]">PARTICIPATING TEAMS</h3>
        
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
      
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: scale(1.5) rotate(0deg); }
          to { transform: scale(1.5) rotate(360deg); }
        }
      `}</style>
      </div>
    </div>
  );
};

export default TeamsSection;
