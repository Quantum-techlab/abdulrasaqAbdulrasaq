import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  startValue: number;
  label: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  startValue,
  label,
  suffix = '',
  duration = 30000, // 30 seconds for full cycle
  className = ''
}) => {
  const [currentValue, setCurrentValue] = useState(startValue);
  
  useEffect(() => {
    const increment = Math.floor(Math.random() * 50) + 10; // Random increment between 10-60
    const interval = setInterval(() => {
      setCurrentValue(prev => prev + increment);
    }, 2000 + Math.random() * 3000); // Random interval between 2-5 seconds

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`
        backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 
        border border-white/30 dark:border-slate-700/50 
        rounded-2xl p-4 text-center shadow-2xl
        hover:shadow-primary/20 transition-all duration-300
        ${className}
      `}
    >
      <motion.div
        key={currentValue}
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-1"
      >
        {formatNumber(currentValue)}{suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  );
};