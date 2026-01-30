'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LeftSidebar from '../herosection/LeftSidebar';

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#5227FF] selection:text-white">
      <LeftSidebar activeSection={-1} /> {/* -1 or a specific ID for About Us if we add it to sidebar */}

      {/* Grid Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 pl-[80px] md:pl-[120px] pr-8 py-20 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 whitespace-nowrap font-bankgothic">
            ABOUT <span className="text-[#5227FF]">NIMBUS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 w-full leading-relaxed font-light mb-8">
            The Annual Technical Festival of <span className="text-white font-bold">NIT Hamirpur</span>.
            Where innovation meets reality, and technology shapes the future.
          </p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            className="h-1 bg-[#5227FF]" 
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-bankgothic">
              OUR VISION
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 text-justify">
              Nimbus acts as a platform for the technical minds of the nation to showcase their skills and knowledge. 
              It is an amalgamation of technology and fun, where students from all over the country come together to 
              celebrate the spirit of engineering and innovation.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed text-justify">
              With a legacy of over a decade, Nimbus has evolved into one of the premier technical festivals in North India,
              hosting a plethora of events, workshops, and guest lectures from industry leaders.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Decorative Element 1 (Back) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50, rotate: 0 },
                visible: { opacity: 1, y: 0, rotate: 3, transition: { duration: 0.6, ease: "backOut" } }
              }}
              className="absolute -inset-4 border-2 border-[#5227FF]/30 rounded-lg bg-black/20" 
            />
            
            {/* Decorative Element 2 (Middle) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50, rotate: 0 },
                visible: { opacity: 1, y: 0, rotate: -2, transition: { duration: 0.6, delay: 0.2, ease: "backOut" } }
              }}
              className="absolute -inset-4 border-2 border-white/10 rounded-lg bg-black/20" 
            />
            
            {/* Main Content Card (Front) */}
            <motion.div 
               variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "backOut" } }
              }}
              className="bg-[#111] p-8 rounded-lg relative h-full border border-white/10 flex flex-col justify-center z-10"
            >
               <h3 className="text-2xl font-bold mb-4 text-[#5227FF] font-bankgothic">THEME: 2026</h3>
               <p className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4 font-neoform">
                 DIGITAL <br/> FRONTIERS
               </p>
               <p className="text-gray-400">
                 Exploring the boundaries of what is possible in the digital age. From AI to Robotics, 
                 Blockchains to Cyber-Physical Systems.
               </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10"
        >
          {[
            { label: "Events", value: "50+" },
            { label: "Colleges", value: "100+" },
            { label: "Footfall", value: "10k+" },
            { label: "Prizes", value: "₹5L+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-4xl md:text-6xl font-bold text-white mb-2 font-bankgothic">{stat.value}</h4>
              <p className="text-[#5227FF] text-sm md:text-base tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Join Us CTA */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-bankgothic">
            BE PART OF THE <span className="text-[#5227FF]">FUTURE</span>
          </h2>
          <button className="px-8 py-4 bg-transparent border border-[#5227FF] text-white hover:bg-[#5227FF] transition-all duration-300 rounded-full tracking-widest font-bold">
            REGISTER NOW
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutUs;
