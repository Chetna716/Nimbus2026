'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import LeftSidebar from '../herosection/LeftSidebar';

// --- Types & Data ---

type Category = 'ALL' | 'CORE' | 'TECHNICAL' | 'CREATIVE' | 'MANAGEMENT';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: Category;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "SARAYU NALLABOLU",
    role: "PRESIDENT",
    category: "CORE",
    image: "/teams2/Satyam_Maurya.jpg", // Placeholder
    socials: { linkedin: "#", github: "#", instagram: "#" }
  },
  {
    id: "2",
    name: "ARYAN SINGH",
    role: "VICE PRESIDENT",
    category: "CORE",
    image: "/teams2/Satyam_Maurya.jpg",
    socials: { linkedin: "#", email: "#" }
  },
  {
    id: "3",
    name: "RISHABH GUPTA",
    role: "TECH LEAD",
    category: "TECHNICAL",
    image: "/teams2/Satyam_Maurya.jpg",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: "4",
    name: "PRIYA SHARMA",
    role: "DESIGN HEAD",
    category: "CREATIVE",
    image: "/teams2/Satyam_Maurya.jpg",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: "5",
    name: "VIKRAM MALHOTRA",
    role: "EVENT MANAGER",
    category: "MANAGEMENT",
    image: "/teams2/Satyam_Maurya.jpg",
    socials: { linkedin: "#", email: "#" }
  },
  {
    id: "6",
    name: "SNEHA PATEL",
    role: "WEB DEVELOPER",
    category: "TECHNICAL",
    image: "/teams2/Satyam_Maurya.jpg",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: "7",
    name: "ROHAN VERMA",
    role: "CONTENT LEAD",
    category: "CREATIVE",
    image: "/teams2/Satyam_Maurya.jpg",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: "8",
    name: "ANANYA DAS",
    role: "PUBLIC RELATIONS",
    category: "MANAGEMENT",
    image: "/teams2/Satyam_Maurya.jpg",
    socials: { linkedin: "#", email: "#" }
  }
];

const CATEGORIES: Category[] = ['ALL', 'CORE', 'TECHNICAL', 'CREATIVE', 'MANAGEMENT'];

const TeamsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const filteredMembers = activeCategory === 'ALL'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.category === activeCategory);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#5227FF] selection:text-white">
      <LeftSidebar activeSection={3} /> {/* Assumption: Team is section 3 */}

      {/* Background Grid */}
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

      <div className="relative z-10 pl-[80px] md:pl-[120px] pr-8 py-20 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white font-bankgothic">
            OUR <span className="text-[#5227FF]">TEAM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
            The minds behind the magic. A collective of innovators, creators, and leaders driving Nimbus 2026.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm tracking-widest border transition-all duration-300 ${activeCategory === cat
                ? 'bg-[#5227FF] border-[#5227FF] text-white shadow-[0_0_20px_rgba(82,39,255,0.4)]'
                : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Team Grid */}
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
                {/* Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out ${hoveredMember === member.id ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                  {/* Tech Grid Overlay (Visible on Hover) */}
                  <div
                    className={`absolute inset-0 bg-[url('/grid-pattern.png')] opacity-0 transition-opacity duration-500 mixed-blend-overlay ${hoveredMember === member.id ? 'opacity-20' : ''}`}
                    style={{ backgroundSize: '30px 30px' }}
                  />
                </div>

                {/* Cyber Scanner Line */}
                {hoveredMember === member.id && (
                  <motion.div
                    initial={{ top: '-10%' }}
                    animate={{ top: '120%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-[#5227FF] shadow-[0_0_10px_#5227FF] z-20 opacity-50"
                  />
                )}

                {/* Content Layer */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">

                  {/* Top Right ID Badge */}
                  <div className="absolute top-4 right-4 text-[9px] font-mono text-white/40 border border-white/10 px-2 py-1 tracking-widest">
                    ID // {member.id.padStart(3, '0')}
                  </div>

                  {/* Text Content */}
                  <div className={`transform transition-transform duration-500 ${hoveredMember === member.id ? '-translate-y-4' : 'translate-y-0'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-3 bg-[#5227FF]" />
                      <span className="text-xs font-mono font-bold text-[#5227FF] tracking-wider uppercase">
                        {member.category} OPS
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold font-bankgothic text-white mb-1 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm font-mono text-gray-400 tracking-wider mb-6">
                        // {member.role}
                    </p>
                  </div>

                  {/* Socials - Slide Up Reveal */}
                  <div
                    className={`nav-links flex gap-4 overflow-hidden transition-all duration-500 ${hoveredMember === member.id ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="p-2 border border-white/20 rounded hover:bg-[#5227FF] hover:border-[#5227FF] hover:text-white text-gray-400 transition-all">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="p-2 border border-white/20 rounded hover:bg-[#5227FF] hover:border-[#5227FF] hover:text-white text-gray-400 transition-all">
                        <Github size={16} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} className="p-2 border border-white/20 rounded hover:bg-[#5227FF] hover:border-[#5227FF] hover:text-white text-gray-400 transition-all">
                        <Instagram size={16} />
                      </a>
                    )}
                    {member.socials.email && (
                      <a href={`mailto:${member.socials.email}`} className="p-2 border border-white/20 rounded hover:bg-[#5227FF] hover:border-[#5227FF] hover:text-white text-gray-400 transition-all">
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/20 pointer-events-none transition-colors duration-300 group-hover:border-[#5227FF]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/20 pointer-events-none transition-colors duration-300 group-hover:border-[#5227FF]" />

                {/* Border Overlay */}
                <div className={`absolute inset-0 border border-white/10 transition-colors duration-300 pointer-events-none ${hoveredMember === member.id ? 'border-[#5227FF]/50' : ''}`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} />

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
};

export default TeamsPage;
