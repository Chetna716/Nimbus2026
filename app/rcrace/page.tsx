'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RcRacePage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white relative selection:bg-[#FFEB3B]/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(177,158,239,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,159,252,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #222 25%, #222 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      </div>

      <nav className="relative w-full p-6 z-50 flex justify-between items-center bg-transparent">
        <Link href="/#rcrace" className="group flex items-center gap-3 text-white/70 hover:text-[#B19EEF] transition-colors">
          <div className="p-2 border border-white/20 group-hover:border-[#B19EEF]/50 rounded-full bg-black/50 backdrop-blur-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </div>
          <span className="font-bankgothic text-sm tracking-widest uppercase mt-1">Return</span>
        </Link>
        <div className="font-bankgothic text-[#B19EEF] tracking-[0.3em] text-sm hidden sm:block">SPEED TRACK // 03</div>
      </nav>

      <header className="relative pt-20 pb-20 px-6 lg:px-12 z-10 flex flex-col items-center justify-center min-h-[50vh] border-b border-[#FFEB3B]/20">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-[#B19EEF]/40 bg-[#B19EEF]/10 text-[#B19EEF] font-mono text-xs tracking-[0.2em] uppercase">
            High Velocity
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase font-bankgothic text-white leading-tight mb-6 drop-shadow-[0_0_50px_rgba(177,158,239,0.3)]">
            RC<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B19EEF] to-[#FF9FFC]">RACE</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Push the limits of velocity on our custom-built circuit. Tune your machines, master the drifts, and leave your opponents in the dust.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Games & Sports', 'Quizzes & Treasure Hunt', 'Engineering Excellence'].map((tag, i) => (
              <span key={i} className="px-3 py-1 border border-white/10 bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
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
                <p className="mb-4">NIMBUS 2026 proudly presents RC Car Race, a high-intensity technical competition that celebrates innovation, engineering excellence, and competitive racing. The event brings together enthusiastic teams to showcase their ability to design and control high-performance remote-controlled vehicles in a demanding racing environment.</p>
                <p className="text-sm">Participants will compete on a challenging track designed with obstacles, sharp turns, and off-road elements that test both the mechanical efficiency of the vehicle and the precision of the driver. The competition emphasizes not only speed but also control, stability, and strategic maneuvering.</p>
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
                      <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Total Prize Pool</div>
                      <div className="text-2xl lg:text-3xl font-bankgothic text-white drop-shadow-[0_0_15px_rgba(177,158,239,0.5)]">₹1,20,000</div>
                      <div className="text-[#B19EEF] font-mono text-[10px] mt-2 uppercase tracking-tight">Nitro: ₹60K | Electric: ₹60K</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Reg. Deadline</div>
                    <div className="text-lg lg:text-xl font-bankgothic text-white uppercase mt-1">April 06, 2026</div>
                  </div>
                  <div>
                    <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Event Dates</div>
                    <div className="text-lg lg:text-xl font-bankgothic text-white uppercase mt-1">April 10-12</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="https://unstop.com/competitions/rc-car-race-nimbus-annual-technical-festival-of-nit-hamirpur-nit-hamirpur-1655770" target="_blank" className="block w-full">
                    <button className="w-full py-3 lg:py-4 bg-[#B19EEF] hover:bg-[#FF9FFC] hover:text-black text-black font-bankgothic font-bold tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(177,158,239,0.4)]">
                      START ENGINES
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#B19EEF]"></span>
              GUIDELINES
            </h2>
            <ul className="space-y-4">
              {[
                "Only 1:8 scale off-road RC buggies are allowed with a mixed off-road surface track.",
                "Vehicles must remain stationary until the official start signal; an early start allows one restart, but a second violation leads to disqualification.",
                "Vehicles can compete in two power categories: Nitro (IC engine up to 4.6 cc) and Electric (DC or BLDC motor).",
                "Wireless remote control with a maximum frequency of 2.4 GHz must be used to operate all vehicles.",
                "The vehicle must fit within 800 mm x 600 mm x 500 mm and include a functional braking system.",
                "The race will include qualifying heats (5-10 participants each), and top performers advance to the final round.",
                "Safety and fair play are mandatory; reckless driving, intentional collisions, or signal jamming may result in disqualification."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 group">
                  <span className="text-[#B19EEF] font-mono text-xs mt-1">[{i + 1}]</span>
                  <span className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#B19EEF]"></span>
              PRIZES & REWARDS
            </h2>
            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/5 p-6">
                <h4 className="text-[#B19EEF] font-mono text-xs tracking-widest uppercase mb-4">Nitro Category (₹60,000)</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between"><span className="text-white/60">1st Prize:</span> <span className="text-white">₹25,000 Cash + ₹5,000 Vouchers</span></p>
                  <p className="flex justify-between"><span className="text-white/60">2nd Prize:</span> <span className="text-white">₹15,000 Cash + ₹15,000 Vouchers</span></p>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6">
                <h4 className="text-[#FF9FFC] font-mono text-xs tracking-widest uppercase mb-4">Electric Category (₹60,000)</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between"><span className="text-white/60">1st Prize:</span> <span className="text-white">₹20,000 Cash + ₹5,000 Vouchers</span></p>
                  <p className="flex justify-between"><span className="text-white/60">2nd Prize:</span> <span className="text-white">₹15,000 Cash + ₹5,000 Vouchers</span></p>
                  <p className="flex justify-between"><span className="text-white/60">3rd Prize:</span> <span className="text-white">₹5,000 Cash + ₹10,000 Vouchers</span></p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#B19EEF]"></span>
              PARAMETERS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Vehicle Scale", desc: "1:8 Scale Off-Road Buggies Only" },
                { title: "Max Dimensions", desc: "800mm x 600mm x 500mm" },
                { title: "Team Size", desc: "1 - 5 Members per team" },
                { title: "Location", desc: "NIT Hamirpur Campus" }
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-6 hover:border-[#B19EEF]/30 transition-colors group">
                  <h3 className="text-[#B19EEF] font-mono text-sm tracking-widest uppercase mb-2 group-hover:text-[#FF9FFC] transition-colors">{item.title}</h3>
                  <p className="text-white/80 font-bankgothic tracking-wider text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#B19EEF]"></span>
              CONTACT ORGANIZER
            </h2>
            <div className="bg-white/[0.02] border border-white/5 p-6 flex items-center gap-6">
              <div className="w-16 h-16 bg-[#B19EEF]/20 flex items-center justify-center font-bankgothic text-2xl text-[#B19EEF] border border-[#B19EEF]/30">
                UJ
              </div>
              <div>
                <h4 className="text-white font-bankgothic text-lg">Ujjawal Maheshwari</h4>
                <p className="text-[#B19EEF] text-sm">festnimbus@nith.ac.in</p>
                <p className="text-white/60 text-sm font-mono mt-1">+91 9462821732</p>
              </div>
            </div>
          </motion.section>
        </div>

      </div>
    </main>
  );
}
