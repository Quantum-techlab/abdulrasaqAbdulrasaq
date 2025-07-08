
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-background/10 backdrop-blur-md border border-white/10 hover:bg-background/20 transition-all duration-300 hover:scale-110 group"
    >
      <div className="relative w-5 h-5">
        <motion.div
          animate={{
            rotate: theme === 'light' ? 0 : 90,
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
        >
          <Sun />
        </motion.div>
        <motion.div
          animate={{
            rotate: theme === 'dark' ? 0 : -90,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        >
          <Moon />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </Button>
    </motion.div>
  );
};
