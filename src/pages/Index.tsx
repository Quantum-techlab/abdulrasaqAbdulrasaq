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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <EnhancedNavigation />
      <FloatingCTA />

      {/* Hero Section - Clean Landing Page Style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 section-hero">
        {/* Warm champagne gradient accent */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-[hsl(38_70%_62%/0.06)] via-[hsl(45_80%_72%/0.04)] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-tl from-[hsl(32_55%_42%/0.04)] to-transparent rounded-full blur-3xl" />
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
                <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--champagne)/0.4)] via-[hsl(var(--champagne-light)/0.3)] to-[hsl(var(--champagne)/0.4)] rounded-full blur-lg group-hover:opacity-100 opacity-60 transition-opacity" />
                <div className="relative inline-flex items-center gap-3 glass rounded-full px-6 py-3 champagne-glow">
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 bg-[hsl(var(--champagne))] rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-[hsl(var(--champagne-dark))] rounded-full relative" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
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
                    className="text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-2"
                  >
                    👋 Hello, I'm
                  </motion.div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                    {/* First name with gradient underline */}
                    <span className="relative inline-block">
                      <span className="text-gradient">
                        Abdulrasaq
                      </span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--champagne))] via-[hsl(var(--champagne-light))] to-[hsl(var(--champagne))] origin-left rounded-full"
                      />
                    </span>
                    
                    {/* Last name with outline effect */}
                    <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
                      <span className="text-gradient-champagne">
                        Abdulrasaq
                      </span>
                    </span>
                  </h1>
                  
                  {/* Animated Role with terminal effect */}
                  <div className="h-16 flex items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[hsl(var(--champagne-dark))] dark:text-[hsl(var(--champagne))] font-mono">$</span>
                      <span className="text-muted-foreground font-mono">role:</span>
                      <div className="text-2xl md:text-3xl font-bold">
                        <span className="text-gradient">
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
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--champagne)/0.5)] via-[hsl(var(--champagne-dark)/0.5)] to-[hsl(var(--champagne)/0.5)] rounded-full" />
                  
                  <div className="pl-4 border-l-2 border-[hsl(var(--champagne)/0.2)]">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                      <span className="text-[hsl(var(--champagne-dark))] dark:text-[hsl(var(--champagne))] font-mono">// </span>
                      Passionate about crafting exceptional digital experiences 
                      through clean, efficient code. I specialize in modern web 
                      technologies and AI integration to build scalable, 
                      user-centric applications that make a <span className="text-foreground font-semibold">real impact</span>.
                    </p>
                    
                    {/* Location with icon */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-subtle">
                        <MapPin className="w-4 h-4 text-[hsl(var(--champagne-dark))] dark:text-[hsl(var(--champagne))]" />
                        <span className="text-sm text-foreground/80">University of Ilorin, Nigeria</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-subtle">
                        <span className="text-sm">🎓</span>
                        <span className="text-sm text-foreground/80">Software Engineering</span>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--champagne-dark))] via-[hsl(var(--champagne))] to-[hsl(var(--champagne-dark))]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--champagne))] via-[hsl(var(--champagne-light))] to-[hsl(var(--champagne))] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="absolute inset-[2px] bg-background rounded-2xl" />
                    <span className="relative flex items-center gap-3 text-gradient-champagne font-bold">
                      <Mail className="w-5 h-5 text-[hsl(var(--champagne-dark))] dark:text-[hsl(var(--champagne))]" />
                      Let's Connect
                      <ArrowRight className="w-5 h-5 text-[hsl(var(--champagne-dark))] dark:text-[hsl(var(--champagne))] group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  {/* Secondary CTA */}
                  <a
                    href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold glass champagne-border text-foreground hover:champagne-glow transition-all duration-300 hover:scale-105"
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
                      className="p-3 rounded-xl glass-subtle hover:champagne-glow hover:border-[hsl(var(--champagne)/0.3)] transition-all duration-300 hover:scale-110 group"
                    >
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com/in/abdulrasaq-abdulrasaq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-subtle hover:champagne-glow hover:border-[hsl(var(--champagne)/0.3)] transition-all duration-300 hover:scale-110 group"
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
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
                  {/* Champagne glowing aura */}
                  <div className="absolute inset-0 w-72 h-72 -translate-x-4 -translate-y-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--champagne)/0.15)] via-[hsl(var(--champagne-light)/0.2)] to-[hsl(var(--champagne)/0.15)] rounded-full blur-2xl animate-pulse" />
                  </div>
                  
                  {/* Main profile image with champagne gradient border */}
                  <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl champagne-glow">
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--champagne-dark))] via-[hsl(var(--champagne))] to-[hsl(var(--champagne-dark))] rounded-full" />
                    <div className="absolute inset-[4px] bg-background rounded-full" />
                    
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
                      <div className="absolute inset-0 w-8 h-8 bg-[hsl(var(--champagne))] rounded-full blur-md animate-pulse" />
                      <div className="relative w-8 h-8 bg-gradient-to-r from-[hsl(var(--champagne-dark))] to-[hsl(var(--champagne))] rounded-full border-3 border-background flex items-center justify-center shadow-lg">
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
                <span className="text-xs font-mono text-[hsl(var(--champagne-dark))] dark:text-[hsl(var(--champagne))] uppercase tracking-widest">// My journey in numbers</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {[
                  { count: yearsCount.count, suffix: "+", label: "Years Experience", icon: <Calendar className="w-5 h-5" />, color: 'from-[hsl(var(--champagne-dark))] to-[hsl(var(--champagne))]' },
                  { count: projectsCount.count, suffix: "+", label: "Projects Completed", icon: <Code className="w-5 h-5" />, color: 'from-[hsl(var(--champagne))] to-[hsl(var(--champagne-light))]' },
                  { count: techCount.count, suffix: "+", label: "Technologies", icon: <Zap className="w-5 h-5" />, color: 'from-[hsl(var(--champagne-dark))] to-[hsl(var(--champagne))]' },
                  { count: certsCount.count, suffix: "", label: "Certifications", icon: <Award className="w-5 h-5" />, color: 'from-[hsl(var(--champagne))] to-[hsl(var(--champagne-dark))]' }
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
                    
                    <div className="relative text-center p-5 glass rounded-2xl hover:champagne-glow transition-all duration-300 hover:-translate-y-1 shimmer-champagne">
                      <div className={`flex items-center justify-center mb-3 w-10 h-10 mx-auto rounded-xl bg-gradient-to-r ${stat.color}`}>
                        <span className="text-primary-foreground">{stat.icon}</span>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                        {stat.count}<span className="text-[hsl(var(--champagne))]">{stat.suffix}</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
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

      {/* Experience Section */}
      <section id="experience" className="py-24 relative overflow-hidden section-experience">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">My Journey</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A timeline of milestones in my professional journey
            </p>
          </motion.div>
          
          {/* Timeline Journey */}
          <div className="max-w-5xl mx-auto relative">
            {/* Central timeline beam */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block bg-gradient-to-b from-transparent via-border to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Experience Cards */}
            <div className="space-y-16 md:space-y-0">
              {experiences.map((experience, index) => {
                const isLeft = index % 2 === 0;
                const icons = ['🚀', '💻', '🎯', '⭐'];
                const icon = icons[index % icons.length];
                
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
                      className={`absolute top-8 ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg z-10 hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-xl">{icon}</span>
                    </div>

                    {/* Connecting line */}
                    <div
                      className={`absolute top-12 ${isLeft ? 'right-6' : 'left-6'} w-6 h-px bg-border hidden md:block`}
                    />

                    {/* Card */}
                    <div className="relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                      {/* Main card */}
                      <div className="relative premium-card rounded-2xl overflow-hidden">
                        {/* Header accent */}
                        <div className="h-1 bg-gradient-to-r from-primary/50 to-primary/20" />
                        
                        <div className="p-8">
                          {/* Year badge */}
                          <motion.div
                            className={`absolute -top-3 ${isLeft ? 'right-6' : 'left-6'} md:hidden px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg`}
                          >
                            {experience.period}
                          </motion.div>

                          {/* Mobile icon */}
                          <div className="md:hidden mb-4 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                            <span className="text-lg">{icon}</span>
                          </div>

                          {/* Title & Company */}
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300">
                              {experience.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-semibold text-primary">
                                {experience.company}
                              </span>
                              <span className="hidden md:inline-block px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm font-medium">
                                {experience.period}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {experience.description}
                          </p>

                          {/* Responsibilities */}
                          {experience.responsibilities && (
                            <div className="space-y-3">
                              {experience.responsibilities.map((responsibility, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                                    {responsibility}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Type badge */}
                          <div className="mt-6 flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary text-muted-foreground border border-border">
                              {experience.type}
                            </span>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 opacity-5">
                          <Sparkles className="w-24 h-24 text-foreground" />
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
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
            </motion.div>

            {/* "More to come" text */}
            <motion.p
              className="text-center mt-8 text-muted-foreground italic"
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

      {/* Certifications Section */}
      <section className="py-24 relative overflow-hidden section-about">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <Award className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Achievements Unlocked</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones of continuous learning and professional growth
            </p>
          </motion.div>
          
          {/* Certification Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="relative group hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Card */}
                  <div className="relative premium-card rounded-2xl overflow-hidden">
                    {/* Top accent */}
                    <div className="h-1 bg-gradient-to-r from-primary/50 to-primary/20" />
                    
                    <div className="p-6">
                      {/* Icon & Year */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg">{cert.icon}</span>
                        </div>
                        
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-secondary text-muted-foreground border border-border">
                          {cert.year}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      
                      {/* Issuer */}
                      <p className="text-sm font-medium text-primary mb-3">
                        {cert.issuer}
                      </p>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
                className="flex items-center gap-3 px-5 py-3 rounded-xl premium-card hover:scale-105 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <span className="text-xl">{stat.icon}</span>
                <div>
                  <div className="text-lg font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative overflow-hidden section-projects">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <Code className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Digital Creations</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions and creative implementations
            </p>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group hover:-translate-y-3 transition-transform duration-300"
              >
                {/* Main card */}
                <div className="relative premium-card rounded-2xl overflow-hidden">
                  {/* Top accent */}
                  <div className="h-1 bg-gradient-to-r from-primary/50 to-primary/20" />

                  <div className="relative z-10 p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300">
                          {project.title}
                        </h3>
                        
                        {project.highlight && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full border border-border">
                            <Star className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs font-semibold text-muted-foreground">{project.highlight}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Status indicator */}
                      <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary text-muted-foreground border border-border">
                        <div className="w-2 h-2 rounded-full animate-pulse bg-primary" />
                        {project.status}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full border border-border group-hover:border-primary/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-medium text-sm">Source</span>
                      </a>
                      
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Featured ribbon */}
                  {project.featured && (
                    <div className="absolute top-6 -right-10 bg-primary text-primary-foreground text-xs font-bold px-10 py-1 transform rotate-45 shadow-lg">
                      ⭐ FEATURED
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Section */}
          <div className="text-center mt-20">
            <div className="inline-block">
              <p className="text-muted-foreground mb-6 text-lg">
                Exploring more digital frontiers...
              </p>
              <a
                href="https://github.com/Quantum-techlab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                Explore Full Portfolio
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Terminal decoration */}
            <div className="mt-12 max-w-md mx-auto">
              <div className="premium-card rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-primary">
                    $ git clone creativity
                  </div>
                  <div className="text-muted-foreground mt-1">
                    Cloning into 'future-projects'...
                  </div>
                  <div className="text-primary mt-1 flex items-center gap-2">
                    <span className="animate-pulse">█</span>
                    Stay tuned...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden section-contact">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
              >
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Get In Touch</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                Let's Connect
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                },
                { 
                  icon: <Linkedin className="w-6 h-6" />, 
                  title: 'LinkedIn', 
                  value: 'Connect with me',
                  href: 'https://linkedin.com/in/abdulrasaq-abdulrasaq',
                },
                { 
                  icon: <Github className="w-6 h-6" />, 
                  title: 'GitHub', 
                  value: 'Explore my work',
                  href: 'https://github.com/Quantum-techlab',
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="relative group block hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Card */}
                  <div className="relative premium-card rounded-2xl p-6 text-center">
                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {contact.value}
                    </p>

                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a
                href="mailto:ola283dayo@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <p className="mt-6 text-muted-foreground text-sm">
                Usually respond within 24 hours ⚡
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} 
          />
        </div>

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-12 gap-12 mb-16">
              
              {/* Brand Section - Large */}
              <div className="md:col-span-5">
                {/* Logo */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-foreground text-primary flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold">AA</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        Abdulrasaq Abdulrasaq
                      </h3>
                      <p className="text-sm text-primary-foreground/70">Full-Stack Developer & Tech Lead</p>
                    </div>
                  </div>
                </div>

                <p className="text-primary-foreground/70 leading-relaxed mb-8 max-w-md">
                  Crafting digital experiences at the intersection of creativity and technology. 
                  Let's build something extraordinary together.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Quantum-techlab", label: "GitHub" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq", label: "LinkedIn" },
                    { icon: <Mail className="w-5 h-5" />, href: "mailto:ola283dayo@gmail.com", label: "Email" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group relative p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl border border-primary-foreground/10 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                    >
                      {social.icon}
                      {/* Tooltip */}
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary-foreground text-primary rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="md:col-span-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 mb-6">Navigation</h4>
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
                        className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
                      >
                        <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">{link.emoji}</span>
                        <span className="relative">
                          {link.name}
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary-foreground/50 group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Status */}
              <div className="md:col-span-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 mb-6">Connect</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:scale-[1.02] transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/50">Email</p>
                      <p className="text-primary-foreground/80 text-sm">ola283dayo@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:scale-[1.02] transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/50">Location</p>
                      <p className="text-primary-foreground/80 text-sm">University of Ilorin, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Status Card */}
                <div className="p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">Open to Opportunities</p>
                      <p className="text-primary-foreground/50 text-xs">Ready for exciting projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary-foreground/10" />
              </div>
              <div className="relative flex justify-center">
                <div className="px-4 bg-primary">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
                <span>© 2025</span>
                <span className="text-primary-foreground/70 font-medium">Abdulrasaq Abdulrasaq</span>
                <span>•</span>
                <span>All rights reserved</span>
              </div>

              {/* Tech stack badges */}
              <div className="flex items-center gap-3">
                <span className="text-primary-foreground/40 text-xs">Built with</span>
                {['⚛️ React', '🎨 Tailwind', '⚡ Vite', '▲ Vercel'].map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md bg-primary-foreground/5 border border-primary-foreground/10 text-xs text-primary-foreground/60 hover:scale-105 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Made with love */}
            <p className="text-center mt-8 text-primary-foreground/40 text-xs">
              Made with ✨ and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;