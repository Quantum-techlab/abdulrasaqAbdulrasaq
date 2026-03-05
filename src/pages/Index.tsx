import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, ArrowRight, Download, Code, Terminal, Database, Wrench, Globe, Server, Cpu, Layers, GitBranch, Cloud, Shield, Palette, Smartphone, BarChart3 } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => { setIsVisible(true); }, []);

  const projects = [
    {
      title: "FaceTrust AI",
      description: "AI-powered facial recognition system for secure identity verification and centralized data access using deep learning models.",
      tech: ["React", "AI/ML", "Deep Learning", "Facial Recognition"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://facetrust-rho.vercel.app",
    },
    {
      title: "Attendance System for IIH",
      description: "Modern attendance tracking for Ilorin Innovation Hub interns with real-time monitoring, analytics dashboard, and automated reporting.",
      tech: ["React", "Supabase", "TypeScript", "Tailwind CSS", "Geolocation"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://iih-hub.vercel.app/",
    },
    {
      title: "ScanShare",
      description: "Advanced document scanning and sharing platform with OCR capabilities, cloud storage integration, and real-time collaboration.",
      tech: ["React", "OCR", "Cloud Storage", "Web APIs"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
    },
    {
      title: "MindConnect",
      description: "AI-driven mental wellness platform enabling anonymous conversations, guided support, and community-driven resources.",
      tech: ["React", "AI", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
    },
    {
      title: "Textify",
      description: "Versatile text extraction app converting images and audio into editable text using Tesseract.js and AI transcription APIs.",
      tech: ["React", "Tesseract.js", "Speech-to-Text", "Tailwind CSS"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://texify-ocr.vercel.app/",
    },
    {
      title: "SynBridge",
      description: "Cross-device clipboard and file sync tool with end-to-end encryption for fast, secure sharing between multiple devices.",
      tech: ["React", "Supabase", "WebSockets", "Encryption"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
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

  const techCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS", "Responsive Design", "UI/UX Design"],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "Supabase", "Firebase", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Authentication"],
    },
    {
      title: "Tools & Other",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git/GitHub", "Docker", "Cloud Deployment", "AI Integration", "Prompt Engineering", "OCR Integration", "Accessibility"],
    },
  ];

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#tech', label: 'Tech' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <span className="font-heading font-bold text-xl text-foreground">AA<span className="text-primary">.</span></span>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  {item.label}
                </a>
              ))}
            </div>
            <a href="mailto:ola283dayo@gmail.com" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-heading font-semibold hover:bg-primary/90 transition-colors">
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-16">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(212 100% 67%) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 bg-primary pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-mono text-muted-foreground">Available for work</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6 text-foreground">
                Abdulrasaq
                <br />
                <span className="text-primary">Abdulrasaq</span>
              </h1>

              <div className="flex items-center gap-3 mb-8">
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

              <p className="text-lg font-body text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Passionate about crafting exceptional digital experiences through clean, efficient code.
                I specialize in modern web technologies and AI integration to build scalable, user-centric applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:ola283dayo@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(212_100%_67%_/_0.3)]"
                >
                  Let's Connect
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg border border-border text-foreground font-heading font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 mt-10">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/Quantum-techlab" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:ola283dayo@gmail.com" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">About <span className="text-primary">Me</span></h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-border">
                <img
                  src="/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png"
                  alt="Abdulrasaq Abdulrasaq - Software Engineer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%', transform: 'scale(1.4)', transformOrigin: 'center 25%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer based at the University of Ilorin, Nigeria,
                with expertise in building modern, scalable web applications. I specialize in the React ecosystem,
                AI integration, and creating user-centric digital experiences.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
                As the Software Director at ITSA, I lead technical initiatives and mentor fellow developers.
                I'm driven by the challenge of turning complex problems into elegant, efficient solutions.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "6+", label: "Projects Built" },
                  { value: "27+", label: "Technologies" },
                  { value: "3", label: "Certifications" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm font-body text-muted-foreground">{stat.label}</div>
                  </div>
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

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Code className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>

                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-heading font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.demo !== "#" ? 'flex-1' : 'w-full'} inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-foreground text-sm font-heading font-semibold hover:border-primary/50 hover:text-primary transition-colors`}
                  >
                    <Github className="w-4 h-4" />
                    Github
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Arsenal Section */}
      <section id="tech" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Tech <span className="text-primary">Arsenal</span></h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {techCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-secondary border border-border rounded-md hover:text-primary hover:border-primary/30 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4"><span className="text-primary">Experience</span></h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </motion.div>

          <div className="max-w-3xl space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
              >
                {/* Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-heading font-bold text-foreground">{exp.title}</h3>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-sm font-heading font-semibold text-primary mb-3">{exp.company}</p>
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Let's <span className="text-primary">Connect</span></h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-8 mx-auto" />
              <p className="text-lg font-body text-muted-foreground mb-10">
                I'm always excited to collaborate on innovative projects and explore new opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="mailto:ola283dayo@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(212_100%_67%_/_0.3)]"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "ola283dayo@gmail.com", href: "mailto:ola283dayo@gmail.com" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/abdulrasaq-abdulrasaq" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "Quantum-techlab", href: "https://github.com/Quantum-techlab" },
                ].map((c, i) => (
                  <a key={i} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                    className="p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 group text-center">
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {c.icon}
                    </div>
                    <div className="text-sm font-heading font-semibold text-foreground">{c.label}</div>
                    <div className="text-xs font-body text-muted-foreground mt-1">{c.value}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <span>© 2025</span>
              <span className="text-foreground font-heading font-semibold">Abdulrasaq Abdulrasaq</span>
              <span>·</span>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: <Github className="w-4 h-4" />, href: "https://github.com/Quantum-techlab" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq" },
                { icon: <Mail className="w-4 h-4" />, href: "mailto:ola283dayo@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
