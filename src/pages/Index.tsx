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

// ── Tech Icon SVGs ──
const TechIcons: Record<string, React.ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.49 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zM10 17.5H8.5v-5.5H6.5V10.5h5v1.5H10v5.5z"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.09-.21-.21-.21H8.22c-.12 0-.21.09-.21.21v8.06c0 .66-.68 1.31-1.77.76L4.16 16.2c-.08-.04-.12-.12-.12-.21V7.71c0-.09.04-.17.12-.21l7.44-4.29c.07-.04.16-.04.24 0l7.44 4.29c.08.04.12.12.12.21v8.28c0 .09-.04.17-.12.21l-7.44 4.29c-.04.02-.08.03-.12.03-.03 0-.09-.01-.13-.03l-1.91-1.13c-.06-.04-.14-.04-.21-.01-.58.26-.69.3-1.24.45-.14.04-.34.1.07.3l2.48 1.47c.24.14.51.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.114-3.403-1.645-3.403h-9.642z"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.878.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/>
    </svg>
  ),
};

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
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">Available for opportunities</span>
            </motion.div>

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
                    style={{ objectPosition: 'center 15%', transform: 'scale(1.2)', transformOrigin: 'center 25%' }} />
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
                className="px-4 py-2 text-xs font-mono text-muted-foreground glass-card rounded-lg hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default">
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
