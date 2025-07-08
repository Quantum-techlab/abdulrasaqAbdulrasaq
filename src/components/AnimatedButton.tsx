import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: any;
  size?: any;
  asChild?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  const MotionButton = motion(Button);

  return (
    <MotionButton
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
      {...props}
    >
      {children}
    </MotionButton>
  );
};