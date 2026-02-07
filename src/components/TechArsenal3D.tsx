import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

// Falling leaf particle
interface FallingLeaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  emoji: string;
}

// Snowflake particle
interface Snowflake {
  id: number;
  x: number;
  delay: number;
  size: number;
}

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

interface TechBranch {
  name: string;
  color: string;
  gradient: string;
  techs: TechItem[];
}

// Salt and Pepper themed branches - using silver/gray tones
const techBranches: TechBranch[] = [
  {
    name: "Frontend",
    color: "#a1a1aa",
    gradient: "from-zinc-400 to-zinc-600",
    techs: [
      { name: "React", icon: "⚛️", color: "#a1a1aa" },
      { name: "TypeScript", icon: "📘", color: "#71717a" },
      { name: "JavaScript", icon: "💛", color: "#d4d4d8" },
      { name: "Tailwind", icon: "💨", color: "#a1a1aa" },
      { name: "Vite", icon: "⚡", color: "#52525b" },
      { name: "Next.js", icon: "▲", color: "#27272a" },
      { name: "HTML5", icon: "🌐", color: "#71717a" },
      { name: "CSS3", icon: "🎨", color: "#a1a1aa" },
    ]
  },
  {
    name: "Backend",
    color: "#71717a",
    gradient: "from-zinc-500 to-zinc-700",
    techs: [
      { name: "Node.js", icon: "💚", color: "#71717a" },
      { name: "Express", icon: "🚂", color: "#3f3f46" },
      { name: "REST APIs", icon: "🔗", color: "#a1a1aa" },
      { name: "GraphQL", icon: "◈", color: "#52525b" },
    ]
  },
  {
    name: "Database",
    color: "#d4d4d8",
    gradient: "from-zinc-300 to-zinc-500",
    techs: [
      { name: "Supabase", icon: "⚡", color: "#d4d4d8" },
      { name: "Firebase", icon: "🔥", color: "#fafafa" },
      { name: "PostgreSQL", icon: "🐘", color: "#a1a1aa" },
      { name: "MongoDB", icon: "🍃", color: "#71717a" },
    ]
  },
  {
    name: "AI & ML",
    color: "#52525b",
    gradient: "from-zinc-600 to-zinc-800",
    techs: [
      { name: "AI Integration", icon: "🤖", color: "#52525b" },
      { name: "ChatGPT API", icon: "💬", color: "#71717a" },
      { name: "Prompt Eng.", icon: "✨", color: "#a1a1aa" },
      { name: "ML Basics", icon: "🧠", color: "#3f3f46" },
    ]
  },
  {
    name: "DevOps",
    color: "#3f3f46",
    gradient: "from-zinc-700 to-zinc-900",
    techs: [
      { name: "Git/GitHub", icon: "🐙", color: "#18181b" },
      { name: "Docker", icon: "🐳", color: "#3f3f46" },
      { name: "Cloud", icon: "☁️", color: "#71717a" },
      { name: "Vercel", icon: "▲", color: "#27272a" },
    ]
  },
  {
    name: "Design",
    color: "#e4e4e7",
    gradient: "from-zinc-200 to-zinc-400",
    techs: [
      { name: "UI/UX", icon: "🎯", color: "#e4e4e7" },
      { name: "Responsive", icon: "📱", color: "#d4d4d8" },
      { name: "Figma", icon: "🎨", color: "#a1a1aa" },
    ]
  },
];

// Leaf component for each tech
const TechLeaf = ({ tech, index, side, branchIndex }: { 
  tech: TechItem; 
  index: number; 
  side: 'left' | 'right';
  branchIndex: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate position along branch
  const delay = branchIndex * 0.1 + index * 0.08;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${side === 'left' ? 'origin-right' : 'origin-left'}`}
    >
      {/* Stem connecting to branch */}
      <motion.div
        className={`absolute top-1/2 ${side === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-4 h-0.5 bg-gradient-to-r from-zinc-400/50 to-zinc-500/50`}
        style={{ transformOrigin: side === 'left' ? 'right' : 'left' }}
      />
      
      {/* Leaf shape */}
      <motion.div
        className="relative cursor-pointer"
        animate={{
          y: isHovered ? -5 : [0, -3, 0],
          rotate: isHovered ? 0 : [0, side === 'left' ? -2 : 2, 0],
        }}
        transition={{
          y: isHovered ? { duration: 0.2 } : { duration: 3, repeat: Infinity, delay: index * 0.2 },
          rotate: { duration: 4, repeat: Infinity, delay: index * 0.3 },
        }}
        whileHover={{ scale: 1.15 }}
      >
        {/* Leaf background */}
        <div 
          className="relative px-4 py-3 rounded-2xl backdrop-blur-md border-2 transition-all duration-300"
          style={{
            background: isHovered 
              ? `linear-gradient(135deg, ${tech.color}30, ${tech.color}50)` 
              : `linear-gradient(135deg, rgba(161, 161, 170, 0.1), rgba(113, 113, 122, 0.2))`,
            borderColor: isHovered ? tech.color : 'rgba(161, 161, 170, 0.3)',
            boxShadow: isHovered 
              ? `0 10px 40px ${tech.color}40, 0 0 20px ${tech.color}30` 
              : '0 4px 15px rgba(0,0,0,0.1)',
          }}
        >
          {/* Leaf vein pattern */}
          <div className="absolute inset-0 opacity-20 overflow-hidden rounded-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-zinc-400 to-transparent" />
            <div className="absolute top-1/2 left-1/4 w-px h-1/2 bg-gradient-to-b from-zinc-400/50 to-transparent rotate-45" />
            <div className="absolute top-1/2 right-1/4 w-px h-1/2 bg-gradient-to-b from-zinc-400/50 to-transparent -rotate-45" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            <motion.span
              className="text-2xl"
              animate={{ 
                rotateY: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {tech.icon}
            </motion.span>
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
          
          {/* Sparkle on hover */}
          {isHovered && (
            <motion.div
              className="absolute -top-1 -right-1"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-4 h-4 text-zinc-400" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Branch component
const TreeBranch = ({ branch, index, totalBranches }: { 
  branch: TechBranch; 
  index: number;
  totalBranches: number;
}) => {
  const isLeft = index % 2 === 0;
  const verticalPosition = ((index + 1) / (totalBranches + 1)) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`absolute ${isLeft ? 'right-1/2 pr-8' : 'left-1/2 pl-8'}`}
      style={{ top: `${verticalPosition}%`, transform: 'translateY(-50%)' }}
    >
      <div className={`flex items-center gap-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Branch line */}
        <motion.div
          className={`h-1 rounded-full bg-gradient-to-r ${branch.gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
        />
        
        {/* Branch label */}
        <motion.div
          className={`px-4 py-2 rounded-xl bg-gradient-to-r ${branch.gradient} shadow-lg`}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-bold text-white dark:text-zinc-900 whitespace-nowrap">
            {branch.name}
          </span>
        </motion.div>
        
        {/* Leaves container */}
        <div className={`flex flex-wrap gap-3 max-w-md ${isLeft ? 'justify-end' : 'justify-start'}`}>
          {branch.techs.map((tech, techIndex) => (
            <TechLeaf 
              key={tech.name} 
              tech={tech} 
              index={techIndex} 
              side={isLeft ? 'left' : 'right'}
              branchIndex={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const TechArsenal3D = () => {
  const [isGlowing, setIsGlowing] = useState(false);
  const [fallingLeaves, setFallingLeaves] = useState<FallingLeaf[]>([]);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [leafIdCounter, setLeafIdCounter] = useState(0);
  const [snowIdCounter, setSnowIdCounter] = useState(0);

  const leafEmojis = ['🍂', '🍃', '🌿', '🍀', '🌱', '☘️'];

  const handleTreeClick = useCallback(() => {
    // Trigger glow effect
    setIsGlowing(true);
    setTimeout(() => setIsGlowing(false), 2000);

    // Generate falling leaves
    const newLeaves: FallingLeaf[] = [];
    for (let i = 0; i < 8; i++) {
      newLeaves.push({
        id: leafIdCounter + i,
        x: 20 + Math.random() * 60, // Centered around tree
        delay: Math.random() * 0.3,
        duration: 2.5 + Math.random() * 1.5,
        emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
      });
    }
    setFallingLeaves(prev => [...prev, ...newLeaves]);
    setLeafIdCounter(prev => prev + 8);

    // Generate snowflakes
    const newSnowflakes: Snowflake[] = [];
    for (let i = 0; i < 12; i++) {
      newSnowflakes.push({
        id: snowIdCounter + i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        size: 0.5 + Math.random() * 1,
      });
    }
    setSnowflakes(prev => [...prev, ...newSnowflakes]);
    setSnowIdCounter(prev => prev + 12);

    // Clean up old particles after animation
    setTimeout(() => {
      setFallingLeaves(prev => prev.slice(8));
      setSnowflakes(prev => prev.slice(12));
    }, 5000);
  }, [leafIdCounter, snowIdCounter]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background - salt and pepper gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-100/30 to-zinc-50 dark:from-zinc-900 dark:via-zinc-800/20 dark:to-zinc-900" />
      
      {/* Animated gradient orbs - silver */}
      <div
        className="absolute top-40 left-20 w-72 h-72 rounded-full bg-zinc-400/10 blur-3xl animate-pulse"
      />
      <div
        className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-zinc-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Falling Leaves */}
      <AnimatePresence>
        {fallingLeaves.map((leaf) => (
          <motion.div
            key={`leaf-${leaf.id}`}
            className="absolute text-3xl pointer-events-none z-30"
            initial={{ 
              x: `${leaf.x}%`, 
              y: -50, 
              rotate: 0,
              opacity: 1 
            }}
            animate={{ 
              y: '120vh',
              x: [`${leaf.x}%`, `${leaf.x + 10}%`, `${leaf.x - 10}%`, `${leaf.x + 5}%`],
              rotate: [0, 180, 360, 540, 720],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: leaf.duration,
              delay: leaf.delay,
              ease: "easeIn",
              x: { duration: leaf.duration, ease: "easeInOut" }
            }}
          >
            {leaf.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Snowflakes */}
      <AnimatePresence>
        {snowflakes.map((snow) => (
          <motion.div
            key={`snow-${snow.id}`}
            className="absolute pointer-events-none z-30"
            style={{ fontSize: `${snow.size}rem` }}
            initial={{ 
              x: `${snow.x}%`, 
              y: -20, 
              opacity: 0.8 
            }}
            animate={{ 
              y: '110vh',
              x: [`${snow.x}%`, `${snow.x + 3}%`, `${snow.x - 3}%`, `${snow.x}%`],
              opacity: [0.8, 1, 0.6, 0.8],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              delay: snow.delay,
              ease: "linear",
              x: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            ❄️
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-500/10 border border-zinc-400/20 mb-6"
            animate={{ boxShadow: ["0 0 20px rgba(161, 161, 170, 0)", "0 0 20px rgba(161, 161, 170, 0.3)", "0 0 20px rgba(161, 161, 170, 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Growing Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-300 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My skills growing like branches on a tree — each technology a leaf in my ever-expanding knowledge
          </p>
        </motion.div>

        {/* Tree Structure */}
        <div 
          className="relative min-h-[800px] md:min-h-[700px] cursor-pointer select-none"
          onClick={handleTreeClick}
        >
          {/* Tree glow effect on click - silver */}
          <AnimatePresence>
            {isGlowing && (
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 0.8, 0.4, 0.6, 0],
                  scale: [0.5, 1.2, 1, 1.1, 1.3],
                }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  background: 'radial-gradient(circle, rgba(161, 161, 170, 0.4) 0%, rgba(113, 113, 122, 0.2) 40%, transparent 70%)',
                }}
              />
            )}
          </AnimatePresence>

          {/* Main trunk - silver/gray gradient */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 rounded-full"
            style={{
              background: 'linear-gradient(180deg, #3f3f46 0%, #52525b 30%, #71717a 60%, #a1a1aa 100%)',
            }}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            animate={isGlowing ? {
              boxShadow: [
                '0 0 20px rgba(161, 161, 170, 0.3)',
                '0 0 60px rgba(161, 161, 170, 0.8)',
                '0 0 40px rgba(161, 161, 170, 0.5)',
                '0 0 20px rgba(161, 161, 170, 0.3)',
              ],
            } : {}}
          >
            {/* Trunk texture */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute left-0 right-0 h-px bg-zinc-900/30"
                  style={{ top: `${i * 10 + 5}%` }}
                />
              ))}
            </div>
            
            {/* Trunk glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, transparent, rgba(161, 161, 170, 0.3), transparent)',
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Branches */}
          {techBranches.map((branch, index) => (
            <TreeBranch 
              key={branch.name} 
              branch={branch} 
              index={index}
              totalBranches={techBranches.length}
            />
          ))}

          {/* Tree top decoration - silver */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -top-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 flex items-center justify-center shadow-lg shadow-zinc-400/30"
              animate={isGlowing ? { 
                scale: [1, 1.3, 1],
                boxShadow: [
                  '0 0 20px rgba(161, 161, 170, 0.3)',
                  '0 0 60px rgba(161, 161, 170, 0.8)',
                  '0 0 20px rgba(161, 161, 170, 0.3)',
                ]
              } : {
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={isGlowing ? { duration: 0.5 } : { duration: 8, repeat: Infinity }}
            >
              <span className="text-3xl">⭐</span>
            </motion.div>
          </motion.div>

          {/* Roots */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <svg width="200" height="60" viewBox="0 0 200 60" className="fill-none">
              <motion.path
                d="M100 0 C90 30 60 50 30 55"
                stroke="url(#rootGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1 }}
              />
              <motion.path
                d="M100 0 C110 30 140 50 170 55"
                stroke="url(#rootGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 1 }}
              />
              <motion.path
                d="M100 0 C100 40 100 50 100 58"
                stroke="url(#rootGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 1 }}
              />
              <defs>
                <linearGradient id="rootGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#71717a" />
                  <stop offset="100%" stopColor="#a1a1aa" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Click hint */}
        <motion.p
          className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Click the tree for a magical effect ✨
        </motion.p>
      </div>
    </section>
  );
};
