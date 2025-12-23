'use client';
import Image from 'next/image';

const RCRaceSection = () => {
  return (
    <section className="relative w-full h-screen bg-transparent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/rcrace/rcrace.jpeg" 
                alt="RC Race 2026" 
                fill 
                className="object-cover" 
             />
        </div>
        
        {/* Content */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between p-10 pt-16 pl-24">
            {/* Top Section */}
            <div className="flex justify-between items-start">
                <h2 className="text-[#4fffff] text-5xl font-bold tracking-widest uppercase" style={{ fontFamily: 'Neoform, sans-serif' }}>
                    MONTH/DAY
                </h2>
                <div className="text-right flex flex-col items-end">
                    <h1 className="text-[#4fffff] text-8xl font-bold tracking-wider leading-none mb-2" style={{ fontFamily: 'Neoform, sans-serif' }}>
                        RC RACE
                    </h1>
                    <h1 className="text-transparent text-9xl font-bold tracking-wider leading-none" 
                        style={{ 
                            fontFamily: 'Neoform, sans-serif',
                            WebkitTextStroke: '2px white'
                        }}>
                        2026
                    </h1>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full mb-10">
                <div className="text-right text-white text-sm mt-4 opacity-80 tracking-widest">
                    © Pixonoids
                </div>
            </div>
        </div>
    </section>
  );
};

export default RCRaceSection;
