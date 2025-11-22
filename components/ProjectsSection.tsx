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

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden bg-black">
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
            <span className="px-4 py-2 rounded-full glass text-sm font-semibold text-pink-400 border border-pink-500/30">
              My Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
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
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project.id)}
              className="group relative cursor-pointer"
            >
              <div className="glass-strong rounded-2xl overflow-hidden h-full hover:glow-primary transition-all duration-300">
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
                  <div className="text-sm text-gray-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs glass text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-strong rounded-full text-white font-semibold hover:glow-primary transition-all"
          >
            View All Projects
          </motion.button>
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              return project ? (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold gradient-text mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.category}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 glass rounded-full hover:glow-primary transition-all"
                    >
                      <HiX className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Project Images */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.map((img, idx) => (
                        <img 
                          key={idx}
                          src={img} 
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-4 py-2 glass rounded-lg text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 bg-linear-from-indigo-500 bg-linear-to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity text-center"
                        >
                          View Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 glass rounded-full text-white font-semibold hover:glow-primary transition-all text-center"
                        >
                          View Source Code
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
