'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DroneSoccerPage() {
  return (
    <main className="min-h-screen bg-[#020205] text-white relative selection:bg-[#FF9FFC]/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,159,252,0.08)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(177,158,239,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(-45deg, #000 25%, #112 25%, #112 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      </div>

      <nav className="relative w-full p-6 z-50 flex justify-between items-center bg-transparent">
        <Link href="/#drone" className="group flex items-center gap-3 text-white/70 hover:text-[#FF9FFC] transition-colors">
          <div className="p-2 border border-white/20 group-hover:border-[#FF9FFC]/50 rounded-full bg-black/50 backdrop-blur-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </div>
          <span className="font-bankgothic text-sm tracking-widest uppercase mt-1">Return</span>
        </Link>
        <div className="font-bankgothic text-[#FF9FFC] tracking-[0.3em] text-sm hidden sm:block">AERIAL EVENT // 02</div>
      </nav>

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
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase font-bankgothic text-white leading-tight mb-6 drop-shadow-[0_0_50px_rgba(255,159,252,0.3)]">
            DRONE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9FFC] to-[#5227FF]">SOCCER</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Take flight in the ultimate test of speed and agility. Navigate through impossible cyber-obstacles and claim the skies.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Mechanical Engineer', 'Robotics Engineer', 'Electronics Engineer'].map((tag, i) => (
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
                <span className="w-8 h-[2px] bg-[#FF9FFC]"></span>
                MISSION BRIEFING
              </h2>
              <div className="prose prose-invert prose-lg text-white/70 font-light max-w-none">
                <p className="mb-4">Drone Soccer is a high-speed, tactical sport where two teams of five pilots fly radio-controlled drones enclosed in protective exoskeletons. The objective is to fly your designated "Striker" drone through the opponent's circular goal elevated in the air, while the remaining drones act as "Blockers" to defend or clear paths.</p>
                <div className="grid grid-cols-1 gap-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#FF9FFC] mt-3 flex-shrink-0"></div>
                    <p className="text-sm"><b>The Challenge:</b> It tests pilot reflexes, mid-air stability, and strategic teamwork.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#FF9FFC] mt-3 flex-shrink-0"></div>
                    <p className="text-sm"><b>The Engineering:</b> Teams must manage battery discharge rates, aerodynamic drag from the protective cages, and rapid-response repairs during "Pit Stops".</p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
            <div className="bg-gradient-to-br from-[#FF9FFC]/10 to-transparent border border-[#FF9FFC]/30 p-6 lg:p-8 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9FFC]/20 blur-[50px] rounded-full group-hover:bg-[#5227FF]/30 transition-colors duration-500"></div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-white font-bankgothic text-xl lg:text-2xl mb-6 lg:mb-8">EVENT STATUS</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                  <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-[#FF9FFC]/20 pb-4 lg:pb-6">
                    <div>
                      <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Prize Pool</div>
                      <div className="text-2xl lg:text-3xl font-bankgothic text-white drop-shadow-[0_0_15px_rgba(255,159,252,0.5)]">₹50,000</div>
                      <div className="text-[#FF9FFC] font-mono text-[10px] mt-2 uppercase tracking-tight">+ Certificates for all participants</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Reg. Deadline</div>
                    <div className="text-lg lg:text-xl font-bankgothic text-white uppercase mt-1">April 07, 2026</div>
                  </div>
                  <div>
                    <div className="text-white/40 font-mono text-xs tracking-widest uppercase mb-1">Event Dates</div>
                    <div className="text-lg lg:text-xl font-bankgothic text-white uppercase mt-1">April 10-12</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="https://unstop.com/competitions/drone-soccer-nimbus-annual-technical-festival-of-nit-hamirpur-nit-hamirpur-1656018" target="_blank" className="block w-full">
                    <button className="w-full py-3 lg:py-4 bg-[#FF9FFC] hover:bg-[#5227FF] hover:text-white text-black font-bankgothic font-bold tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,159,252,0.4)] relative z-10">
                      DEPLOY NOW
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
              <span className="w-8 h-[2px] bg-[#FF9FFC]"></span>
              GUIDELINES
            </h2>
            <ul className="space-y-4">
              {[
                "Drones will be provided by us, Teams must use only those drones which are provided by the organiser.",
                "Every drone must have a rigid protective exoskeleton securely mounted to withstand high-speed collisions without breaking.",
                "Drones must include an automatic kill switch or motor-stop system that activates immediately if the radio signal is lost.",
                "Striker drones must use a distinct LED color (e.g., red) to differentiate them from Blocker drones (e.g., blue/green).",
                "Includes scrutiny checks, a 90-second qualifying skill challenge through gates, and the main match with two 3-minute halves and a 2-minute pit stop break.",
                "Only the Striker drone is allowed to score by passing through the goal hoop; if a Blocker enters the hoop, the opposing team receives a free kick.",
                "Pilots and spectators must remain outside the netted arena, and excessive ramming or attacking a grounded drone (Dirty Flying) will result in penalties."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 group">
                  <span className="text-[#FF9FFC] font-mono text-xs mt-1">[{i + 1}]</span>
                  <span className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[#FF9FFC]"></span>
              DRONE DETAILS
            </h2>
            <div className="bg-white/[0.02] border border-white/5 p-6 space-y-6">
              <div>
                <h4 className="text-[#FF9FFC] font-mono text-xs tracking-widest uppercase mb-3">Class A (Pro)</h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  Spherical size between 20 cm and 40 cm. Must use a 4S - 6S Li-Po battery. Exoskeleton made of carbon fiber or polycarbonate. Uses 2.4 GHz radio and 5.8 GHz video transmission.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <h4 className="text-[#FF9FFC] font-mono text-xs tracking-widest uppercase mb-3">Class B (Student-Built)</h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  Spherical size between 20 cm and 30 cm. Must use a 3S - 4S Li-Po battery. Exoskeleton made of 3D-printed material or high-impact plastic. Operates on 2.4 GHz digital standard.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-bankgothic text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[#FF9FFC]"></span>
            PARAMETERS
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Team Size", desc: "3 - 5 Members per team" },
              { title: "Arena", desc: "10m x 5m x 5m Netted Arena, 2m high goal hoops" },
              { title: "Identification", desc: "Striker (Red) | Blockers (Blue/Green)" },
              { title: "Tournament", desc: "Scrutiny > Skill Challenge > Arena Chaos" },
              { title: "Power Supply", desc: "220V with UPS for scoring and FPV systems" },
              { title: "Location", desc: "NIT Hamirpur Campus" }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-6 hover:border-[#FF9FFC]/30 transition-colors group">
                <h3 className="text-[#FF9FFC] font-mono text-sm tracking-widest uppercase mb-2 group-hover:text-[#5227FF] transition-colors">{item.title}</h3>
                <p className="text-white/80 font-bankgothic tracking-wider text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
