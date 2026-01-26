import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Users, ArrowRight, Star, Download, Code, Zap, Sparkles } from "lucide-react";
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
import { Hero3DCharacter } from "@/components/Hero3DCharacter";
import { ScrollTransitionSection } from "@/components/ScrollTransitionSection";
import { TechAnalyticsDashboard } from "@/components/TechAnalyticsDashboard";

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
    tech: ["React", "Supabase", "TypeScript", "Tailwind CSS", "Geolocation API"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://iih-hub.vercel.app/",
    status: "In Development",
    featured: true,
    highlight: "Geolocation-Enabled"
  },
  {
    title: "ScanShare",
    description: "Advanced document scanning and sharing platform with OCR capabilities, cloud storage integration, and real-time collaboration features.",
    tech: ["React", "OCR", "Cloud Storage", "Web APIs"],
    github: "https://github.com/Quantum-techlab",
    demo: "#",
    status: "Active",
    featured: true,
    highlight: "OCR & Cloud Integration"
  },
  {
    title: "MindConnect",
    description: "AI-driven mental wellness platform that enables anonymous conversations, guided support, and community-driven resources for better mental health.",
    tech: ["React", "AI", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Quantum-techlab",
    demo: "#",
    status: "Beta",
    featured: true,
    highlight: "Mental Wellness"
  },
  {
    title: "Textify",
    description: "A versatile text extraction and transcription app that converts images and audio into editable text using Tesseract.js and AI transcription APIs.",
    tech: ["React", "Tesseract.js", "Speech-to-Text APIs", "Tailwind CSS"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://texify-ocr.vercel.app/",
    status: "Active",
    featured: true,
    highlight: "OCR & Audio Transcription"
  },
  {
    title: "CrossDevice Sync",
    description: "A seamless note and file synchronization tool that allows users to sync data across multiple devices with real-time updates and encryption.",
    tech: ["React", "Supabase", "Cloud Storage", "Encryption"],
    github: "https://github.com/Quantum-techlab",
    demo: "#",
    status: "Stable",
    featured: true,
    highlight: "Cross-Platform Sync"
  },
  {
    title: "SynBridge",
    description: "A cross-device clipboard and file sync tool with end-to-end encryption, designed for fast, secure, and seamless sharing between multiple devices.",
    tech: ["React", "Supabase", "WebSockets", "Encryption"],
    github: "https://github.com/Quantum-techlab",
    demo: "#",
    status: "Stable",
    featured: false,
    highlight: "Secure File Sync"
  }
];

  const experiences = [
    {
      title: "Software Director & Tech Lead",
      company: "ITSA - University of Ilorin",
      period: "2025 – Present",
      description: "Leading software innovation initiatives within the department while fostering a collaborative environment for student developers through mentorship and hands-on project guidance.",
      responsibilities: [
        "Spearhead departmental software development projects and technical initiatives",
        "Mentor and guide fellow students in modern web development practices",
        "Organize coding workshops and technical skill-building sessions",
        "Collaborate with faculty on technology integration projects"
      ],
      icon: <Users className="w-4 h-4" />,
      type: "leadership"
    },
    {
      title: "Front-End Developer Intern",
      company: "Torvix AI",
      period: "2025 – Present",
      description: "Building modern, responsive, and user-focused web interfaces with a fast-paced, innovation-driven AI team, contributing to human-centered digital experiences.",
      responsibilities: [
        "Build responsive web pages using HTML, CSS, JavaScript, and React.js/Bootstrap frameworks",
        "Convert UI/UX designs into functional, scalable, and optimized interfaces",
        "Ensure cross-browser compatibility and performance optimization",
        "Collaborate with designers and back-end teams for seamless integration"
      ],
      icon: <Sparkles className="w-4 h-4" />,
      type: "internship"
    },
    {
      title: "Frontend Developer Intern",
      company: "Ilorin Innovation Hub",
      period: "2025 – Present",
      description: "Developing modern web applications with focus on React ecosystem, building comprehensive dashboards, and implementing advanced features like geolocation and role-based access control.",
      responsibilities: [
        "Built and customized React components including authentication flows and interactive dashboards",
        "Implemented Supabase integration for authentication and database management",
        "Developed geolocation features with row-level security and role-based access control",
        "Created multi-role dashboards for admin, intern, and staff attendance tracking"
      ],
      icon: <MapPin className="w-4 h-4" />,
      type: "internship"
    },
    {
      title: "Media & Technical Support Volunteer",
      company: "iTalk Conference",
      period: "2024",
      description: "Provided comprehensive technical and media support for a large-scale technology conference, ensuring smooth operations and enhanced attendee experience.",
      responsibilities: [
        "Managed technical setup and troubleshooting for conference presentations",
        "Coordinated media coverage and documentation of conference sessions",
        "Assisted speakers with technical requirements and AV equipment",
        "Supported live streaming and digital content management"
      ],
      icon: <Award className="w-4 h-4" />,
      type: "volunteer"
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Computing Fundamentals",
      issuer: "AWS Cloud Club",
      year: "2024",
      icon: <Code className="w-4 h-4" />,
      description: "Comprehensive training in cloud computing concepts, AWS services, and cloud architecture fundamentals"
    },
    {
      title: "Community Growth Recognition",
      issuer: "DevTown",
      year: "2024",
      icon: <Users className="w-4 h-4" />,
      description: "Grateful recognition for outstanding support in helping the developer community grow and thrive"
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      issuer: "TechMindset Africa",
      year: "2024",
      icon: <Zap className="w-4 h-4" />,
      description: "Advanced training in AI concepts, machine learning algorithms, and practical AI implementation"
    },
    {
      title: "Computing Fundamentals & Networking",
      issuer: "NITDA",
      year: "2024",
      icon: <Award className="w-4 h-4" />,
      description: "Foundation certification in computer systems, networking principles, and IT infrastructure"
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

      {/* ✨ Creative Hero Section - Cosmic Portal Design */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 dark:from-purple-600/30 dark:to-blue-600/30 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-400/15 to-emerald-400/15 dark:from-cyan-500/20 dark:to-emerald-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-pink-400/10 to-purple-400/10 dark:from-pink-500/10 dark:to-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating squares */}
          <motion.div
            animate={{ rotate: 360, y: [-20, 20, -20] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 5, repeat: Infinity } }}
            className="absolute top-20 left-[10%] w-16 h-16 border-2 border-purple-400/30 dark:border-purple-500/30 rotate-45"
          />
          <motion.div
            animate={{ rotate: -360, y: [20, -20, 20] }}
            transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity } }}
            className="absolute bottom-32 right-[15%] w-24 h-24 border-2 border-cyan-400/20 dark:border-cyan-500/20 rotate-12"
          />
          
          {/* Floating code symbols */}
          {['<>', '/>', '{}', '()', '[]', '=>'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl font-mono text-slate-400/20 dark:text-white/10 select-none"
              style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ 
                y: [-10, 10, -10],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(100,100,100,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>

        <Hero3DCharacter />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Glowing Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center mb-8"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
                <div className="relative inline-flex items-center gap-3 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-white/10 rounded-full px-6 py-3 shadow-2xl">
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full relative" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-white">
                    ✨ Available for New Opportunities
                  </span>
                </div>
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
                {/* Creative Name & Title */}
                <div className="mb-8">
                  {/* Greeting */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg font-medium text-cyan-600 dark:text-cyan-400 mb-2"
                  >
                    👋 Hello, I'm
                  </motion.div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                    {/* First name with gradient underline */}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-slate-800 via-indigo-700 to-slate-800 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
                        Abdulrasaq
                      </span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 origin-left rounded-full"
                      />
                    </span>
                    
                    {/* Last name with outline effect */}
                    <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                        Abdulrasaq
                      </span>
                    </span>
                  </h1>
                  
                  {/* Animated Role with terminal effect */}
                  <div className="h-16 flex items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono">$</span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">role:</span>
                      <div className="text-2xl md:text-3xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                          <TypewriterText 
                            texts={[
                              "Full-Stack Developer",
                              "Software Engineer", 
                              "React Specialist",
                              "AI Integration Expert",
                              "Creative Problem Solver"
                            ]} 
                            className="text-gradient"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description - Code comment style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8 relative"
                >
                  {/* Code-style decoration */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-full" />
                  
                  <div className="pl-4 border-l-2 border-slate-300/50 dark:border-slate-700/50">
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      <span className="text-slate-400 dark:text-slate-500 font-mono">// </span>
                      Passionate about crafting exceptional digital experiences 
                      through clean, efficient code. I specialize in modern web 
                      technologies and AI integration to build scalable, 
                      user-centric applications that make a <span className="text-cyan-600 dark:text-cyan-400">real impact</span>.
                    </p>
                    
                    {/* Location with icon */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                        <MapPin className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">University of Ilorin, Nigeria</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                        <span className="text-sm">🎓</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">Software Engineering</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons - Neon Glow Style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  {/* Primary CTA - Glowing effect */}
                  <a
                    href="mailto:ola283dayo@gmail.com"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-2xl" />
                    <span className="relative flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-bold">
                      <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      Let's Connect
                      <ArrowRight className="w-5 h-5 text-pink-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  {/* Secondary CTA */}
                  <a
                    href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold border border-slate-300 dark:border-slate-700 hover:border-purple-500/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    View Resume
                  </a>

                  {/* Social Links - Floating pills */}
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Quantum-techlab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 group"
                    >
                      <Github className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com/in/abdulrasaq-abdulrasaq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 group"
                    >
                      <Linkedin className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Profile Image - Creative Portal Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="lg:col-span-2 flex justify-center lg:justify-end"
              >
                <div className="relative group">
                  {/* Glowing aura */}
                  <div className="absolute inset-0 w-72 h-72 -translate-x-4 -translate-y-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 dark:from-cyan-500/30 dark:via-purple-500/30 dark:to-pink-500/30 rounded-full blur-2xl animate-pulse" />
                  </div>
                  
                  {/* Rotating ring 1 */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-6 rounded-full border border-dashed border-purple-400/30 dark:border-purple-500/30"
                    style={{ width: '304px', height: '304px', left: '-20px', top: '-20px' }}
                  />
                  
                  {/* Rotating ring 2 - opposite direction */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute rounded-full border border-cyan-400/20 dark:border-cyan-500/20"
                    style={{ width: '340px', height: '340px', left: '-40px', top: '-40px' }}
                  />

                  {/* Floating tech bubbles around profile */}
                  {[
                    { icon: '⚛️', label: 'React', delay: 0, angle: 0 },
                    { icon: '📘', label: 'TypeScript', delay: 0.5, angle: 60 },
                    { icon: '🤖', label: 'AI', delay: 1, angle: 120 },
                    { icon: '🚀', label: 'Next.js', delay: 1.5, angle: 180 },
                    { icon: '⚡', label: 'Vite', delay: 2, angle: 240 },
                    { icon: '💾', label: 'Supabase', delay: 2.5, angle: 300 },
                  ].map((tech, i) => {
                    const radius = 160;
                    const x = Math.cos((tech.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((tech.angle * Math.PI) / 180) * radius;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + tech.delay * 0.2, duration: 0.5 }}
                        className="absolute z-20 group/bubble"
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                        }}
                      >
                        <motion.div
                          animate={{ y: [-5, 5, -5] }}
                          transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                          className="relative"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-xl shadow-xl backdrop-blur-sm hover:scale-125 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                            {tech.icon}
                          </div>
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bubble:opacity-100 transition-opacity whitespace-nowrap">
                            <span className="px-2 py-1 rounded bg-white dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">{tech.label}</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Main profile image with gradient border */}
                  <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full" />
                    <div className="absolute inset-[4px] bg-white dark:bg-slate-900 rounded-full" />
                    
                    <div className="absolute inset-[6px] rounded-full overflow-hidden">
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
                  
                  {/* Animated status indicator */}
                  <div className="absolute bottom-4 right-4 z-30">
                    <div className="relative">
                      <div className="absolute inset-0 w-8 h-8 bg-emerald-400 rounded-full blur-md animate-pulse" />
                      <div className="relative w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-3 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                        <span className="text-xs">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Creative Stats Section - Floating Cards */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="pt-16 relative"
            >
              {/* Section label */}
              <div className="text-center mb-8">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">// My journey in numbers</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {[
                  { count: yearsCount.count, suffix: "+", label: "Years Experience", icon: <Calendar className="w-5 h-5" />, color: 'from-cyan-500 to-blue-500' },
                  { count: projectsCount.count, suffix: "+", label: "Projects Completed", icon: <Code className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
                  { count: techCount.count, suffix: "+", label: "Technologies", icon: <Zap className="w-5 h-5" />, color: 'from-amber-500 to-orange-500' },
                  { count: certsCount.count, suffix: "", label: "Certifications", icon: <Award className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' }
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
                    className="group relative"
                  >
                    {/* Glow on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300`} />
                    
                    <div className="relative text-center p-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
                      <div className={`flex items-center justify-center mb-3 w-10 h-10 mx-auto rounded-xl bg-gradient-to-r ${stat.color}`}>
                        <span className="text-white">{stat.icon}</span>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-1">
                        {stat.count}<span className="text-slate-400">{stat.suffix}</span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll Transition About Section */}
      <ScrollTransitionSection />

      {/* Tech Arsenal 3D Section */}
      <TechAnalyticsDashboard />

      {/* Experience Section - Interactive Journey Timeline */}
      <section id="experience" className="py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900" />
        
        {/* Starfield effect - optimized */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${8 + i * 8}%`,
                top: `${10 + (i % 4) * 22}%`,
                opacity: 0.4 + (i % 3) * 0.2,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>

        {/* Floating orbital rings - CSS optimized */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[600px] h-[600px] border border-indigo-500/10 rounded-full" style={{ animation: 'spin 60s linear infinite' }} />
          <div className="absolute w-[400px] h-[400px] border border-purple-500/10 rounded-full" style={{ animation: 'spin 45s linear infinite reverse' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
              animate={{ boxShadow: ["0 0 20px rgba(99, 102, 241, 0)", "0 0 20px rgba(99, 102, 241, 0.3)", "0 0 20px rgba(99, 102, 241, 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">My Journey</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A constellation of milestones in my professional universe
            </p>
          </motion.div>
          
          {/* Timeline Journey */}
          <div className="max-w-5xl mx-auto relative">
            {/* Central timeline beam */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block"
              style={{
                background: 'linear-gradient(180deg, transparent, #6366f1, #a855f7, #ec4899, transparent)',
              }}
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Experience Cards */}
            <div className="space-y-16 md:space-y-0">
              {experiences.map((experience, index) => {
                const isLeft = index % 2 === 0;
                const colors = [
                  { bg: 'from-purple-600 to-indigo-600', glow: 'purple', icon: '🚀' },
                  { bg: 'from-blue-600 to-cyan-600', glow: 'blue', icon: '💻' },
                  { bg: 'from-emerald-600 to-teal-600', glow: 'emerald', icon: '🎯' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      delay: index * 0.2,
                      duration: 0.8,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className={`relative md:w-1/2 ${isLeft ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
                    style={{ marginTop: index > 0 ? '-4rem' : 0 }}
                  >
                    {/* Timeline node */}
                    <div
                      className={`absolute top-8 ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${color.bg} shadow-lg shadow-indigo-500/30 z-10 hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-xl">{color.icon}</span>
                    </div>

                    {/* Connecting line */}
                    <div
                      className={`absolute top-12 ${isLeft ? 'right-6' : 'left-6'} w-6 h-0.5 bg-gradient-to-r ${color.bg} hidden md:block`}
                    />

                    {/* Card */}
                    <div className="relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                      {/* Glow effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color.bg} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                      
                      {/* Main card */}
                      <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
                        {/* Header gradient */}
                        <div className={`h-2 bg-gradient-to-r ${color.bg}`} />
                        
                        <div className="p-8">
                          {/* Year badge */}
                          <motion.div
                            className={`absolute -top-3 ${isLeft ? 'right-6' : 'left-6'} md:hidden px-3 py-1 rounded-full bg-gradient-to-r ${color.bg} text-white text-xs font-bold shadow-lg`}
                          >
                            {experience.period}
                          </motion.div>

                          {/* Mobile icon */}
                          <div className={`md:hidden mb-4 w-10 h-10 rounded-xl bg-gradient-to-r ${color.bg} flex items-center justify-center`}>
                            <span className="text-lg">{color.icon}</span>
                          </div>

                          {/* Title & Company */}
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                              {experience.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-semibold text-indigo-400">
                                {experience.company}
                              </span>
                              <span className="hidden md:inline-block px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm font-medium">
                                {experience.period}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-slate-300 leading-relaxed mb-6">
                            {experience.description}
                          </p>

                          {/* Responsibilities */}
                          {experience.responsibilities && (
                            <div className="space-y-3">
                              {experience.responsibilities.map((responsibility, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${color.bg} flex-shrink-0`} />
                                  <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {responsibility}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Type badge */}
                          <div className="mt-6 flex items-center gap-2">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                              experience.type === 'leadership' 
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                                : experience.type === 'volunteer'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            }`}>
                              {experience.type}
                            </span>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 opacity-10">
                          <Sparkles className="w-24 h-24 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Journey end decoration */}
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">✨</span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* "More to come" text */}
            <motion.p
              className="text-center mt-8 text-slate-400 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              And the journey continues...
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certifications Section - Knowledge Constellation */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background matching site theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/30 dark:from-slate-900 dark:via-indigo-950/30 dark:to-purple-950/20" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? 'rgba(99, 102, 241, 0.3)' : 'rgba(168, 85, 247, 0.3)',
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Decorative rings */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-indigo-200/30 dark:border-indigo-700/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-purple-200/30 dark:border-purple-700/20 rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
              animate={{ 
                boxShadow: ["0 0 20px rgba(99, 102, 241, 0)", "0 0 30px rgba(99, 102, 241, 0.3)", "0 0 20px rgba(99, 102, 241, 0)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Achievements Unlocked</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Milestones of continuous learning and professional growth
            </p>
          </motion.div>
          
          {/* Certification Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const gradients = [
                  { from: 'from-indigo-500', to: 'to-blue-500', glow: 'indigo' },
                  { from: 'from-purple-500', to: 'to-pink-500', glow: 'purple' },
                  { from: 'from-cyan-500', to: 'to-blue-500', glow: 'cyan' },
                  { from: 'from-pink-500', to: 'to-rose-500', glow: 'pink' },
                ];
                const gradient = gradients[index % gradients.length];
                
                return (
                  <div
                    key={index}
                    className="relative group hover:-translate-y-2 transition-transform duration-300"
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                    />
                    
                    {/* Card */}
                    <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {/* Top gradient accent */}
                      <div className={`h-1.5 bg-gradient-to-r ${gradient.from} ${gradient.to}`} />
                      
                      <div className="p-6">
                        {/* Icon & Year */}
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <span className="text-white text-lg">{cert.icon}</span>
                          </div>
                          
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient.from} ${gradient.to} text-white`}>
                            {cert.year}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {cert.title}
                        </h3>
                        
                        {/* Issuer */}
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                          {cert.issuer}
                        </p>
                        
                        {/* Description */}
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                          {cert.description}
                        </p>
                      </div>

                      {/* Decorative corner */}
                      <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${gradient.from} ${gradient.to} opacity-5 rounded-tl-full`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {[
              { value: '4+', label: 'Certifications', icon: '🎓' },
              { value: '2024', label: 'Most Recent', icon: '📅' },
              { value: '∞', label: 'Always Learning', icon: '🚀' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:scale-105 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <span className="text-xl">{stat.icon}</span>
                <div>
                  <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Holographic Showcase */}
      <section id="projects" className="py-32 relative overflow-hidden">
        {/* Cyberpunk gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-cyan-950/50 to-slate-900" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Static holographic orbs */}
        <div
          className="absolute top-20 left-20 w-64 h-64 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          }}
        />

        {/* Static code symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['</', '/>', '{}', '()'].map((code, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/10 font-mono text-xl"
              style={{
                left: `${10 + i * 20}%`,
                top: `${30 + (i % 2) * 30}%`,
              }}
            >
              {code}
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
              animate={{ 
                boxShadow: ["0 0 20px rgba(6, 182, 212, 0)", "0 0 40px rgba(6, 182, 212, 0.4)", "0 0 20px rgba(6, 182, 212, 0)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">Digital Creations</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Interactive showcases of innovation — hover to explore each holographic project card
            </p>
          </motion.div>
          
          {/* Projects Grid - Holographic Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const colorSchemes = [
                { primary: 'cyan', gradient: 'from-cyan-500 to-blue-500', glow: 'rgba(6, 182, 212, 0.4)' },
                { primary: 'purple', gradient: 'from-purple-500 to-pink-500', glow: 'rgba(168, 85, 247, 0.4)' },
                { primary: 'emerald', gradient: 'from-emerald-500 to-teal-500', glow: 'rgba(16, 185, 129, 0.4)' },
              ];
              const scheme = colorSchemes[index % colorSchemes.length];
              
              return (
                <div
                  key={index}
                  className="relative group perspective-1000 hover:-translate-y-3 transition-transform duration-300"
                >
                  {/* Holographic glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${scheme.gradient} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`}
                  />
                  

                  {/* Main card */}
                  <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden group-hover:border-transparent transition-all duration-500">
                    {/* Top gradient bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${scheme.gradient}`} />
                    
                    {/* Holographic shimmer overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

                    <div className="relative z-10 p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="flex-1">
                          <motion.h3 
                            className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                          >
                            {project.title}
                          </motion.h3>
                          
                          {project.highlight && (
                            <div 
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/30"
                            >
                              <Star className="w-3 h-3 text-cyan-400" />
                              <span className="text-xs font-semibold text-cyan-300">{project.highlight}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Status indicator */}
                        <div className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                          project.status === 'Live' 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                            : project.status === 'Beta'
                            ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                            : project.status === 'Active'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        }`}>
                          <div
                            className={`w-2 h-2 rounded-full animate-pulse ${
                              project.status === 'Live' ? 'bg-emerald-400' : 
                              project.status === 'Beta' ? 'bg-yellow-400' :
                              project.status === 'Active' ? 'bg-blue-400' : 'bg-purple-400'
                            }`}
                          />
                          {project.status}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack - Holographic pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-full border border-slate-700/50 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span className="font-medium text-sm">Source</span>
                        </a>
                        
                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${scheme.gradient} text-white font-medium text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Featured ribbon */}
                    {project.featured && (
                      <div 
                        className="absolute top-6 -right-10 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-xs font-bold px-10 py-1 transform rotate-45 shadow-lg"
                      >
                        ⭐ FEATURED
                      </div>
                    )}

                    {/* Corner decorations */}
                    <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${scheme.gradient} opacity-5 rounded-tl-full`} />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* View More Section */}
          <div className="text-center mt-20">
            <div className="inline-block">
              <p className="text-slate-400 mb-6 text-lg">
                Exploring more digital frontiers...
              </p>
              <a
                href="https://github.com/Quantum-techlab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-xl hover:shadow-cyan-500/40 hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                Explore Full Portfolio
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Terminal decoration */}
            <div className="mt-12 max-w-md mx-auto">
              <div className="bg-slate-900/80 rounded-lg border border-slate-700/50 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">terminal</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-green-400">
                    $ git clone creativity
                  </div>
                  <div className="text-slate-400 mt-1">
                    Cloning into 'future-projects'...
                  </div>
                  <div className="text-cyan-400 mt-1 flex items-center gap-2">
                    <span className="animate-pulse">█</span>
                    Stay tuned...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Connection Portal */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-100 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-indigo-400/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
                animate={{ 
                  boxShadow: ["0 0 20px rgba(99, 102, 241, 0)", "0 0 30px rgba(99, 102, 241, 0.3)", "0 0 20px rgba(99, 102, 241, 0)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Get In Touch</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects and explore new opportunities
              </p>
            </motion.div>
            
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  icon: <Mail className="w-6 h-6" />, 
                  title: 'Email', 
                  value: 'ola283dayo@gmail.com',
                  href: 'mailto:ola283dayo@gmail.com',
                  gradient: 'from-indigo-500 to-blue-500',
                  emoji: '📧'
                },
                { 
                  icon: <Linkedin className="w-6 h-6" />, 
                  title: 'LinkedIn', 
                  value: 'Connect with me',
                  href: 'https://linkedin.com/in/abdulrasaq-abdulrasaq',
                  gradient: 'from-blue-500 to-cyan-500',
                  emoji: '💼'
                },
                { 
                  icon: <Github className="w-6 h-6" />, 
                  title: 'GitHub', 
                  value: 'Explore my work',
                  href: 'https://github.com/Quantum-techlab',
                  gradient: 'from-purple-500 to-pink-500',
                  emoji: '🚀'
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="relative group block hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                  />
                  
                  {/* Card */}
                  <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 text-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {/* Icon */}
                    <div 
                      className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${contact.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {contact.value}
                    </p>

                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-4 h-4 text-indigo-500" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a
                href="mailto:ola283dayo@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <p className="mt-6 text-slate-500 dark:text-slate-400 text-sm">
                Usually respond within 24 hours ⚡
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section - Cosmic Horizon */}
      <footer className="relative overflow-hidden bg-slate-950 text-white">
        {/* Aurora background effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
          <div
            className="absolute top-0 left-0 right-0 h-96 animate-pulse"
            style={{
              background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.04) 50%, transparent 100%)',
            }}
          />
          
          {/* Static stars with CSS animation */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 80 + 10}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Horizon line glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)',
          }}
        />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-12 gap-12 mb-16">
              
              {/* Brand Section - Large */}
              <div className="md:col-span-5">
                {/* Logo */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <span className="text-xl font-bold">AA</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Abdulrasaq Abdulrasaq
                      </h3>
                      <p className="text-sm text-slate-400">Full-Stack Developer & Tech Lead</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                  Crafting digital experiences at the intersection of creativity and technology. 
                  Let's build something extraordinary together.
                </p>

                {/* Social Links - Orbit style */}
                <div className="flex items-center gap-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Quantum-techlab", color: "hover:bg-slate-700", label: "GitHub" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq", color: "hover:bg-blue-600", label: "LinkedIn" },
                    { icon: <Mail className="w-5 h-5" />, href: "mailto:ola283dayo@gmail.com", color: "hover:bg-pink-600", label: "Email" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-slate-800/50 backdrop-blur-sm ${social.color} rounded-xl border border-slate-700/50 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300`}
                    >
                      {social.icon}
                      {/* Tooltip */}
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-700 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="md:col-span-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Navigation</h4>
                <ul className="space-y-4">
                  {[
                    { name: 'About', href: '#about', emoji: '👤' },
                    { name: 'Skills', href: '#skills', emoji: '🛠️' },
                    { name: 'Experience', href: '#experience', emoji: '💼' },
                    { name: 'Projects', href: '#projects', emoji: '🚀' },
                    { name: 'Contact', href: '#contact', emoji: '📬' },
                  ].map((link, i) => (
                    <li key={i} className="hover:translate-x-1 transition-transform duration-200">
                      <a 
                        href={link.href} 
                        className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                      >
                        <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">{link.emoji}</span>
                        <span className="relative">
                          {link.name}
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Status */}
              <div className="md:col-span-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Connect</h4>
                
                <div className="space-y-4 mb-8">
                  <div 
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:scale-[1.02] hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="text-slate-300 text-sm">ola283dayo@gmail.com</p>
                    </div>
                  </div>

                  <div 
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:scale-[1.02] hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Location</p>
                      <p className="text-slate-300 text-sm">University of Ilorin, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Status Card */}
                <div 
                  className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <div>
                      <p className="text-emerald-400 font-semibold text-sm">Open to Opportunities</p>
                      <p className="text-slate-400 text-xs">Ready for exciting projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center">
                <div className="px-4 bg-slate-950">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>© 2025</span>
                <span className="text-slate-400 font-medium">Abdulrasaq Abdulrasaq</span>
                <span>•</span>
                <span>All rights reserved</span>
              </div>

              {/* Tech stack badges */}
              <div className="flex items-center gap-3">
                <span className="text-slate-600 text-xs">Built with</span>
                {['⚛️ React', '🎨 Tailwind', '⚡ Vite', '▲ Vercel'].map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400 hover:scale-105 hover:border-indigo-500/50 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Easter egg - Konami hint */}
            <p className="text-center mt-8 text-slate-700 text-xs">
              Made with 💜 and lots of ☕
            </p>
          </div>
        </div>

        {/* Static decorative particles at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
              style={{
                left: `${15 + i * 18}%`,
                bottom: 20 + i * 5,
                background: i % 2 === 0 ? 'rgba(99, 102, 241, 0.4)' : 'rgba(168, 85, 247, 0.4)',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Index;