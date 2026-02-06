import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  target,
  rel,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-zinc-800 to-zinc-900 dark:from-zinc-200 dark:to-zinc-100 text-white dark:text-zinc-900 shadow-lg hover:shadow-xl hover:shadow-zinc-500/25 border-0",
    secondary: "bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-md hover:shadow-lg border border-zinc-200 dark:border-zinc-600",
    outline: "border-2 border-zinc-400/30 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-500/10 hover:border-zinc-500/50 backdrop-blur-sm",
    ghost: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 backdrop-blur-sm"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.25, 0.25, 0, 1] }}
    >
      <Component
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
      >
        <motion.div
          initial={false}
          whileHover={{ x: variant === 'primary' ? [0, 100, -100, 0] : 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0 group-hover:opacity-100"
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Component>
    </motion.div>
  );
};
