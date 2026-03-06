'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const RobowarSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Background marquee effect
    const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section ref={containerRef} className="w-full min-h-screen bg-[#020202] text-white relative flex items-center justify-center py-16 md:py-24 z-10 overflow-hidden border-t border-b border-[#B19EEF]/30">
            {/* Dark/Fiery Atmosphere */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(177,158,239,0.08)_0%,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,159,252,0.05)_0%,transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #222 25%, #222 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
            </div>

            {/* Giant Background Text */}
            <motion.div
                style={{ x: marqueeX }}
                className="absolute top-1/4 left-0 w-[200%] pointer-events-none z-0 select-none flex"
            >
                <h1 className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[18rem] xl:text-[24rem] font-bankgothic font-black text-transparent whitespace-nowrap opacity-10"
                    style={{ WebkitTextStroke: '2px rgba(177, 158, 239, 0.3)' }}>
                    ROBOWARS ROBOWARS ROBOWARS
                </h1>
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20 -mt-16 sm:mt-0 lg:-mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Visual / Image Side */}
                    <div className="lg:col-span-6 relative group">
                        <motion.div
                            style={{ y, opacity }}
                            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] z-10"
                        >
                            {/* Decorative frame elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#B19EEF]/50 z-20 group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-500"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#FF9FFC]/50 z-20 group-hover:scale-110 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-500"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full overflow-hidden bg-black border border-white/5 shadow-[0_0_50px_rgba(177,158,239,0.15)] filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/rcrace/rcrace.jpeg"
                                    alt="Robowar Arena"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu translate-z-0"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-[#B19EEF]/20" />

                                {/* Glitch overlay lines */}


                                {/* Inner glow */}
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                            </div>

                            {/* Floating Stats Badges */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute top-4 right-4 md:top-10 md:-right-12 z-30 bg-black/80 backdrop-blur-md border border-[#B19EEF]/30 p-3 md:p-4 shadow-[0_0_30px_rgba(177,158,239,0.2)] skew-x-[-10deg]"
                            >
                                <div className="skew-x-[10deg]">
                                    <p className="text-[#B19EEF] font-mono text-[9px] md:text-[10px] tracking-widest uppercase mb-1">Prize Pool</p>
                                    <p className="text-xl md:text-3xl font-bankgothic text-white drop-shadow-[0_0_10px_rgba(177,158,239,0.8)]">₹1,00,000</p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                    {/* Content / Typography Side */}
                    <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[2px] w-12 bg-[#B19EEF]"></span>
                                <span className="text-[#B19EEF] font-mono tracking-[0.3em] text-sm md:text-base uppercase font-bold">Main Event</span>
                            </div>

                            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase font-bankgothic text-white leading-none mb-4 drop-shadow-[0_0_30px_rgba(177,158,239,0.2)]">
                                ROBO<br />WARS
                            </h2>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bankgothic text-white/50 mb-8 uppercase tracking-widest">
                                Metal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B19EEF] to-[#FF9FFC]">Vs</span> Metal
                            </h3>

                            <div className="w-full h-[1px] bg-gradient-to-r from-[#B19EEF]/50 to-transparent mb-8"></div>

                            <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-10 font-light max-w-xl">
                                Experience the ultimate battle of engineering and strategy. Build your fighting machine, enter the arena, and survive the chaos. The crowd roars as circuits spark and metal folds. Only the strongest bots prevail.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mb-10 max-w-xl">
                                <div className="border-l-2 border-[#B19EEF]/50 pl-4 py-1">
                                    <span className="block text-white/40 font-mono text-xs tracking-widest mb-1 uppercase">Weight Classes</span>
                                    <span className="block text-white font-bankgothic tracking-wider text-base sm:text-lg md:text-xl">15KG & 60KG</span>
                                </div>
                                <div className="border-l-2 border-[#FF9FFC]/50 pl-4 py-1">
                                    <span className="block text-white/40 font-mono text-xs tracking-widest mb-1 uppercase">Arena</span>
                                    <span className="block text-white font-bankgothic tracking-wider text-base sm:text-lg md:text-xl">MAIN GROUNDS</span>
                                </div>
                            </div>

                            <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-12 py-5 bg-transparent border border-[#B19EEF]/50 text-white font-bankgothic tracking-[0.2em] uppercase overflow-hidden transition-all hover:border-[#B19EEF] shadow-[0_0_20px_rgba(177,158,239,0.1)] hover:shadow-[0_0_40px_rgba(177,158,239,0.3)]">
                                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#B19EEF] to-[#FF9FFC] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
                                <span className="relative z-10 font-bold">Initialize Combat</span>
                                <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RobowarSection;

