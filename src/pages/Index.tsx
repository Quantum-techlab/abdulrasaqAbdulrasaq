
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Users } from "lucide-react";
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
      demo: "#"
    },
    {
      title: "ScanShare",
      description: "Advanced document scanning and sharing platform with OCR capabilities, cloud storage integration, and real-time collaboration features.",
      tech: ["React", "OCR", "Cloud Storage", "Web APIs"],
      github: "https://github.com/Quantum-techlab",
      demo: "#"
    },
    {
      title: "CrossDevice Sync",
      description: "Seamless file and clipboard sync between devices using modern web technologies. Features real-time synchronization and secure data transfer.",
      tech: ["React", "Supabase", "Vite", "TypeScript"],
      github: "https://github.com/Quantum-techlab",
      demo: "#"
    },
    {
      title: "Textify Alchemy",
      description: "Advanced OCR and speech-to-text extraction application powered by Tesseract.js and Web APIs for accurate text recognition.",
      tech: ["React", "Tesseract.js", "Web APIs", "JavaScript"],
      github: "https://github.com/Quantum-techlab",
      demo: "#"
    },
    {
      title: "MindConnect",
      description: "Community-based mental health support platform with mood tracking, secure authentication, and comprehensive user dashboards.",
      tech: ["React", "Supabase", "Tailwind CSS", "Authentication"],
      github: "https://github.com/Quantum-techlab",
      demo: "#"
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
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Vite", "Tailwind CSS",
    "Supabase", "Firebase", "PostgreSQL", "MongoDB", "Express.js", "REST APIs", "GraphQL",
    "Git/GitHub", "Docker", "AI Integration", "Prompt Engineering", "OCR", "Web APIs", 
    "Responsive Design", "Authentication", "Dashboards", "Accessibility", "Cloud Deployment"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Enhanced Navigation */}
      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Software Engineer</span><br />
              <span className="text-foreground">Frontend & AI Enthusiast</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building innovative digital solutions with modern web technologies and AI integration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="group animate-glow" asChild>
                <a href="mailto:ola283dayo@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
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
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm <span className="text-primary font-semibold">Abdulrasaq</span> — a software engineer specializing in frontend development with backend capabilities and AI integration expertise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I build full-stack web applications using React, Node.js, and modern cloud technologies. As an AI enthusiast and prompt engineer, I integrate intelligent features into applications to create innovative user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently studying Information and Communication Science at the University of Ilorin, I'm passionate about creating accessible, scalable solutions that solve real-world problems.
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>University of Ilorin, Nigeria</span>
                </div>
              </div>
              <div className="glow-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glow-effect p-6 hover:scale-105 transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience & Certifications</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <Card key={index} className="glow-effect p-6 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">{exp.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 mt-8">
                <Users className="w-4 h-4 text-primary" />
                Volunteering
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>• iTalk Conference – Media Support</p>
                <p>• AI in Nigeria Ilorin Community Launch – Technical Support</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glow-effect p-4">
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-primary text-sm">{cert.issuer} • {cert.year}</p>
                    <p className="text-muted-foreground text-sm mt-1">{cert.description}</p>
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
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:ola283dayo@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 Abdulrasaq Alatare. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="mailto:ola283dayo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/Quantum-techlab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/abdulrasaq-abdulrasaq" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
