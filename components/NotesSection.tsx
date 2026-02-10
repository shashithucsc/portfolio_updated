'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  HiX, 
  HiZoomIn, 
  HiZoomOut, 
  HiDownload, 
  HiChevronLeft, 
  HiChevronRight,
  HiDocument,
  HiSearch
} from 'react-icons/hi';

interface Note {
  id: number;
  subject: string;
  title: string;
  description: string;
  totalPages: number;
  images: string[];
  color: string;
  icon: string;
}

const notes: Note[] = [
  {
    id: 1,
    subject: 'Machine Learning & Neural Networks',
    title: 'ML Notes',
    description: 'Comprehensive notes covering supervised learning, neural networks, and deep learning concepts',
    totalPages: 11,
    images: Array.from({ length: 11 }, (_, i) => `/notes/ml/${i + 1}.jpeg`),
    color: 'from-blue-500 to-cyan-500',
    icon: '🤖',
  },
//   {
//     id: 2,
//     subject: 'SQA',
//     title: 'Software Quality Assurance',
//     description: 'Testing methodologies, automation frameworks, and quality metrics',
//     totalPages: 12,
//     images: Array.from({ length: 12 }, (_, i) => `/notes/sqa/${i + 1}.png`),
//     color: 'from-green-500 to-emerald-500',
//     icon: '✅',
//   },
//   {
//     id: 3,
//     subject: 'DevOps',
//     title: 'DevOps Practices',
//     description: 'CI/CD pipelines, containerization, and deployment strategies',
//     totalPages: 10,
//     images: Array.from({ length: 10 }, (_, i) => `/notes/devops/${i + 1}.png`),
//     color: 'from-orange-500 to-red-500',
//     icon: '⚙️',
//   },
//   {
//     id: 4,
//     subject: 'Data Structures',
//     title: 'DSA Notes',
//     description: 'Algorithms, data structures, time complexity, and problem-solving patterns',
//     totalPages: 20,
//     images: Array.from({ length: 20 }, (_, i) => `/notes/dsa/${i + 1}.png`),
//     color: 'from-purple-500 to-pink-500',
//     icon: '📊',
//   },
];

export default function NotesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const categories = ['All', ...Array.from(new Set(notes.map(n => n.subject)))];

  const filteredNotes = notes.filter(note => {
    const matchesCategory = selectedCategory === 'All' || note.subject === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openViewer = (note: Note, page: number = 0) => {
    setCurrentNote(note);
    setCurrentPage(page);
    setZoom(1);
    setViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setViewerOpen(false);
    setCurrentNote(null);
    setZoom(1);
    document.body.style.overflow = 'unset';
  };

  const nextPage = () => {
    if (currentNote && currentPage < currentNote.totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setZoom(1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setZoom(1);
    }
  };

  const handleZoomIn = () => setZoom(Math.min(zoom + 0.25, 3));
  const handleZoomOut = () => setZoom(Math.max(zoom - 0.25, 0.5));

  const handleDownload = () => {
    if (currentNote) {
      const link = document.createElement('a');
      link.href = currentNote.images[currentPage];
      link.download = `${currentNote.subject}-page-${currentPage + 1}.jpeg`;
      link.click();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!viewerOpen) return;
      
      if (e.key === 'Escape') closeViewer();
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [viewerOpen, currentPage, zoom, currentNote]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="notes" 
      ref={ref} 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-indigo-900/10" />
        
        <motion.div 
          className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-indigo-600 rounded-full blur-[160px] opacity-30"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -bottom-[10%] -left-[10%] w-[800px] h-[800px] bg-purple-500 rounded-full blur-[160px] opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-40"
          animate={{ y: [0, -60, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07]" 
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} 
      />

      {/* Mouse Follower */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-5 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/20 text-xs sm:text-sm font-bold tracking-wide text-indigo-200 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.4)]">
              Study Resources
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Notes</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Curated study notes covering various technical subjects. Free to view and learn from.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto relative"
          >
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400/50 transition-all backdrop-blur-md"
            />
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.05 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-indigo-400/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Notes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => openViewer(note)}
                className="group cursor-pointer"
              >
                <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#151515]/80 backdrop-blur-xl shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300">
                  
                  {/* Preview Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-900">
                    <img 
                      src={note.images[0]} 
                      alt={note.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-3 left-3 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl shadow-lg">
                      {note.icon}
                    </div>

                    {/* Page Count Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                      {note.totalPages} pages
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <HiDocument /> View Notes
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className={`text-xs font-bold bg-gradient-to-r ${note.color} bg-clip-text text-transparent mb-2 uppercase tracking-wider`}>
                      {note.subject}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {note.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {note.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-auto pt-4 flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <HiDocument />
                        <span>{note.totalPages} Pages</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredNotes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-white mb-2">No notes found</h3>
            <p className="text-gray-400">Try adjusting your search or filter</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <p className="text-gray-300">
              <span className="text-2xl font-bold text-white mr-2">{notes.reduce((sum, n) => sum + n.totalPages, 0)}+</span> 
              Pages of knowledge to explore
            </p>
          </div>
        </motion.div>
      </div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {viewerOpen && currentNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl"
          >
            {/* Header Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{currentNote.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{currentNote.title}</h3>
                    <p className="text-gray-400 text-sm">
                      Page {currentPage + 1} of {currentNote.totalPages}
                    </p>
                  </div>
                </div>

                {/* Desktop Controls */}
                <div className="hidden md:flex items-center gap-3">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.5}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    title="Zoom Out (-)"
                  >
                    <HiZoomOut className="w-5 h-5" />
                  </button>
                  
                  <span className="text-white font-mono text-sm min-w-[60px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 3}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    title="Zoom In (+)"
                  >
                    <HiZoomIn className="w-5 h-5" />
                  </button>

                  <div className="w-px h-6 bg-white/20" />

                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all flex items-center gap-2"
                  >
                    <HiDownload className="w-4 h-4" />
                    Download
                  </button>

                  <button
                    onClick={closeViewer}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                    title="Close (Esc)"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Close Button */}
                <button
                  onClick={closeViewer}
                  className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="absolute inset-0 flex items-center justify-center pt-20 pb-24 md:pb-4">
              <div className="relative w-full h-full flex items-center justify-center overflow-auto p-4">
                <motion.img
                  key={currentPage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: zoom }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={currentNote.images[currentPage]}
                  alt={`${currentNote.title} - Page ${currentPage + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  style={{ 
                    transformOrigin: 'center',
                    cursor: zoom > 1 ? 'move' : 'default'
                  }}
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            {currentPage > 0 && (
              <button
                onClick={prevPage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all z-10 group"
                title="Previous (←)"
              >
                <HiChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
              </button>
            )}

            {currentPage < currentNote.totalPages - 1 && (
              <button
                onClick={nextPage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all z-10 group"
                title="Next (→)"
              >
                <HiChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
              </button>
            )}

            {/* Bottom Mobile Controls */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-md border-t border-white/10 p-4">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  className="p-3 rounded-lg bg-white/10 active:bg-white/20 text-white disabled:opacity-30"
                >
                  <HiZoomOut className="w-5 h-5" />
                </button>
                
                <span className="text-white font-mono text-sm min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  className="p-3 rounded-lg bg-white/10 active:bg-white/20 text-white disabled:opacity-30"
                >
                  <HiZoomIn className="w-5 h-5" />
                </button>

                <div className="w-px h-8 bg-white/20" />

                <button
                  onClick={handleDownload}
                  className="p-3 rounded-lg bg-indigo-600 active:bg-indigo-700 text-white"
                >
                  <HiDownload className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Page Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
              {Array.from({ length: Math.min(currentNote.totalPages, 10) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i);
                    setZoom(1);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === i ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
              {currentNote.totalPages > 10 && (
                <span className="text-white/60 text-xs ml-2">+{currentNote.totalPages - 10}</span>
              )}
            </div>

            {/* Keyboard Hints */}
            <div className="hidden lg:block absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs text-gray-400">
              <div className="flex gap-4">
                <span><kbd className="px-2 py-1 bg-white/10 rounded">←</kbd> <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd> Navigate</span>
                <span><kbd className="px-2 py-1 bg-white/10 rounded">+</kbd> <kbd className="px-2 py-1 bg-white/10 rounded">-</kbd> Zoom</span>
                <span><kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd> Close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
