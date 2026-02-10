'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';

interface BackgroundElement {
  width: number;
  height: number;
  left: string;
  top: string;
  color: string;
  moveX: number;
  moveY: number;
  scale: number;
  duration: number;
}

export default function HeroSection() {
  const [backgroundElements, setBackgroundElements] = useState<BackgroundElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const elements = [...Array(3)].map((_, i) => ({
      width: 400 + i * 100,
      height: 400 + i * 100,
      left: `${50}%`,
      top: `${50}%`,
      color: 'rgba(255, 255, 255, 0.03)',
      moveX: 0,
      moveY: 0,
      scale: 1.1,
      duration: 20 + i * 5,
    }));
    setBackgroundElements(elements);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-24 md:pt-28 lg:pt-20 pb-20 md:pb-24"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />

      {/* Subtle gradient accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Animated glass circles */}
      <div className="absolute inset-0 overflow-hidden z-0 flex items-center justify-center hidden md:flex">
        {backgroundElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/5"
            style={{
              width: el.width,
              height: el.height,
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02), transparent 70%)',
              backdropFilter: 'blur(2px)',
            }}
            animate={{
              scale: [1, el.scale, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      {/* Glass panels - floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hidden lg:block"
        style={{
          transform: 'rotate(-12deg)',
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hidden lg:block"
        style={{
          transform: 'rotate(15deg)',
        }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Subtle scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-10rem)] lg:min-h-[80vh]">
          {/* Left side - Text Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            {/* Greeting Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <p className="text-indigo-400 text-base md:text-lg lg:text-xl font-medium mb-1 md:mb-2">Hello, I&apos;m</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 leading-tight">
                <span className="text-white">Shashith Rashmika</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 w-full"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200">
                BSc. Information Systems
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200">
                Full Stack Developer
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl pt-1 md:pt-2 mx-auto lg:mx-0 px-4 sm:px-2 leading-relaxed">
                Passionate about building innovative web applications with modern technologies
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 md:pt-4 justify-center lg:justify-start w-full px-2 sm:px-0"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2 text-white font-semibold text-base sm:text-lg">
                  <HiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                  Get In Touch
                </span>
              </motion.a>

              <motion.a
                href="/Shashith_rashmika_CV_SE.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-strong hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2 text-white font-semibold text-base sm:text-lg">
                  <HiDownload className="w-5 h-5 sm:w-6 sm:h-6" />
                  Download CV
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Avatar */}
          <div className="flex items-center justify-center order-1 lg:order-2 mb-4 md:mb-0">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96"
            >
              {/* Animated glow ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Outer ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-indigo-500/30"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-purple-500" />
              </motion.div>

              {/* Image container */}
              <div className="absolute inset-4 rounded-full glass-strong p-2 overflow-hidden border border-white/10">
                <img 
                  src="/images/profile.jpg" 
                  alt="Shashith Rashmika"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-white/50" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-20" />
    </section>
  );
}
