import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const InteractiveGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const gridItems = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-5 gap-4 h-full w-full p-8 opacity-30">
        {gridItems.map((index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: hoveredIndex === index ? 0.8 : 0.3,
              scale: hoveredIndex === index ? 1.1 : 1
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};