'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function RobowarPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white relative selection:bg-[#B19EEF]/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(177,158,239,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,159,252,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #222 25%, #222 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      </div>

      <nav className="relative w-full p-6 z-50 flex justify-between items-center bg-transparent">
        <Link href="/#robowar" className="group flex items-center gap-3 text-white/70 hover:text-[#B19EEF] transition-colors">
          <div className="p-2 border border-white/20 group-hover:border-[#B19EEF]/50 rounded-full bg-black/50 backdrop-blur-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </div>
          <span className="font-bankgothic text-sm tracking-widest uppercase mt-1">Return</span>
        </Link>
        <div className="font-bankgothic text-[#B19EEF] tracking-[0.3em] text-sm hidden sm:block">MAIN EVENT // 01</div>
      </nav>

      <header className="relative pt-20 pb-20 px-6 lg:px-12 z-10 flex flex-col items-center justify-center min-h-[50vh] border-b border-[#B19EEF]/20">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-[#B19EEF]/40 bg-[#B19EEF]/10 text-[#B19EEF] font-mono text-xs tracking-[0.2em] uppercase">
            Engineering Combat
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase font-bankgothic text-white leading-tight mb-6 drop-shadow-[0_0_50px_rgba(177,158,239,0.3)]">
            ROBO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B19EEF] to-[#FF9FFC]">WARS</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            The ultimate test of mechanical endurance and raw power. Build, fight, and survive the arena.
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          
          <div className="flex flex-col justify-center">
            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bankgothic text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#B19EEF]"></span>
                MISSION BRIEFING
              </h2>
              <div className="prose prose-invert prose-lg text-white/70 font-light max-w-none">
                <p className="mb-4">Welcome to the most destructive competition in Nimbus 2026. Teams will construct remote-controlled combat robots designed to disable, destroy, and outmaneuver their opponents in a reinforced arena.</p>
                <p className="mb-4">This year, engineering brilliance meets raw power as we host the ultimate combat robotics championship. Strategy, durability, and piloting skills will be pushed to the absolute limit.</p>
                <p>Open to all Engineering students (UG/PG). Teams must consist of 1-6 members.</p>
              </div>
            </motion.section>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
            <div className="bg-gradient-to-br from-[#B19EEF]/10 to-transparent border border-[#B19EEF]/30 p-6 lg:p-8 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B19EEF]/20 blur-[50px] rounded-full group-hover:bg-[#FF9FFC]/30 transition-colors duration-500"></div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-white font-bankgothic text-xl lg:text-2xl mb-6 lg:mb-8">EVENT STATUS</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                  <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-[#B19EEF]/20 pb-4 lg:pb-6">
                    <div>
                      <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Prize Pool</div>
                      <div className="text-2xl lg:text-3xl font-bankgothic text-white drop-shadow-[0_0_15px_rgba(177,158,239,0.5)]">₹1,00,000</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Deadlines</div>
                    <div className="text-lg lg:text-xl font-bankgothic text-white uppercase mt-1">15kg: April 01<br/>8kg: April 06</div>
                  </div>
                  <div>
                    <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Venue & Dates</div>
                    <div className="text-lg lg:text-xl font-bankgothic text-white uppercase mt-1">NIT Hamirpur<br/>April 10-12, 2026</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full py-3 lg:py-4 bg-[#B19EEF] hover:bg-[#FF9FFC] hover:text-black text-black font-bankgothic font-bold tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(177,158,239,0.4)] relative z-10">
                    JOIN BATTLE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[#B19EEF]"></span>
            PARAMETERS
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Weight Classes", desc: "8 KG & 15 KG (0% weight tolerance)" },
              { title: "Format", desc: "Round 1: Online Abstract | Round 2: Offline Combat" },
              { title: "Ready Time", desc: "Robots combat-ready within 15 min of call" },
              { title: "Immobility Rule", desc: "Disqualification if immobile > 15 seconds" },
              { title: "Team Size", desc: "1 - 6 members per team" },
              { title: "Repairs", desc: "Repairs only with prior organizer approval" }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-6 hover:border-[#B19EEF]/30 transition-colors group">
                <h3 className="text-[#B19EEF] font-mono text-sm tracking-widest uppercase mb-2 group-hover:text-[#FF9FFC] transition-colors">{item.title}</h3>
                <p className="text-white/80 font-bankgothic tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
