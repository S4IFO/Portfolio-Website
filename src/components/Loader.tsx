import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 flex items-center justify-center"
            >
              {/* Pulsing Glow Background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-full blur-2xl"
              />

              {/* The SW Logo */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-6xl font-display font-black text-white tracking-tighter"
                >
                  S
                </motion.span>
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-6xl font-display font-black text-gradient tracking-tighter"
                >
                  W
                </motion.span>
              </div>

              {/* Animated Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="url(#loader-gradient)"
                  strokeWidth="2"
                  strokeDasharray="377"
                  initial={{ strokeDashoffset: 377 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7e22ce" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex flex-col items-center"
            >
              <span className="text-xs font-mono tracking-[0.3em] text-white/40 uppercase">
                Initializing Experience
              </span>
              <div className="mt-4 w-48 h-[1px] bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
