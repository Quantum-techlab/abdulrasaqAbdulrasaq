import React from 'react';
import { motion } from 'framer-motion';

interface AAFaviconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AAFavicon: React.FC<AAFaviconProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`
        ${sizeClasses[size]}
        bg-gradient-to-br from-primary to-primary-glow
        rounded-xl
        flex items-center justify-center
        font-bold text-primary-foreground
        shadow-lg shadow-primary/25
        border border-primary/20
        relative overflow-hidden
        ${className}
      `}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent animate-pulse-glow" />
      
      {/* AA Letters */}
      <span className="relative z-10 font-mono font-bold tracking-tight">
        AA
      </span>
      
      {/* Subtle shine effect */}
      <motion.div
        animate={{ x: [-20, 60] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatDelay: 2,
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
      />
    </motion.div>
  );
};