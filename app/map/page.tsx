'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, X, MapPin } from 'lucide-react';

// --- Types ---
interface ZoneData {
    id: string;
    name: string;
    type: string;
    description: string;
    color: string;
    path: string; // SVG path for the zone shape
    icon?: React.ReactNode;
    cx: number; // Center X for label
    cy: number; // Center Y for label
}

// --- Data ---
const ZONES: ZoneData[] = [
    {
        id: "Z01",
        name: "OAT ARENA",
        type: "MAIN STAGE",
        description: "The Open Air Theatre (OAT) is the beating heart of Nimbus. Hosting flagship pro-shows, the inaugural ceremony, and high-octane performances.",
        color: "#B19EEF", // Electric Purple
        path: "M 200,400 L 350,380 L 400,450 L 320,520 L 180,480 Z",
        cx: 290,
        cy: 450
    },
    {
        id: "Z02",
        name: "TECH BLOCK",
        type: "WORKSHOPS",
        description: "Lecture Hall Complex (LHC). A hub for coding hackathons, workshops, and technical guest lectures. Air-conditioned and equipped with high-speed wifi.",
        color: "#FF9FFC", // Pink
        path: "M 500,100 L 700,100 L 700,250 L 600,250 L 600,300 L 500,300 Z",
        cx: 600,
        cy: 200
    },
    {
        id: "Z03",
        name: "ROBO DOME",
        type: "COMPETITION",
        description: "The dedicated Student Activity Centre (SAC) transformed into a battlefield for RoboWars and Drone Racing. High safety cages and spectator stands available.",
        color: "#FF2E63", // Neon Red
        path: "M 750,350 L 900,350 L 950,450 L 800,500 L 720,420 Z",
        cx: 830,
        cy: 420
    },
    {
        id: "Z04",
        name: "INNOVATION HALL",
        type: "EXHIBITIONS",
        description: "Department Buildings. Showcasing projects from various technical socities. Science fairs and prototype demonstrations happen here.",
        color: "#F9F871", // Yellow
        path: "M 100,150 L 300,150 L 320,250 L 120,250 Z",
        cx: 210,
        cy: 200
    },
    {
        id: "Z05",
        name: "LOUNGE CORE",
        type: "RECREATION",
        description: "Central Lawn & Food Court. Chill zones, food stalls, and informal events. The perfect place to network and relax.",
        color: "#FF9F1C", // Orange
        path: "M 450,400 L 550,400 L 550,500 L 450,500 Z",
        cx: 500,
        cy: 450
    }
];

const MapPage = () => {
    const [selectedZone, setSelectedZone] = useState<ZoneData | null>(null);
    const [hoveredZone, setHoveredZone] = useState<string | null>(null);
    const [scale, setScale] = useState(1);

    // Zoom handling (simple)
    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.8));

    return (
        <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-bankgothic selection:bg-[#B19EEF] selection:text-white">

            {/* --- GRID & AMBIENCE --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Moving Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(177, 158, 239, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(177, 158, 239, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        transform: 'perspective(500px) rotateX(20deg)',
                        transformOrigin: 'center 80%'
                    }}
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black/90" />
            </div>

            {/* --- HEADER UI --- */}
            <header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 pointer-events-none">
                <div className="pointer-events-auto">
                    <Link href="/" className="flex items-center gap-2 group opacity-70 hover:opacity-100 transition-opacity mb-4">
                        <ChevronLeft className="w-5 h-5 text-[#B19EEF]" />
                        <span className="text-sm font-mono tracking-widest">RETURN_HOME</span>
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                        NIMBUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B19EEF] to-[#FF9FFC]">MAP</span>
                    </h1>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p className="text-xs font-mono text-gray-400 tracking-[0.2em]">
                            LIVE TRACKING // NITH CAMPUS
                        </p>
                    </div>
                </div>
            </header>

            {/* --- COMING SOON OVERLAY --- */}
            <div className="absolute inset-0 z-[40] flex items-center justify-center pointer-events-none">
                <div className="bg-black/80 backdrop-blur-md border-y border-[#B19EEF] py-8 w-full text-center relative overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B19EEF]/20 to-transparent"
                    />
                    <h2 className="text-6xl md:text-9xl font-bold text-white font-bankgothic tracking-widest opacity-80 drop-shadow-[0_0_20px_rgba(177,158,239,0.8)]">
                        COMING SOON
                    </h2>
                    <p className="text-gray-400 font-mono tracking-[0.5em] mt-2 text-sm md:text-xl">
                        MAP CALIBRATION IN PROGRESS
                    </p>
                </div>
            </div>

            {/* --- MAIN MAP INTERFACE --- */}
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden cursor-move active:cursor-grabbing opacity-50 pointer-events-none grayscale">

                {/* Interactive SVG Map */}
                <motion.div
                    animate={{ scale: scale }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="relative w-[1000px] h-[600px] select-none"
                >
                    <svg
                        viewBox="0 0 1000 600"
                        className="w-full h-full drop-shadow-[0_0_20px_rgba(177,158,239,0.2)]"
                    >

                        {/* Connecting Lines (Decor) */}
                        <path d="M 300,200 L 500,100 L 800,200" fill="none" stroke="#ffffff10" strokeWidth="2" strokeDasharray="5 5" />
                        <path d="M 290,450 L 500,450 L 830,420" fill="none" stroke="#ffffff10" strokeWidth="2" strokeDasharray="5 5" />
                        <circle cx="500" cy="300" r="150" fill="none" stroke="#ffffff05" strokeWidth="1" />

                        {/* Zones */}
                        {ZONES.map((zone) => {
                            const isSelected = selectedZone?.id === zone.id;
                            const isHovered = hoveredZone === zone.id;

                            return (
                                <g
                                    key={zone.id}
                                    onClick={() => setSelectedZone(zone)}
                                    onMouseEnter={() => setHoveredZone(zone.id)}
                                    onMouseLeave={() => setHoveredZone(null)}
                                    className="cursor-pointer transition-all duration-300"
                                >
                                    {/* Shape */}
                                    <motion.path
                                        d={zone.path}
                                        fill={isSelected || isHovered ? `${zone.color}40` : "rgba(20,20,30,0.6)"}
                                        stroke={isSelected || isHovered ? zone.color : "rgba(255,255,255,0.2)"}
                                        strokeWidth={isSelected ? 4 : 2}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="transition-all duration-300 backdrop-blur-sm"
                                    />

                                    {/* Pin / Icon */}
                                    <foreignObject x={zone.cx - 20} y={zone.cy - 20} width="40" height="40" className="pointer-events-none">
                                        <div className={`w-full h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isSelected || isHovered ? 'scale-125' : 'scale-100'}`}>
                                            <div className="relative">
                                                <div className={`absolute inset-0 bg-[${zone.color}] blur-md opacity-50`} style={{ backgroundColor: zone.color }} />
                                                <MapPin className={`relative z-10 w-6 h-6 ${isSelected || isHovered ? 'text-white' : 'text-gray-400'}`} style={{ color: isSelected || isHovered ? zone.color : undefined }} />
                                            </div>
                                        </div>
                                    </foreignObject>

                                    {/* Label (Visible on Hover/Select) */}
                                    <AnimatePresence>
                                        {(isHovered || isSelected) && (
                                            <motion.foreignObject
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                x={zone.cx - 60}
                                                y={zone.cy + 25}
                                                width="120"
                                                height="40"
                                            >
                                                <div className="text-center">
                                                    <span className="text-[10px] font-mono font-bold bg-black/80 px-2 py-1 rounded border border-white/20 text-white backdrop-blur-md">
                                                        {zone.name}
                                                    </span>
                                                </div>
                                            </motion.foreignObject>
                                        )}
                                    </AnimatePresence>
                                </g>
                            );
                        })}
                    </svg>
                </motion.div>
            </div>

            {/* --- HUD CONTROLS --- */}
            <div className="absolute bottom-10 left-10 z-50 flex flex-col gap-2">
                <div className="text-xs font-mono text-gray-500 mb-2">ZOOM_LEVEL</div>
                <div className="flex gap-2">
                    <button onClick={handleZoomOut} className="w-10 h-10 border border-white/20 bg-black/40 hover:bg-white/10 text-white rounded flex items-center justify-center transition-colors">-</button>
                    <div className="w-10 h-10 border border-white/20 bg-black/40 text-white rounded flex items-center justify-center font-mono text-xs">
                        {Math.round(scale * 100)}%
                    </div>
                    <button onClick={handleZoomIn} className="w-10 h-10 border border-white/20 bg-black/40 hover:bg-white/10 text-white rounded flex items-center justify-center transition-colors">+</button>
                </div>
            </div>

            {/* --- SELECTED ZONE DETAIL PANEL --- */}
            <AnimatePresence>
                {selectedZone && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-black/90 border-l border-white/10 z-[60] backdrop-blur-xl p-8 md:p-12 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Panel Scanline */}
                        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('/scanline.png')] bg-[length:100%_4px]" />

                        {/* Close */}
                        <button
                            onClick={() => setSelectedZone(null)}
                            className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors group"
                        >
                            <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
                        </button>

                        {/* Header */}
                        <div className="mt-10 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 border border-white/10 text-[color:var(--color)]" style={{ '--color': selectedZone.color } as any}>
                                    {selectedZone.id}
                                </div>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>
                            <h2 className="text-5xl font-bold text-white mb-2 leading-none">{selectedZone.name}</h2>
                            <h3 className="text-xl text-gray-400 font-light tracking-wide">{selectedZone.type}</h3>
                        </div>

                        {/* Hero Graphic (Abstract) */}
                        <div className="w-full h-48 rounded-lg mb-8 relative overflow-hidden border border-white/10 group">
                            <div className="absolute inset-0 bg-[color:var(--color)] opacity-20 group-hover:opacity-30 transition-opacity" style={{ '--color': selectedZone.color } as any} />
                            {/* Simulated visualizer bars */}
                            <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-4 pb-4 gap-1">
                                {[...Array(10)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: '10%' }}
                                        animate={{ height: ['10%', '60%', '30%'] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, repeatType: 'reverse' }}
                                        className="w-full bg-[color:var(--color)]"
                                        style={{ '--color': selectedZone.color, opacity: 0.5 + Math.random() * 0.5 } as any}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                {selectedZone.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-white/5 rounded border border-white/5">
                                    <div className="text-xs font-mono text-gray-500 mb-1">CAPACITY</div>
                                    <div className="text-xl font-bold">500+</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded border border-white/5">
                                    <div className="text-xs font-mono text-gray-500 mb-1">STATUS</div>
                                    <div className="text-xl font-bold text-green-400 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        OPEN
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Action */}
                        <div className="mt-auto pt-8">
                            <button className="w-full py-4 bg-[color:var(--color)] text-black font-bold tracking-widest hover:brightness-110 transition-all clip-path-slant" style={{ '--color': selectedZone.color } as any}>
                                NAVIGATE TO ZONE
                            </button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
};

export default MapPage;
