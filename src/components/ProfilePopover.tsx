
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
          <Avatar className="w-10 h-10 border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
              AA
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 p-0 bg-white/95 backdrop-blur-sm border-white/20 shadow-xl" align="end" sideOffset={10}>
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                AA
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg text-slate-800">Abdulrasaq Alatare</h3>
              <p className="text-slate-600 text-sm">Software Engineer & AI Enthusiast</p>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">
              🟢 Open to work
            </Badge>
            <div className="flex items-center text-sm text-slate-500">
              <MapPin className="w-4 h-4 mr-1" />
              University of Ilorin, Nigeria
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <Clock className="w-4 h-4 mr-1" />
              {currentTime}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button className="w-full justify-start bg-white hover:bg-slate-50 text-slate-700 border border-slate-200" variant="ghost" asChild>
              <a href="mailto:ola283dayo@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </Button>
            
            <Button className="w-full justify-start bg-white hover:bg-slate-50 text-slate-700 border border-slate-200" variant="ghost" asChild>
              <a href="https://chat.openai.com/mnt/data/Abdulrasaq_Abdulrasaq_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
            
            <Button className="w-full justify-start bg-white hover:bg-slate-50 text-slate-700 border border-slate-200" variant="ghost" asChild>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Visit GitHub
              </a>
            </Button>
            
            <Button className="w-full justify-start bg-white hover:bg-slate-50 text-slate-700 border border-slate-200" variant="ghost" asChild>
              <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                View LinkedIn
              </a>
            </Button>
          </div>

          {/* Recent Activity */}
          <div className="pt-2 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-2">Recent Activity</p>
            <div className="space-y-1">
              <p className="text-sm text-slate-700">🔥 Currently coding: Attendance System & ScanShare</p>
              <p className="text-xs text-slate-500">Last updated: 2 hours ago</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
