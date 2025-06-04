
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Globe, Check } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const LanguageToggle = () => {
  const [selectedLang, setSelectedLang] = useState('en');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative w-10 h-10 rounded-full bg-background/10 backdrop-blur-md border border-white/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-48 p-2" align="end">
        <div className="space-y-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              className="w-full justify-start font-normal"
              onClick={() => setSelectedLang(lang.code)}
            >
              <span className="mr-2">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.name}</span>
              {selectedLang === lang.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
