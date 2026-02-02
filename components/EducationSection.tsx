'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiAcademicCap, HiBookOpen, HiStar, HiChevronDown, HiCheckCircle } from 'react-icons/hi';

const education = [
  {
    degree: 'BSc. in Information Systems (3.49/4.00 GPA)',
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
  const [expandedEdu, setExpandedEdu] = useState<number | null>(0);
  const [expandedCert, setExpandedCert] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleCert = (index: number) => {
    setExpandedCert(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="education" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black" onMouseMove={handleMouseMove}>
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />

      {/* Subtle gradient accent - matching hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-purple-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-pink-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      {/* Decorative lines */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
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
        className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        animate={{
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating glass panels */}
      <motion.div
        className="absolute top-20 right-10 w-56 h-56 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(-15deg)' }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-10 w-64 h-64 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(20deg)' }}
        animate={{
          y: [0, 15, 0],
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
        className="absolute top-1/2 right-1/4 w-44 h-44 rounded-full border border-white/5 bg-gradient-to-br from-indigo-500/10 to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-1/3 w-36 h-36 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(35deg)' }}
        animate={{
          rotate: [35, 50, 35],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 md:mb-6"
          >
            <span className="px-4 sm:px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-xs sm:text-sm font-semibold text-purple-400">
              Academic Journey
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            Education & Certifications
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              const isExpanded = expandedEdu === index;
              
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  <motion.div
                    whileHover={{ x: 2 }}
                    className="rounded-xl md:rounded-2xl p-5 md:p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 cursor-pointer h-full"
                    onClick={() => setExpandedEdu(isExpanded ? null : index)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Simple Icon */}
                      <div className="flex-shrink-0 p-3 rounded-xl border border-white/10 bg-white/[0.03] group-hover:border-indigo-500/30 transition-all">
                        <Icon className="w-6 h-6 text-indigo-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="text-base text-gray-400">{edu.institution}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-lg text-sm font-medium text-gray-400 border border-white/10">
                              {edu.period}
                            </span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <HiChevronDown className="w-5 h-5 text-gray-500" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Expandable Content */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-white/10">
                            {edu.modules ? (
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                {edu.modules.map((module, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={isExpanded ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: i * 0.02 }}
                                    className="px-3 py-2 rounded-lg text-sm bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all h-full min-h-[44px] flex items-center"
                                  >
                                    <HiCheckCircle className="w-3 h-3 text-indigo-400 inline mr-1.5 flex-shrink-0" />
                                    <span className="line-clamp-2">{module}</span>
                                  </motion.div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-300">{edu.description}</p>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white mb-10">
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6 md:grid-rows-2">
            {certifications.map((group, groupIndex) => (
              <motion.div
                key={group.provider}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + groupIndex * 0.1 }}
                className="flex"
              >
                <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 w-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="p-2 rounded-lg border border-white/10 bg-white/[0.03]">
                      <HiAcademicCap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white">
                        {group.provider}
                      </h4>
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">
                      {group.items.length}
                    </span>
                  </div>

                  {/* Certification Items */}
                  <div className="space-y-4 flex-1">
                    {group.items.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + groupIndex * 0.1 + index * 0.05 }}
                        whileHover={{ x: 4 }}
                        className="group/item"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h5 className="text-sm font-semibold text-white group-hover/item:text-purple-300 transition-colors">
                                {cert.title}
                              </h5>
                              <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                                {cert.date}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              {cert.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
