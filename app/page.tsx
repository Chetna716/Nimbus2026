'use client';
import { useState, useEffect } from 'react';
import Hero from "./herosection/Hero";
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('./components/Gallery'), { ssr: true });
const RobowarSection = dynamic(() => import('./components/RobowarSection'), { ssr: true });
const DroneSection = dynamic(() => import('./components/DroneSection'), { ssr: true });
import LeftSidebar from "./herosection/LeftSidebar";

import Preloader from "./components/Preloader";

let hasSeenPreloader = false;

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);
  const [isLoading, setIsLoading] = useState(!hasSeenPreloader);

  useEffect(() => {
    // Lock body scroll while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    hasSeenPreloader = true;
    setIsLoading(false);
  };


  // ... IntersectionObserver logic ...
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'hero') setActiveSection(1);
            if (entry.target.id === 'gallery') setActiveSection(2);
            if (entry.target.id === 'robowar') setActiveSection(3);
            if (entry.target.id === 'drone') setActiveSection(4);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isLoading]); // Re-run if loading changes (though mainly once)

  return (
    <main suppressHydrationWarning className={`flex min-h-screen flex-col items-center justify-between relative ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
      {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}

      <LeftSidebar activeSection={activeSection} />
      <section id="hero" className="w-full">
        <Hero />
      </section>
      <section id="gallery" className="w-full">
        <Gallery />
      </section>
      <section id="robowar" className="w-full">
        <RobowarSection />
      </section>
      <section id="drone" className="w-full">
        <DroneSection />
      </section>
    </main>
  );
}
