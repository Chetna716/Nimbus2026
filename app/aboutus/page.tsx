'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import LeftSidebar from '../herosection/LeftSidebar';

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: "/herosection/section1.jpeg", title: "RC RACING" },
    { src: "/herosection/section2.jpeg", title: "HOVER CRAFT" },
    { src: "/herosection/section3.jpeg", title: "ROBOWAR" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#B19EEF] selection:text-white">
      <LeftSidebar activeSection={-1} /> {/* -1 or a specific ID for About Us if we add it to sidebar */}

      {/* Grid Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #444 1px, transparent 1px),
            linear-gradient(to bottom, #444 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 px-6 pt-24 pb-12 md:pl-[120px] md:pr-8 md:py-20 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 whitespace-nowrap font-bankgothic">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#FF9FFC] to-[#9333EA]">NIMBUS</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 w-full leading-relaxed font-light mb-8">
            The Annual Technical Festival of <span className="text-white font-bold">NIT Hamirpur</span>.
            Where innovation meets reality, and technology shapes the future.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            className="h-1 bg-[#B19EEF]"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white font-bankgothic">
              OUR VISION
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Nimbus acts as a platform for the technical minds of the nation to showcase their skills and knowledge.
              It is an amalgamation of technology and fun, where students from all over the country come together to
              celebrate the spirit of engineering and innovation.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed text-justify mb-10">
              With a legacy of over a decade, Nimbus has evolved into one of the premier technical festivals in North India,
              hosting a plethora of events, workshops, and guest lectures from industry leaders.
            </p>

            {/* Added Image */}
            {/* Added Image with Block Reveal */}
            <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-black">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].title}
                    fill
                    priority
                    className="object-cover"
                  />
                  {/* Text Layer - Improved Wipe Animation */}
                  <motion.div
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 }}
                    animate={{ clipPath: "polygon(0 0, 110% 0, 100% 100%, -10% 100%)", opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8, ease: "circOut" }}
                    className="absolute bottom-10 left-8 z-40"
                  >
                    <div className="relative overflow-hidden">
                      <h3 className="relative z-10 text-2xl md:text-6xl font-bold text-white font-bankgothic drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] tracking-widest pl-6 pr-8 py-4 border-l-8 border-[#B19EEF] bg-black/80 backdrop-blur-md rounded-r-2xl">
                        {images[currentImageIndex].title}
                      </h3>
                      {/* Shine effect */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ delay: 2.4, duration: 0.6, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Grid Overlay on Image (Persistent) */}
              <div
                className="absolute inset-0 z-20 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />

              {/* Reveal Blocks Animation (Optimized using CSS) */}
              <div
                key={`blocks-${currentImageIndex}`}
                className="absolute inset-0 z-30 flex flex-wrap content-start"
                style={{ width: '100%', height: '100%' }}
              >
                {Array.from({ length: 128 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-black border-[0.5px] border-[#222] relative animate-block-reveal"
                    style={{
                      width: '50px',
                      height: '50px',
                      boxSizing: 'border-box',
                      animationDelay: `${Math.random() * 1.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
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
              <h4 className="text-3xl md:text-6xl font-bold text-white mb-2 font-bankgothic">{stat.value}</h4>
              <p className="text-[#B19EEF] text-sm md:text-base tracking-widest uppercase">{stat.label}</p>
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
          <h2 className="text-2xl md:text-5xl font-bold mb-8 font-bankgothic">
            BE PART OF THE <span className="text-[#B19EEF]">FUTURE</span>
          </h2>
          <button className="px-8 py-4 bg-transparent border border-[#B19EEF] text-white hover:bg-[#B19EEF] transition-all duration-300 rounded-full tracking-widest font-bold">
            REGISTER NOW
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutUs;
