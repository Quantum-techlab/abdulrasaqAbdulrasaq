import { motion } from 'framer-motion';

export const Hero3DCharacter = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main floating 3D-like geometric character */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Central core */}
        <motion.div
          className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 15, 0, -15, 0],
          }}
          transition={{
            rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          {/* Outer ring 1 */}
          <motion.div
            className="absolute inset-0 border-2 border-blue-500/10 dark:border-blue-400/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Outer ring 2 */}
          <motion.div
            className="absolute inset-8 border border-purple-500/10 dark:border-purple-400/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Outer ring 3 */}
          <motion.div
            className="absolute inset-16 border border-cyan-500/8 dark:border-cyan-400/8 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 60}deg) translateY(-180px)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <div 
                className={`w-4 h-4 rounded-full ${
                  i % 3 === 0 
                    ? 'bg-blue-500/20' 
                    : i % 3 === 1 
                    ? 'bg-purple-500/20' 
                    : 'bg-cyan-500/20'
                }`}
                style={{
                  boxShadow: i % 3 === 0 
                    ? '0 0 20px rgba(59, 130, 246, 0.3)' 
                    : i % 3 === 1 
                    ? '0 0 20px rgba(139, 92, 246, 0.3)'
                    : '0 0 20px rgba(6, 182, 212, 0.3)',
                }}
              />
            </motion.div>
          ))}

          {/* Inner orbiting elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 90}deg) translateX(120px)`,
                }}
              >
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Central glowing core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.1)',
              }}
            />
          </div>

          {/* Floating code brackets */}
          <motion.div
            className="absolute top-1/4 left-1/4 text-4xl text-blue-500/10 font-mono font-bold"
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            {"</>"}
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 text-4xl text-purple-500/10 font-mono font-bold"
            animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {"{ }"}
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/3 text-3xl text-cyan-500/10 font-mono font-bold"
            animate={{ y: [-8, 8, -8], x: [-5, 5, -5] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            {"=>"}
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient gradient orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
          y: [10, -10, 10],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-cyan-500/5 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
};

export default Hero3DCharacter;
