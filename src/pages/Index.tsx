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
      title: "ScanShare",
      description: "Advanced document scanning and sharing platform with OCR capabilities, cloud storage integration, and real-time collaboration features.",
      tech: ["React", "OCR", "Cloud Storage", "Web APIs"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Active", 
      featured: true
    },
    {
      title: "CrossDevice Sync",
      description: "Seamless file and clipboard sync between devices using modern web technologies. Features real-time synchronization and secure data transfer.",
      tech: ["React", "Supabase", "Vite", "TypeScript"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Textify Alchemy",
      description: "Advanced OCR and speech-to-text extraction application powered by Tesseract.js and Web APIs for accurate text recognition.",
      tech: ["React", "Tesseract.js", "Web APIs", "JavaScript"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Completed"
    },
    {
      title: "MindConnect",
      description: "Community-based mental health support platform with mood tracking, secure authentication, and comprehensive user dashboards.",
      tech: ["React", "Supabase", "Tailwind CSS", "Authentication"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      status: "Completed"
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

  const certifications = [
    {
      title: "AWS Cloud Club",
      issuer: "AWS",
      year: "2024",
      description: "Introduction to Cloud Computing"
    },
    {
      title: "AI for Africa",
      issuer: "TechMindsetAfrica",
      year: "2025",
      description: "Artificial Intelligence"
    },
    {
      title: "Basic Computing and Networking",
      issuer: "NITDA",
      year: "2014",
      description: "Foundational IT skills certification"
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
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)]" />
          
          {/* Floating Orbs */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -80, 0],
              y: [0, 70, 0],
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
          
          {/* Code-like decorative elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 2 }}
            className="absolute top-1/4 right-20 text-blue-300/20 dark:text-blue-500/20 font-mono text-sm hidden lg:block"
          >
            {`
const developer = {
  name: 'Abdulrasaq',
  skills: ['React', 'Node.js'],
  passion: 'Building solutions'
};
            `}
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
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

            {/* Main Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="flex justify-center mb-8"
              >
                <div className="relative group">
                  {/* Animated border rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-dashed border-gradient-to-r from-blue-400/40 to-purple-400/40"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-36 h-36 md:w-44 md:h-44 rounded-full border border-dotted border-gradient-to-r from-purple-400/20 to-pink-400/20"
                  />
                  
                  {/* Main profile image */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 dark:border-slate-700/50 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full relative">
                      <img 
                        src="/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png" 
                        alt="Abdulrasaq Abdulrasaq - Software Engineer"
                        className="w-full h-auto absolute top-0 left-1/2 transform -translate-x-1/2 scale-[2.5] translate-y-[-10px]"
                        style={{ 
                          height: '140%',
                          objectFit: 'cover',
                          objectPosition: 'center top'
                        }}
                      />
                    </div>
                    
                    {/* Gradient overlay for better blending */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/10 dark:to-slate-100/5 pointer-events-none" />
                  </div>
                  
                  {/* Status indicator */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-2 right-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-white dark:border-slate-800 shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Name and Title */}
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent">
                    Abdulrasaq
                  </span>
                  <span className="block text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
                    Abdulrasaq
                  </span>
                </h1>
                
                {/* Animated Role */}
                <div className="h-16 flex items-center justify-center">
                  <div className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="max-w-4xl mx-auto"
              >
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
                  className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400"
                >
                  <MapPin className="w-4 h-4" />
                  <span>University of Ilorin, Nigeria</span>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
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
                <div className="flex items-center gap-3 ml-0 sm:ml-4">
                  <ModernButton variant="ghost" href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </ModernButton>
                  <ModernButton variant="ghost" href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </ModernButton>
                </div>
              </motion.div>

              {/* Professional Stats */}
              <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12"
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
                    className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {stat.count}{stat.suffix}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
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
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-slate-600 dark:text-slate-300">
                    Hi, I'm <span className="text-gradient font-semibold text-xl">Abdulrasaq</span> — a passionate software engineer specializing in frontend development with full-stack capabilities. I craft exceptional digital experiences using React, Node.js, and cutting-edge cloud technologies. As an AI enthusiast and prompt engineer, I seamlessly integrate intelligent features into web applications.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Currently pursuing Information Technology at the University of Ilorin while serving as Software Director of ITSA, I'm dedicated to building accessible, scalable solutions that make a real impact.
                  </p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </motion.div>
                  <span>University of Ilorin, Nigeria</span>
                </motion.div>
              </motion.div>
              
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
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm py-2 px-4 bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-800/80 dark:to-slate-700/80 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50"
                      >
                        {skill}
                      </Badge>
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
                className={`group overflow-hidden ${
                  project.featured ? 'ring-2 ring-blue-400/30 dark:ring-blue-500/30' : ''
                }`}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3 
                      whileHover={{ scale: 1.02 }}
                      className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                   <div className="flex items-center gap-2">
                     {project.featured && (
                       <motion.div 
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{ delay: 0.5 + index * 0.1 }}
                         className="flex items-center gap-1 bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/50 dark:to-purple-900/50 px-3 py-1 rounded-full backdrop-blur-sm"
                       >
                         <Star className="w-3 h-3 text-blue-600" />
                         <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Featured</span>
                       </motion.div>
                     )}
                     {project.highlight && (
                       <motion.div 
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{ delay: 0.7 + index * 0.1 }}
                         className="flex items-center gap-1 bg-gradient-to-r from-purple-100/80 to-pink-100/80 dark:from-purple-900/50 dark:to-pink-900/50 px-3 py-1 rounded-full backdrop-blur-sm"
                       >
                         <span className="text-xs font-medium text-purple-700 dark:text-purple-300">{project.highlight}</span>
                       </motion.div>
                     )}
                   </div>
                  </div>
                  
                  {project.status && (
                    <Badge 
                      variant="outline" 
                      className={`w-fit mb-4 ${
                        project.status === 'In Development' ? 'border-orange-300/50 text-orange-600 bg-orange-50/50 dark:border-orange-600/50 dark:text-orange-400 dark:bg-orange-900/20' :
                        project.status === 'Active' ? 'border-green-300/50 text-green-600 bg-green-50/50 dark:border-green-600/50 dark:text-green-400 dark:bg-green-900/20' :
                        'border-slate-300/50 text-slate-600 bg-slate-50/50 dark:border-slate-600/50 dark:text-slate-400 dark:bg-slate-900/20'
                      } backdrop-blur-sm`}
                    >
                      {project.status}
                    </Badge>
                  )}
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-slate-300/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <ModernButton variant="outline" size="sm" href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </ModernButton>
                    <ModernButton variant="outline" size="sm" href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </ModernButton>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">Experience & Certifications</h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Experience */}
            <AnimatedSection direction="left" delay={0.2}>
              <div>
              <motion.h3 
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100"
              >
                <Calendar className="w-5 h-5 text-blue-600" />
                Experience
              </motion.h3>
                  {experiences.map((exp, index) => (
                 <AnimatedCard key={index} delay={index * 0.1} className={`bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-lg p-6 mb-4 ${exp.type === 'leadership' ? 'ring-2 ring-purple-400/30 dark:ring-purple-500/30' : ''}`}>
                   <div className="flex items-start gap-3">
                     <div className={`${exp.type === 'leadership' ? 'text-purple-600' : 'text-blue-600'} mt-1`}>{exp.icon}</div>
                     <div>
                       <div className="flex items-center gap-2 mb-1">
                         <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{exp.title}</h4>
                         {exp.type === 'leadership' && (
                           <Badge variant="outline" className="text-xs border-purple-200 text-purple-600 bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:bg-purple-900/30">
                             Leadership
                           </Badge>
                         )}
                       </div>
                       <p className={`${exp.type === 'leadership' ? 'text-purple-600' : 'text-blue-600'} font-medium`}>{exp.company}</p>
                       <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{exp.period}</p>
                       <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                     </div>
                   </div>
                 </AnimatedCard>
               ))}
              
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="text-lg font-semibold mb-4 flex items-center gap-2 mt-8 text-slate-800 dark:text-slate-100"
              >
                <Users className="w-4 h-4 text-blue-600" />
                Volunteering
              </motion.h4>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="space-y-2 text-slate-600 dark:text-slate-300"
              >
                <p>• iTalk Conference – Media Support</p>
                <p>• AI in Nigeria Ilorin Community Launch – Technical Support</p>
              </motion.div>
              </div>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection direction="right" delay={0.4}>
              <div>
              <motion.h3 
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100"
              >
                <Award className="w-5 h-5 text-blue-600" />
                Certifications
              </motion.h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-lg p-4">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">{cert.title}</h4>
                    <p className="text-blue-600 text-sm">{cert.issuer} • {cert.year}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{cert.description}</p>
                  </AnimatedCard>
                ))}
              </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-100">Let's Connect</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
            </p>
          </AnimatedSection>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto"
          >
            <AnimatedButton size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="mailto:ola283dayo@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg" className="w-full sm:w-auto border-slate-200 hover:bg-slate-50" asChild>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg" className="w-full sm:w-auto border-slate-200 hover:bg-slate-50" asChild>
              <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </AnimatedButton>
          </motion.div>
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

            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
                <p className="mb-6 opacity-90">I'm currently available for freelance work and full-time opportunities.</p>
                <AnimatedButton size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <a href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                    Download Resume
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="py-8 border-t border-slate-200 dark:border-slate-700 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-300">
              © 2025 Abdulrasaq Abdulrasaq. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:ola283dayo@gmail.com" 
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Quantum-techlab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/abdulrasaq-abdulrasaq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
