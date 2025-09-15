import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Users, ArrowRight, Star, Download, Code, Zap } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FloatingElements } from "@/components/FloatingElements";
import { GlassCard } from "@/components/GlassCard";
import { ParticleBackground } from "@/components/ParticleBackground";
import { TypewriterText } from "@/components/TypewriterText";
import { ModernButton } from "@/components/ModernButton";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import { FloatingCTA } from "@/components/FloatingCTA";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SkillIcon } from "@/components/SkillIcon";

// Net background component
const NetBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-300 dark:text-blue-700"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Animated dots at intersections */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-600 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  // Count up animations
  const yearsCount = useCountUp({ end: 3, duration: 2000, startDelay: 0 });
  const projectsCount = useCountUp({ end: 6, duration: 2500, startDelay: 200 });
  const techCount = useCountUp({ end: 27, duration: 3000, startDelay: 400 });
  const certsCount = useCountUp({ end: 3, duration: 1500, startDelay: 600 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isStatsInView) {
      yearsCount.startCountUp();
      projectsCount.startCountUp();
      techCount.startCountUp();
      certsCount.startCountUp();
    }
  }, [isStatsInView]);

  const projects = [
    {
      title: "FaceTrust AI",
      description: "An AI-powered facial recognition system for secure identity verification and centralized data access. Uses deep learning models to provide instant, reliable identity verification and access control.",
      tech: ["React", "AI/ML", "Deep Learning", "Facial Recognition", "Database Integration"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://facetrust-rho.vercel.app",
      status: "Live",
      featured: true,
      highlight: "AI-Powered"
    },
    {
      title: "Attendance System for IIH", 
      description: "Modern attendance tracking system for Ilorin Innovation Hub interns with real-time monitoring, analytics dashboard, and automated reporting features.",
      tech: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "In Development",
      featured: true
    },
    {
      title: "MindConnect",
      description: "A mental health peer support platform built with React and Supabase, connecting users with mental health resources and peer support communities.",
      tech: ["React", "Supabase", "Real-time Chat", "Authentication"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Active",
      featured: true
    },
    {
      title: "Textify Alchemy",
      description: "Extract text from images and audio using Tesseract.js and Whisper API. Advanced OCR and speech-to-text conversion tool.",
      tech: ["React", "Tesseract.js", "Whisper API", "File Processing"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Active",
      featured: true
    },
    {
      title: "CrossDevice Sync",
      description: "Transfer texts and files across devices using Supabase and cloud sync. Seamless cross-platform file sharing solution.",
      tech: ["React", "Supabase", "Cloud Storage", "Real-time Sync"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Active",
      featured: true
    }
    {
      title: "ScanShare",
      description: "Advanced document scanning and sharing platform with OCR capabilities, cloud storage integration, and real-time collaboration features.",
      tech: ["React", "OCR", "Cloud Storage", "Web APIs"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Active", 
      featured: true
    }
  ];

  const experiences = [
    {
      title: "Software Director",
      company: "ITSA - University of Ilorin",
      period: "2025 – Present",
      description: "Leading student-driven software initiatives and fostering collaboration within the department. Organizing tech workshops, hackathons, and mentorship programs while driving innovation.",
      icon: <Users className="w-4 h-4" />,
      type: "leadership"
    },
    {
      title: "Software Engineer Intern",
      company: "Ilorin Innovation Hub",
      period: "2025",
      description: "Developed full-stack features, built attendance tracking systems, and provided technical support for events",
      icon: <MapPin className="w-4 h-4" />,
      type: "internship"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS",
    "Node.js", "Express.js", "Supabase", "Firebase", "PostgreSQL", "MongoDB",
    "REST APIs", "GraphQL", "Web APIs", "OCR Integration",
    "AI Integration", "Prompt Engineering", "ChatGPT API", "Machine Learning Basics",
    "Git/GitHub", "Docker", "Cloud Deployment", "Authentication",
    "Responsive Design", "Dashboards", "Accessibility", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-500">
      <ParticleBackground />
      <EnhancedNavigation />
      <FloatingCTA />

      {/* Professional Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <NetBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/30 dark:border-slate-700/50 rounded-full px-6 py-3 shadow-2xl">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"
                />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Available for New Opportunities
                </span>
              </div>
            </motion.div>

            {/* Main Hero Content - Grid Layout */}
            <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
              {/* Text Content - 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="lg:col-span-3 text-left"
              >
                {/* Name and Title */}
                <div className="mb-8">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                    <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent">
                      Abdulrasaq
                    </span>
                    <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
                      Abdulrasaq
                    </span>
                  </h1>
                  
                  {/* Animated Role */}
                  <div className="h-16 flex items-center">
                    <div className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      <TypewriterText 
                        texts={[
                          "Full-Stack Developer",
                          "Software Engineer", 
                          "React Specialist",
                          "AI Integration Expert"
                        ]} 
                        className="text-gradient"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Passionate about crafting exceptional digital experiences through clean, efficient code. 
                    I specialize in modern web technologies and AI integration to build scalable, 
                    user-centric applications that make a real impact.
                  </p>
                  
                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>University of Ilorin, Nigeria</span>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <ModernButton variant="primary" size="lg" href="mailto:ola283dayo@gmail.com">
                    <Mail className="w-5 h-5" />
                    Let's Connect
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </ModernButton>

                  <ModernButton variant="outline" size="lg" href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5" />
                    View Resume
                  </ModernButton>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <ModernButton variant="ghost" href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </ModernButton>
                    <ModernButton variant="ghost" href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </ModernButton>
                  </div>
                </motion.div>
              </motion.div>

              {/* Profile Image - 2 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="lg:col-span-2 flex justify-center lg:justify-end"
              >
                <div className="relative group">
                  {/* Animated border rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-72 h-72 rounded-full border-2 border-dashed border-gradient-to-r from-blue-400/40 to-purple-400/40"
                  />
                  
                  {/* Main profile image */}
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 dark:border-slate-700/50 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full relative">
                      <img 
                        src="/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png" 
                        alt="Abdulrasaq Abdulrasaq - Software Engineer"
                        className="w-full h-full object-cover"
                        style={{ 
                          objectPosition: 'center 15%',
                          transform: 'scale(1.8)',
                          transformOrigin: 'center 25%'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-3 border-white dark:border-slate-800 shadow-lg"
                  />
                </div>
              </motion.div>
            </div>

            {/* Professional Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto pt-12"
            >
              {[
                { count: yearsCount.count, suffix: "+", label: "Years Experience", icon: <Calendar className="w-5 h-5" /> },
                { count: projectsCount.count, suffix: "+", label: "Projects Completed", icon: <Code className="w-5 h-5" /> },
                { count: techCount.count, suffix: "+", label: "Technologies Mastered", icon: <Zap className="w-5 h-5" /> },
                { count: certsCount.count, suffix: "", label: "Certifications", icon: <Award className="w-5 h-5" /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 1.4 + index * 0.1,
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-1">
                    {stat.count}{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
              
              {/* Animated Counters */}
              <AnimatedCounter 
                startValue={150000} 
                label="Lines of Code" 
                suffix="+" 
              />
              <AnimatedCounter 
                startValue={2847} 
                label="Bugs Fixed" 
                suffix="+" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center"
            >
              <span className="text-gradient">About Me</span>
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <GlassCard delay={0.4} className="p-10">
                <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.03,
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 border border-blue-200/50 dark:border-slate-500/50 rounded-full text-slate-700 dark:text-slate-200 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
                    >
                      <SkillIcon skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-6xl font-bold mb-20 text-center"
          >
            <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <GlassCard
                key={index} 
                delay={index * 0.1}
                className="group overflow-hidden p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {project.title}
                  </h3>
                    {project.status && (
                      <Badge 
                        variant={project.status === 'Live' ? 'default' : 'secondary'}
                        className={project.status === 'Live' ? 'bg-green-500 hover:bg-green-600' : ''}
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <AnimatedButton variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </AnimatedButton>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <AnimatedButton variant="default" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </AnimatedButton>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">Let's Work Together</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can build something amazing together.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <AnimatedCard delay={0.1} className="bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-lg p-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-300">ola283dayo@gmail.com</p>
              </AnimatedCard>
              
              <AnimatedCard delay={0.2} className="bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-lg p-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-300">Connect with me</p>
              </AnimatedCard>
              
              <AnimatedCard delay={0.3} className="bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-lg p-6 text-center">
                <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">GitHub</h3>
                <p className="text-slate-600 dark:text-slate-300">Check my work</p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Abdulrasaq Abdulrasaq
                  </h3>
                  <p className="text-slate-300 mb-6 max-w-md">
                    Full-Stack Developer passionate about creating exceptional digital experiences 
                    through clean, efficient code and innovative solutions.
                  </p>
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>University of Ilorin, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:ola283dayo@gmail.com" className="hover:text-blue-400 transition-colors">
                      ola283dayo@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                  <ul className="space-y-2">
                    {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item.toLowerCase()}`}
                          className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Connect */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://github.com/Quantum-techlab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/abdulrasaq-abdulrasaq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Resume
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Abdulrasaq Abdulrasaq. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span>Built with React & Tailwind CSS</span>
                <div className="flex items-center gap-1">
                  <span>Made with</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-red-400"
                  >
                    ❤️
                  </motion.span>
                  <span>in Nigeria</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;