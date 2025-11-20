'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 mesh-background opacity-40" />

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
            <span className="px-4 py-2 rounded-full glass text-sm font-semibold text-teal-400 border border-teal-500/30">
              What I Do Best
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="group relative"
                    >
                      <div className="glass-strong rounded-2xl p-6 h-full hover:glow-accent transition-all duration-300">
                        {/* Icon */}
                        <div className="flex items-center justify-center mb-4">
                          <div className="relative">
                            <div
                              className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                              style={{ backgroundColor: skill.color }}
                            />
                            <div
                              className="relative w-16 h-16 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: skill.color + '20' }}
                            >
                              <Icon
                                className="w-10 h-10"
                                style={{ color: skill.color }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-lg font-bold text-white text-center mb-4">
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <div className="glass-strong rounded-3xl p-8">
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
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-white hover:glow-primary transition-all cursor-default"
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
