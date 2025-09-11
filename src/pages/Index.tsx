
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Users, ArrowRight, Star } from "lucide-react";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FloatingElements } from "@/components/FloatingElements";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "FaceTrust AI",
      description: "An AI-powered facial recognition system for secure identity verification and centralized data access. Uses deep learning models to provide instant, reliable identity verification connecting with databases (NIN, BVN, Passport).",
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
      description: "Leading student-driven software initiatives and fostering collaboration within the department. Organizing tech workshops, hackathons, and mentorship programs while driving innovation through AI-powered projects and modern web technologies.",
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
      year: "2024",
      description: "Artificial Intelligence fundamentals"
    },
    {
      title: "Basic Computing and Networking",
      issuer: "NITDA",
      year: "2014",
      description: "Foundational IT skills certification"
    }
  ];

  const skills = [
    // Frontend
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS",
    // Backend & Database
    "Node.js", "Express.js", "Supabase", "Firebase", "PostgreSQL", "MongoDB",
    // API & Integration
    "REST APIs", "GraphQL", "Web APIs", "OCR Integration",
    // AI & Prompt Engineering
    "AI Integration", "Prompt Engineering", "ChatGPT API", "Machine Learning Basics",
    // DevOps & Tools
    "Git/GitHub", "Docker", "Cloud Deployment", "Authentication",
    // Design & UX
    "Responsive Design", "Dashboards", "Accessibility", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Enhanced Navigation */}
      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <FloatingElements />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Available for opportunities</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Software Engineer
              </span>
              <br />
              <span className="text-slate-700 dark:text-slate-200">Frontend & AI Enthusiast</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Building innovative digital solutions with modern web technologies, AI integration, and prompt engineering expertise
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <AnimatedButton size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="mailto:ola283dayo@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </AnimatedButton>
              
              <div className="flex gap-3">
                <AnimatedButton variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300" asChild>
                  <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300" asChild>
                  <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </AnimatedButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">About Me</h2>
            </AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Hi, I'm <span className="text-blue-600 font-semibold">Abdulrasaq</span> — a software engineer specializing in frontend development with backend capabilities and AI integration expertise.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I build full-stack web applications using React, Node.js, and modern cloud technologies. As an AI enthusiast and prompt engineer, I integrate intelligent features into applications to create innovative user experiences.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently studying Information Technology at the University of Ilorin, I'm passionate about creating accessible, scalable solutions that solve real-world problems.
                </p>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>University of Ilorin, Nigeria</span>
                </div>
                </div>
              </AnimatedSection>
              
              <AnimatedCard delay={0.4} className="bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ 
                        delay: index * 0.05,
                        duration: 0.3
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-slate-100 dark:bg-slate-600 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-200 transition-colors cursor-default border-0"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">Featured Projects</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedCard 
                key={index} 
                delay={index * 0.1}
                className={`group bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  project.featured ? 'lg:col-span-1 ring-2 ring-blue-200' : ''
                }`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <motion.h3 
                      whileHover={{ scale: 1.02 }}
                      className="text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                   <div className="flex items-center gap-2">
                     {project.featured && (
                       <motion.div 
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{ delay: 0.5 + index * 0.1 }}
                         className="flex items-center gap-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 px-2 py-1 rounded-full"
                       >
                         <Star className="w-3 h-3 text-blue-600" />
                         <span className="text-xs font-medium text-blue-700 dark:text-blue-200">Featured</span>
                       </motion.div>
                     )}
                     {project.highlight && (
                       <motion.div 
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{ delay: 0.7 + index * 0.1 }}
                         className="flex items-center gap-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 px-2 py-1 rounded-full"
                       >
                         <span className="text-xs font-medium text-purple-700 dark:text-purple-200">{project.highlight}</span>
                       </motion.div>
                     )}
                   </div>
                  </div>
                  
                  {project.status && (
                    <Badge 
                      variant="outline" 
                      className={`w-fit mb-3 ${
                        project.status === 'In Development' ? 'border-orange-200 text-orange-600 bg-orange-50' :
                        project.status === 'Active' ? 'border-green-200 text-green-600 bg-green-50' :
                        'border-slate-200 text-slate-600 bg-slate-50'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  )}
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <AnimatedButton variant="outline" size="sm" className="flex-1 hover:bg-slate-50" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </a>
                    </AnimatedButton>
                    <AnimatedButton variant="outline" size="sm" className="flex-1 hover:bg-slate-50" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </a>
                    </AnimatedButton>
                  </div>
                </div>
              </AnimatedCard>
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
                 <AnimatedCard key={index} delay={index * 0.1} className={`bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-white/20 dark:border-slate-600/20 shadow-lg p-6 mb-4 ${exp.type === 'leadership' ? 'ring-2 ring-purple-200 dark:ring-purple-800' : ''}`}>
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
                  <a href="https://chat.openai.com/mnt/data/Abdulrasaq_Abdulrasaq_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
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
