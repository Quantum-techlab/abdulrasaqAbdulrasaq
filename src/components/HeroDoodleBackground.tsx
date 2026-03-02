import React from 'react';
import { motion } from 'framer-motion';

const softDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 3, delay, ease: "easeOut" as const }
  })
};

const softFade = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay } }
});

// Muted charcoal/pencil palette
const pencil = {
  dark: 'hsl(210 8% 35%)',
  medium: 'hsl(210 6% 50%)',
  light: 'hsl(210 5% 65%)',
  warm: 'hsl(25 12% 48%)',
  cool: 'hsl(195 10% 45%)',
};

export const HeroDoodleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Loose loopy spiral — top left */}
      <motion.svg className="absolute top-[6%] left-[4%] w-40 h-40" viewBox="0 0 150 150" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path
          d="M75 75 C75 68,82 62,88 66 C94 70,90 80,83 80 C76 80,70 72,74 65 C78 58,90 54,96 60 C102 66,98 82,88 85 C78 88,65 80,68 68 C71 56,86 48,98 56"
          stroke={pencil.medium} strokeWidth="0.9" strokeLinecap="round" fill="none"
          opacity="0.35" custom={0.3} variants={softDraw}
          style={{ filter: 'url(#pencilTexture)' }}
        />
      </motion.svg>

      {/* Gentle wispy curves — top right */}
      <motion.svg className="absolute top-[10%] right-[6%] w-44 h-32" viewBox="0 0 180 120" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path
          d="M10 60 C30 30,60 90,90 50 C120 10,150 70,170 45"
          stroke={pencil.light} strokeWidth="0.8" strokeLinecap="round" fill="none"
          opacity="0.3" custom={0.5} variants={softDraw} />
        <motion.path
          d="M20 80 C50 55,80 95,110 70 C140 45,160 85,175 65"
          stroke={pencil.warm} strokeWidth="0.7" strokeLinecap="round" fill="none"
          opacity="0.2" custom={0.8} variants={softDraw} />
      </motion.svg>

      {/* Loose cloud puff — center left */}
      <motion.svg className="absolute top-[30%] left-[2%] w-36 h-24" viewBox="0 0 140 80" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path
          d="M20 55 C8 55,5 42,15 38 C10 25,25 18,38 24 C35 12,55 8,62 18 C68 8,88 10,90 22 C102 16,118 22,112 35 C125 38,122 55,108 55 C100 58,85 56,75 55 C60 57,40 58,20 55"
          stroke={pencil.dark} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
          opacity="0.2" custom={0.6} variants={softDraw} />
      </motion.svg>

      {/* Small scattered dots — organic placement */}
      {[
        [18, 15, 2.5, pencil.medium, 0.2],
        [82, 8, 2, pencil.warm, 0.18],
        [35, 72, 3, pencil.cool, 0.15],
        [68, 78, 2, pencil.medium, 0.2],
        [90, 65, 2.5, pencil.light, 0.18],
        [12, 55, 1.8, pencil.warm, 0.22],
        [55, 12, 2.2, pencil.dark, 0.15],
        [42, 88, 2.8, pencil.cool, 0.18],
      ].map(([x, y, r, color, op], i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${x}%`, top: `${y}%`,
            width: (r as number) * 2, height: (r as number) * 2,
            backgroundColor: color as string,
            opacity: 0,
          }}
          animate={{ opacity: [0, op as number, (op as number) * 0.5, op as number] }}
          transition={{ duration: 6 + i * 0.5, delay: 0.8 + i * 0.15, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}

      {/* Delicate leaf/branch — right side */}
      <motion.svg className="absolute top-[45%] right-[3%] w-20 h-44" viewBox="0 0 60 160" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path
          d="M30 10 C30 30,28 50,30 70 C32 90,28 120,30 150"
          stroke={pencil.cool} strokeWidth="0.7" strokeLinecap="round" fill="none"
          opacity="0.25" custom={0.4} variants={softDraw} />
        {/* Tiny leaves */}
        <motion.path d="M30 35 C22 28,18 32,24 38" stroke={pencil.cool} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.2" custom={0.7} variants={softDraw} />
        <motion.path d="M30 55 C38 48,42 52,36 58" stroke={pencil.cool} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.2" custom={0.9} variants={softDraw} />
        <motion.path d="M30 80 C22 73,17 77,24 83" stroke={pencil.cool} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.18" custom={1.1} variants={softDraw} />
        <motion.path d="M30 105 C38 98,43 102,36 108" stroke={pencil.cool} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.18" custom={1.3} variants={softDraw} />
      </motion.svg>

      {/* Gentle squiggle — bottom left */}
      <motion.svg className="absolute bottom-[12%] left-[8%] w-48 h-10" viewBox="0 0 200 30" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path
          d="M5 15 Q15 5,25 15 Q35 25,45 15 Q55 5,65 15 Q75 25,85 15 Q95 5,105 15 Q115 25,125 15 Q135 5,145 15 Q155 25,165 15 Q175 5,190 15"
          stroke={pencil.light} strokeWidth="0.7" strokeLinecap="round" fill="none"
          opacity="0.2" custom={1} variants={softDraw} />
      </motion.svg>

      {/* Abstract loose circle — top center */}
      <motion.svg className="absolute top-[4%] left-[42%] w-20 h-20" viewBox="0 0 60 60" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path
          d="M30 8 C42 6,54 18,52 30 C50 42,40 54,28 52 C16 50,6 40,8 28 C10 16,20 10,30 8"
          stroke={pencil.warm} strokeWidth="0.8" strokeLinecap="round" fill="none"
          opacity="0.22" custom={0.5} variants={softDraw} />
      </motion.svg>

      {/* Tiny asterisks — like pencil marks */}
      {[
        [28, 25], [72, 18], [88, 40], [15, 80], [60, 85], [45, 35],
      ].map(([x, y], i) => (
        <motion.svg key={`ast-${i}`} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          variants={softFade(1.2 + i * 0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <line x1="5" y1="1" x2="5" y2="9" stroke={pencil.medium} strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
          <line x1="1" y1="5" x2="9" y2="5" stroke={pencil.medium} strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
          <line x1="2" y1="2" x2="8" y2="8" stroke={pencil.medium} strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
        </motion.svg>
      ))}

      {/* Loose parenthesis marks — like margin notes */}
      <motion.svg className="absolute top-[60%] left-[5%] w-10 h-28" viewBox="0 0 30 90" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M20 5 C5 20,5 70,20 85" stroke={pencil.dark} strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.18" custom={0.8} variants={softDraw} />
      </motion.svg>

      <motion.svg className="absolute top-[55%] right-[7%] w-10 h-28" viewBox="0 0 30 90" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M10 5 C25 20,25 70,10 85" stroke={pencil.dark} strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.18" custom={1} variants={softDraw} />
      </motion.svg>

      {/* Bottom right — gentle arc with shading */}
      <motion.svg className="absolute bottom-[18%] right-[10%] w-32 h-20" viewBox="0 0 120 60" fill="none"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path
          d="M10 50 C20 15,50 5,70 10 C90 15,110 35,115 50"
          stroke={pencil.warm} strokeWidth="0.8" strokeLinecap="round" fill="none"
          opacity="0.2" custom={1.2} variants={softDraw} />
        <motion.path
          d="M15 48 C25 20,50 10,68 14 C86 18,108 38,112 48"
          stroke={pencil.warm} strokeWidth="0.5" strokeLinecap="round" fill="none"
          opacity="0.1" custom={1.4} variants={softDraw} />
      </motion.svg>

      {/* Floating gentle orbs — barely visible */}
      {[
        [10, 40, 8], [88, 30, 6], [50, 75, 10], [75, 85, 7], [25, 90, 9],
      ].map(([x, y, size], i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${x}%`, top: `${y}%`,
            width: size, height: size,
            border: `0.8px solid ${i % 2 === 0 ? pencil.light : pencil.cool}`,
            opacity: 0,
          }}
          animate={{ y: [0, -6, 0], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 7 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Pencil texture filter */}
      <svg width="0" height="0">
        <defs>
          <filter id="pencilTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
