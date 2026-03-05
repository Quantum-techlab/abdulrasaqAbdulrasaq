import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, ArrowRight, Download, ArrowUp, Terminal, Globe, Server, Wrench, Code } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const projects = [
    {
      title: "FaceTrust AI",
      description: "AI-powered facial recognition system for secure identity verification and centralized data access using deep learning models.",
      tech: ["React", "AI/ML", "Deep Learning", "Facial Recognition"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://facetrust-rho.vercel.app",
      featured: true,
    },
    {
      title: "Attendance System for IIH",
      description: "Modern attendance tracking for Ilorin Innovation Hub interns with real-time monitoring, analytics dashboard, and automated reporting.",
      tech: ["React", "Supabase", "TypeScript", "Tailwind CSS", "Geolocation"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://iih-hub.vercel.app/",
      featured: true,
    },
    {
      title: "ScanShare",
      description: "Advanced document scanning and sharing platform with OCR capabilities and cloud storage integration.",
      tech: ["React", "OCR", "Cloud Storage", "Web APIs"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      featured: false,
    },
    {
      title: "MindConnect",
      description: "AI-driven mental wellness platform enabling anonymous conversations and guided support.",
      tech: ["React", "AI", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      featured: false,
    },
    {
      title: "Textify",
      description: "Versatile text extraction app converting images and audio into editable text using Tesseract.js.",
      tech: ["React", "Tesseract.js", "Speech-to-Text", "Tailwind CSS"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://texify-ocr.vercel.app/",
      featured: false,
    },
    {
      title: "SynBridge",
      description: "Cross-device clipboard and file sync tool with end-to-end encryption.",
      tech: ["React", "Supabase", "WebSockets", "Encryption"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      featured: false,
    }
  ];

  const experiences = [
    {
      title: "Software Director & Tech Lead",
      company: "ITSA - University of Ilorin",
      period: "2025 – Present",
      description: "Leading software innovation initiatives within the department while fostering a collaborative environment for student developers.",
      responsibilities: [
        "Spearhead departmental software development projects",
        "Mentor fellow students in modern web development",
        "Organize coding workshops and technical sessions",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company: "Torvix AI",
      period: "2025 – Present",
      description: "Building modern, responsive web interfaces with a fast-paced AI team, contributing to human-centered digital experiences.",
      responsibilities: [
        "Build responsive web pages using React.js",
        "Convert UI/UX designs into functional interfaces",
        "Ensure cross-browser compatibility and performance",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Ilorin Innovation Hub",
      period: "2025 – Present",
      description: "Developing modern web applications with focus on React ecosystem, building dashboards and implementing advanced features.",
      responsibilities: [
        "Built React components with authentication flows",
        "Implemented Supabase integration for auth and database",
        "Developed geolocation features with role-based access control",
      ],
    },
  ];

  const coreStack = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Supabase", icon: "⚡" },
    { name: "Next.js", icon: "▲" },
  ];

  const tools = [
    "Git/GitHub", "Docker", "Vite", "Firebase", "PostgreSQL", "MongoDB",
    "REST APIs", "GraphQL", "Figma", "VS Code", "Cloud Deployment", "AI Integration",
    "Prompt Engineering", "OCR", "Accessibility", "Responsive Design",
  ];

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#tech', label: 'Tech' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const smallProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 glass-card"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <span className="font-heading font-bold text-xl tracking-tight-heading">
              AA<span className="text-gradient">.</span>
            </span>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  {item.label}
                </a>
              ))}
            </div>
            <a href="mailto:ola283dayo@gmail.com" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-gradient text-sm font-heading font-semibold transition-all duration-300">
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>
      </motion.nav>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(hsl(199 89% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        {/* Gradient orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, hsl(199 89% 60%), hsl(234 89% 74%), transparent 70%)' }} />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight-heading leading-[0.95] mb-6">
              Abdulrasaq
              <br />
              <span className="text-gradient">Abdulrasaq</span>
            </h1>

            <div className="flex items-center justify-center gap-3 mb-8">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-xl md:text-2xl font-body text-muted-foreground">
                <TypewriterText
                  texts={[
                    "Full-Stack Developer",
                    "Software Engineer",
                    "React Specialist",
                    "AI Integration Expert",
                  ]}
                  className="text-foreground"
                />
              </span>
            </div>

            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Passionate about crafting exceptional digital experiences through clean, efficient code.
              Specializing in modern web technologies and AI integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:ola283dayo@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl btn-gradient font-heading font-semibold transition-all duration-300">
                Let's Connect <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-card hover-glow font-heading font-semibold transition-all duration-300">
                <Download className="w-5 h-5" /> Resume
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/Quantum-techlab" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:ola283dayo@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover-glow text-muted-foreground hover:text-foreground transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-2">About <span className="text-gradient">Me</span></h2>
            <div className="w-16 h-1 rounded-full mb-12" style={{ background: 'linear-gradient(90deg, hsl(199 89% 60%), hsl(234 89% 74%))' }} />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card">
                <img src="/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png" alt="Abdulrasaq Abdulrasaq - Software Engineer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%', transform: 'scale(1.4)', transformOrigin: 'center 25%' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Text + Stats */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer based at the University of Ilorin, Nigeria,
                with expertise in building modern, scalable web applications. I specialize in the React ecosystem,
                AI integration, and creating user-centric digital experiences.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
                As the Software Director at ITSA, I lead technical initiatives and mentor fellow developers.
                I'm driven by the challenge of turning complex problems into elegant, efficient solutions.
              </p>

              {/* Stats bento */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "6+", label: "Projects Built" },
                  { value: "27+", label: "Technologies" },
                  { value: "3", label: "Certifications" },
                ].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 rounded-xl glass-card hover-glow">
                    <div className="text-3xl font-heading font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm font-body text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-8">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-body text-muted-foreground">University of Ilorin, Nigeria</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS (BENTO GRID) ─── */}
      <section id="projects" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-2">Featured <span className="text-gradient">Projects</span></h2>
            <div className="w-16 h-1 rounded-full mb-12" style={{ background: 'linear-gradient(90deg, hsl(199 89% 60%), hsl(234 89% 74%))' }} />
          </motion.div>

          {/* Featured — large cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featuredProjects.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card hover-glow rounded-2xl p-8 relative overflow-hidden">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
                  style={{ background: 'linear-gradient(135deg, hsl(199 89% 60%), hsl(234 89% 74%))' }} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold tracking-tight-heading group-hover:text-gradient transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Code className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl btn-gradient text-sm font-heading font-semibold transition-all duration-300">
                        <ExternalLink className="w-4 h-4" /> View Live
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className={`${project.demo !== "#" ? 'flex-1' : 'w-full'} inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-card hover-glow text-sm font-heading font-semibold transition-all duration-300`}>
                      <Github className="w-4 h-4" /> Github
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Small projects — compact bento */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {smallProjects.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group glass-card hover-glow rounded-xl p-5">
                <h3 className="text-base font-heading font-bold tracking-tight-heading mb-2 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-muted rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-secondary transition-colors font-mono flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" /> Live
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono flex items-center gap-1">
                    <Github className="w-3 h-3" /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH ARSENAL (BENTO) ─── */}
      <section id="tech" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-2">Tech <span className="text-gradient">Arsenal</span></h2>
            <div className="w-16 h-1 rounded-full mb-12" style={{ background: 'linear-gradient(90deg, hsl(199 89% 60%), hsl(234 89% 74%))' }} />
          </motion.div>

          {/* Core Stack — large tiles */}
          <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" /> Core Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {coreStack.map((tech, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card hover-glow rounded-xl p-6 text-center group cursor-default">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</div>
              </motion.div>
            ))}
          </div>

          {/* Tools — small chips */}
          <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" /> Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <motion.span key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.02 }}
                className="px-4 py-2 text-xs font-mono text-muted-foreground glass-card rounded-lg hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default">
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─── */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-2"><span className="text-gradient">Experience</span></h2>
            <div className="w-16 h-1 rounded-full mb-12" style={{ background: 'linear-gradient(90deg, hsl(199 89% 60%), hsl(234 89% 74%))' }} />
          </motion.div>

          <div className="max-w-3xl relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10">
                  {/* Glowing pulse point */}
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow" />
                  </div>

                  <div className="glass-card hover-glow rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-heading font-bold tracking-tight-heading">{exp.title}</h3>
                      <span className="text-xs font-mono text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-sm font-heading font-semibold text-gradient mb-3">{exp.company}</p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-2">Let's <span className="text-gradient">Connect</span></h2>
              <div className="w-16 h-1 rounded-full mb-8 mx-auto" style={{ background: 'linear-gradient(90deg, hsl(199 89% 60%), hsl(234 89% 74%))' }} />
              <p className="text-lg font-body text-muted-foreground mb-10">
                I'm always excited to collaborate on innovative projects and explore new opportunities.
              </p>

              <a href="mailto:ola283dayo@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl btn-gradient font-heading font-semibold transition-all duration-300 mb-12">
                <Mail className="w-5 h-5" /> Get in Touch
              </a>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "ola283dayo@gmail.com", href: "mailto:ola283dayo@gmail.com" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/abdulrasaq-abdulrasaq" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "Quantum-techlab", href: "https://github.com/Quantum-techlab" },
                ].map((c, i) => (
                  <a key={i} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                    className="p-5 rounded-xl glass-card hover-glow group text-center transition-all duration-300">
                    <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                      {c.icon}
                    </div>
                    <div className="text-sm font-heading font-semibold">{c.label}</div>
                    <div className="text-xs font-body text-muted-foreground mt-1">{c.value}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground font-body">
              © 2025 <span className="font-heading font-semibold text-foreground">Abdulrasaq Abdulrasaq</span> · All rights reserved
            </div>

            <div className="flex items-center gap-5">
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/Quantum-techlab" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:ola283dayo@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  {s.icon}
                </a>
              ))}

              <button onClick={scrollToTop}
                className="ml-4 p-2.5 rounded-xl glass-card hover-glow text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label="Back to top">
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
