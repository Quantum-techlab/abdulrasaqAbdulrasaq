import { motion } from 'framer-motion';

export const Hero3DCharacter = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern only */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} 
        />
      </div>

      {/* Minimal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-1/3 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700 origin-left"
      />
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="absolute bottom-1/3 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-zinc-300 to-transparent dark:via-zinc-700 origin-right"
      />
    </div>
  );
};

export default Hero3DCharacter;
