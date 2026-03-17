'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EventsTimeline = () => {
    const events = [
        { id: 1, name: 'EVENT 1' },
        { id: 2, name: 'EVENT 2' },
        { id: 3, name: 'EVENT 3' },
        { id: 4, name: 'EVENT 4' },
        { id: 5, name: 'EVENT 5' },
        { id: 6, name: 'EVENT 6' },
    ];

    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div ref={containerRef} className="w-full relative bg-black selection:bg-[#B19EEF] selection:text-white">

            <div
                className="fixed inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #333 1px, transparent 1px),
                        linear-gradient(to bottom, #333 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 pt-16 pb-20 px-8 md:px-20">
                <div className="max-w-7xl mx-auto flex justify-between items-end">
                    <div>
                        <h3 className="text-[#B19EEF] text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] font-bankgothic mb-2">EVENT TIMELINE</h3>
                        <div className="w-24 md:w-32 h-[2px] bg-gradient-to-r from-[#B19EEF] to-transparent" />
                        <h1 className="text-4xl md:text-6xl font-bankgothic text-white mt-6 leading-tight">
                            NIMBUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B19EEF] to-[#FF9FFC]">2026</span>
                        </h1>
                        <p className="text-white/50 font-mono text-sm mt-3 tracking-wider max-w-md">Scroll down to explore all events across the festival timeline.</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-white/40 font-mono text-xs tracking-widest">TOTAL EVENTS</div>
                        <div className="text-[#B19EEF] font-bankgothic text-4xl">
                            {String(events.length).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 px-8 md:px-20 pb-32">
                <div className="max-w-7xl mx-auto relative">

                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10">
                        <motion.div
                            className="w-full bg-gradient-to-b from-[#B19EEF] to-[#FF9FFC] origin-top"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="flex flex-col gap-24 md:gap-32">
                        {events.map((event, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ duration: 0.7, ease: 'easeOut' }}
                                    className="relative"
                                >
                                    <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 z-20`}>
                                        <div className="w-4 h-4 rounded-full bg-[#B19EEF] border-4 border-black shadow-[0_0_20px_rgba(177,158,239,0.6)]" />
                                    </div>

                                    <div className={`absolute left-12 md:left-auto top-6 z-20
                                        ${isLeft ? 'md:left-[calc(50%+24px)]' : 'md:right-[calc(50%+24px)] md:left-auto md:text-right'}
                                    `}>
                                        <span className="text-[#B19EEF] font-mono text-xs tracking-[0.3em] bg-black px-3 py-1 border border-[#B19EEF]/30">
                                            {String(event.id).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className={`pl-14 md:pl-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                                        <div className="bg-white/[0.02] border border-white/10 hover:border-[#B19EEF]/40 transition-all duration-500 overflow-hidden group">

                                            <div className="relative w-full aspect-[16/6] overflow-hidden bg-gradient-to-br from-[#B19EEF]/10 via-[#B19EEF]/5 to-transparent">
                                                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#B19EEF] z-20" />
                                                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#B19EEF] z-20" />
                                                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#B19EEF] z-20" />
                                                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#B19EEF] z-20" />

                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B19EEF]/5 to-transparent bg-[length:100%_4px] pointer-events-none" />

                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-7xl md:text-8xl font-bankgothic text-white/[0.06] leading-none">
                                                        {String(event.id).padStart(2, '0')}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-6 md:p-8 space-y-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="w-1 h-5 bg-[#B19EEF]" />
                                                        <span className="text-[#B19EEF] font-mono text-[10px] tracking-[0.3em]">EVENT</span>
                                                    </div>
                                                    <h2 className="text-2xl md:text-4xl font-bold font-bankgothic text-white tracking-tight leading-none">
                                                        {event.name}
                                                    </h2>
                                                    <p className="text-white/30 font-mono text-xs tracking-wider mt-3">Details coming soon</p>
                                                </div>

                                                <button className="group relative px-6 py-3 bg-transparent border border-[#B19EEF]/40 text-[#B19EEF]/60 font-bankgothic text-sm tracking-wider overflow-hidden transition-all duration-300 hover:text-white hover:border-[#B19EEF] w-full cursor-default">
                                                    <span className="relative z-10">COMING SOON</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -bottom-4 z-20">
                        <div className="w-3 h-3 rotate-45 bg-[#B19EEF] shadow-[0_0_15px_rgba(177,158,239,0.6)]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsTimeline;
