'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-background opacity-50" />
      
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
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full glass text-sm font-semibold text-indigo-400 border border-indigo-500/30">
              Get To Know Me
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
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
            <div className="glass-strong rounded-3xl p-8 hover:glow-primary transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Hello! I&apos;m Shashith Rashmika
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I&apos;m a passionate BSc. Information Systems undergraduate at UCSC with a strong 
                  focus on full-stack development. I love building innovative web applications that 
                  solve real-world problems using modern technologies like React, Next.js, and Node.js.
                </p>
                <p>
                  My journey in tech began with curiosity about how applications work, which evolved 
                  into creating production-ready systems. From building social platforms to AI-powered 
                  solutions, I enjoy every aspect of the development process - from UI/UX design to 
                  backend architecture.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest technologies. 
                  Whether it&apos;s implementing machine learning models, real-time chat systems, or 
                  responsive modern UIs, I&apos;m always excited to take on new challenges and push 
                  my boundaries.
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
              { number: '2+', label: 'Years Experience' },
              { number: '8A+1B', label: 'O/L Results' },
              { number: 'BCC', label: 'A/L Results' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass-strong rounded-2xl p-6 text-center hover:glow-secondary transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
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
                <div className="glass-strong rounded-2xl p-6 h-full hover:glow-accent transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-linear-${card.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className={`relative w-16 h-16 rounded-xl bg-linear-${card.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-400">
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
