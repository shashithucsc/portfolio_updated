'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 20ms * 100 = 2000ms

    // Completion timer
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Background Grid Effect */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </div>

          <div className="relative flex items-center justify-center w-64 h-64">
            {/* Core Glow */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl"
            />

            {/* Central Hexagon/Geometry */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-24 h-24 border border-indigo-500/30 rounded-full"
            />
            
            {/* Orbital Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-transparent"
                style={{
                  width: `${160 + i * 40}px`,
                  height: `${160 + i * 40}px`,
                  borderTopColor: i === 0 ? '#6366f1' : i === 1 ? '#ec4899' : '#14b8a6',
                  borderRightColor: 'transparent',
                  borderBottomColor: 'transparent',
                  borderLeftColor: 'transparent',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3 - i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              />
            ))}

             {/* Counter-Rotating Rings */}
             {[...Array(2)].map((_, i) => (
              <motion.div
                key={`counter-${i}`}
                className="absolute rounded-full border border-transparent border-dashed"
                style={{
                  width: `${140 + i * 60}px`,
                  height: `${140 + i * 60}px`,
                  borderBottomColor: i === 0 ? '#8b5cf6' : '#06b6d4',
                  opacity: 0.3
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Center Tech Element */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-4xl font-bold text-white font-mono tracking-tighter"
              >
                {progress}%
              </motion.div>
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs text-indigo-400 mt-2 font-mono uppercase tracking-widest"
              >
                System Initializing
              </motion.div>
            </div>
          </div>

          {/* Loading Bar at Bottom */}
          <div className="absolute bottom-20 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Decorative Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0 
              }}
              animate={{ 
                x: (Math.random() - 0.5) * 500,
                y: (Math.random() - 0.5) * 500,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
