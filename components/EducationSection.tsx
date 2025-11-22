'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBookOpen, HiStar } from 'react-icons/hi';

const education = [
  {
    degree: 'BSc. in Information Systems (3.38/4.00 GPA)',
    institution: 'University of Colombo School of Computing (UCSC)',
    period: '2023 - 2026',
    modules: [
      'Human Computer Interaction', 'Data Structures & Algorithms', 'Programming & Problem Solving',
      'OOP & RAD', 'Software Quality Assurance', 'Machine Learning', 'Database Management',
      'Web Development', 'Software Engineering', 'System Analysis & Design', 'Computer Networks'
    ],
    icon: HiAcademicCap,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'BCC',
    period: '2021',
    modules: ['Combined Maths', 'Physics', 'Information Technology'],
    icon: HiBookOpen,
    color: 'from-pink-500 to-rose-500',
  },
  {
    degree: 'G.C.E. Ordinary Level',
    institution: '8 A\'s and 1 B',
    period: '2017',
    description: 'Achieved 8 A’s and 1 B (English Literature).',
    icon: HiStar,
    color: 'from-teal-500 to-emerald-500',
  },
];

const certifications = [
  {
    provider: 'Frontend Masters',
    items: [
      { title: 'Intermediate Python', date: 'Nov 2025', desc: 'Advanced Python concepts: decorators, generators, and memory management.' },
      { title: 'Web Security v2', date: 'Nov 2025', desc: 'Web vulnerabilities (XSS, CSRF) and security best practices.' },
      { title: 'Angular 17 Fundamentals', date: 'Oct 2025', desc: 'Modern Angular with Signals, Standalone Components, and RxJS.' },
      { title: 'Enterprise Java with Spring Boot', date: 'Aug 2025', desc: 'Building robust REST APIs and microservices with Spring Boot.' },
      { title: 'Next.js Fundamentals v4', date: 'Jul 2025', desc: 'App Router, Server Components, and full-stack React patterns.' },
    ]
  },
  {
    provider: 'Cloud & Infrastructure',
    items: [
      { title: 'AWS Cloud Practitioner Essentials', date: 'Aug 2025', desc: 'Core AWS services, security, architecture, and cloud concepts.' },
      { title: 'Oracle Cloud Infrastructure 2025 AI Foundations', date: 'Aug 2025', desc: 'AI/ML concepts and OCI AI services implementation.' },
    ]
  },
  {
    provider: 'HackerRank',
    items: [
      { title: 'SQL (Intermediate)', date: 'Aug 2025', desc: 'Complex queries, joins, subqueries, and database optimization.' },
      { title: 'SQL (Basic)', date: 'Aug 2025', desc: 'Fundamental database concepts and query construction.' },
      { title: 'Java (Basic)', date: 'Sep 2024', desc: 'Core Java syntax, OOP principles, and problem solving.' },
    ]
  },
  {
    provider: 'Professional Development',
    items: [
      { title: 'Mastering Agentic Design Patterns', date: 'Aug 2025', desc: 'Building autonomous AI agents and complex workflows (Udemy).' },
      { title: 'Generative AI Overview for Project Managers', date: 'Nov 2024', desc: 'Integrating GenAI into project management workflows (PMI).' },
    ]
  }
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
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
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
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl bg-linear-${edu.color} bg-opacity-10`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">
                                {edu.degree}
                              </h3>
                              <p className="text-lg text-gray-400">{edu.institution}</p>
                            </div>
                          </div>
                          <span className={`hidden sm:block px-4 py-2 rounded-full glass text-sm font-semibold text-white`}>
                            {edu.period}
                          </span>
                        </div>

                        {/* Mobile Period Display */}
                        <div className="sm:hidden mb-6">
                          <span className={`px-4 py-2 rounded-full glass text-sm font-semibold text-white`}>
                            {edu.period}
                          </span>
                        </div>

                        {/* Modules/Description */}
                        {edu.modules ? (
                          <div className="flex flex-wrap gap-2">
                            {edu.modules.map((module, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                              >
                                {module}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-300">{edu.description}</p>
                        )}
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
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((group, groupIndex) => (
              <motion.div
                key={group.provider}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + groupIndex * 0.1 }}
                className="glass-strong rounded-2xl p-8 hover:glow-secondary transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <HiAcademicCap className="w-6 h-6 text-purple-400" />
                  {group.provider}
                </h4>
                <div className="space-y-6">
                  {group.items.map((cert, index) => (
                    <div key={index} className="relative pl-6 border-l border-white/10">
                      <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500" />
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {cert.title}
                        </h5>
                        <span className="text-xs font-mono text-gray-500 whitespace-nowrap ml-4 mt-1">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
