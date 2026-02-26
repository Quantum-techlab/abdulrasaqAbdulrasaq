import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes — teal/coral */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: i % 2 === 0 
              ? `hsl(185 ${45 + i * 5}% ${50 + i * 4}% / 0.15)` 
              : `hsl(12 ${55 + i * 4}% ${55 + i * 3}% / 0.12)`,
            left: `${15 + i * 18}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Larger floating orbs — teal + coral glow */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-24 h-24 rounded-full blur-2xl"
          style={{
            background: i === 0 
              ? `radial-gradient(circle, hsl(185 55% 45% / 0.07), transparent)`
              : i === 1
              ? `radial-gradient(circle, hsl(12 65% 58% / 0.06), transparent)`
              : `radial-gradient(circle, hsl(38 75% 55% / 0.06), transparent)`,
            left: `${20 + i * 30}%`,
            top: `${25 + i * 18}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
