
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <motion.div 
        className="h-full bg-gradient-to-r from-[hsl(var(--teal-dark))] via-[hsl(var(--coral))] to-[hsl(var(--amber))] transition-all duration-150 ease-out"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </div>
  );
};
