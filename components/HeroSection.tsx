'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiDownload, HiMail } from 'react-icons/hi';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden mesh-background pt-14 md:pt-16 pb-6"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['rgba(99, 102, 241, 0.1)', 'rgba(236, 72, 153, 0.1)', 'rgba(20, 184, 166, 0.1)'][
                  Math.floor(Math.random() * 3)
                ]
              }, transparent)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="space-y-4 md:space-y-6">
          {/* Floating Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
            className="relative mx-auto w-32 h-32 md:w-48 md:h-48 mt-6 md:mt-8"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500 via-pink-500 to-teal-500 blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full rounded-full glass-strong p-2 float-animation overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="Shashith Rashmika"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm md:text-lg text-gray-400">Hello, I&apos;m</p>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="gradient-text">Shashith Rashmika</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-2 md:space-y-3"
          >
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-300">
              BSc. Information Systems | Full Stack Developer
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate about building innovative web applications with modern technologies
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              <span className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                <HiMail className="w-5 h-5 md:w-6 md:h-6" />
                Get In Touch
              </span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full glass-strong hover:bg-white/10 transition-all"
            >
              <span className="flex items-center gap-2 text-white font-semibold text-base md:text-lg">
                <HiDownload className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
                Download CV
              </span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-6 md:pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-3 rounded-full bg-white/50" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
