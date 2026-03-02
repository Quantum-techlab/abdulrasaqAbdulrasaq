import React from 'react';
import { motion } from 'framer-motion';

const softDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.5, delay, ease: "easeOut" as const }
  })
};

const pencil = {
  dark: 'hsl(210 8% 35%)',
  medium: 'hsl(210 6% 50%)',
  light: 'hsl(210 5% 65%)',
  warm: 'hsl(25 12% 48%)',
  cool: 'hsl(195 10% 45%)',
};

// Reusable small doodle primitives
const Spiral = ({ x, y, scale = 1, color = pencil.medium, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: 50 * scale, height: 50 * scale }} viewBox="0 0 50 50" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M25 25C25 22,28 19,31 21C34 23,32 28,29 28C26 28,23 25,24 22C25 19,30 17,33 19C36 21,35 28,31 30C27 32,21 29,22 24" stroke={color} strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.3" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Squiggle = ({ x, y, w = 80, color = pencil.light, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: w, height: 16 }} viewBox={`0 0 ${w} 16`} fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d={`M2 8Q${w*0.1} 2,${w*0.2} 8Q${w*0.3} 14,${w*0.4} 8Q${w*0.5} 2,${w*0.6} 8Q${w*0.7} 14,${w*0.8} 8Q${w*0.9} 2,${w-2} 8`} stroke={color} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.25" custom={delay} variants={softDraw} />
  </motion.svg>
);

const LooseCircle = ({ x, y, r = 18, color = pencil.warm, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: r * 2 + 10, height: r * 2 + 10 }} viewBox={`0 0 ${r*2+10} ${r*2+10}`} fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d={`M${r+5} ${5}C${r*1.8+5} ${3},${r*2+5} ${r*0.8},${r*2+3} ${r+5}C${r*2+5} ${r*1.5},${r*1.3+5} ${r*2+5},${r+5} ${r*2+3}C${r*0.5} ${r*2+5},${3} ${r*1.4},${5} ${r+5}C${3} ${r*0.5},${r*0.7} ${3},${r+5} ${5}`} stroke={color} strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.22" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Cross = ({ x, y, size = 10, color = pencil.medium, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }} viewBox="0 0 10 10" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M2 2L8 8M8 2L2 8" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.2" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Dot = ({ x, y, r = 2, color = pencil.dark }: any) => (
  <motion.div className="absolute rounded-full" style={{ left: `${x}%`, top: `${y}%`, width: r * 2, height: r * 2, backgroundColor: color }}
    initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} transition={{ delay: Math.random() * 2 + 0.5 }} />
);

const Arc = ({ x, y, w = 60, color = pencil.cool, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: w, height: w * 0.5 }} viewBox={`0 0 ${w} ${w*0.5}`} fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d={`M5 ${w*0.45}C${w*0.25} ${w*0.05},${w*0.75} ${w*0.05},${w-5} ${w*0.45}`} stroke={color} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.2" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Triangle = ({ x, y, size = 20, color = pencil.light, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }} viewBox="0 0 24 24" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M12 3L22 21L2 21Z" stroke={color} strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.18" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Diamond = ({ x, y, size = 16, color = pencil.warm, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: size, height: size * 1.3 }} viewBox="0 0 20 26" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M10 2L18 13L10 24L2 13Z" stroke={color} strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.18" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Leaf = ({ x, y, size = 20, color = pencil.cool, delay = 0, flip = false }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, transform: flip ? 'scaleX(-1)' : 'none' }} viewBox="0 0 24 24" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M4 20C4 12,12 4,20 4C20 12,12 20,4 20Z" stroke={color} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.2" custom={delay} variants={softDraw} />
    <motion.path d="M4 20C8 16,14 10,20 4" stroke={color} strokeWidth="0.4" strokeLinecap="round" fill="none" opacity="0.15" custom={delay + 0.3} variants={softDraw} />
  </motion.svg>
);

const Star = ({ x, y, size = 12, color = pencil.medium, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }} viewBox="0 0 12 12" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M6 1L7.2 4.5L11 4.8L8.2 7.2L9 11L6 9L3 11L3.8 7.2L1 4.8L4.8 4.5Z" stroke={color} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.2" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Wave = ({ x, y, w = 100, color = pencil.light, delay = 0 }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: w, height: 20 }} viewBox={`0 0 ${w} 20`} fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d={`M0 10C${w*0.08} 3,${w*0.17} 17,${w*0.25} 10C${w*0.33} 3,${w*0.42} 17,${w*0.5} 10C${w*0.58} 3,${w*0.67} 17,${w*0.75} 10C${w*0.83} 3,${w*0.92} 17,${w} 10`} stroke={color} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.2" custom={delay} variants={softDraw} />
  </motion.svg>
);

const Bracket = ({ x, y, size = 30, color = pencil.dark, delay = 0, right = false }: any) => (
  <motion.svg className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: size * 0.4, height: size }} viewBox="0 0 12 30" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d={right ? "M3 2C9 6,9 24,3 28" : "M9 2C3 6,3 24,9 28"} stroke={color} strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.18" custom={delay} variants={softDraw} />
  </motion.svg>
);

export const HeroDoodleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ===== ROW 1: Top 0-15% ===== */}
      <Spiral x={2} y={2} scale={1.2} color={pencil.medium} delay={0.1} />
      <Squiggle x={12} y={5} w={90} color={pencil.light} delay={0.2} />
      <Cross x={22} y={3} delay={0.15} />
      <Dot x={28} y={8} r={2} color={pencil.warm} />
      <LooseCircle x={30} y={1} r={14} color={pencil.cool} delay={0.3} />
      <Star x={40} y={4} size={14} delay={0.25} />
      <Squiggle x={45} y={10} w={70} color={pencil.warm} delay={0.4} />
      <Dot x={55} y={3} r={1.5} color={pencil.medium} />
      <Triangle x={58} y={5} size={18} color={pencil.light} delay={0.35} />
      <Cross x={65} y={2} delay={0.2} />
      <Spiral x={68} y={6} scale={0.8} color={pencil.warm} delay={0.45} />
      <Dot x={75} y={9} r={2.5} color={pencil.cool} />
      <Arc x={78} y={2} w={50} color={pencil.medium} delay={0.3} />
      <Diamond x={88} y={4} size={14} color={pencil.light} delay={0.5} />
      <Dot x={92} y={8} r={1.8} color={pencil.dark} />
      <Cross x={96} y={3} size={8} delay={0.15} />

      {/* ===== ROW 2: 15-30% ===== */}
      <Wave x={1} y={16} w={110} color={pencil.cool} delay={0.3} />
      <Leaf x={8} y={20} size={18} color={pencil.cool} delay={0.5} />
      <Diamond x={15} y={18} size={12} delay={0.4} />
      <Dot x={20} y={22} r={2} color={pencil.warm} />
      <Cross x={25} y={17} delay={0.25} />
      <Spiral x={30} y={22} scale={0.9} color={pencil.light} delay={0.55} />
      <Squiggle x={38} y={25} w={65} color={pencil.medium} delay={0.6} />
      <Star x={42} y={18} size={11} color={pencil.warm} delay={0.35} />
      <Dot x={48} y={28} r={1.8} color={pencil.cool} />
      <LooseCircle x={52} y={17} r={12} color={pencil.warm} delay={0.45} />
      <Bracket x={58} y={20} delay={0.5} />
      <Leaf x={63} y={24} size={16} flip delay={0.65} />
      <Arc x={68} y={18} w={45} color={pencil.warm} delay={0.4} />
      <Cross x={75} y={26} size={9} delay={0.3} />
      <Triangle x={78} y={19} size={15} color={pencil.cool} delay={0.55} />
      <Squiggle x={82} y={28} w={80} color={pencil.light} delay={0.7} />
      <Dot x={90} y={20} r={2.2} color={pencil.medium} />
      <Star x={94} y={25} size={13} color={pencil.cool} delay={0.45} />

      {/* ===== ROW 3: 30-45% ===== */}
      <Bracket x={2} y={32} size={35} delay={0.4} />
      <Squiggle x={6} y={38} w={75} color={pencil.warm} delay={0.5} />
      <Dot x={12} y={33} r={2.5} color={pencil.light} />
      <LooseCircle x={14} y={36} r={16} color={pencil.medium} delay={0.6} />
      <Cross x={22} y={40} delay={0.35} />
      <Star x={26} y={34} size={12} color={pencil.warm} delay={0.55} />
      <Wave x={30} y={42} w={90} color={pencil.cool} delay={0.65} />
      <Diamond x={38} y={33} size={13} color={pencil.cool} delay={0.5} />
      <Leaf x={44} y={38} size={20} delay={0.7} />
      <Dot x={50} y={44} r={1.5} color={pencil.dark} />
      <Spiral x={54} y={35} scale={1} color={pencil.warm} delay={0.6} />
      <Cross x={62} y={42} size={8} delay={0.4} />
      <Triangle x={66} y={34} size={16} color={pencil.medium} delay={0.65} />
      <Arc x={72} y={40} w={55} color={pencil.light} delay={0.55} />
      <Bracket x={80} y={33} size={28} right delay={0.5} />
      <Dot x={84} y={38} r={2} color={pencil.warm} />
      <Squiggle x={86} y={44} w={70} color={pencil.medium} delay={0.75} />
      <Star x={94} y={36} size={10} color={pencil.light} delay={0.6} />

      {/* ===== ROW 4: 45-60% ===== */}
      <Arc x={1} y={48} w={60} color={pencil.warm} delay={0.5} />
      <Cross x={8} y={52} delay={0.3} />
      <Diamond x={12} y={48} size={15} color={pencil.medium} delay={0.55} />
      <Dot x={18} y={55} r={2} color={pencil.cool} />
      <Wave x={20} y={50} w={85} color={pencil.warm} delay={0.6} />
      <Leaf x={28} y={56} size={17} flip color={pencil.cool} delay={0.7} />
      <Spiral x={34} y={48} scale={1.1} color={pencil.light} delay={0.65} />
      <Squiggle x={42} y={58} w={60} color={pencil.dark} delay={0.75} />
      <Star x={48} y={50} size={13} color={pencil.warm} delay={0.55} />
      <LooseCircle x={54} y={52} r={13} color={pencil.cool} delay={0.6} />
      <Cross x={60} y={48} size={9} delay={0.4} />
      <Dot x={65} y={56} r={1.8} color={pencil.medium} />
      <Triangle x={70} y={50} size={14} color={pencil.warm} delay={0.65} />
      <Leaf x={76} y={54} size={19} delay={0.75} />
      <Bracket x={82} y={48} delay={0.55} />
      <Arc x={86} y={56} w={50} color={pencil.cool} delay={0.7} />
      <Dot x={92} y={50} r={2.5} color={pencil.light} />
      <Cross x={96} y={58} size={7} delay={0.45} />

      {/* ===== ROW 5: 60-75% ===== */}
      <Squiggle x={2} y={62} w={95} color={pencil.cool} delay={0.6} />
      <Star x={8} y={68} size={12} color={pencil.medium} delay={0.5} />
      <LooseCircle x={14} y={64} r={11} color={pencil.warm} delay={0.7} />
      <Dot x={20} y={70} r={2} color={pencil.dark} />
      <Diamond x={24} y={63} size={13} color={pencil.light} delay={0.55} />
      <Wave x={30} y={72} w={80} color={pencil.medium} delay={0.75} />
      <Cross x={36} y={65} delay={0.4} />
      <Leaf x={40} y={68} size={16} flip delay={0.65} />
      <Spiral x={46} y={62} scale={0.9} color={pencil.cool} delay={0.7} />
      <Dot x={52} y={74} r={1.5} color={pencil.warm} />
      <Triangle x={56} y={66} size={17} color={pencil.cool} delay={0.6} />
      <Arc x={62} y={70} w={48} color={pencil.warm} delay={0.65} />
      <Bracket x={70} y={63} size={30} right delay={0.55} />
      <Squiggle x={74} y={74} w={65} color={pencil.light} delay={0.8} />
      <Star x={80} y={65} size={11} color={pencil.dark} delay={0.5} />
      <Cross x={86} y={72} size={8} delay={0.35} />
      <LooseCircle x={90} y={64} r={15} color={pencil.medium} delay={0.7} />
      <Dot x={96} y={70} r={2.2} color={pencil.cool} />

      {/* ===== ROW 6: 75-90% ===== */}
      <Leaf x={3} y={78} size={18} delay={0.6} />
      <Cross x={8} y={82} delay={0.35} />
      <Wave x={12} y={76} w={100} color={pencil.warm} delay={0.7} />
      <Diamond x={18} y={84} size={12} color={pencil.cool} delay={0.55} />
      <Dot x={24} y={78} r={2} color={pencil.medium} />
      <Spiral x={28} y={82} scale={1} color={pencil.light} delay={0.75} />
      <Squiggle x={35} y={88} w={70} color={pencil.dark} delay={0.8} />
      <Star x={40} y={78} size={14} color={pencil.warm} delay={0.6} />
      <LooseCircle x={46} y={82} r={12} color={pencil.cool} delay={0.65} />
      <Arc x={52} y={86} w={55} color={pencil.medium} delay={0.7} />
      <Cross x={58} y={78} size={9} delay={0.4} />
      <Triangle x={62} y={84} size={15} color={pencil.warm} delay={0.75} />
      <Dot x={68} y={80} r={1.8} color={pencil.light} />
      <Leaf x={72} y={86} size={17} flip color={pencil.cool} delay={0.8} />
      <Bracket x={78} y={78} delay={0.55} />
      <Squiggle x={82} y={84} w={75} color={pencil.warm} delay={0.85} />
      <Star x={88} y={80} size={12} color={pencil.medium} delay={0.65} />
      <Diamond x={92} y={86} size={14} color={pencil.dark} delay={0.7} />
      <Dot x={97} y={82} r={2.5} color={pencil.cool} />

      {/* ===== ROW 7: 90-100% ===== */}
      <Squiggle x={3} y={92} w={85} color={pencil.medium} delay={0.7} />
      <Cross x={10} y={95} delay={0.4} />
      <LooseCircle x={16} y={92} r={10} color={pencil.warm} delay={0.75} />
      <Dot x={24} y={96} r={2} color={pencil.cool} />
      <Star x={30} y={93} size={11} color={pencil.light} delay={0.6} />
      <Wave x={36} y={96} w={70} color={pencil.cool} delay={0.8} />
      <Diamond x={44} y={92} size={13} color={pencil.medium} delay={0.65} />
      <Arc x={50} y={94} w={45} color={pencil.warm} delay={0.75} />
      <Leaf x={58} y={92} size={15} delay={0.7} />
      <Cross x={64} y={96} size={8} delay={0.45} />
      <Spiral x={70} y={92} scale={0.8} color={pencil.cool} delay={0.8} />
      <Dot x={78} y={95} r={1.8} color={pencil.dark} />
      <Triangle x={82} y={92} size={14} color={pencil.warm} delay={0.7} />
      <Squiggle x={88} y={96} w={60} color={pencil.light} delay={0.85} />
      <Dot x={95} y={93} r={2.2} color={pencil.medium} />
    </div>
  );
};
