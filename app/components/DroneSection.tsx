'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const DroneSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Background marquee effect moving in opposite direction
    const marqueeX = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

    return (
        <section ref={containerRef} className="w-full min-h-screen bg-black text-white relative flex items-center justify-center py-16 md:py-24 z-10 overflow-hidden">
            {/* Cyberpunk/Sky Atmosphere */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,159,252,0.08)_0%,transparent_60%),radial-gradient(circle_at_20%_80%,rgba(177,158,239,0.05)_0%,transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(-45deg, #000 25%, #112 25%, #112 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
                
                {/* Section Blending Fades */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
            </div>

            {/* Giant Background Text */}
            <motion.div
                style={{ x: isMobile ? 0 : marqueeX }}
                className="absolute top-1/4 right-0 w-[200%] pointer-events-none z-0 select-none flex justify-end"
            >
                <h1 className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[18rem] xl:text-[24rem] font-bankgothic font-black text-transparent whitespace-nowrap opacity-10"
                    style={{ WebkitTextStroke: '2px rgba(255, 159, 252, 0.3)' }}>
                    DRONE SOCCER DRONE SOCCER
                </h1>
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Content / Typography Side */}
                    <div className="lg:col-span-6 flex flex-col justify-center relative z-20 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-xl lg:max-w-lg xl:max-w-xl lg:ml-auto"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[2px] w-12 bg-[#FF9FFC]"></span>
                                <span className="text-[#FF9FFC] font-mono tracking-[0.3em] text-sm md:text-base uppercase font-bold">Aerial Combat</span>
                            </div>

                            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase font-bankgothic text-white leading-none mb-4 drop-shadow-[0_0_30px_rgba(255,159,252,0.2)]">
                                DRONE<br />SOCCER
                            </h2>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bankgothic text-white/50 mb-8 uppercase tracking-widest">
                                Sky <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9FFC] to-[#5227FF]">Supremacy</span>
                            </h3>

                            <div className="w-full h-[1px] bg-gradient-to-r from-[#5227FF]/50 to-transparent mb-8"></div>

                            <p className="hidden md:block text-gray-400 text-base md:text-xl leading-relaxed mb-10 font-light max-w-xl">
                                Take flight in the ultimate test of speed and agility. Navigate through impossible cyber-obstacles, outmaneuver your opponents, and claim the skies. Precision, reflexes, and raw velocity will determine the champion.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mb-10 max-w-xl">
                                <div className="border-l-2 border-[#FF9FFC]/50 pl-4 py-1">
                                    <span className="block text-white/40 font-mono text-xs tracking-widest mb-1 uppercase">Drone Specs</span>
                                    <span className="block text-white font-bankgothic tracking-wider text-base sm:text-lg md:text-xl">FPV / 5-INCH</span>
                                </div>
                                <div className="border-l-2 border-[#5227FF]/50 pl-4 py-1">
                                    <span className="block text-white/40 font-mono text-xs tracking-widest mb-1 uppercase">Track</span>
                                    <span className="block text-white font-bankgothic tracking-wider text-base sm:text-lg md:text-xl">NEON CIRCUIT</span>
                                </div>
                            </div>

                            <Link href="/dronesoccer" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-12 py-5 bg-transparent border border-[#FF9FFC]/50 text-white font-bankgothic tracking-[0.2em] uppercase overflow-hidden transition-all hover:border-[#FF9FFC] shadow-[0_0_20px_rgba(255,159,252,0.1)] hover:shadow-[0_0_40px_rgba(255,159,252,0.3)]">
                                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#FF9FFC] to-[#5227FF] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
                                <span className="relative z-10 font-bold">Deploy Now</span>
                                <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Visual / Image Side */}
                    <div className="lg:col-span-6 relative group order-1 lg:order-2">
                        <motion.div
                            style={{ y: isMobile ? 0 : y, opacity: isMobile ? 1 : opacity }}
                            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] z-10"
                        >
                            {/* Decorative frame elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#FF9FFC]/50 z-20 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#5227FF]/50 z-20 group-hover:scale-110 group-hover:translate-y-1 group-hover:-translate-x-1 transition-transform duration-500"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full overflow-hidden bg-black border border-white/5 shadow-[0_0_50px_rgba(255,159,252,0.15)] filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 transform-gpu translate-z-0">
                                <Image
                                    src="/drone.jpg"
                                    alt="Drone Arena"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu translate-z-0"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-[#5227FF]/20" />

                                {/* Glitch/Scanline overlay lines */}


                                {/* Inner glow */}
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                            </div>

                            {/* Floating Stats Badges */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-4 left-4 md:bottom-10 md:-left-12 z-30 bg-black/95 border border-[#FF9FFC]/30 p-3 md:p-4 shadow-[0_0_30px_rgba(255,159,252,0.2)] skew-x-[10deg]"
                            >
                                <div className="skew-x-[-10deg]">
                                    <p className="text-[#FF9FFC] font-mono text-[9px] md:text-[10px] tracking-widest uppercase mb-1">Prize Pool</p>
                                    <p className="text-xl md:text-3xl font-bankgothic text-white drop-shadow-[0_0_10px_rgba(255,159,252,0.8)]">₹50,000</p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DroneSection;
