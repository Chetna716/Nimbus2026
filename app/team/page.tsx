'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import LeftSidebar from '../herosection/LeftSidebar';


type Category = 'FACULTY' | 'FINAL YEAR' | 'PRE FINAL YEAR';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: Exclude<Category, 'ALL'>;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
    whatsapp?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "f1",
    name: "DR. RAJESH KUMAR",
    role: "FACULTY ADVISOR",
    category: "FACULTY",
    image: "/nimbuslogoW-01.png",
    socials: { linkedin: "#", email: "#" }
  },
  {
    id: "f2",
    name: "DR. PRIYA MEHTA",
    role: "FACULTY CO-ADVISOR",
    category: "FACULTY",
    image: "/nimbuslogoW-01.png",
    socials: { linkedin: "#", email: "#" }
  },
  {
    id: "f3",
    name: "DR. AMIT SHARMA",
    role: "TECHNICAL MENTOR",
    category: "FACULTY",
    image: "/nimbuslogoW-01.png",
    socials: { linkedin: "#", email: "#" }
  },
  {
    id: "f4",
    name: "DR. SUNITA VERMA",
    role: "EVENT PATRON",
    category: "FACULTY",
    image: "/nimbuslogoW-01.png",
    socials: { linkedin: "#", email: "#" }
  },
  {
    id: "c1",
    name: "SARAYU NALLABOLU",
    role: "PRESIDENT",
    category: "FINAL YEAR",
    image: "/teamss/final/SARAYU NALLABOLU.png",
    socials: { linkedin: "#", github: "#", instagram: "#", whatsapp: "#" }
  },
  {
    id: "c2",
    name: "PRATYUSH SRIVASTAVA",
    role: "VICE PRESIDENT",
    category: "FINAL YEAR",
    image: "/teamss/final/Pratyush Srivastava.jpg",
    socials: { linkedin: "#", email: "#", whatsapp: "#" }
  },
  {
    id: "c3",
    name: "RAHUL PRASAD",
    role: "VICE PRESIDENT",
    category: "FINAL YEAR",
    image: "/teamss/final/rahulprashad.jpg",
    socials: { linkedin: "#", github: "#", whatsapp: "#" }
  },
  {
    id: "c4",
    name: "ANSHIKA BHARWAL",
    role: "ORGANISING SECRETARY",
    category: "FINAL YEAR",
    image: "/teamss/final/anshikabharwal.jpg",
    socials: { linkedin: "#", instagram: "#", whatsapp: "#" }
  },
  {
    id: "c5",
    name: "SAUMITRA TANDON",
    role: "ORGANISING SECRETARY",
    category: "FINAL YEAR",
    image: "/teamss/final/SAUMITRA TANDON.jpg",
    socials: { linkedin: "#", github: "#", whatsapp: "#" }
  },
  {
    id: "c6",
    name: "SHAGUN SHARMA",
    role: "SECRETARY",
    category: "FINAL YEAR",
    image: "/teamss/final/shagunsharma.jpg",
    socials: { linkedin: "#", instagram: "#", whatsapp: "#" }
  },
  {
    id: "c7",
    name: "VISHESH CHADHA",
    role: "SECRETARY TREASURER",
    category: "FINAL YEAR",
    image: "/teamss/final/Visheshchada.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "c8",
    name: "ANSHUMAN KANDPAL",
    role: "CLUB SECRETARY",
    category: "FINAL YEAR",
    image: "/teamss/final/ANSHUMAN KANDPAL.jpg",
    socials: { linkedin: "#", email: "#", whatsapp: "#" }
  },
  {
    id: "c9",
    name: "MOHD OVAIS",
    role: "CLUB SECRETARY",
    category: "FINAL YEAR",
    image: "/teamss/final/MOHD OVAIS.jpg",
    socials: { linkedin: "#", email: "#", whatsapp: "#" }
  },
  {
    id: "c10",
    name: "VARTIKA SINGH",
    role: "CORE SECRETARY",
    category: "FINAL YEAR",
    image: "/teamss/final/VARTIKA SINGH.jpg",
    socials: { linkedin: "#", instagram: "#", whatsapp: "#" }
  },
  {
    id: "c11",
    name: "DIVYANSHU VERMA",
    role: "DEPARTMENTAL SECRETARY",
    category: "FINAL YEAR",
    image: "/teamss/final/DIVYANSHU VERMA.jpg",
    socials: { linkedin: "#", email: "#", whatsapp: "#" }
  },
  {
    id: "cc1",
    name: "AYUSH KUMAR",
    role: "COORDINATOR MEDIA AND PROMOTION",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/AYUSH KUMAR.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc2",
    name: "DEEPTANU SARMA",
    role: "COORDINATOR - MEDIA AND PROMOTION",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/DEEPTANU SARMA.jpg",
    socials: { linkedin: "#", instagram: "#", whatsapp: "#" }
  },
  {
    id: "cc3",
    name: "NIMISH SAXENA",
    role: "INSTITUTE LEVEL COORDINATOR",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/Nimish Saxena.jpg",
    socials: { linkedin: "#", github: "#", whatsapp: "#" }
  },
  {
    id: "cc4",
    name: "PARAM SOHAL",
    role: "CLUB COORDINATOR - DEPARTMENTAL",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/PARAM SOHAL.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc5",
    name: "RAJAT RANSETA",
    role: "CLUB COORDINATOR DEPARTMENTAL",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/RAJAT RANSETA.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc6",
    name: "SOMANSHU BHARDWAJ",
    role: "COORDINATOR-MEDIA AND PROMOTIONS",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/SOMANSHU BHARDWAJ.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc7",
    name: "UJJAWAL MAHESHWARI",
    role: "INSTITUTE LEVEL COORDINATOR",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/UJJAWAL MAHESHWARI.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc8",
    name: "VIDHAN VARDHAN SONI",
    role: "COORDINATOR-CORE ACTIVITIES",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/VIDHAN VARDHAN SONI.webp",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc9",
    name: "NANDINEE TANDON",
    role: "COORDINATOR-CORE ACTIVITIES",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/nandinee tandon.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc10",
    name: "PRIYANSHI",
    role: "CLUB COORDINATOR -DEPARTMENTAL",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/priyanshi.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc11",
    name: "RONIT",
    role: "CLUB CORDINATOR - CORE",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/ronit.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
  {
    id: "cc12",
    name: "VYOM SHARMA",
    role: "CLUB COORDINATOR - CORE",
    category: "PRE FINAL YEAR",
    image: "/teamss/prefinal/vyom sharma.jpg",
    socials: { linkedin: "#", whatsapp: "#" }
  },
];

const CATEGORIES: Category[] = ['FACULTY', 'FINAL YEAR', 'PRE FINAL YEAR'];

const TeamsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('FACULTY');
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const filteredMembers = TEAM_MEMBERS.filter(m => m.category === activeCategory);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#B19EEF] selection:text-white">
      <LeftSidebar activeSection={3} />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 px-6 pt-24 pb-12 md:pl-[120px] md:pr-8 md:py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white font-bankgothic">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#FF9FFC] to-[#9333EA]">TEAM</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light w-full max-w-6xl leading-relaxed mb-6">
            The minds behind the magic. A collective of innovators, creators, and leaders driving Nimbus 2026.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            className="h-1 bg-[#B19EEF] max-w-6xl"
          />
        </motion.div>
        <div className="flex flex-wrap gap-4 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 md:px-6 rounded-full font-mono text-xs md:text-sm tracking-widest border transition-all duration-300 ${activeCategory === cat
                ? 'bg-[#B19EEF] border-[#B19EEF] text-white shadow-[0_0_20px_rgba(177,158,239,0.4)]'
                : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredMembers.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative h-[420px] w-full bg-gray-900/40 backdrop-blur-sm overflow-hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} // Angled Corner
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out scale-100 grayscale-0 md:grayscale md:group-hover:scale-110 md:group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  <div
                    className="absolute inset-0 bg-[url('/grid-pattern.png')] transition-opacity duration-500 mixed-blend-overlay opacity-0 md:group-hover:opacity-20"
                    style={{ backgroundSize: '30px 30px' }}
                  />
                </div>
                {hoveredMember === member.id && (
                  <motion.div
                    initial={{ top: '-10%' }}
                    animate={{ top: '120%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-[#B19EEF] shadow-[0_0_10px_#B19EEF] z-20 opacity-50"
                  />
                )}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                  <div className="absolute top-4 right-4 text-[9px] font-mono text-white/40 border border-white/10 px-2 py-1 tracking-widest">
                    ID // {member.id.padStart(3, '0')}
                  </div>
                  <div className="transform transition-transform duration-500 translate-y-0 md:group-hover:-translate-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-3 bg-[#B19EEF]" />
                      <span className="text-xs font-mono font-bold text-[#B19EEF] tracking-wider uppercase">
                        {member.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold font-bankgothic text-white mb-1 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm font-mono text-gray-400 tracking-wider mb-6">
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/20 pointer-events-none transition-colors duration-300 group-hover:border-[#B19EEF]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/20 pointer-events-none transition-colors duration-300 group-hover:border-[#B19EEF]" />
                <div className="absolute inset-0 border border-white/10 transition-colors duration-300 pointer-events-none md:group-hover:border-[#B19EEF]/50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} />

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
};

export default TeamsPage;
