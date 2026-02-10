'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiBriefcase, HiCheckCircle, HiClock, HiTerminal, HiArrowNarrowRight, HiSparkles } from 'react-icons/hi';
import Link from 'next/link';

// --- Configuration ---
const START_DATE = '2025-10-20T09:00:00'; // Internship Start Date

const experiencePoints = [
  "Worked on real-world client projects contributing to both frontend and backend development.",
  "Built web interfaces using <span class='text-indigo-400 font-semibold'>Next.js</span> and implemented interactive 3D features with <span class='text-pink-400 font-semibold'>Three.js</span>.",
  "Developed workflow automations using <span class='text-amber-400 font-semibold'>n8n</span> to support internal processes.",
  "Assisted with backend integrations using <span class='text-red-400 font-semibold'>Laravel</span> and Filament.",
  "Participated in quality assurance, including manual testing and feature validation, and supported UI/UX implementation."
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const start = new Date(START_DATE).getTime();
      const now = new Date().getTime();
      const difference = now - start;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeElapsed({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950" onMouseMove={handleMouseMove}>
      
      {/* --- Ambient Background Effects --- */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="relative px-4 sm:px-6 py-2 rounded-full border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-indigo-400 inline-block">
              Get To Know Me
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Me
          </h2>
        </motion.div>

        {/* --- Bio Section --- */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm"
          >
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Hello! I&apos;m <span className="text-indigo-400 font-bold">Shashith Rashmika</span>
              </p>
              <p>
                I&apos;m a passionate <span className="text-white font-semibold">BSc. Information Systems undergraduate at UCSC</span> with a strong focus on full-stack development. I thrive on building innovative web applications that solve real-world problems.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- THE MAGNET SECTION: Engineering Logbook (Replaces Highlights) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
            <Link href="/notes" className="group block relative cursor-pointer">
                {/* 1. The "Glow" Container behind the card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                
                {/* 2. The Main Card */}
                <div className="relative rounded-2xl border border-white/10 bg-[#050505] p-1 overflow-hidden">
                    
                    {/* Inner Content Wrapper */}
                    <div className="relative rounded-xl bg-grid-white/[0.02] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        
                        {/* Text Content */}
                        <div className="flex-1 flex items-start gap-4">
                            <div className="shrink-0 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300">
                                <HiTerminal className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                   My Educational Notes
                                    <HiSparkles className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                   I have shared a collection of my educational notes here. <span className="text-white">Anyone who finds them helpful is welcome to refer to them.</span>
                                </p>
                            </div>
                        </div>

                        {/* Visual Call to Action (The "Command") */}
                        <div className="shrink-0 w-full md:w-auto">
                            <div className="flex items-center justify-between md:justify-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                                <code className="font-mono text-sm text-gray-300">
                                    <span className="text-pink-500 mr-2">$</span>
                                    cd /notes && open
                                </code>
                                <HiArrowNarrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Subtle Scanline Animation overlay inside the card */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent bg-[length:100%_4px] bg-repeat-y opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            </Link>
        </motion.div>

        {/* --- Professional Experience --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
            <div className="flex items-center justify-center gap-3 mb-8">
                <HiBriefcase className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Professional Experience</h3>
            </div>

            <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 group-hover:opacity-30 blur transition-opacity duration-500" />
                <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 md:p-10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="md:w-1/3 flex flex-col justify-between shrink-0">
                            <div>
                                <div className="text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-2">Since Oct 2025</div>
                                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-1">
                                    White Star Web Solutions
                                </h4>
                                <p className="text-sm text-gray-500 font-medium mb-4">(ArtsLab Creatives)</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                                    <HiBriefcase className="w-4 h-4" />
                                    Full Stack Developer Intern
                                </div>
                            </div>
                            
                            {/* Experience Timer */}
                            <div className="mt-8 md:mt-0 p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                                <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs uppercase tracking-widest font-semibold">
                                    <HiClock className="w-4 h-4 text-emerald-400" />
                                    Live Experience
                                </div>
                                <div className="grid grid-cols-4 gap-2 text-center">
                                    {[
                                        { val: timeElapsed.days, label: 'Days' },
                                        { val: timeElapsed.hours, label: 'Hrs' },
                                        { val: timeElapsed.minutes, label: 'Mins' },
                                        { val: timeElapsed.seconds, label: 'Sec' }
                                    ].map((t, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-lg md:text-xl font-bold text-white font-mono">{t.val.toString().padStart(2, '0')}</span>
                                            <span className="text-[10px] text-gray-500">{t.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <ul className="space-y-4">
                                {experiencePoints.map((point, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                        className="flex gap-4 group/item"
                                    >
                                        <div className="mt-1 shrink-0">
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover/item:bg-indigo-500/20 transition-colors">
                                                <HiCheckCircle className="w-4 h-4 text-indigo-400" />
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}