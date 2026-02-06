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

  // Layout constants - Landscape orientation
  const IMAGE_HEIGHT = 280; // Height for landscape
  const IMAGE_WIDTH = 500; // Width for landscape
  const GAP = 32;

  // Calculate vertical travel for images
  const totalTravel = (teams.length - 1) * (IMAGE_HEIGHT + GAP);

  // Initial: Center the first image
  const initialOffset = `calc(50vh - ${IMAGE_HEIGHT / 2}px)`;
  // Final: Center the last image
  const finalOffset = `calc(50vh - ${IMAGE_HEIGHT / 2 + totalTravel}px)`;

  const y = useTransform(scrollYProgress, [0, 1], [initialOffset, finalOffset]);

  // Text Animation Constants
  const TEXT_ITEM_HEIGHT = 100;
  const TEXT_GAP = 20;
  const TEXT_CONTAINER_HEIGHT = 400;

  const textStride = TEXT_ITEM_HEIGHT + TEXT_GAP;
  const textInitialOffset = (TEXT_CONTAINER_HEIGHT - TEXT_ITEM_HEIGHT) / 2;
  const textTotalTravel = (teams.length - 1) * textStride;
  const textY = useTransform(scrollYProgress, [0, 1], [textInitialOffset, textInitialOffset - textTotalTravel]);

  // Number Indicator Animation
  const numberY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="w-full relative bg-black selection:bg-[#5227FF] selection:text-white" style={{ height: `${teams.length * 100}vh` }}>

      {/* Background Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden pl-[60px]">

        {/* Header Info */}
        <div className="absolute top-10 right-10 z-50 flex flex-col items-end">
          <h3 className="text-[#5227FF] text-sm tracking-[0.5em] font-bankgothic mb-2">PARTICIPATING CLUBS</h3>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent to-[#5227FF]" />
        </div>

        {/* Left: Number Indicator */}
        <motion.div style={{ y: numberY }} className="absolute left-[100px] top-20 z-10 hidden md:block">
          <div className="flex flex-col">
            <div className="flex items-end leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 text-[120px] tracking-tighter font-bankgothic font-bold">
                0{activeTeam.id}
              </span>
              <span className="text-[#5227FF] text-2xl mb-6 ml-2 font-bankgothic">
                /0{teams.length}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={activeTeam.id}
              className="mt-4 max-w-xs"
            >
              <p className="text-[#5227FF] font-mono text-xs tracking-widest mb-1">// DESCRIPTION</p>
              <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#5227FF]/50 pl-3">
                {activeTeam.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Center: Image Display */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[500px] h-screen flex items-center justify-center">
            {/* Tech Circles Decoration */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{ width: 700, height: 700 }}
            >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 flex items-center justify-center scale-[1.3]">
                <div className="w-full h-full border-2 border-white/30 rounded-full animate-spin-slow shadow-[0_0_80px_rgba(82,39,255,0.4)]" />
              </div>

              {/* Dashed Tech Ring */}
              <div className="absolute inset-0 flex items-center justify-center scale-[1.1]">
                <div className="w-full h-full border-[3px] border-dashed border-[#5227FF]/60 rounded-full animate-spin-reverse-slow shadow-[0_0_40px_rgba(82,39,255,0.3)]" />
              </div>

              {/* Inner Accent Ring */}
              <div className="absolute inset-0 flex items-center justify-center scale-[0.9]">
                <div className="w-full h-full border-2 border-white/20 rounded-full" />
              </div>
            </div>

            {/* Vertical Center Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#5227FF]/50 to-transparent z-0" />

            {/* Image Trail Strip */}
            <motion.div
              style={{ y }}
              className="flex flex-col gap-8 w-full relative z-10 items-center"
            >
              {teams.map((team, index) => (
                <div key={team.id} className="relative flex-shrink-0 group" style={{ height: IMAGE_HEIGHT, width: IMAGE_WIDTH }}>
                  <div className={`absolute -inset-4 border transition-all duration-500 rounded-sm ${activeIndex === index
                    ? 'border-[#5227FF] opacity-100 scale-100'
                    : 'border-transparent opacity-0 scale-95'
                    }`}>
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#5227FF]" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-[#5227FF]" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#5227FF]" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#5227FF]" />
                  </div>

                  <Image
                    src={team.image}
                    alt={team.fullName}
                    fill
                    className={`object-cover transition-all duration-700 ease-out border-2 ${activeIndex === index
                      ? 'grayscale-0 scale-110 border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20'
                      : 'grayscale scale-100 opacity-40 border-transparent z-10 blur-[2px]'
                      }`}
                  />

                  {/* Scanline Effect on Active */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5227FF]/10 to-transparent z-30 pointer-events-none bg-[length:100%_4px]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Team List */}
        <div className="absolute right-10 md:right-20 z-20 pointer-events-none"
          style={{ top: `calc(50vh - ${(TEXT_CONTAINER_HEIGHT - TEXT_ITEM_HEIGHT) / 2}px)` }}>

          <div className="relative overflow-hidden pointer-events-auto" style={{ height: TEXT_CONTAINER_HEIGHT, width: 500 }}>
            <motion.div
              style={{ y: textY }}
              className="flex flex-col items-end w-full"
            >
              {teams.map((team, index) => (
                <div
                  key={team.id}
                  onClick={() => {
                    const sectionHeight = containerRef.current?.scrollHeight || 0;
                    const scrollPos = (sectionHeight / teams.length) * index + (containerRef.current?.offsetTop || 0);
                    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
                  }}
                  className="flex-shrink-0 flex flex-col items-end justify-center cursor-pointer group"
                  style={{ height: TEXT_ITEM_HEIGHT, marginBottom: TEXT_GAP }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`transition-all duration-300 h-[1px] bg-[#5227FF] ${activeIndex === index ? 'w-12 opacity-100' : 'w-0 opacity-0'}`} />
                    <h2
                      className={`text-2xl md:text-5xl font-bold font-bankgothic tracking-tight transition-all duration-500 ${activeIndex === index
                        ? 'text-white scale-100 translate-x-0 outline-text'
                        : 'text-transparent stroke-white/20 scale-90 translate-x-4 stroke-1'
                        }`}
                      style={{ WebkitTextStroke: activeIndex === index ? '0px' : '1px rgba(255,255,255,0.2)' }}
                    >
                      {team.name}
                    </h2>
                  </div>
                  <div className={`mt-2 text-xs font-mono tracking-[0.3em] transition-all duration-300 ${activeIndex === index ? 'text-[#5227FF] opacity-100' : 'text-gray-600 opacity-0'
                    }`}>
                    {team.fullName}
                  </div>
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
