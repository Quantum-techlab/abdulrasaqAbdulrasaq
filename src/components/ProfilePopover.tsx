
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Github, Linkedin, Mail, Download, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const ProfilePopover = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative p-0 w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300">
          <Avatar className="w-10 h-10 border-2 border-champagne/40 hover:border-champagne transition-colors">
            <AvatarFallback className="bg-gradient-to-br from-champagne-dark to-sage text-white font-bold">
              AA
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-sage border-2 border-white rounded-full animate-pulse"></div>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 p-0 glass-strong border-champagne/20 shadow-xl" align="end" sideOffset={10}>
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gradient-to-br from-champagne-dark to-sage text-white font-bold text-lg">
                AA
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg text-foreground">Abdulrasaq Alatare</h3>
              <p className="text-muted-foreground text-sm">Software Engineer & AI Enthusiast</p>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Badge className="bg-sage-light text-sage-dark border-sage/30 hover:bg-sage-light">
              🟢 Open to work
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1 text-champagne-dark" />
              University of Ilorin, Nigeria
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1 text-sage" />
              {currentTime}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button className="w-full justify-start bg-background hover:bg-accent text-foreground border border-border" variant="ghost" asChild>
              <a href="mailto:ola283dayo@gmail.com">
                <Mail className="w-4 h-4 mr-2 text-champagne-dark" />
                Contact Me
              </a>
            </Button>
            
            <Button className="w-full justify-start bg-background hover:bg-accent text-foreground border border-border" variant="ghost" asChild>
              <a href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2 text-sage-dark" />
                Download Resume
              </a>
            </Button>
            
            <Button className="w-full justify-start bg-background hover:bg-accent text-foreground border border-border" variant="ghost" asChild>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 text-foreground/70" />
                Visit GitHub
              </a>
            </Button>
            
            <Button className="w-full justify-start bg-background hover:bg-accent text-foreground border border-border" variant="ghost" asChild>
              <a href="https://www.linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2 text-slate-accent-dark" />
                View LinkedIn
              </a>
            </Button>
          </div>

          {/* Recent Activity */}
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Recent Activity</p>
            <div className="space-y-1">
              <p className="text-sm text-foreground">🔥 Currently coding: Attendance System & ScanShare</p>
              <p className="text-xs text-muted-foreground">Last updated: 2 hours ago</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
