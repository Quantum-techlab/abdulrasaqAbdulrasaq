import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Zap, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  Lock,
  Layers,
  FileCode,
  Cloud,
  GitBranch,
  Smartphone,
  Eye,
  Settings,
  Brain,
  MessageSquare,
  Shield
} from 'lucide-react';

// Skill to icon mapping
const skillIconMap: Record<string, React.ComponentType<any>> = {
  'HTML': Code,
  'CSS': Palette,
  'JavaScript': Zap,
  'TypeScript': FileCode,
  'React': Layers,
  'Vite': Zap,
  'Tailwind CSS': Palette,
  'Node.js': Server,
  'Express.js': Server,
  'Supabase': Database,
  'Firebase': Database,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'REST APIs': Globe,
  'GraphQL': Globe,
  'Web APIs': Globe,
  'OCR Integration': Eye,
  'AI Integration': Brain,
  'Prompt Engineering': Brain,
  'ChatGPT API': MessageSquare,
  'Machine Learning Basics': Cpu,
  'Git/GitHub': GitBranch,
  'Docker': Server,
  'Cloud Deployment': Cloud,
  'Authentication': Lock,
  'Responsive Design': Smartphone,
  'Dashboards': Settings,
  'Accessibility': Shield,
  'UI/UX Design': Palette
};

interface SkillIconProps {
  skill: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ skill, className = '' }) => {
  const IconComponent = skillIconMap[skill] || Code; // Default to Code icon

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        className="text-primary"
      >
        <IconComponent className="w-4 h-4" />
      </motion.div>
      <span>{skill}</span>
    </motion.div>
  );
};