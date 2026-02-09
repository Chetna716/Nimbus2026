'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const EventsTimeline = () => {
    const events = [
        {
            id: 1,
            name: 'HACKATHON',
            fullName: 'TECH HACKATHON 2026',
            date: 'DAY 1',
            time: '09:00 AM',
            venue: 'MAIN AUDITORIUM',
            image: '/events/event1.jpg',
            description: 'Code, Innovate, Win. 24-hour coding marathon with exciting prizes and mentorship.'
        },
        {
            id: 2,
            name: 'ROBOTICS',
            fullName: 'ROBOTICS CHAMPIONSHIP',
            date: 'DAY 1',
            time: '02:00 PM',
            venue: 'TECH LAB',
            image: '/events/event2.jpg',
            description: 'Build the Future. Compete in autonomous robot challenges and showcase innovation.'
        },
        {
            id: 3,
            name: 'WORKSHOP',
            fullName: 'AI/ML WORKSHOP',
            date: 'DAY 2',
            time: '10:00 AM',
            venue: 'SEMINAR HALL',
            image: '/events/event3.jpg',
            description: 'Learn & Explore. Hands-on workshop on cutting-edge AI and Machine Learning.'
        },
        {
            id: 4,
            name: 'PROSHOW',
            fullName: 'CULTURAL NIGHT',
            date: 'DAY 2',
            time: '07:00 PM',
            venue: 'OPEN GROUND',
            image: '/events/event1.jpg',
            description: 'Entertainment Extravaganza. Live performances, music, and cultural celebrations.'
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            const index = Math.min(
                Math.floor(latest * events.length),
                events.length - 1
            );
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress, events.length]);

    // Horizontal timeline progress
    const timelineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div ref={containerRef} className="w-full relative bg-black selection:bg-[#5227FF] selection:text-white" style={{ height: `${events.length * 100}vh` }}>

            {/* Background Grid */}
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

            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-20 py-0">

                {/* Header */}
                <div className="absolute top-10 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-20">
                    <div>
                        <h3 className="text-[#5227FF] text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] font-bankgothic mb-2">EVENT TIMELINE</h3>
                        <div className="w-24 md:w-32 h-[2px] bg-gradient-to-r from-[#5227FF] to-transparent" />
                    </div>
                    <div className="text-right">
                        <div className="text-white/40 font-mono text-xs tracking-widest">SCROLL TO EXPLORE</div>
                        <div className="text-[#5227FF] font-bankgothic text-2xl">
                            {String(activeIndex + 1).padStart(2, '0')}/{String(events.length).padStart(2, '0')}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center h-full pt-36 md:pt-0">

                    {/* Horizontal Timeline Track */}
                    <div className="w-full mb-20 relative">
                        {/* Timeline Base Line */}
                        <div className="w-full h-[2px] bg-white/10 relative">
                            {/* Progress Line */}
                            <motion.div
                                className="h-full bg-gradient-to-r from-[#5227FF] to-purple-400"
                                style={{ width: timelineProgress }}
                            />

                            {/* Glowing Indicator */}
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#5227FF] rounded-full shadow-[0_0_20px_rgba(82,39,255,0.8)]"
                                style={{
                                    left: timelineProgress,
                                    marginLeft: '-8px'
                                }}
                            />
                        </div>

                        {/* Timeline Nodes */}
                        <div className="absolute top-0 left-0 w-full flex justify-between" style={{ marginTop: '-6px' }}>
                            {events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className="flex flex-col items-center cursor-pointer group"
                                    onClick={() => {
                                        const sectionHeight = containerRef.current?.scrollHeight || 0;
                                        const scrollPos = (sectionHeight / events.length) * index + (containerRef.current?.offsetTop || 0);
                                        window.scrollTo({ top: scrollPos, behavior: 'smooth' });
                                    }}
                                >
                                    {/* Node Circle */}
                                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeIndex >= index
                                        ? 'bg-[#5227FF] border-[#5227FF] scale-125 shadow-[0_0_15px_rgba(82,39,255,0.6)]'
                                        : 'bg-black border-white/30 group-hover:border-white/60'
                                        }`} />

                                    {/* Node Label */}
                                    <div className={`mt-4 text-xs font-mono tracking-wider transition-all duration-300 ${activeIndex === index ? 'text-[#5227FF] scale-110' : 'text-white/40 group-hover:text-white/70'
                                        }`}>
                                        {event.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Event Card Display */}
                    <div className="w-full relative py-8 md:py-0" style={{ height: 'auto', minHeight: '500px' }}>
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    scale: activeIndex === index ? 1 : 0.9,
                                    y: activeIndex === index ? 0 : 20
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ pointerEvents: activeIndex === index ? 'auto' : 'none' }}
                            >
                                <div className="w-full max-w-5xl flex flex-col md:grid md:grid-cols-2 gap-8 items-center pb-20 md:pb-0">

                                    {/* Image Section */}
                                    <div className="relative group">
                                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                                            {/* Corner Accents */}
                                            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#5227FF] z-20" />
                                            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#5227FF] z-20" />
                                            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#5227FF] z-20" />
                                            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#5227FF] z-20" />

                                            {/* Image */}
                                            <Image
                                                src={event.image}
                                                alt={event.fullName}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />

                                            {/* Scanline Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5227FF]/5 to-transparent bg-[length:100%_4px] pointer-events-none" />
                                        </div>

                                        {/* ID Badge */}
                                        <div className="absolute -bottom-4 -right-16 w-[280px] h-[45px] flex items-center justify-start pl-6 bg-black border-2 border-[#5227FF] font-bankgothic text-xl text-white z-20">
                                            {String(event.id).padStart(2, '0')}
                                        </div>
                                    </div>

                                    {/* Info Section */}
                                    <div className="space-y-6">
                                        {/* Event Name */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-1 h-6 bg-[#5227FF]" />
                                                <span className="text-[#5227FF] font-mono text-xs tracking-[0.3em]">EVENT</span>
                                            </div>
                                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-bankgothic text-white tracking-tight leading-none bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none inline-block">
                                                {event.name}
                                            </h2>
                                            <p className="text-white/60 font-mono text-xs md:text-sm tracking-wider mt-2">{event.fullName}</p>
                                        </div>

                                        {/* Event Details */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="border border-white/10 p-4 bg-white/5">
                                                <div className="text-[#5227FF] font-mono text-xs tracking-widest mb-1">TIME</div>
                                                <div className="text-white font-bankgothic text-lg">{event.time}</div>
                                            </div>
                                            <div className="border border-white/10 p-4 bg-white/5">
                                                <div className="text-[#5227FF] font-mono text-xs tracking-widest mb-1">VENUE</div>
                                                <div className="text-white font-bankgothic text-lg">{event.venue}</div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="border-l-2 border-[#5227FF]/50 pl-4">
                                            <p className="text-gray-300 leading-relaxed">{event.description}</p>
                                        </div>

                                        {/* CTA Button */}
                                        <button className="group relative px-8 py-3 bg-transparent border-2 border-[#5227FF] text-[#5227FF] font-bankgothic tracking-wider overflow-hidden transition-all duration-300 hover:text-white">
                                            <span className="relative z-10">REGISTER NOW</span>
                                            <div className="absolute inset-0 bg-[#5227FF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                        </button>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EventsTimeline;
