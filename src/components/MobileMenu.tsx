
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const menuItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  activeSection, 
  onSectionClick 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Menu */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ 
          type: "spring",
          damping: 25,
          stiffness: 200
        }}
        className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border z-50"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-border">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-gradient"
            >
              Menu
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </Button>
            </motion.div>
          </div>
          
          {/* Navigation Items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.1 + index * 0.1,
                    duration: 0.3
                  }}
                >
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.preventDefault();
                      onSectionClick(item.href.substring(1));
                      onClose();
                    }}
                    className={`block text-lg font-medium transition-all duration-300 hover:text-primary relative group ${
                      activeSection === item.href.substring(1) 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: activeSection === item.href.substring(1) ? 1 : 0 
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 border-t border-border"
          >
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Abdulrasaq Abdulrasaq
            </p>
          </motion.div>
        </div>
      </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
