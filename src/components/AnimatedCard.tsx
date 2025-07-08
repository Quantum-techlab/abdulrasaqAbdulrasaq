import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.02
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={className}>
        {children}
      </Card>
    </motion.div>
  );
};