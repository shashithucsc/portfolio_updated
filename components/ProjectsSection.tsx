'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode, HiX } from 'react-icons/hi';

const projects = [
  {
    id: 1,
    title: 'HomeGenie',
    category: 'Full Stack Web Application',
    description: 'On-demand home services platform with booking system, supplier management, and modular MVC architecture. Features user authentication, service categories, and real-time booking.',
    tags: ['PHP', 'MySQL', 'HTML', 'JavaScript', 'MVC'],
    gradient: 'from-indigo-500 to-purple-500',
    images: ['/images/homegenie/1.jpeg', '/images/homegenie/2.jpeg', '/images/homegenie/3.jpeg'],
    github: 'https://github.com/shashithucsc/Homegenie',
    live: '',
  },
  {
    id: 2,
    title: 'ClubSync',
    category: 'Full Stack',
    description: 'Comprehensive club volunteer and event management system with QR code-based attendance tracking, points system, and mobile-first responsive design for university clubs.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'QR'],
    gradient: 'from-pink-500 to-rose-500',
    images: ['/images/clubsync/1.png', '/images/clubsync/2.png', '/images/clubsync/3.png'],
    github: 'https://github.com/Sasmitha-Silva/ClubSync-Web',
    live: '',
  },
  {
    id: 3,
    title: 'Chill Campus',
    category: 'Social Platform',
    description: 'Modern social networking platform designed for university students featuring posts, real-time chat, event management, and community building with a clean, intuitive interface.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind'],
    gradient: 'from-teal-500 to-emerald-500',
    images: ['/images/chillcampus/1.png', '/images/chillcampus/2.png', '/images/chillcampus/3.png'],
    github: 'https://github.com/shashithucsc/chill_campus-nextJs-',
    live: 'https://chill-campus-2025.vercel.app',
  },
  {
    id: 4,
    title: 'Athagili',
    category: 'Matchmaking Platform',
    description: 'Sri Lankan matchmaking application with real-time chat functionality, user profiles, and mobile-first responsive design. Built with modern tech stack for seamless user experience.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Real-time Chat'],
    gradient: 'from-amber-500 to-orange-500',
    images: ['/images/athagili/1.png', '/images/athagili/2.png', '/images/athagili/3.png'],
    github: 'https://github.com/shashithucsc/athagili',
    live: 'https://athagili.vercel.app/',
  },
  {
    id: 5,
    title: 'Book Management System',
    category: 'CRUD Application',
    description: 'Complete book management system with user authentication, CRUD operations, REST APIs, and automated testing using Selenium. Built with Spring Boot backend and React frontend.',
    tags: ['React', 'Spring Boot', 'REST API', 'Selenium', 'MySQL'],
    gradient: 'from-blue-500 to-cyan-500',
    images: ['/images/bookapp/1.png', '/images/bookapp/2.png'],
    github: 'https://github.com/shashithucsc/book-management-system',
    live: '',
  },
  {
    id: 6,
    title: 'Chatty Chatty',
    category: 'Real-time Chat',
    description: 'Real-time messaging application built with MERN stack and Socket.io for instant communication. Features user authentication, private messaging, and live message updates.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    gradient: 'from-violet-500 to-purple-500',
    images: ['/images/chatty/1.png', '/images/chatty/2.png'],
    github: 'https://github.com/shashithucsc/chat-app',
    live: '',
  },
  {
    id: 7,
    title: 'Laptop Price Predictor',
    category: 'Machine Learning',
    description: 'Machine learning model for predicting laptop prices using Random Forest algorithm. Analyzes specifications like RAM, processor, GPU, and brand to estimate accurate pricing.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'ML'],
    gradient: 'from-green-500 to-teal-500',
    images: ['/images/mlproject/1.png', '/images/mlproject/2.png'],
    github: 'https://github.com/shashithucsc/laptop_price_predictor',
    live: '',
  },
  {
    id: 8,
    title: 'AI Chat-bot',
    category: 'AI Application',
    description: 'Intelligent chatbot powered by Gemini API. Built with PHP backend and Flask integration for natural language processing and conversational AI capabilities.',
    tags: ['PHP', 'Flask', 'JavaScript', 'Gemini API', 'AI'],
    gradient: 'from-red-500 to-pink-500',
    images: ['/images/chatbot/1.png', '/images/chatbot/2.png'],
    github: 'https://github.com/shashithucsc/chat-bot',
    live: '',
  },
  {
    id: 9,
    title: 'Zenith',
    category: 'UI/UX Design',
    description: 'Modern space tourism booking platform with stunning visual design, smooth animations, and immersive user experience. Features destination exploration and booking interface.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
    gradient: 'from-indigo-500 to-blue-500',
    images: ['/images/zenith/1.png', '/images/zenith/2.png'],
    github: 'https://github.com/shashithucsc/zenith',
    live: 'https://zenith-pearl-mu.vercel.app/',
  },
  {
    id: 10,
    title: 'Jumbo Track',
    category: 'UI/UX Design',
    description: 'Innovative UI/UX design for elephant-train collision early-warning system. Focuses on real-time tracking, alert mechanisms, and user-friendly interface for wildlife conservation.',
    tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    gradient: 'from-yellow-500 to-orange-500',
    images: ['/images/jumbotrack/1.jpeg', '/images/jumbotrack/2.jpeg'],
    github: '',
    live: '',
  },
  {
    id: 11,
    title: 'Cafe Hifi',
    category: 'Desktop Application',
    description: 'Comprehensive cafe management system with POS functionality, inventory tracking, sales analytics, and real-time reporting. Built with JavaFX for rich desktop experience.',
    tags: ['JavaFX', 'MySQL', 'Java', 'Desktop App'],
    gradient: 'from-brown-500 to-amber-500',
    images: ['/images/cafehifi/1.jpeg', '/images/cafehifi/2.jpeg'],
    github: '',
    live: '',
  },
  {
    id: 12,
    title: 'Jobs Bank Automation',
    category: 'Workflow Automation',
    description: 'A system that automatically collects and updates job vacancies from multiple sources every day. Gathers data from TopJobs, ITPro.lk, and LinkedIn using scheduled triggers. Combined RSS Feed Readers, custom Function nodes, and conditional logic to process and clean the data before storing it in Google Sheets as a central database. The website fetches this data through an API endpoint, allowing anyone to view the most recent job listings in real time.',
    tags: ['Workflow Automation', 'RSS Feeds', 'Google Sheets API', 'Data Processing'],
    gradient: 'from-sky-500 to-indigo-500',
    images: ['/images/jobs_bank/1.png', '/images/jobs_bank/2.png'],
    github: '',
    live: '',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950" onMouseMove={handleMouseMove}>
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.15), transparent 40%)`,
        }}
      />

      {/* Subtle gradient accent - matching hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-pink-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-2/3 left-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      {/* Diagonal animated lines */}
      <motion.div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"
        style={{ transform: 'translateX(-25vw)' }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
        style={{ transform: 'translateX(30vw)' }}
        animate={{
          opacity: [0.5, 0.2, 0.5],
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
        className="absolute top-32 right-20 w-52 h-52 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(-20deg)' }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-64 h-64 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(15deg)' }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full border border-white/5 bg-gradient-to-br from-pink-500/10 to-transparent"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute top-40 left-1/3 w-32 h-32 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(25deg)' }}
        animate={{
          rotate: [25, 40, 25],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 7,
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-sm font-semibold text-pink-400">
              My Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
              className="group relative cursor-pointer h-full"
            >
              <div className="rounded-2xl overflow-hidden h-full border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300">
                {/* Project Image Placeholder */}
                <div className={`relative h-48 bg-linear-${project.gradient} overflow-hidden`}>
                  {project.images && project.images[0] ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className={`w-32 h-32 rounded-full bg-linear-${project.gradient} blur-2xl opacity-50`}
                      />
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 glass-strong rounded-full text-white font-semibold flex items-center gap-2"
                    >
                      View Details
                      <HiExternalLink className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-sm font-medium text-pink-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 rounded-lg text-xs bg-white/5 text-gray-400 border border-white/10">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 text-lg">
            <span className="text-3xl font-bold text-white">{projects.length}</span> projects completed and counting
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 border border-white/10 bg-gray-900/95 backdrop-blur-xl"
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              return project ? (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-pink-400 font-medium">{project.category}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition-all"
                    >
                      <HiX className="w-6 h-6 text-gray-400" />
                    </button>
                  </div>
                  
                  {/* Project Images */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.map((img, idx) => (
                        <div key={idx} className="rounded-xl overflow-hidden border border-white/10">
                          <img 
                            src={img} 
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold transition-colors text-center"
                        >
                          View Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:border-white/30 text-white font-semibold transition-all text-center"
                        >
                          <HiCode className="w-5 h-5 inline mr-2" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </>
              ) : null;
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
