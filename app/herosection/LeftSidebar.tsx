'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../components/Menu';

interface LeftSidebarProps {
  activeSection?: number;
}

const LeftSidebar = ({ activeSection = 1 }: LeftSidebarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    { id: 1, label: 'HOME', default: '01/', href: '#hero' },
    { id: 2, label: 'GALLERY', default: '02/', href: '#gallery' },
    { id: 3, label: 'ROBOWAR', default: '03/', href: '#robowar' },
    { id: 4, label: 'DRONE', default: '04/', href: '#drone' },
    { id: 5, label: 'RC RACE', default: '05/', href: '#rcrace' },
    { id: 6, label: '06', default: '06/', href: '#' },
    { id: 7, label: '07', default: '07/', href: '#' },
    { id: 8, label: '08', default: '08/', href: '#' },
  ];

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Mobile Menu Trigger */}
      <div
        className="fixed top-4 left-4 z-50 md:hidden flex flex-col gap-1.5 cursor-pointer mix-blend-difference"
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      <div className="hidden md:flex fixed left-0 top-0 h-full w-[60px] z-50 flex-col items-center border-r-2 border-white/20 bg-transparent text-white mix-blend-difference pointer-events-none">
        {/* Top Menu Icon */}
        <div className="w-full py-8 flex flex-col items-center border-b border-white/20">
          <div
            className="flex flex-col gap-1.5 cursor-pointer pointer-events-auto hover:scale-110 transition-transform"
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* Vertical Text */}
        <div className="flex-1 w-full flex items-center justify-center border-b border-white/20">
          <h2
            className="whitespace-nowrap text-2xl tracking-[0.2em] font-bold rotate-180 font-bankgothic"
            style={{
              writingMode: 'vertical-rl',
            }}
          >
            NIMBUS 2026
          </h2>
        </div>

        {/* Bottom Navigation */}
        <div className="w-full py-8 flex flex-col items-center gap-4 text-xs tracking-widest opacity-80 pointer-events-auto font-bankgothic">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="cursor-pointer hover:text-[#7C3AED] transition-colors flex items-center justify-center min-h-[24px]"
              style={{ writingMode: 'vertical-rl' }}
            >
              {activeSection === item.id ? (
                <span className="rotate-180 font-bold text-[#7C3AED] whitespace-nowrap">{item.label}</span>
              ) : (
                <span className="rotate-180 whitespace-nowrap">{item.default}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
