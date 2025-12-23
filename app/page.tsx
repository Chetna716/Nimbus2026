'use client';
import { useState, useEffect } from 'react';
import Hero from "./herosection/Hero";
import Gallery from "./components/Gallery";
import RCRaceSection from "./components/RCRaceSection";
import LeftSidebar from "./herosection/LeftSidebar";

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'hero') setActiveSection(1);
            if (entry.target.id === 'gallery') setActiveSection(2);
            if (entry.target.id === 'rcrace') setActiveSection(3);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <LeftSidebar activeSection={activeSection} />
      <section id="hero" className="w-full">
        <Hero />
      </section>
      <section id="gallery" className="w-full">
        <Gallery />
      </section>
      <section id="rcrace" className="w-full">
        <RCRaceSection />
      </section>
    </main>
  );
}
