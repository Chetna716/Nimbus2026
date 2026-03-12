'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DroneSoccerPage() {
  return (
    <main className="min-h-screen bg-[#020205] text-white relative selection:bg-[#FF9FFC]/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,159,252,0.08)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(177,158,239,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(-45deg, #000 25%, #112 25%, #112 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative w-full p-6 z-50 flex justify-between items-center bg-transparent">
        <Link href="/#drone" className="group flex items-center gap-3 text-white/70 hover:text-[#FF9FFC] transition-colors">
          <div className="p-2 border border-white/20 group-hover:border-[#FF9FFC]/50 rounded-full bg-black/50 backdrop-blur-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </div>
          <span className="font-bankgothic text-sm tracking-widest uppercase mt-1">Return</span>
        </Link>
        <div className="font-bankgothic text-[#FF9FFC] tracking-[0.3em] text-sm hidden sm:block">AERIAL EVENT // 02</div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-20 pb-20 px-6 lg:px-12 z-10 flex flex-col items-center justify-center min-h-[50vh] border-b border-[#FF9FFC]/20">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-[#FF9FFC]/40 bg-[#FF9FFC]/10 text-[#FF9FFC] font-mono text-xs tracking-[0.2em] uppercase">
            Aerial Supremacy
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase font-bankgothic text-white leading-none mb-6 drop-shadow-[0_0_50px_rgba(255,159,252,0.3)]">
            DRONE<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9FFC] to-[#5227FF]">SOCCER</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Take flight in the ultimate test of speed and agility. Navigate through impossible cyber-obstacles and claim the skies.
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
                <span className="w-8 h-[2px] bg-[#FF9FFC]"></span>
                MISSION BRIEFING
              </h2>
              <div className="prose prose-invert prose-lg text-white/70 font-light max-w-none">
                <p className="mb-4">Drone soccer blends high-speed First-Person View (FPV) racing with tactical team-based gameplay. Teams pilot quadcopters wrapped in protective cages, aiming to fly through the opponent's suspended goal hoop.</p>
                <p>Expect collisions, high-speed maneuvers, and intense defensive formations. Precision, reflexes, and raw velocity will determine the champion.</p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#FF9FFC]"></span>
                PARAMETERS
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Drone Specs", desc: "Max 40cm Cage Diameter, standard FPV equipment" },
                  { title: "Arena Specs", desc: "10x20m enclosed safety netting with 3m high suspended goals" },
                  { title: "Team Size", desc: "3 Pilots (1 Striker, 2 Defenders) and 2 Mechanics" },
                  { title: "Format", desc: "3 sets of 3-minute intensely paced aerial combat" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-6 hover:border-[#FF9FFC]/30 transition-colors group">
                    <h3 className="text-[#FF9FFC] font-mono text-sm tracking-widest uppercase mb-2 group-hover:text-[#5227FF] transition-colors">{item.title}</h3>
                    <p className="text-white/80 font-bankgothic tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Registration/Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="bg-gradient-to-br from-[#FF9FFC]/10 to-transparent border border-[#FF9FFC]/30 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9FFC]/20 blur-[50px] rounded-full group-hover:bg-[#5227FF]/30 transition-colors duration-500"></div>
              
              <h3 className="text-white font-bankgothic text-2xl mb-6">EVENT STATUS</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Prize Pool</div>
                  <div className="text-3xl font-bankgothic text-white drop-shadow-[0_0_15px_rgba(255,159,252,0.5)]">₹80,000</div>
                </div>
                <div>
                  <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Schedule</div>
                  <div className="text-xl font-bankgothic text-white">Day 1</div>
                </div>
                <div>
                  <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Venue</div>
                  <div className="text-xl font-bankgothic text-white">Neon Circuit</div>
                </div>
              </div>

              <button className="w-full py-4 bg-[#FF9FFC] hover:bg-[#5227FF] hover:text-white text-black font-bankgothic font-bold tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,159,252,0.4)]">
                DEPLOY NOW
              </button>
            </div>

            <div className="relative w-full aspect-video md:aspect-square border border-[#FF9FFC]/20 overflow-hidden group">
                <Image src="/events/drone_event.png" alt="Drone Soccer Thumbnail" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
