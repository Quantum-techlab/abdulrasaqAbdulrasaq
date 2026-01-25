import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Code2, 
  Database, 
  Brain, 
  Cloud, 
  Palette,
  Activity,
  Target,
  Layers,
  Sparkles,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: string;
  proficiency: number;
  projects: number;
  yearsUsed: number;
  trend: 'up' | 'stable' | 'learning';
}

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  techs: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    color: "hsl(var(--chart-1))",
    bgGradient: "from-cyan-500/20 to-blue-500/20",
    techs: [
      { name: "React", icon: "⚛️", proficiency: 95, projects: 12, yearsUsed: 3, trend: 'up' },
      { name: "TypeScript", icon: "📘", proficiency: 90, projects: 10, yearsUsed: 2, trend: 'up' },
      { name: "JavaScript", icon: "💛", proficiency: 95, projects: 15, yearsUsed: 3, trend: 'stable' },
      { name: "Tailwind CSS", icon: "💨", proficiency: 92, projects: 12, yearsUsed: 2, trend: 'up' },
      { name: "Vite", icon: "⚡", proficiency: 88, projects: 8, yearsUsed: 2, trend: 'up' },
      { name: "Next.js", icon: "▲", proficiency: 75, projects: 3, yearsUsed: 1, trend: 'learning' },
      { name: "HTML5", icon: "🌐", proficiency: 98, projects: 20, yearsUsed: 3, trend: 'stable' },
      { name: "CSS3", icon: "🎨", proficiency: 95, projects: 20, yearsUsed: 3, trend: 'stable' },
    ]
  },
  {
    name: "Backend",
    icon: <Database className="w-5 h-5" />,
    color: "hsl(var(--chart-2))",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    techs: [
      { name: "Node.js", icon: "💚", proficiency: 85, projects: 8, yearsUsed: 2, trend: 'up' },
      { name: "Express", icon: "🚂", proficiency: 80, projects: 6, yearsUsed: 2, trend: 'stable' },
      { name: "Supabase", icon: "⚡", proficiency: 88, projects: 5, yearsUsed: 1, trend: 'up' },
      { name: "Firebase", icon: "🔥", proficiency: 82, projects: 4, yearsUsed: 2, trend: 'stable' },
      { name: "PostgreSQL", icon: "🐘", proficiency: 78, projects: 4, yearsUsed: 1, trend: 'learning' },
      { name: "MongoDB", icon: "🍃", proficiency: 75, projects: 3, yearsUsed: 1, trend: 'learning' },
    ]
  },
  {
    name: "AI & ML",
    icon: <Brain className="w-5 h-5" />,
    color: "hsl(var(--chart-3))",
    bgGradient: "from-purple-500/20 to-violet-500/20",
    techs: [
      { name: "AI Integration", icon: "🤖", proficiency: 85, projects: 4, yearsUsed: 1, trend: 'up' },
      { name: "ChatGPT API", icon: "💬", proficiency: 88, projects: 3, yearsUsed: 1, trend: 'up' },
      { name: "Prompt Eng.", icon: "✨", proficiency: 90, projects: 5, yearsUsed: 1, trend: 'up' },
      { name: "ML Basics", icon: "🧠", proficiency: 70, projects: 2, yearsUsed: 1, trend: 'learning' },
    ]
  },
  {
    name: "DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "hsl(var(--chart-4))",
    bgGradient: "from-blue-500/20 to-indigo-500/20",
    techs: [
      { name: "Git/GitHub", icon: "🐙", proficiency: 92, projects: 20, yearsUsed: 3, trend: 'stable' },
      { name: "Docker", icon: "🐳", proficiency: 70, projects: 2, yearsUsed: 1, trend: 'learning' },
      { name: "Vercel", icon: "▲", proficiency: 90, projects: 10, yearsUsed: 2, trend: 'up' },
      { name: "AWS", icon: "☁️", proficiency: 65, projects: 2, yearsUsed: 1, trend: 'learning' },
    ]
  },
  {
    name: "Design",
    icon: <Palette className="w-5 h-5" />,
    color: "hsl(var(--chart-5))",
    bgGradient: "from-orange-500/20 to-pink-500/20",
    techs: [
      { name: "UI/UX", icon: "🎯", proficiency: 85, projects: 12, yearsUsed: 2, trend: 'up' },
      { name: "Responsive", icon: "📱", proficiency: 95, projects: 15, yearsUsed: 3, trend: 'stable' },
      { name: "Figma", icon: "🎨", proficiency: 78, projects: 6, yearsUsed: 2, trend: 'up' },
      { name: "Accessibility", icon: "♿", proficiency: 80, projects: 8, yearsUsed: 2, trend: 'up' },
    ]
  },
];

// Animated bar chart component
const AnimatedBar = ({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) => (
  <div className="relative h-2 bg-muted/50 rounded-full overflow-hidden">
    <motion.div
      className="absolute inset-y-0 left-0 rounded-full"
      style={{ backgroundColor: color }}
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
    />
    <motion.div
      className="absolute inset-y-0 left-0 rounded-full opacity-50 blur-sm"
      style={{ backgroundColor: color }}
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
    />
  </div>
);

// Stats card component
const StatsCard = ({ 
  icon, 
  value, 
  label, 
  suffix = '', 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  value: number; 
  label: string; 
  suffix?: string;
  delay?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      onViewportEnter={() => {
        let start = 0;
        const duration = 2000;
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.floor(eased * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <div className="text-3xl font-bold text-foreground mb-1">
          {displayValue}{suffix}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
};

// Tech card with analytics
const TechCard = ({ 
  tech, 
  color, 
  index,
  isExpanded,
  onToggle
}: { 
  tech: TechItem; 
  color: string; 
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const trendColors = {
    up: 'text-emerald-500',
    stable: 'text-blue-500',
    learning: 'text-amber-500'
  };
  
  const trendLabels = {
    up: 'Trending Up',
    stable: 'Mastered',
    learning: 'Learning'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onToggle}
      className="cursor-pointer"
    >
      <motion.div
        className="relative p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
        whileHover={{ y: -2, scale: 1.02 }}
        layout
      >
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{ 
            background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
        />
        
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <motion.span 
              className="text-2xl"
              animate={{ rotate: isExpanded ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {tech.icon}
            </motion.span>
            <div>
              <h4 className="font-semibold text-foreground">{tech.name}</h4>
              <span className={`text-xs ${trendColors[tech.trend]}`}>
                {trendLabels[tech.trend]}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold" style={{ color }}>{tech.proficiency}%</div>
          </div>
        </div>
        
        <AnimatedBar value={tech.proficiency} color={color} delay={index * 0.05} />
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-border/30"
            >
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Projects</span>
                  <div className="font-semibold text-foreground">{tech.projects}+</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Experience</span>
                  <div className="font-semibold text-foreground">{tech.yearsUsed} {tech.yearsUsed === 1 ? 'year' : 'years'}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// Category section
const CategorySection = ({ category, index }: { category: TechCategory; index: number }) => {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);
  const avgProficiency = Math.round(
    category.techs.reduce((acc, tech) => acc + tech.proficiency, 0) / category.techs.length
  );
  const totalProjects = category.techs.reduce((acc, tech) => acc + tech.projects, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative"
    >
      {/* Category header */}
      <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-border/30 mb-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div 
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <div style={{ color: category.color }}>{category.icon}</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.techs.length} technologies</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-muted-foreground" />
              <span className="text-2xl font-bold" style={{ color: category.color }}>{avgProficiency}%</span>
            </div>
            <p className="text-xs text-muted-foreground">{totalProjects}+ projects</p>
          </div>
        </div>
        
        {/* Mini chart visualization */}
        <div className="mt-4 flex items-end gap-1 h-12">
          {category.techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex-1 rounded-t"
              style={{ 
                backgroundColor: category.color,
                opacity: 0.3 + (tech.proficiency / 100) * 0.7
              }}
              initial={{ height: 0 }}
              whileInView={{ height: `${(tech.proficiency / 100) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
      
      {/* Tech cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {category.techs.map((tech, techIndex) => (
          <TechCard
            key={tech.name}
            tech={tech}
            color={category.color}
            index={techIndex}
            isExpanded={expandedTech === tech.name}
            onToggle={() => setExpandedTech(expandedTech === tech.name ? null : tech.name)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const TechAnalyticsDashboard = () => {
  const stats = useMemo(() => {
    const allTechs = techCategories.flatMap(cat => cat.techs);
    return {
      totalTechs: allTechs.length,
      avgProficiency: Math.round(allTechs.reduce((acc, t) => acc + t.proficiency, 0) / allTechs.length),
      totalProjects: allTechs.reduce((acc, t) => acc + t.projects, 0),
      learningCount: allTechs.filter(t => t.trend === 'learning').length,
    };
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-chart-2/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            animate={{ boxShadow: ["0 0 20px hsl(var(--primary) / 0)", "0 0 20px hsl(var(--primary) / 0.3)", "0 0 20px hsl(var(--primary) / 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Analytics</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A data-driven visualization of my technical expertise, showcasing proficiency levels, 
            project experience, and continuous learning journey
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <StatsCard 
            icon={<Layers className="w-5 h-5" />} 
            value={stats.totalTechs} 
            label="Technologies"
            delay={0}
          />
          <StatsCard 
            icon={<Target className="w-5 h-5" />} 
            value={stats.avgProficiency} 
            label="Avg. Proficiency"
            suffix="%"
            delay={0.1}
          />
          <StatsCard 
            icon={<Zap className="w-5 h-5" />} 
            value={stats.totalProjects} 
            label="Projects Built"
            suffix="+"
            delay={0.2}
          />
          <StatsCard 
            icon={<TrendingUp className="w-5 h-5" />} 
            value={stats.learningCount} 
            label="Currently Learning"
            delay={0.3}
          />
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-muted-foreground">Trending Up</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-muted-foreground">Mastered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-muted-foreground">Learning</span>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <CategorySection key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-chart-2/10 border border-primary/20 text-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Click on any technology card to see detailed metrics</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
