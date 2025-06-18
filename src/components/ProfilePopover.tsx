
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
          <Avatar className="w-10 h-10 border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
              AA
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full animate-pulse"></div>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 p-0" align="end" sideOffset={10}>
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                AA
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">Abdulrasaq Alatare</h3>
              <p className="text-muted-foreground text-sm">Software Engineer & AI Enthusiast</p>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              🟢 Open to work
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              University of Ilorin, Nigeria
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {currentTime}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button className="w-full justify-start" variant="ghost" asChild>
              <a href="mailto:ola283dayo@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </Button>
            
            <Button className="w-full justify-start" variant="ghost" asChild>
              <a href="#" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
            
            <Button className="w-full justify-start" variant="ghost" asChild>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Visit GitHub
              </a>
            </Button>
            
            <Button className="w-full justify-start" variant="ghost" asChild>
              <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                View LinkedIn
              </a>
            </Button>
          </div>

          {/* Recent Activity */}
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground mb-2">Recent Activity</p>
            <div className="space-y-1">
              <p className="text-sm">🔥 Currently coding: Attendance System & ScanShare</p>
              <p className="text-xs text-muted-foreground">Last updated: 2 hours ago</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
