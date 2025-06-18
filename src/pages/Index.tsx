
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Users, ArrowRight, Star } from "lucide-react";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
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
      title: "Software Engineer Intern",
      company: "Ilorin Innovation Hub",
      period: "2025",
      description: "Developed full-stack features, built attendance tracking systems, and provided technical support for events",
      icon: <MapPin className="w-4 h-4" />
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800 transition-colors duration-300">
      {/* Enhanced Navigation */}
      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-600">Available for opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Software Engineer
              </span>
              <br />
              <span className="text-slate-700">Frontend & AI Enthusiast</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building innovative digital solutions with modern web technologies, AI integration, and prompt engineering expertise
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="mailto:ola283dayo@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300" asChild>
                  <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300" asChild>
                  <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Hi, I'm <span className="text-blue-600 font-semibold">Abdulrasaq</span> — a software engineer specializing in frontend development with backend capabilities and AI integration expertise.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I build full-stack web applications using React, Node.js, and modern cloud technologies. As an AI enthusiast and prompt engineer, I integrate intelligent features into applications to create innovative user experiences.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Currently studying Information Technology at the University of Ilorin, I'm passionate about creating accessible, scalable solutions that solve real-world problems.
                </p>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>University of Ilorin, Nigeria</span>
                </div>
              </div>
              
              <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-slate-800">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-slate-100 hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  project.featured ? 'lg:col-span-1 ring-2 ring-blue-200' : ''
                }`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-blue-100 to-purple-100 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium text-blue-700">Featured</span>
                      </div>
                    )}
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
                  
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-slate-200 text-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-slate-50" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-slate-50" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">Experience & Certifications</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-800">
                <Calendar className="w-5 h-5 text-blue-600" />
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg p-6 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-600 mt-1">{exp.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-800">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-slate-500 mb-2">{exp.period}</p>
                      <p className="text-slate-600">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 mt-8 text-slate-800">
                <Users className="w-4 h-4 text-blue-600" />
                Volunteering
              </h4>
              <div className="space-y-2 text-slate-600">
                <p>• iTalk Conference – Media Support</p>
                <p>• AI in Nigeria Ilorin Community Launch – Technical Support</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-800">
                <Award className="w-5 h-5 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg p-4">
                    <h4 className="font-semibold text-slate-800">{cert.title}</h4>
                    <p className="text-blue-600 text-sm">{cert.issuer} • {cert.year}</p>
                    <p className="text-slate-600 text-sm mt-1">{cert.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="mailto:ola283dayo@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-200 hover:bg-slate-50" asChild>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-200 hover:bg-slate-50" asChild>
              <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600">
              © 2025 Abdulrasaq Alatare. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="mailto:ola283dayo@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
