'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function RcRacePage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white relative selection:bg-[#FFEB3B]/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,235,59,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,159,252,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #222 25%, #222 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative w-full p-6 z-50 flex justify-between items-center bg-transparent">
        <Link href="/#rcrace" className="group flex items-center gap-3 text-white/70 hover:text-[#FFEB3B] transition-colors">
          <div className="p-2 border border-white/20 group-hover:border-[#FFEB3B]/50 rounded-full bg-black/50 backdrop-blur-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </div>
          <span className="font-bankgothic text-sm tracking-widest uppercase mt-1">Return</span>
        </Link>
        <div className="font-bankgothic text-[#FFEB3B] tracking-[0.3em] text-sm hidden sm:block">SPEED TRACK // 03</div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-20 pb-20 px-6 lg:px-12 z-10 flex flex-col items-center justify-center min-h-[50vh] border-b border-[#FFEB3B]/20">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-[#FFEB3B]/40 bg-[#FFEB3B]/10 text-[#FFEB3B] font-mono text-xs tracking-[0.2em] uppercase">
            High Velocity
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase font-bankgothic text-white leading-none mb-6 drop-shadow-[0_0_50px_rgba(255,235,59,0.3)]">
            RC<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFEB3B] to-[#FF9FFC]">RACE</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Push the limits of velocity on our custom-built circuit. Tune your machines, master the drifts, and leave your opponents in the dust.
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-16">
            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bankgothic text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#FFEB3B]"></span>
                MISSION BRIEFING
              </h2>
              <div className="prose prose-invert prose-lg text-white/70 font-light max-w-none">
                <p className="mb-4">Welcome to the Nimbu 2026 RC Race circuit. This is a fast-paced, high-adrenaline remote control car race combining technical driving skills with expert vehicle tuning.</p>
                <p>The track features a mixed surface of dirt and asphalt, tight hairpins, and elevation changes. Precision and speed are equally important if you want to take the checkered flag.</p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#FFEB3B]"></span>
                PARAMETERS
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Vehicle Specs", desc: "1/10 & 1/8 Scale Buggies/Truggies (Electric Only)" },
                  { title: "Track Specs", desc: "Mixed Dirt/Asphalt, 250m circuit with ramps" },
                  { title: "Regulations", desc: "Standard 2S/4S LiPo limits, stock chassis geometry" },
                  { title: "Format", desc: "Time Trials into Bracket Heats (5 laps per heat)" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-6 hover:border-[#FFEB3B]/30 transition-colors group">
                    <h3 className="text-[#FFEB3B] font-mono text-sm tracking-widest uppercase mb-2 group-hover:text-[#FF9FFC] transition-colors">{item.title}</h3>
                    <p className="text-white/80 font-bankgothic tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Registration/Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="bg-gradient-to-br from-[#FFEB3B]/10 to-transparent border border-[#FFEB3B]/30 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFEB3B]/20 blur-[50px] rounded-full group-hover:bg-[#FF9FFC]/30 transition-colors duration-500"></div>
              
              <h3 className="text-white font-bankgothic text-2xl mb-6">EVENT STATUS</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Prize Pool</div>
                  <div className="text-3xl font-bankgothic text-white drop-shadow-[0_0_15px_rgba(255,235,59,0.5)]">₹50,000</div>
                </div>
                <div>
                  <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Schedule</div>
                  <div className="text-xl font-bankgothic text-white">Day 2</div>
                </div>
                <div>
                  <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Venue</div>
                  <div className="text-xl font-bankgothic text-white">Outdoor Arena Track</div>
                </div>
              </div>

              <button className="w-full py-4 bg-[#FFEB3B] hover:bg-[#FF9FFC] hover:text-black text-black font-bankgothic font-bold tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,235,59,0.4)]">
                START ENGINES
              </button>
            </div>

            <div className="relative w-full aspect-video md:aspect-square border border-[#FFEB3B]/20 overflow-hidden group">
                <Image src="/rcrace/rcrace.jpeg" alt="RC Race Thumbnail" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
