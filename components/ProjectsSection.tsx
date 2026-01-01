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
    <section 
      id="projects" 
      ref={ref} 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]" 
      onMouseMove={handleMouseMove}
    >
      {/* --- BRIGHT AMBIENT LIGHTING (Solid Colors with High Blur) --- */}
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* 1. Base Ambient Glow (Lifts the darkness slightly) */}
        <div className="absolute inset-0 bg-blue-900/10" />

        {/* 2. Major Light Source - Top Left (Vibrant Purple) */}
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-purple-600 rounded-full blur-[160px] opacity-30"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* 3. Major Light Source - Bottom Right (Vibrant Indigo) */}
        <motion.div 
          className="absolute -bottom-[10%] -right-[10%] w-[800px] h-[800px] bg-indigo-500 rounded-full blur-[160px] opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* 4. Floating 'Bubbles' (Brighter spots) */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-fuchsia-500 rounded-full blur-[100px] opacity-40"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
         <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-30"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern (White to stand out on the lighter dark) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07]" 
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} 
      />

      {/* Mouse Follower Spotlight (Brighter White) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 40%)`,
        }}
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-5 py-2 rounded-full border border-purple-400/30 bg-purple-500/20 text-xs sm:text-sm font-bold tracking-wide text-purple-200 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              My Portfolio
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">Works</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            A curated selection of my latest projects, ranging from web applications to AI integrations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project.id)}
              className="group relative cursor-pointer h-full"
            >
              {/* Card Container - More Opaque to handle bright background */}
              <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#151515]/80 backdrop-blur-xl shadow-lg hover:shadow-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  {project.images && project.images[0] ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <HiCode className="w-12 h-12 text-gray-500" />
                    </div>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-90" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                     <span className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full shadow-xl flex items-center gap-2">
                        View Details <HiExternalLink />
                     </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Top glow line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

                  <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-gray-500 border border-white/10">
                        +{project.tags.length - 3}
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
          className="text-center mt-20"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <p className="text-gray-300">
              <span className="text-2xl font-bold text-white mr-2">{projects.length}+</span> 
              Projects shipped with passion
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- MODAL --- */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl relative"
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              if (!project) return null;
              
              return (
                <div className="flex flex-col">
                  {/* Modal Image Header */}
                  <div className="relative h-64 w-full bg-gray-900">
                     {project.images && project.images[0] && (
                        <img 
                           src={project.images[0]} 
                           alt={project.title}
                           className="w-full h-full object-cover opacity-60"
                        />
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                     
                     <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all"
                    >
                      <HiX className="w-6 h-6" />
                    </button>
                    
                     <div className="absolute bottom-6 left-6 md:left-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-purple-400 font-medium">{project.category}</p>
                     </div>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
                     <div className="md:col-span-2 space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                        
                        <div>
                           <h4 className="text-white font-semibold mb-3">Technologies</h4>
                           <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                 <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-4">
                        {project.live && (
                           <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-center transition-colors">
                              View Live Demo
                           </a>
                        )}
                        {project.github && (
                           <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2">
                              <HiCode className="text-lg" /> Source Code
                           </a>
                        )}
                     </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}