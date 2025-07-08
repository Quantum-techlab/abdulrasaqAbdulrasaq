
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { ScrollProgress } from './ScrollProgress';
import { AnimatedNavBackground } from './AnimatedNavBackground';
import { ProfilePopover } from './ProfilePopover';
import { LanguageToggle } from './LanguageToggle';

const menuItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const EnhancedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ScrollProgress />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
            : 'py-4 bg-transparent'
        }`}
      >
        <AnimatedNavBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className={`text-2xl font-bold text-gradient transition-all duration-500 ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              Abdulrasaq Abdulrasaq
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 group ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === item.href.substring(1) ? 24 : 0 
                    }}
                    whileHover={{ width: 24 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              
              <div className="ml-4 flex items-center space-x-2">
                <LanguageToggle />
                <ThemeToggle />
                <ProfilePopover />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <ProfilePopover />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="relative w-10 h-10 rounded-full bg-background/10 backdrop-blur-md border border-white/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              >
                <Menu className="h-5 w-5" />
              </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
    </>
  );
};
