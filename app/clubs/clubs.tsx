'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useSpring, useTransform } from 'framer-motion';

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTeam = teams[activeIndex];

  // Spring-animated progress (0 to 1) driven by activeIndex
  const progress = useSpring(0, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  // Update spring target when activeIndex changes
  useEffect(() => {
    progress.set(activeIndex / (teams.length - 1));
  }, [activeIndex, progress, teams.length]);

  // Image trail constants
  const IMAGE_HEIGHT = 280;
  const IMAGE_WIDTH = 500;
  const IMAGE_GAP = 32;
  const totalImageTravel = (teams.length - 1) * (IMAGE_HEIGHT + IMAGE_GAP);

  // Text trail constants
  const TEXT_ITEM_HEIGHT = 100;
  const TEXT_GAP = 20;
  const TEXT_CONTAINER_HEIGHT = 400;
  const textStride = TEXT_ITEM_HEIGHT + TEXT_GAP;
  const textInitialOffset = (TEXT_CONTAINER_HEIGHT - TEXT_ITEM_HEIGHT) / 2;
  const textTotalTravel = (teams.length - 1) * textStride;

  // Simultaneous transforms driven by the same spring
  const imageY = useTransform(progress, [0, 1], [0, -totalImageTravel]);
  const textY = useTransform(progress, [0, 1], [textInitialOffset, textInitialOffset - textTotalTravel]);
  const numberY = useTransform(progress, [0, 1], [0, 200]);

  const goTo = useCallback((index: number) => {
    if (isAnimating || index === activeIndex) return;
    if (index < 0 || index >= teams.length) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, activeIndex, teams.length]);

  // Wheel-based snapping
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let accumulated = 0;
    const THRESHOLD = 80;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;

      accumulated += e.deltaY;

      if (Math.abs(accumulated) >= THRESHOLD) {
        if (accumulated > 0 && activeIndex < teams.length - 1) {
          goTo(activeIndex + 1);
        } else if (accumulated < 0 && activeIndex > 0) {
          goTo(activeIndex - 1);
        }
        accumulated = 0;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeIndex, isAnimating, goTo, teams.length]);

  // Touch-based navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIndex < teams.length - 1) goTo(activeIndex + 1);
        else if (diff < 0 && activeIndex > 0) goTo(activeIndex - 1);
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeIndex, isAnimating, goTo, teams.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goTo(activeIndex + 1);
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goTo(activeIndex - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, goTo]);

  return (
    <div ref={containerRef} className="w-full h-screen relative bg-black selection:bg-[#B19EEF] selection:text-white overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="w-full h-full flex items-center overflow-hidden pl-0 md:pl-[60px]">

        {/* Header Info */}
        <div className="absolute top-6 right-4 md:top-10 md:right-10 z-50 flex flex-col items-end">
          <h3 className="text-[#B19EEF] text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] font-bankgothic mb-2">PARTICIPATING CLUBS</h3>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent to-[#B19EEF]" />
        </div>

        {/* Left: Number Indicator */}
        <motion.div style={{ y: numberY }} className="absolute left-[100px] top-20 z-10 hidden md:block">
          <div className="flex flex-col">
            <div className="flex items-end leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF9FFC] via-[#B19EEF] to-[#7C3AED] text-[120px] tracking-tighter font-bankgothic font-bold">
                0{activeTeam.id}
              </span>
              <span className="text-[#B19EEF] text-2xl mb-6 ml-2 font-bankgothic">
                /0{teams.length}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={activeTeam.id}
              className="mt-4 max-w-xs"
            >
              <p className="text-[#B19EEF] font-mono text-xs tracking-widest mb-1">// DESCRIPTION</p>
              <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#B19EEF]/50 pl-3">
                {activeTeam.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Center: Image Trail */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[500px] h-screen flex items-center justify-center scale-[0.6] md:scale-100 origin-center">
            {/* Tech Circles Decoration */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{ width: 700, height: 700 }}
            >
              <div className="absolute inset-0 flex items-center justify-center scale-[1.3]">
                <div className="w-full h-full border-2 border-white/30 rounded-full animate-spin-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center scale-[1.1]">
                <div className="w-full h-full border-[3px] border-dashed border-[#B19EEF]/60 rounded-full animate-spin-reverse-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center scale-[0.9]">
                <div className="w-full h-full border-2 border-white/20 rounded-full" />
              </div>
            </div>

            {/* Vertical Center Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#B19EEF]/50 to-transparent z-0" />

            {/* Image Trail Strip - all images stacked, moves up/down */}
            <motion.div
              style={{ y: imageY, top: '50%', marginTop: -IMAGE_HEIGHT / 2 }}
              className="absolute flex flex-col gap-8 w-full z-10 items-center"
            >
              {teams.map((team, index) => (
                <div key={team.id} className="relative flex-shrink-0 group" style={{ height: IMAGE_HEIGHT, width: IMAGE_WIDTH }}>
                  {/* Active frame border */}
                  <div className={`absolute -inset-3 border-2 transition-all duration-500 rounded-sm ${activeIndex === index
                    ? 'border-[#B19EEF] opacity-100'
                    : 'border-transparent opacity-0'
                    }`}>
                    <div className="absolute -top-[3px] -left-[3px] w-3 h-3 bg-[#B19EEF]" />
                    <div className="absolute -top-[3px] -right-[3px] w-3 h-3 bg-[#B19EEF]" />
                    <div className="absolute -bottom-[3px] -left-[3px] w-3 h-3 bg-[#B19EEF]" />
                    <div className="absolute -bottom-[3px] -right-[3px] w-3 h-3 bg-[#B19EEF]" />
                  </div>

                  <Image
                    src={team.image}
                    alt={team.fullName}
                    fill
                    className={`object-cover transition-all duration-700 ease-out ${activeIndex === index
                      ? 'grayscale-0 border-2 border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20'
                      : 'grayscale opacity-40 border-2 border-transparent z-10 blur-[2px]'
                      }`}
                  />

                  {/* Scanline Effect on Active */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B19EEF]/10 to-transparent z-30 pointer-events-none bg-[length:100%_4px]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Club Name Trail - all names stacked, moves up/down simultaneously */}
        <div className="absolute right-4 md:right-20 z-20 pointer-events-none"
          style={{ top: `calc(50vh - ${(TEXT_CONTAINER_HEIGHT - TEXT_ITEM_HEIGHT) / 2}px)` }}>

          <div className="relative overflow-hidden pointer-events-auto w-[200px] md:w-[500px]" style={{ height: TEXT_CONTAINER_HEIGHT }}>
            <motion.div
              style={{ y: textY }}
              className="flex flex-col items-end w-full"
            >
              {teams.map((team, index) => (
                <div
                  key={team.id}
                  onClick={() => goTo(index)}
                  className="flex-shrink-0 flex flex-col items-end justify-center cursor-pointer group"
                  style={{ height: TEXT_ITEM_HEIGHT, marginBottom: TEXT_GAP }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`transition-all duration-300 h-[1px] bg-[#B19EEF] ${activeIndex === index ? 'w-6 md:w-12 opacity-100' : 'w-0 opacity-0'}`} />
                    <h2
                      className={`text-xl md:text-5xl font-bold font-bankgothic tracking-tight transition-all duration-500 ${activeIndex === index
                        ? 'text-white scale-100 translate-x-0'
                        : 'text-transparent scale-90 translate-x-4'
                        }`}
                      style={{ WebkitTextStroke: activeIndex === index ? '0px' : '1px rgba(255,255,255,0.2)' }}
                    >
                      {team.name}
                    </h2>
                  </div>
                  <div className={`mt-2 text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.3em] transition-all duration-300 ${activeIndex === index ? 'text-[#B19EEF] opacity-100' : 'text-gray-600 opacity-0'
                    }`}>
                    {team.fullName}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] tracking-[0.3em] font-mono uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-6 bg-gradient-to-b from-[#B19EEF] to-transparent"
          />
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-8 right-8 md:right-20 z-50 flex flex-col gap-3">
          {teams.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'bg-[#B19EEF] scale-150 shadow-[0_0_8px_rgba(177,158,239,0.6)]'
                : 'bg-white/30 hover:bg-white/60'
                }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamsSection;
