'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiExpress,
  SiSpringboot,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#000000' },
      { name: 'JavaScript', icon: SiJavascript, level: 92, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, level: 93, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 87, color: '#339933' },
      { name: 'Express', icon: SiExpress, level: 88, color: '#000000' },
      { name: 'PHP', icon: SiPhp, level: 85, color: '#777BB4' },
      { name: 'Java', icon: FaJava, level: 80, color: '#007396' },
      { name: 'Python', icon: SiPython, level: 82, color: '#3776AB' },
      { name: 'Spring Boot', icon: SiSpringboot, level: 78, color: '#6DB33F' },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 88, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, level: 87, color: '#47A248' },
      { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
      { name: 'Figma', icon: SiFigma, level: 85, color: '#F24E1E' },
      { name: 'Docker', icon: SiDocker, level: 75, color: '#2496ED' },
    ],
  },
];

export default function SkillsSection() {
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
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black" onMouseMove={handleMouseMove}>
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15), transparent 40%)`,
        }}
      />

      {/* Subtle gradient accent - matching hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-[700px] h-[700px] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/2 w-[480px] h-[480px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      {/* Horizontal beams */}
      <motion.div
        className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-0 right-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        animate={{
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* Floating glass panels */}
      <motion.div
        className="absolute top-40 left-20 w-56 h-56 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(18deg)' }}
        animate={{
          y: [0, -18, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-64 h-64 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(-12deg)' }}
        animate={{
          y: [0, 20, 0],
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
        className="absolute top-1/3 right-1/4 w-44 h-44 rounded-full border border-white/5 bg-gradient-to-br from-teal-500/10 to-transparent"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/3 w-36 h-36 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(-30deg)' }}
        animate={{
          rotate: [-30, -45, -30],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
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
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-sm font-semibold text-teal-400">
              What I Do Best
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      }}
                      whileHover={{ y: -4 }}
                      className="group"
                    >
                      <div className="rounded-xl p-5 h-full border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300">
                        {/* Icon */}
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] group-hover:border-teal-500/30 transition-all">
                            <Icon
                              className="w-8 h-8"
                              style={{ color: skill.color }}
                            />
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-sm font-semibold text-white text-center group-hover:text-teal-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST API',
                'MVC Architecture',
                'Socket.io',
                'Supabase',
                'JavaFX',
                'Machine Learning',
                'Selenium',
                'Unit Testing',
                'TDD',
                'Responsive Design',
                'SEO',
                'Agile',
                'UI/UX Design',
                'Real-time Systems',
                'API Development',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg text-sm bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
