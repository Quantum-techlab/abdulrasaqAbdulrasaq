
import React from 'react';
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
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-border">
            <div className="text-xl font-bold text-gradient">Menu</div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation Items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li 
                  key={item.href}
                  className={`transform transition-all duration-300 delay-${index * 100}`}
                  style={{
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <a
                    href={item.href}
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
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 ${
                      activeSection === item.href.substring(1) 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="p-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Abdulrasaq Alatare
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
