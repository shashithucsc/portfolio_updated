'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 overflow-hidden bg-black border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 mesh-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-gray-400">
                Have a project in mind? Let&apos;s create something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: HiMail, text: 'shashithrashmika2022@gmail.com', href: 'mailto:shashithrashmika2022@gmail.com' },
                { icon: HiPhone, text: '+94 76 068 8588', href: 'tel:+94760688588' },
                { icon: HiLocationMarker, text: 'Sri Lanka', href: '#' },
              ].map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-lg">{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: FaGithub, href: 'https://github.com/shashithucsc', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shashith-rashmika-piyathilaka-ucsc/', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:glow-primary transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass-strong rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-linear-from-indigo-500 bg-linear-to-pink-500 rounded-lg text-white font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <HiPaperAirplane className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              © 2025 Shashith Rashmika.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-linear-from-indigo-500 bg-linear-to-pink-500 rounded-full flex items-center justify-center shadow-lg z-30 pulse-glow"
      >
        <HiMail className="w-7 h-7 text-white" />
      </motion.a>
    </footer>
  );
}
