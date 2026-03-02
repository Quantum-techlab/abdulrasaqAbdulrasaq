import React from 'react';
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, delay, ease: "easeInOut" as const }
  })
};

const fade = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, delay } }
});

export const HeroDoodleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-left cluster: spirals + small circles */}
      <motion.svg className="absolute top-[8%] left-[5%] w-32 h-32" viewBox="0 0 120 120" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M60 60 C60 50,70 40,80 45 C90 50,85 65,75 65 C65 65,55 55,60 45 C65 35,80 30,90 40"
          stroke="hsl(185 55% 38%)" strokeWidth="1.5" strokeLinecap="round" fill="none"
          custom={0.2} variants={draw} />
        <motion.circle cx="30" cy="90" r="8" stroke="hsl(38 80% 55%)" strokeWidth="1.2" fill="none"
          strokeDasharray="3 4" custom={0.5} variants={draw} />
        <motion.circle cx="20" cy="40" r="4" fill="hsl(12 72% 58%)" fillOpacity="0.2"
          variants={fade(0.8)} />
      </motion.svg>

      {/* Top-right: scattered x marks + dots */}
      <motion.svg className="absolute top-[12%] right-[8%] w-28 h-28" viewBox="0 0 100 100" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {[[20,25],[60,15],[80,55],[35,70]].map(([x,y], i) => (
          <motion.g key={i} custom={0.1 * i} variants={draw}>
            <line x1={x-6} y1={y-6} x2={x+6} y2={y+6} stroke="hsl(12 72% 58%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <line x1={x+6} y1={y-6} x2={x-6} y2={y+6} stroke="hsl(12 72% 58%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          </motion.g>
        ))}
        <motion.circle cx="50" cy="45" r="3" fill="hsl(38 80% 55%)" fillOpacity="0.35" variants={fade(0.6)} />
      </motion.svg>

      {/* Left side: wavy lines */}
      <motion.svg className="absolute top-[35%] left-[3%] w-20 h-48" viewBox="0 0 60 180" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M30 10 C10 30,50 50,30 70 C10 90,50 110,30 130 C10 150,50 170,30 180"
          stroke="hsl(38 80% 55%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3"
          custom={0.3} variants={draw} />
        <motion.path d="M45 20 C25 40,55 60,40 80"
          stroke="hsl(185 55% 38%)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2"
          custom={0.6} variants={draw} />
      </motion.svg>

      {/* Right side: brackets + hash marks */}
      <motion.svg className="absolute top-[40%] right-[4%] w-24 h-36" viewBox="0 0 80 120" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M20 10 L10 10 L10 50 L20 50" stroke="hsl(185 55% 38%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" custom={0.4} variants={draw} />
        <motion.path d="M60 30 L70 30 L70 70 L60 70" stroke="hsl(185 55% 38%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" custom={0.6} variants={draw} />
        {/* Hash / code symbol */}
        <motion.path d="M30 80 L35 110 M45 80 L40 110 M25 90 L50 90 M27 100 L48 100"
          stroke="hsl(12 72% 58%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" custom={0.8} variants={draw} />
      </motion.svg>

      {/* Bottom-left: cloud doodle */}
      <motion.svg className="absolute bottom-[15%] left-[10%] w-36 h-20" viewBox="0 0 140 70" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M25 50 C10 50,5 35,20 30 C15 15,35 10,45 20 C50 5,75 5,80 18 C95 10,115 15,110 30 C125 35,120 50,105 50 Z"
          stroke="hsl(38 80% 55%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25"
          custom={0.5} variants={draw} />
      </motion.svg>

      {/* Center-top: tiny stars scatter */}
      {[[25, 6], [45, 18], [70, 8], [85, 22], [15, 20], [55, 5]].map(([x, y], i) => (
        <motion.svg key={`star-${i}`} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.4, 0.15, 0.4], scale: 1 }}
          transition={{ duration: 3, delay: 0.2 * i, repeat: Infinity, repeatType: "reverse" }}>
          <path d="M7 1 L8.5 5 L13 5.5 L9.5 8.5 L10.5 13 L7 10.5 L3.5 13 L4.5 8.5 L1 5.5 L5.5 5 Z"
            stroke={i % 3 === 0 ? "hsl(185 55% 38%)" : i % 3 === 1 ? "hsl(12 72% 58%)" : "hsl(38 80% 55%)"}
            strokeWidth="0.8" fill="none" />
        </motion.svg>
      ))}

      {/* Bottom-right: lightbulb doodle */}
      <motion.svg className="absolute bottom-[20%] right-[12%] w-16 h-24" viewBox="0 0 50 80" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M25 5 C10 5,5 20,15 32 C18 38,18 42,18 48 L32 48 C32 42,32 38,35 32 C45 20,40 5,25 5 Z"
          stroke="hsl(38 80% 55%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3"
          custom={0.7} variants={draw} />
        <motion.path d="M18 52 L32 52 M20 56 L30 56 M22 60 L28 60"
          stroke="hsl(38 80% 55%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" custom={1} variants={draw} />
        {/* Rays */}
        <motion.path d="M25 0 L25 -3 M10 8 L7 5 M40 8 L43 5 M5 25 L1 25 M45 25 L49 25"
          stroke="hsl(38 80% 55%)" strokeWidth="1" strokeLinecap="round" opacity="0.2" custom={1.2} variants={draw} />
      </motion.svg>

      {/* Left-center: zigzag lines */}
      <motion.svg className="absolute top-[55%] left-[6%] w-16 h-20" viewBox="0 0 50 70" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M5 10 L20 25 L5 40 L20 55" stroke="hsl(12 72% 58%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2" custom={0.4} variants={draw} />
        <motion.path d="M30 15 L45 30 L30 45" stroke="hsl(185 55% 38%)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.15" custom={0.7} variants={draw} />
      </motion.svg>

      {/* Scattered dots grid - top center */}
      <motion.svg className="absolute top-[5%] left-[40%] w-24 h-16" viewBox="0 0 90 60" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {[...Array(12)].map((_, i) => (
          <motion.circle key={i} cx={10 + (i % 4) * 22} cy={12 + Math.floor(i / 4) * 18} r="2"
            fill={i % 3 === 0 ? "hsl(185 55% 38%)" : i % 3 === 1 ? "hsl(12 72% 58%)" : "hsl(38 80% 55%)"}
            fillOpacity="0.25"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.05 * i + 0.5 }} />
        ))}
      </motion.svg>

      {/* Bottom-center: squiggly underline */}
      <motion.svg className="absolute bottom-[8%] left-[30%] w-40 h-6" viewBox="0 0 160 20" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M0 10 Q8 2,16 10 Q24 18,32 10 Q40 2,48 10 Q56 18,64 10 Q72 2,80 10 Q88 18,96 10 Q104 2,112 10 Q120 18,128 10 Q136 2,144 10 Q152 18,160 10"
          stroke="hsl(185 55% 38%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2"
          custom={0.8} variants={draw} />
      </motion.svg>

      {/* Top-left: triangle doodle */}
      <motion.svg className="absolute top-[25%] left-[18%] w-12 h-12" viewBox="0 0 40 40" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M20 5 L35 35 L5 35 Z" stroke="hsl(12 72% 58%)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.2" custom={0.6} variants={draw} />
      </motion.svg>

      {/* Right: diamond */}
      <motion.svg className="absolute top-[25%] right-[18%] w-10 h-14" viewBox="0 0 36 50" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M18 3 L33 25 L18 47 L3 25 Z" stroke="hsl(38 80% 55%)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.2" custom={0.9} variants={draw} />
      </motion.svg>

      {/* Bottom: small arrows pointing random directions */}
      {[[20, 85], [75, 90], [50, 92]].map(([x, y], i) => (
        <motion.svg key={`arrow-${i}`} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: `rotate(${i * 120}deg)` }}
          width="24" height="16" viewBox="0 0 24 16" fill="none"
          initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1 + i * 0.3 }}>
          <path d="M2 8 L18 8 M14 3 L20 8 L14 13" stroke="hsl(185 55% 38%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      ))}

      {/* Floating circles - organic feel */}
      {[[8, 70], [92, 45], [88, 75], [12, 50]].map(([x, y], i) => (
        <motion.div key={`orb-${i}`} className="absolute rounded-full"
          style={{
            left: `${x}%`, top: `${y}%`,
            width: 6 + i * 3, height: 6 + i * 3,
            border: `1.2px solid ${i % 2 === 0 ? 'hsl(185 55% 38% / 0.2)' : 'hsl(12 72% 58% / 0.2)'}`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Pencil scribble lines - top right area */}
      <motion.svg className="absolute top-[15%] right-[30%] w-20 h-12" viewBox="0 0 70 40" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M5 20 C15 10,25 30,35 15 C45 0,55 25,65 18" stroke="hsl(185 55% 38%)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.18" custom={1.1} variants={draw} />
        <motion.path d="M10 28 C20 18,30 38,40 23 C50 8,60 33,68 26" stroke="hsl(38 80% 55%)" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.12" custom={1.4} variants={draw} />
      </motion.svg>
    </div>
  );
};
