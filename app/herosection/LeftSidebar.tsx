'use client';

interface LeftSidebarProps {
  activeSection?: number;
}

const LeftSidebar = ({ activeSection = 1 }: LeftSidebarProps) => {
  const items = [
    { id: 1, label: 'HOME', default: '01/' },
    { id: 2, label: 'GALLERY', default: '02/' },
    { id: 3, label: 'RC RACE', default: '03/' },
    { id: 4, label: '04', default: '04/' },
    { id: 5, label: '05', default: '05/' },
    { id: 6, label: '06', default: '06/' },
    { id: 7, label: '07', default: '07/' },
    { id: 8, label: '08', default: '08/' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-[80px] z-50 flex flex-col justify-between items-center py-8 border-r border-white/20 bg-transparent text-white mix-blend-difference pointer-events-none">
      {/* Top Menu Icon */}
      <div className="flex flex-col gap-1.5 cursor-pointer pointer-events-auto">
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Vertical Text */}
      <div className="flex-1 flex items-center justify-center">
        <h2 
          className="whitespace-nowrap text-2xl tracking-[0.2em] font-bold rotate-180"
          style={{ 
            writingMode: 'vertical-rl',
            fontFamily: 'Neoform, sans-serif'
          }}
        >
          NIMBUS 2026
        </h2>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-4 text-xs font-mono tracking-widest opacity-80 pointer-events-auto">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="cursor-pointer hover:text-[#5227FF] transition-colors flex items-center justify-center min-h-[24px]" 
            style={{ writingMode: 'vertical-rl' }}
          >
            {activeSection === item.id ? (
               <span className="rotate-180 font-bold text-[#5227FF] whitespace-nowrap">{item.label}</span>
            ) : (
               <span className="rotate-180 whitespace-nowrap">{item.default}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
