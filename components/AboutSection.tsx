'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiCode, HiLightningBolt, HiHeart, HiSparkles } from 'react-icons/hi';

const highlights = [
  {
    value: '12+',
    label: 'Projects',
    color: 'text-indigo-400',
    hoverBorder: 'group-hover:border-indigo-500/50',
  },
  {
    value: '3.38',
    label: 'GPA',
    color: 'text-pink-400',
    hoverBorder: 'group-hover:border-pink-500/50',
  },
  {
    value: '6+',
    label: 'Months Experience',
    color: 'text-teal-400',
    hoverBorder: 'group-hover:border-teal-500/50',
  },
  {
    value: '15+',
    label: 'Certifications',
    color: 'text-amber-400',
    hoverBorder: 'group-hover:border-amber-500/50',
  },
];

const passions = [
  {
    icon: HiCode,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable solutions',
  },
  {
    icon: HiLightningBolt,
    title: 'Innovation',
    description: 'Exploring cutting-edge technologies',
  },
  {
    icon: HiHeart,
    title: 'User Experience',
    description: 'Creating intuitive interfaces',
  },
  {
    icon: HiSparkles,
    title: 'Problem Solving',
    description: 'Tackling complex challenges',
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
    <section id="about" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950" onMouseMove={handleMouseMove}>
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Subtle gradient accent */}
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

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating glass panels */}
      <motion.div
        className="absolute top-1/3 right-10 w-48 h-48 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hidden lg:block"
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
        className="absolute bottom-1/4 left-20 w-56 h-56 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hidden lg:block"
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 md:mb-6"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative px-4 sm:px-6 py-2 rounded-full border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-indigo-400 inline-block">
                Get To Know Me
              </span>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A passionate developer crafting digital experiences
          </p>
        </motion.div>

        {/* Main Content - Centered Single Column */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-0.5 rounded-2xl md:rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
            />
            
            <div className="relative rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm">
              <div className="space-y-4 md:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed md:leading-relaxed">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Hello! I&apos;m <span className="text-indigo-400 font-bold">Shashith Rashmika</span>
                </p>
                <p>
                  I&apos;m a passionate <span className="text-white font-semibold">BSc. Information Systems undergraduate at UCSC</span> with a strong focus on full-stack development. I thrive on building innovative web applications that solve real-world problems using modern technologies.
                </p>
                <p>
                  My journey in tech is driven by curiosity and a desire to create meaningful digital experiences. From crafting responsive UIs with <span className="text-indigo-400 font-semibold">React & Next.js</span> to building robust backends with <span className="text-indigo-400 font-semibold">Node.js & databases</span>, I enjoy every aspect of bringing ideas to life.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source, or designing beautiful user interfaces that combine aesthetics with functionality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group relative"
            >
              <div className={`rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-center border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ${item.hoverBorder}`}>
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${item.color} mb-2`}>
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What I Love */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            What I Love
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {passions.map((passion, index) => {
              const Icon = passion.icon;
              return (
                <motion.div
                  key={passion.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="rounded-xl md:rounded-2xl p-5 md:p-6 h-full border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 md:p-4 rounded-xl border border-white/10 bg-white/[0.03] group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-white">
                        {passion.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {passion.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
