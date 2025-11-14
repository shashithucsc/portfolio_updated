'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBookOpen, HiStar } from 'react-icons/hi';

const education = [
  {
    degree: 'BSc. in Information Systems',
    institution: 'University of Colombo School of Computing (UCSC)',
    period: '2023 - 2026',
    description: 'Specializing in full-stack development, database systems, and software engineering. Focus on modern web technologies, agile methodologies, and practical application development.',
    achievements: ['Dean\'s List', 'Full Stack Development', 'Multiple Project Completions'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'Combined Maths & ICT Stream',
    period: '2021',
    description: 'Successfully completed Advanced Level examination with combined mathematics and Information & Communication Technology subjects.',
    achievements: ['BCC Results', 'Mathematics & ICT Focus', 'STEM Education'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    degree: 'G.C.E. Ordinary Level',
    institution: 'General Education',
    period: '2017',
    description: 'Achieved excellent results in Ordinary Level examination demonstrating strong foundation in core subjects.',
    achievements: ['8 A\'s and 1 B', 'Academic Excellence', 'All-Round Performance'],
    color: 'from-teal-500 to-emerald-500',
  },
];

const certifications = [
  {
    title: 'Full Stack Development',
    issuer: 'UCSC Projects & Coursework',
    year: '2023-2025',
    icon: HiAcademicCap,
  },
  {
    title: 'Machine Learning & AI',
    issuer: 'Python & Scikit-learn',
    year: '2024',
    icon: HiBookOpen,
  },
  {
    title: 'Modern Web Development',
    issuer: 'React, Next.js & Node.js',
    year: '2023-2025',
    icon: HiStar,
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} className="relative py-32 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 mesh-background opacity-30" />

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
            <span className="px-4 py-2 rounded-full glass text-sm font-semibold text-purple-400 border border-purple-500/30">
              Academic Journey
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-pink-500 to-purple-500 opacity-20" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-strong rounded-2xl p-8 hover:glow-primary transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-gray-400">{edu.institution}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full glass text-sm font-semibold bg-linear-${edu.color} bg-clip-text text-transparent`}>
                          {edu.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6">{edu.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-3 py-1 glass rounded-full text-sm text-gray-300"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-6 h-6 rounded-full bg-linear-from-indigo-500 bg-linear-to-pink-500 ring-4 ring-black"
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="glass-strong rounded-2xl p-6 h-full hover:glow-secondary transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-xl bg-linear-from-indigo-500 bg-linear-to-pink-500 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">Issued {cert.year}</p>
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
