'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootSequence = [
    "INITIALIZING KERNEL...",
    "LOADING NEURAL INTERFACE...",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING ASSETS...",
    "OPTIMIZING RENDER ENGINE...",
    "SYNCING WITH CORE...",
    "ACCESS GRANTED."
];

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [bootLine, setBootLine] = useState(0);
    const [showContent, setShowContent] = useState(true);
    const [randomNumbers, setRandomNumbers] = useState<string[]>([]);

    // Helper to generate random hex
    const generateHex = () => Array(4).fill(0).map(() => Math.floor(Math.random() * 255).toString(16).toUpperCase().padStart(2, '0'));


    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNumbers(generateHex());
        }, 150);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Progress simulation
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + 0.8; // Slower, smoother
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setShowContent(false);
                        setTimeout(onLoadingComplete, 800);
                    }, 500);
                    return 100;
                }
                return next;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBootLine(prev => (prev + 1) % bootSequence.length);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {showContent && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-mono text-gray-300"
                >
                    {/* Background Grid - Subtle */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)'
                        }}
                    />

                    {/* --- TOP ELEMENTS --- */}
                    <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start text-[10px] tracking-widest uppercase opacity-70 z-20">
                        {/* Top Left: System ID */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[#B19EEF]">
                                <span className="w-2 h-2 bg-[#B19EEF] rounded-full animate-pulse" />
                                <span>SYSTEM_ONLINE</span>
                            </div>
                            <span className="text-gray-500">ID: NIMBUS-2026-X1</span>
                        </div>

                        {/* Top Right: Time & Latency */}
                        <div className="flex flex-col items-end gap-1 text-right">
                            <span>{new Date().toLocaleTimeString()}</span>
                            <span className="text-[#B19EEF]">LATENCY: 12ms</span>
                        </div>
                    </div>


                    {/* --- CENTRAL REACTOR --- */}
                    <div className="relative z-10 flex items-center justify-center">
                        {/* Main Rotating Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-white/5 border-t-white/40 border-b-white/40 relative"
                        >
                            {/* Orbiting Satellite */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full rotate-45">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-[#B19EEF] shadow-[0_0_15px_#B19EEF]" />
                            </div>
                        </motion.div>

                        {/* Inner Counter-Ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border border-white/5 border-l-white/30 border-r-white/30"
                        />

                        {/* Static Dashed Ring */}
                        <div className="absolute w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full border border-dashed border-white/10" />

                        {/* Center Display */}
                        <div className="absolute flex flex-col items-center justify-center bg-black/50 backdrop-blur-md rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px] border border-white/5">
                            <span className="text-3xl md:text-5xl font-bold font-bankgothic text-white tracking-tighter">
                                {Math.round(progress)}
                            </span>
                            <span className="text-[8px] md:text-[10px] tracking-[0.2em] text-[#B19EEF] mt-1">LOADING</span>
                        </div>
                    </div>


                    {/* --- BOTTOM ELEMENTS --- */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end text-[10px] tracking-wider z-20 font-mono">

                        {/* Bottom Left: Boot Log */}
                        <div className="flex flex-col gap-1 w-64">
                            <div className="h-[1px] w-full bg-white/10 mb-2" />
                            <div className="h-16 overflow-hidden relative opacity-70">
                                <div className="absolute bottom-0 left-0 flex flex-col justify-end">
                                    {bootSequence.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: i === bootLine ? 1 : 0.3, x: i === bootLine ? 0 : -5 }}
                                            className="whitespace-nowrap"
                                        >
                                            <span className="text-[#B19EEF] mr-2">{">"}</span>
                                            {log}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right: Data Stream - Hidden on Mobile */}
                        <div className="hidden md:flex flex-col items-end gap-2 text-right opacity-60">
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <span className="text-gray-600">MEM_ALLOC</span>
                                    <span className="text-white">4096 MB</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-600">CPU_LOAD</span>
                                    <span className="text-white">12%</span>
                                </div>
                            </div>
                            <div className="flex gap-2 text-[#B19EEF] mt-1">
                                {randomNumbers.map((hex, i) => (
                                    <span key={i}>0x{hex}</span>
                                ))}
                            </div>
                            <div className="h-[1px] w-32 bg-white/10 mt-1" />
                        </div>

                    </div>

                    {/* Progress Line (Full Width Bottom) - Optional if Center is enough, but user liked peripheral elements */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-[#B19EEF] shadow-[0_0_10px_#B19EEF]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                    />

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
