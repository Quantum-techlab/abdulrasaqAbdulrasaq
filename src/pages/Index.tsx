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
    demo: "#",
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
    demo: "#",
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

      {/* Professional Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-animated opacity-40" />

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
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
        <FloatingElements />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Crafting digital experiences with passion, precision, and purpose
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              {/* Main About Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <GlassCard delay={0.2} className="p-10 h-full relative group">
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      Who I Am
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="relative">
                      I'm a passionate frontend developer and software engineer currently pursuing Information and Communication Science 
                      at the University of Ilorin. As Software Director at ITSA, I lead innovative projects and mentor fellow developers 
                      in building impactful digital solutions.
                    </p>
                    
                    <p>
                      My development journey began with a fascination for creating digital experiences that solve real-world problems. 
                      I specialize in the React ecosystem, modern web technologies, and AI integration, with a strong focus on 
                      building user-centric applications that combine functionality with exceptional design.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-100/50 dark:border-purple-500/20">
                      <p className="text-slate-700 dark:text-slate-200 font-medium">
                        <span className="text-2xl">💫</span> When I'm not coding, you'll find me mentoring aspiring developers, 
                        teaching at workshops, volunteering at tech conferences, and building communities. 
                        I believe in paying it forward and empowering the next generation of creators.
                      </p>
                    </div>
                    
                    <p>
                      Beyond coding, I'm deeply involved in the tech community through volunteering at conferences, supporting 
                      developer communities, and sharing knowledge. I believe in the power of technology to create positive 
                      change and am always eager to collaborate on projects that make a meaningful impact.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-8">
                    <ModernButton variant="primary" href="#projects">
                      <Code className="w-4 h-4" />
                      View My Work
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </ModernButton>
                    <ModernButton variant="outline" href="mailto:ola283dayo@gmail.com">
                      <Mail className="w-4 h-4" />
                      Let's Connect
                    </ModernButton>
                  </div>
                </GlassCard>
              </motion.div>
              
              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <GlassCard delay={0.4} className="p-10 h-full relative group">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      Tech Arsenal
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                    Constantly evolving toolkit of technologies I use to bring ideas to life
                  </p>
                  
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
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 rounded-full blur transition-all duration-200" />
                        <div className="relative px-4 py-3 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-slate-700/80 dark:to-slate-600/80 backdrop-blur-sm border border-blue-200/50 dark:border-slate-500/50 rounded-full text-slate-700 dark:text-slate-200 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-default">
                          <SkillIcon skill={skill} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto"
            >
              <GlassCard delay={0.6} className="p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-8">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    My Philosophy
                  </h3>
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    "Great software isn't just about clean code—it's about creating meaningful experiences that empower people 
                    and solve real problems. Every line I write is a step toward building a better digital world."
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-6xl font-bold mb-20 text-center"
          >
            <span className="text-gradient">Experience</span>
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <GlassCard delay={index * 0.1} className="p-8 group hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className={`p-3 rounded-full ${
                        experience.type === 'leadership' 
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                          : experience.type === 'volunteer'
                          ? 'bg-gradient-to-r from-green-500 to-teal-500'
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      } text-white shadow-lg`}>
                        {experience.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                              {experience.title}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {experience.company}
                            </p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className="w-fit mt-2 md:mt-0 bg-white/50 dark:bg-slate-700/50"
                          >
                            {experience.period}
                          </Badge>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                          {experience.description}
                        </p>
                        
                        {experience.responsibilities && (
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            <span className="text-gradient">Certifications</span>
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <GlassCard delay={index * 0.1} className="p-6 text-center group hover:shadow-xl transition-all duration-300">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {cert.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mb-3 leading-relaxed">
                        {cert.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
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
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex items-center gap-2 text-xs"
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="no-underline"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                    
                    {project.demo !== "#" && (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="flex items-center gap-2 text-xs"
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="no-underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live Demo
                        </a>
                      </Button>
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

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Abdulrasaq Abdulrasaq
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                  Full-stack developer passionate about creating innovative solutions that make a difference. 
                  Always ready to take on new challenges and build amazing products.
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/Quantum-techlab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/abdulrasaq-abdulrasaq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:ola283dayo@gmail.com"
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="text-slate-300 hover:text-white transition-colors duration-200">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300 text-sm">ola283dayo@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300 text-sm">University of Ilorin, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-slate-300 text-sm">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2025 Abdulrasaq Abdulrasaq. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span>Built with React & Tailwind CSS</span>
                <span>•</span>
                <span>Deployed on Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;