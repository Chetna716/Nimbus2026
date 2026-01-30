'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'HOME', href: '/', image: '/herosection/section1.jpeg' },
  { label: 'ABOUT US', href: '/aboutus', image: '/herosection/section2.jpeg' },
  { label: 'CLUBS', href: '/clubs', image: '/herosection/section3.jpeg' },
  { label: 'TEAMS', href: '/teams', image: '/teams/exe.jpg' },
  { label: 'EVENTS', href: '/events', image: '/rcrace/rcrace.jpeg' },
];

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Hover Image Display - Appears in the empty space (Desktop only) */}
          <AnimatePresence mode="popLayout">
            {hoveredImage && (
              <motion.div
                key={hoveredImage}
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, zIndex: -1 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="hidden md:block fixed top-0 right-0 bottom-0 left-[600px] z-[65] overflow-hidden"
              >
                <Image
                  src={hoveredImage}
                  alt="Menu hover"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu Container */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full md:w-[600px] bg-black border-r border-white/20 z-[70] flex flex-col p-10 md:p-20 overflow-hidden"
          >
            {/* Close Button Area (Top Left matches sidebar position) */}
            <div className="absolute top-0 left-0 w-[60px] py-8 flex flex-col items-center border-b border-white/20 z-[80]">
              <div 
                className="flex flex-col gap-1.5 cursor-pointer pointer-events-auto group"
                onClick={onClose}
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45, y: 8 }}
                  className="w-6 h-0.5 bg-white group-hover:bg-[#5227FF] transition-colors"
                />
                <motion.div 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  className="w-6 h-0.5 bg-white group-hover:bg-[#5227FF] transition-colors"
                />
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -45, y: -8 }}
                  className="w-6 h-0.5 bg-white group-hover:bg-[#5227FF] transition-colors"
                />
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col justify-center h-full gap-8 pl-12 relative z-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onMouseEnter={() => setHoveredImage(item.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Link 
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center gap-6"
                  >
                    <span className="text-white/30 font-mono text-sm tracking-widest group-hover:text-[#5227FF] transition-colors">
                      0{index + 1}
                    </span>
                    <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter group-hover:text-[#5227FF] transition-colors duration-300 font-bankgothic">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer / Decorative */}
            <div className="absolute bottom-10 left-10 md:left-20 flex gap-4 text-white/30 font-mono text-xs tracking-widest z-10">
              <p>NIMBUS 2026</p>
              <span>•</span>
              <p>NIT HAMIRPUR</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;
