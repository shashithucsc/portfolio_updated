'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiCode, HiLightningBolt, HiHeart, HiSparkles } from 'react-icons/hi';

const aboutCards = [
  {
    icon: HiCode,
    title: 'Clean Code',
    description: 'Writing elegant, maintainable code that stands the test of time',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: HiLightningBolt,
    title: 'Performance',
    description: 'Optimized solutions that deliver blazing-fast user experiences',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: HiHeart,
    title: 'User-Centric',
    description: 'Designing with empathy and focusing on user needs first',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: HiSparkles,
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies and creative solutions',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950" onMouseMove={handleMouseMove}>
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Subtle gradient accent - matching hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      {/* Animated vertical beam */}
      <motion.div
        className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
        animate={{
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating glass panels */}
      <motion.div
        className="absolute top-1/3 right-10 w-48 h-48 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(25deg)' }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-20 w-56 h-56 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(-20deg)' }}
        animate={{
          y: [0, 12, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-20 left-1/3 w-40 h-40 rounded-full border border-white/5 bg-gradient-to-br from-purple-500/10 to-transparent"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-sm font-semibold text-indigo-400">
              Get To Know Me
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about crafting exceptional digital experiences
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-3xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hello! I&apos;m Shashith Rashmika
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I&apos;m a passionate BSc. Information Systems undergraduate at UCSC with a strong 
                  focus on full-stack development. I love building innovative web applications that 
                  solve real-world problems using modern technologies like React, Next.js, and Node.js.
                </p>
                
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '11+', label: 'Projects Completed' },
              { number: '6m +', label: 'Work Experience ' },
              { number: '8A+1B', label: 'O/L Results' },
              { number: 'BCC', label: 'A/L Results' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl p-6 text-center border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="rounded-2xl p-6 h-full border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                  {/* Icon without background */}
                  <div className="relative mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
