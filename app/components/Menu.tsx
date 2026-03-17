'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'HOME', href: '/', image: '/herosection/section1.jpeg' },
  { label: 'ABOUT US', href: '/aboutus', image: '/herosection/section2.jpeg' },
  { label: 'CLUBS', href: '/clubs', image: '/herosection/section3.jpeg' },
  { label: 'TEAMS', href: '/team', image: '/teams/exe.jpg' },
  { label: 'EVENTS', href: '/events', image: '/rcrace/rcrace.jpeg' },
];

const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full md:w-[600px] bg-black border-r border-white/20 z-[70] flex flex-col p-10 md:p-20 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-[60px] py-8 flex flex-col items-center border-b border-white/20 z-[80]">
              <div
                className="flex flex-col gap-1.5 cursor-pointer pointer-events-auto group"
                onClick={onClose}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45, y: 8 }}
                  className="w-6 h-0.5 bg-white group-hover:bg-[#7C3AED] transition-colors"
                />
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  className="w-6 h-0.5 bg-white group-hover:bg-[#7C3AED] transition-colors"
                />
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -45, y: -8 }}
                  className="w-6 h-0.5 bg-white group-hover:bg-[#7C3AED] transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-8 pl-12 relative z-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center gap-6"
                  >
                    <span className="text-white/30 font-mono text-sm tracking-widest group-hover:text-[#FF9FFC] transition-colors">
                      0{index + 1}
                    </span>
                    <span className="text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-300 font-bankgothic bg-clip-text text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:via-[#FF9FFC] group-hover:to-[#9333EA]">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
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
