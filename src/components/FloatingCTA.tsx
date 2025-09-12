import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { ModernButton } from './ModernButton';

export const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="group"
      >
        <ModernButton 
          variant="primary" 
          size="sm" 
          href="mailto:ola283dayo@gmail.com"
          className="shadow-2xl backdrop-blur-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden group-hover:inline ml-2 transition-all duration-300">Hire Me</span>
        </ModernButton>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="group"
      >
        <ModernButton 
          variant="outline" 
          size="sm" 
          href="#contact"
          className="shadow-2xl backdrop-blur-sm border-white/30 hover:border-white/50"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden group-hover:inline ml-2 transition-all duration-300">Chat</span>
        </ModernButton>
      </motion.div>
    </motion.div>
  );
};