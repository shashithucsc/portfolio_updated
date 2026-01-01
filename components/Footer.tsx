'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer id="contact" className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950 border-t border-white/10" onMouseMove={handleMouseMove}>
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />

      {/* Gradient accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      {/* Animated diagonal lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating glass panels */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{
          transform: 'rotate(12deg)',
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
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{
          transform: 'rotate(-15deg)',
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

      <motion.div
        className="absolute top-1/2 left-10 w-48 h-48 rounded-full border border-white/5 bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-20 right-1/3 w-32 h-32 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{
          transform: 'rotate(45deg)',
        }}
        animate={{
          rotate: [45, 60, 45],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 lg:mb-16">
          {[
            { icon: HiMail, text: 'shashithrashmika2022@gmail.com', href: 'mailto:shashithrashmika2022@gmail.com', label: 'Email' },
            { icon: HiPhone, text: '+94 76 068 8588', href: 'tel:+94760688588', label: 'Phone' },
            { icon: HiLocationMarker, text: 'Sri Lanka', href: '#', label: 'Location' },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.text}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-indigo-500/30 transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{contact.label}</p>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors break-all">{contact.text}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 md:gap-4 mb-10 md:mb-12 lg:mb-16"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/shashithucsc', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shashith-rashmika-piyathilaka-ucsc/', label: 'LinkedIn' },
            { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
            { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center hover:border-indigo-500/30 transition-all"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Footer */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © 2025 Shashith Rashmika. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-4 md:gap-6"
            >
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs sm:text-sm">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Contact Widget */}
      <motion.a
        href="#contact"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-14 sm:h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30 z-30"
        aria-label="Contact"
      >
        <HiPaperAirplane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </motion.a>
    </footer>
  );
}
