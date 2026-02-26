import React from 'react';
import { motion } from 'framer-motion';

const drawVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" as const }
  }
};

// Squiggly underline
export const DoodleUnderline: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', color = 'hsl(185 55% 38%)' 
}) => (
  <svg className={`absolute -bottom-2 left-0 w-full h-3 ${className}`} viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
    <motion.path
      d="M0 6 Q 10 0, 20 6 Q 30 12, 40 6 Q 50 0, 60 6 Q 70 12, 80 6 Q 90 0, 100 6 Q 110 12, 120 6 Q 130 0, 140 6 Q 150 12, 160 6 Q 170 0, 180 6 Q 190 12, 200 6"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      variants={drawVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  </svg>
);

// Doodle star burst
export const DoodleStar: React.FC<{ className?: string; color?: string; size?: number }> = ({ 
  className = '', color = 'hsl(38 80% 55%)', size = 40 
}) => (
  <motion.svg 
    className={`${className}`} 
    width={size} height={size} 
    viewBox="0 0 40 40" 
    fill="none"
    initial={{ scale: 0, rotate: -180 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
  >
    <motion.path
      d="M20 2 L23 15 L36 12 L26 20 L36 28 L23 25 L20 38 L17 25 L4 28 L14 20 L4 12 L17 15 Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`${color}`}
      fillOpacity="0.15"
      variants={drawVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  </motion.svg>
);

// Doodle arrow
export const DoodleArrow: React.FC<{ className?: string; color?: string; direction?: 'right' | 'down' }> = ({ 
  className = '', color = 'hsl(12 72% 58%)', direction = 'right' 
}) => (
  <motion.svg 
    className={`${className}`} 
    width="60" height="30" 
    viewBox="0 0 60 30" 
    fill="none"
    style={{ transform: direction === 'down' ? 'rotate(90deg)' : 'none' }}
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.path
      d="M2 18 Q 15 8, 30 15 Q 45 22, 50 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      variants={drawVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
    <motion.path
      d="M44 8 L50 12 L44 16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      variants={drawVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  </motion.svg>
);

// Doodle circle / highlight
export const DoodleCircle: React.FC<{ className?: string; color?: string; size?: number }> = ({ 
  className = '', color = 'hsl(185 55% 38%)', size = 80 
}) => (
  <motion.svg 
    className={`${className}`} 
    width={size} height={size} 
    viewBox="0 0 80 80" 
    fill="none"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.ellipse
      cx="40" cy="40" rx="34" ry="30"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 6"
      fill="none"
      transform="rotate(-8 40 40)"
      variants={drawVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  </motion.svg>
);

// Doodle squiggle decoration
export const DoodleSquiggle: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', color = 'hsl(38 80% 55%)' 
}) => (
  <motion.svg 
    className={`${className}`} 
    width="120" height="40" 
    viewBox="0 0 120 40" 
    fill="none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.6 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <motion.path
      d="M5 20 C 15 5, 25 35, 35 20 C 45 5, 55 35, 65 20 C 75 5, 85 35, 95 20 C 105 5, 115 35, 120 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      variants={drawVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  </motion.svg>
);

// Doodle dots pattern
export const DoodleDots: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', color = 'hsl(185 55% 38%)' 
}) => (
  <motion.svg 
    className={`${className}`} 
    width="60" height="60" 
    viewBox="0 0 60 60" 
    fill="none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.4 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {[0, 1, 2].map(row =>
      [0, 1, 2].map(col => (
        <motion.circle
          key={`${row}-${col}`}
          cx={12 + col * 18}
          cy={12 + row * 18}
          r="3"
          fill={color}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (row * 3 + col) * 0.05 }}
        />
      ))
    )}
  </motion.svg>
);

// Doodle sparkle cross
export const DoodleSparkle: React.FC<{ className?: string; color?: string; size?: number }> = ({ 
  className = '', color = 'hsl(12 72% 58%)', size = 24 
}) => (
  <motion.svg 
    className={`${className}`} 
    width={size} height={size} 
    viewBox="0 0 24 24" 
    fill="none"
    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 0.95, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  </motion.svg>
);
