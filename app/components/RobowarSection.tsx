'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const RobowarSection = () => {
    return (
        <section className="w-full min-h-screen bg-black text-white relative flex items-center justify-center overflow-hidden py-20">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10 w-full h-full">
                {/* Image Side */}
                <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-[#5227FF] transform translate-x-4 translate-y-4 z-0"></div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full h-full z-10 bg-gray-900 overflow-hidden"
                    >
                        <Image
                            src="/rcrace/rcrace.jpeg"
                            alt="Robowar"
                            fill
                            className="object-cover"
                        />
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5227FF]/10 to-transparent bg-[length:100%_4px] pointer-events-none" />
                    </motion.div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left pl-0 md:pl-10 h-full justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-1 h-6 bg-[#5227FF]" />
                            <span className="text-[#5227FF] font-mono text-xs tracking-[0.3em]">CHAMPIONSHIP</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase font-bankgothic">
                            ROBOWARS
                        </h2>

                        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                            Experience the ultimate battle of metal and circuits. Build, fight, and survive in the arena where only the strongest machines prevail. Gear up for non-stop action and tactical combat!
                        </p>

                        <button className="relative px-8 py-3 bg-transparent border-2 border-[#5227FF] text-[#5227FF] font-bankgothic tracking-wider overflow-hidden transition-all duration-300 hover:text-white group">
                            <span className="relative z-10">REGISTER NOW</span>
                            <div className="absolute inset-0 bg-[#5227FF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default RobowarSection;
