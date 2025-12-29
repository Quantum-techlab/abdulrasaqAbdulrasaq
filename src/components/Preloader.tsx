import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<'entering' | 'colliding' | 'merged' | 'exiting'>('entering');

  useEffect(() => {
    // Phase timing
    const timers = [
      setTimeout(() => setPhase('colliding'), 1200),
      setTimeout(() => setPhase('merged'), 1800),
      setTimeout(() => setPhase('exiting'), 2800),
      setTimeout(() => onComplete(), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exiting' ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
          exit={{ 
            opacity: 0,
            scale: 1.1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: 0 
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Radial glow background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'merged' ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl" />
          </motion.div>

          {/* Main container for the A letters */}
          <div className="relative flex items-center justify-center">
            
            {/* Left A - Character coming from left */}
            <motion.div
              className="absolute"
              initial={{ x: -300, opacity: 0, rotate: -20 }}
              animate={
                phase === 'entering' 
                  ? { x: -300, opacity: 1, rotate: -20 }
                  : phase === 'colliding'
                  ? { x: -40, opacity: 1, rotate: 0 }
                  : { x: 0, opacity: 0, rotate: 0, scale: 0.5 }
              }
              transition={{ 
                duration: phase === 'entering' ? 0.8 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.span
                className="text-[150px] md:text-[200px] font-black select-none"
                style={{
                  background: phase === 'merged' 
                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)'
                    : 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
                }}
                animate={{
                  filter: phase === 'colliding' 
                    ? 'drop-shadow(0 0 60px rgba(139, 92, 246, 0.8))'
                    : 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
                }}
              >
                A
              </motion.span>
            </motion.div>

            {/* Right A - Character coming from right */}
            <motion.div
              className="absolute"
              initial={{ x: 300, opacity: 0, rotate: 20 }}
              animate={
                phase === 'entering' 
                  ? { x: 300, opacity: 1, rotate: 20 }
                  : phase === 'colliding'
                  ? { x: 40, opacity: 1, rotate: 0 }
                  : { x: 0, opacity: 0, rotate: 0, scale: 0.5 }
              }
              transition={{ 
                duration: phase === 'entering' ? 0.8 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.span
                className="text-[150px] md:text-[200px] font-black select-none"
                style={{
                  background: phase === 'merged' 
                    ? 'linear-gradient(135deg, #06b6d4, #8b5cf6, #3b82f6)'
                    : 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))',
                }}
                animate={{
                  filter: phase === 'colliding' 
                    ? 'drop-shadow(0 0 60px rgba(59, 130, 246, 0.8))'
                    : 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))',
                }}
              >
                A
              </motion.span>
            </motion.div>

            {/* Merged AA - Appears after collision */}
            <motion.div
              className="absolute"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                phase === 'merged' 
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="relative"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span
                  className="text-[120px] md:text-[160px] font-black select-none tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #8b5cf6, #3b82f6)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.6))',
                    animation: 'gradientShift 2s ease infinite',
                  }}
                >
                  AA
                </span>
                
                {/* Glow ring effect */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-blue-500/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Collision spark effects */}
            <AnimatePresence>
              {phase === 'colliding' && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: i % 2 === 0 
                          ? 'linear-gradient(135deg, #3b82f6, #60a5fa)' 
                          : 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
                      }}
                      initial={{ 
                        x: 0, 
                        y: 0, 
                        scale: 1,
                        opacity: 1 
                      }}
                      animate={{ 
                        x: Math.cos(i * 30 * Math.PI / 180) * 150,
                        y: Math.sin(i * 30 * Math.PI / 180) * 150,
                        scale: 0,
                        opacity: 0,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Shockwave effect on collision */}
            <AnimatePresence>
              {(phase === 'colliding' || phase === 'merged') && (
                <motion.div
                  className="absolute w-4 h-4 rounded-full border-4 border-white/50"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 30, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Loading text */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.p
              className="text-white/60 text-sm md:text-base font-medium tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {phase === 'entering' && 'Loading...'}
              {phase === 'colliding' && 'Initializing...'}
              {phase === 'merged' && 'Welcome'}
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ 
                width: phase === 'entering' ? '30%' 
                  : phase === 'colliding' ? '60%' 
                  : '100%' 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
