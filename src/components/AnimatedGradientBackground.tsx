import React from 'react';
import { motion } from 'motion/react';

export const AnimatedGradientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      {/* 
        Instagram-style shifting gradient. 
        We use a large background size and animate the position to create the "shifting" effect.
      */}
      <motion.div
        animate={{
          backgroundPosition: [
            '0% 50%',
            '50% 100%',
            '100% 50%',
            '50% 0%',
            '0% 50%'
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-60 blur-[100px]"
        style={{
          background: 'linear-gradient(-45deg, #7e22ce, #050505, #0891b2, #9333ea, #000000, #06b6d4)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Overlapping blobs for extra depth and "glow" */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-purple-600/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Grainy texture overlay for a more "crafted" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
