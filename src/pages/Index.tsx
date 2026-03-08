import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, ArrowRight, Download, ArrowUp, Terminal, Globe, Wrench, ChevronRight, ChevronLeft, Star, Quote, Menu, X, Moon, Sun, Award } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";
import { useTheme } from "@/contexts/ThemeContext";

// ── Animation variants ──
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

// ── 3D Tilt Card ──
const TiltCard = ({ children, className = '', featured = false }: { children: React.ReactNode; className?: string; featured?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current || !featured) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -8);
    rotateY.set(x * 8);
  };

  const handleLeave = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      className={className}>
      {children}
    </motion.div>
  );
};

// ── Magnetic Button ──
const MagneticButton = ({ children, className = '', ...props }: React.ComponentProps<'a'>) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  return (
    <motion.a ref={ref} onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }} className={`magnetic-btn ${className}`} {...props as any}>
      {children}
    </motion.a>
  );
};

// ── Tech Icons (actual brand SVGs) ──
import { TechBrandIcons, TechBrandIconsLarge } from '@/components/TechBrandIcons';
const TechIcons = TechBrandIconsLarge;

// ── CMD Terminal Story ──
const terminalLines = [
  { type: 'cmd', text: 'C:\\Users\\Abdulrasaq> whoami' },
  { type: 'output', text: 'Self-taught developer. No bootcamp. No CS degree (yet). Just pure curiosity.' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'C:\\Users\\Abdulrasaq> cat origin_story.txt' },
  { type: 'output', text: 'It all started with a simple question: "How do websites actually work?"' },
  { type: 'output', text: 'That curiosity led me down a rabbit hole — HTML first, then CSS,' },
  { type: 'output', text: 'then JavaScript hit me like a freight train. I was hooked.' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'C:\\Users\\Abdulrasaq> cat journey.log' },
  { type: 'output', text: '> Late nights debugging code I barely understood...' },
  { type: 'output', text: '> YouTube tutorials at 2x speed, StackOverflow open in 47 tabs...' },
  { type: 'output', text: '> Building projects no one asked for, just to prove I could.' },
  { type: 'output', text: '> Failing. Breaking things. Fixing them. Repeat.' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'C:\\Users\\Abdulrasaq> echo $CURRENT_STATUS' },
  { type: 'output', text: 'Software Director @ ITSA | Mentoring the next wave of developers' },
  { type: 'output', text: 'Teaching because someone once told me "you can\'t learn to code on your own."' },
  { type: 'output', text: 'I took that personally. Now I help others prove the same thing wrong.' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'C:\\Users\\Abdulrasaq> echo $PHILOSOPHY' },
  { type: 'output', text: '"The best developers aren\'t the ones who know everything —' },
  { type: 'output', text: ' they\'re the ones who never stop being curious."' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'C:\\Users\\Abdulrasaq> _' },
];

const TerminalStory = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (terminalRef.current) observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    if (visibleLines >= terminalLines.length) return;

    const currentLine = terminalLines[visibleLines];
    const delay = currentLine?.type === 'cmd' ? 600 : currentLine?.type === 'blank' ? 200 : 80;

    const timer = setTimeout(() => {
      setVisibleLines(v => v + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, visibleLines]);

  useEffect(() => {
    if (terminalRef.current) {
      const scrollEl = terminalRef.current.querySelector('.terminal-scroll');
      if (scrollEl) scrollEl.scrollTop = scrollEl.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div ref={terminalRef} className="rounded-2xl overflow-hidden glass-card border border-border/50">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-card/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2">abdulrasaq@dev — cmd</span>
      </div>
      {/* Terminal body */}
      <div className="terminal-scroll p-5 md:p-6 max-h-[420px] overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
        <div className="space-y-1">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`font-mono text-sm leading-relaxed ${
                line.type === 'cmd'
                  ? 'text-primary font-semibold'
                  : line.type === 'blank'
                  ? 'h-3'
                  : 'text-muted-foreground pl-0 md:pl-2'
              }`}
            >
              {line.text}
            </motion.div>
          ))}
          {visibleLines < terminalLines.length && isInView && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-2.5 h-4 bg-primary ml-1 align-middle"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [processIndex, setProcessIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();

  const handleHeroMouse = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const projects = [
    {
      title: "MindConnect",
      description: "AI-driven mental wellness platform enabling anonymous conversations, guided support sessions, and mood tracking with intelligent recommendations.",
      tech: ["React", "AI", "Node.js", "Tailwind CSS", "WebSocket"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://mindconnect-one.vercel.app/",
      featured: true,
      tag: "Featured",
    },
    {
      title: "Textify OCR",
      description: "Versatile text extraction app converting images and audio into editable text using Tesseract.js and advanced speech recognition.",
      tech: ["React", "Tesseract.js", "Speech-to-Text", "Tailwind CSS"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://texify-ocr.vercel.app/",
      featured: true,
      tag: "Technical Achievement",
      hasOcrScan: true,
    },
    {
      title: "FaceTrust AI",
      description: "AI-powered facial recognition system for secure identity verification and centralized data access using deep learning models.",
      tech: ["React", "AI/ML", "Deep Learning", "Facial Recognition"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://facetrust-rho.vercel.app/",
      featured: false,
    },
    {
      title: "Attendance System",
      description: "Modern attendance tracking for Ilorin Innovation Hub interns with real-time monitoring and analytics.",
      tech: ["React", "Supabase", "TypeScript", "Geolocation"],
      github: "https://github.com/Quantum-techlab",
      demo: "https://iih-hub.vercel.app/",
      featured: false,
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
      title: "SynBridge",
      description: "Cross-device clipboard and file sync tool with end-to-end encryption.",
      tech: ["React", "Supabase", "WebSockets", "Encryption"],
      github: "https://github.com/Quantum-techlab",
      demo: "#",
      featured: false,
    },
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

  const certifications = [
    {
      title: "HackerRank Frontend Developer (React)",
      issuer: "HackerRank",
      date: "2025",
      credential: "Verified",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      credential: "Verified",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      credential: "Verified",
    },
  ];

  const coreStack = [
    { name: "React", icon: "React" },
    { name: "TypeScript", icon: "TypeScript" },
    { name: "Node.js", icon: "Node.js" },
    { name: "Tailwind CSS", icon: "Tailwind CSS" },
    { name: "Supabase", icon: "Supabase" },
    { name: "Next.js", icon: "Next.js" },
  ];

  const tools = [
    "Git/GitHub", "Docker", "Vite", "Firebase", "PostgreSQL", "MongoDB",
    "REST APIs", "GraphQL", "Figma", "VS Code", "Cloud Deployment", "AI Integration",
    "Prompt Engineering", "OCR", "Accessibility", "Responsive Design",
  ];

  const testimonials = [
    { text: "Abdulrasaq's attention to detail and technical skill consistently exceeded expectations. A rare talent.", author: "Tech Lead, Torvix AI", role: "Manager" },
    { text: "His ability to translate complex designs into pixel-perfect, performant code is exceptional.", author: "Design Lead, IIH", role: "Colleague" },
    { text: "One of the most dedicated developers I've worked with. Always delivers quality work ahead of schedule.", author: "Senior Developer", role: "Mentor" },
    { text: "Abdulrasaq brings both creativity and solid engineering to every project. Highly recommend.", author: "Project Manager", role: "Client" },
  ];

  const processSteps = [
    { step: "01", title: "Plan", desc: "Research, architecture & design systems", icon: <Terminal className="w-8 h-8" /> },
    { step: "02", title: "Build", desc: "Clean code, component-driven development", icon: <Globe className="w-8 h-8" /> },
    { step: "03", title: "Test", desc: "Cross-browser QA & performance audits", icon: <Wrench className="w-8 h-8" /> },
    { step: "04", title: "Ship", desc: "CI/CD deployment & monitoring", icon: <ArrowRight className="w-8 h-8" /> },
  ];

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#process', label: 'Process' },
    { href: '#tech', label: 'Tech' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const smallProjects = projects.filter(p => !p.featured);

  const nextProcess = () => setProcessIndex(i => Math.min(i + 1, processSteps.length - 1));
  const prevProcess = () => setProcessIndex(i => Math.max(i - 1, 0));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── NAVIGATION ─── */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
        className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <span className="font-heading font-bold text-xl tracking-tight-heading">
              AA<span className="text-primary">.</span>
            </span>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/30 transition-all duration-500"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <Sun className="w-4 h-4 text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <Moon className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <a href="mailto:ola283dayo@gmail.com" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-primary text-sm font-heading font-semibold">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground p-2">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navItems.map(item => (
                <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 font-body">
                  {item.label}
                </a>
              ))}
              <a href="mailto:ola283dayo@gmail.com" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg btn-primary text-sm font-heading font-semibold mt-2">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* ─── HERO ─── */}
      <section ref={heroRef} onMouseMove={handleHeroMouse} className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--primary) / 0.06), transparent 60%)`,
          }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">


            <motion.h1 variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight-heading leading-[0.92] mb-6">
              Abdulrasaq
              <br />
              <span className="text-gradient">Abdulrasaq</span>
            </motion.h1>

            <motion.div variants={staggerItem} className="flex items-center justify-center gap-3 mb-8">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-xl md:text-2xl font-body text-muted-foreground">
                <TypewriterText
                  texts={["Full-Stack Developer", "Software Engineer", "React Specialist", "AI Integration Expert"]}
                  className="text-foreground"
                />
              </span>
            </motion.div>

            <motion.p variants={staggerItem} className="text-lg font-body text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Crafting exceptional digital experiences through clean, efficient code.
              Specializing in modern web technologies and AI integration.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl btn-primary font-heading font-semibold text-base cursor-pointer">
                Let's Connect <ArrowRight className="w-5 h-5" />
              </button>
              <a href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-card hover-glow font-heading font-semibold text-base">
                <Download className="w-5 h-5" /> Resume
              </a>
            </motion.div>

            <motion.div variants={staggerItem} className="flex items-center justify-center gap-4 mt-10">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/Quantum-techlab" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:ola283dayo@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover-glow text-muted-foreground hover:text-foreground transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-16">
              About <span className="text-primary">Me</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
              className="relative flex justify-center">
              {/* Rectangle/square headshot */}
              <div className="relative w-72 h-80 md:w-80 md:h-96">
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                  style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.15)' }} />
                <div className="absolute inset-[3px] rounded-2xl overflow-hidden">
                  <img src="/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png" alt="Abdulrasaq Abdulrasaq"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 10%', transform: 'scale(1.35)', transformOrigin: 'center 20%' }} />
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={staggerItem} className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                I'm a Full-Stack Developer based at the University of Ilorin, Nigeria,
                with expertise in building modern, scalable web applications. I specialize in the React ecosystem,
                AI integration, and creating user-centric digital experiences.
              </motion.p>
              <motion.p variants={staggerItem} className="text-lg font-body text-muted-foreground leading-relaxed mb-10">
                As the Software Director at ITSA, I lead technical initiatives and mentor fellow developers.
                I'm driven by turning complex problems into elegant, efficient solutions.
              </motion.p>

              <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "6+", label: "Projects Built" },
                  { value: "27+", label: "Technologies" },
                  { value: "3", label: "Certifications" },
                ].map((stat, i) => (
                  <div key={i} className="p-5 rounded-lg glass-card hover-glow">
                    <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm font-body text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={staggerItem} className="flex items-center gap-3 mt-8">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-body text-muted-foreground">University of Ilorin, Nigeria</span>
              </motion.div>
            </motion.div>
          </div>

          {/* ── CMD Terminal Story ── */}
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
            className="mt-20 max-w-4xl mx-auto"
          >
            <TerminalStory />
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS (MASONRY BENTO) ─── */}
      <section id="projects" className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-16">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index * 0.15}>
                <TiltCard featured className="glass-card hover-glow rounded-2xl p-8 relative overflow-hidden h-full group">
                  {project.hasOcrScan && <div className="ocr-scan-line" />}
                  {project.tag && (
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full">
                        {project.tag}
                      </span>
                    </div>
                  )}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold tracking-tight-heading mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl btn-primary text-sm font-heading font-semibold">
                          <ExternalLink className="w-4 h-4" /> View Live
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className={`${project.demo !== "#" ? 'flex-1' : 'w-full'} inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-card hover-glow text-sm font-heading font-semibold`}>
                        <Github className="w-4 h-4" /> Github
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {smallProjects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={index * 0.08}
                className="group glass-card hover-glow rounded-xl p-5">
                <h3 className="text-base font-heading font-bold tracking-tight-heading mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-muted/50 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary/80 transition-colors font-mono flex items-center gap-1">
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

      {/* ─── THE PROCESS (Carousel) ─── */}
      <section id="process" className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-16">
              The <span className="text-primary">Process</span>
            </h2>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            {/* Carousel controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                {processSteps.map((_, i) => (
                  <button key={i} onClick={() => setProcessIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === processIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prevProcess} disabled={processIndex === 0}
                  className="p-2 rounded-lg glass-card hover-glow disabled:opacity-30 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextProcess} disabled={processIndex === processSteps.length - 1}
                  className="p-2 rounded-lg glass-card hover-glow disabled:opacity-30 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Carousel content */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={processIndex}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="glass-card hover-glow rounded-2xl p-10 text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                    {processSteps[processIndex].icon}
                  </div>
                  <div className="text-xs font-mono text-primary mb-3">{processSteps[processIndex].step}</div>
                  <h3 className="text-3xl font-heading font-bold tracking-tight-heading mb-3">{processSteps[processIndex].title}</h3>
                  <p className="text-base font-body text-muted-foreground leading-relaxed max-w-md mx-auto">{processSteps[processIndex].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH ARSENAL (BENTO) ─── */}
      <section id="tech" className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-16">
              Tech <span className="text-primary">Arsenal</span>
            </h2>
          </motion.div>

          <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" /> Core Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {coreStack.map((tech, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.05}
                className="glass-card hover-glow rounded-lg p-6 text-center group cursor-default">
                <div className="mb-3 text-muted-foreground group-hover:text-primary transition-all duration-300 flex justify-center">
                  {TechIcons[tech.icon] || <Globe className="w-8 h-8" />}
                </div>
                <div className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300">{tech.name}</div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" /> Tools & Technologies
          </h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <motion.span key={i} variants={staggerItem}
                className="px-4 py-2 text-xs font-mono text-muted-foreground glass-card rounded-lg hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default inline-flex items-center gap-2">
                {TechBrandIcons[tool] && <span className="opacity-70 group-hover:opacity-100">{TechBrandIcons[tool]}</span>}
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section id="certifications" className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-16">
              <span className="text-primary">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.1}
                className="glass-card hover-glow rounded-xl p-6 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-heading font-bold tracking-tight-heading mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
                    {cert.credential}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS MARQUEE ─── */}
      <section className="py-20 border-t border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 mb-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading">
              Social <span className="text-primary">Proof</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[350px] md:min-w-[420px] glass-card rounded-2xl p-6 flex-shrink-0">
                <Quote className="w-5 h-5 text-primary/40 mb-4" />
                <p className="font-body text-foreground/90 leading-relaxed mb-4 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-semibold">{t.author}</div>
                    <div className="text-[10px] font-mono text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─── */}
      <section id="experience" className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight-heading mb-16">
              <span className="text-primary">Experience</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-border" />
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={index * 0.15}
                  className="relative pl-10">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary pulse-point" />
                  </div>
                  <div className="glass-card hover-glow rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-heading font-bold tracking-tight-heading">{exp.title}</h3>
                      <span className="text-xs font-mono text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap">{exp.period}</span>
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
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section id="contact" className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-heading font-bold tracking-tight-heading mb-6">
                Let's Build Something <span className="text-primary">Amazing</span>
              </motion.h2>
              <motion.p variants={staggerItem} className="text-lg font-body text-muted-foreground mb-12">
                I'm always excited to collaborate on innovative projects and explore new opportunities.
              </motion.p>

              <motion.div variants={staggerItem}>
                <MagneticButton href="mailto:ola283dayo@gmail.com"
                  className="inline-flex items-center justify-center gap-4 px-12 py-6 rounded-2xl btn-primary text-lg md:text-xl font-heading font-bold">
                  <Mail className="w-6 h-6" /> Work with me
                </MagneticButton>
              </motion.div>

              <motion.div variants={staggerItem} className="grid sm:grid-cols-3 gap-4 mt-16">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "ola283dayo@gmail.com", href: "mailto:ola283dayo@gmail.com" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "Quantum-techlab", href: "https://github.com/Quantum-techlab" },
                ].map((c, i) => (
                  <a key={i} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                    className="p-5 rounded-xl glass-card hover-glow group text-center">
                    <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                      {c.icon}
                    </div>
                    <div className="text-sm font-heading font-semibold">{c.label}</div>
                    <div className="text-xs font-body text-muted-foreground mt-1">{c.value}</div>
                  </a>
                ))}
              </motion.div>
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
                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:ola283dayo@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">
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
