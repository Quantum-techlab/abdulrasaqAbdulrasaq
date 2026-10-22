import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence, MotionConfig } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, ArrowRight, Download, ArrowUp, Terminal, Globe, Wrench, ChevronRight, ChevronLeft, Star, Quote, Menu, X, Moon, Sun, Award } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";
import { useTheme } from "@/contexts/ThemeContext";
import { lazy, Suspense } from 'react';
import type { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapEffects, smoothScrollTo } from '@/hooks/useGsapEffects';
import { RollText } from '@/components/RollText';
import { Link } from 'react-router-dom';
import { useSeo, ROUTES } from '@/seo/useSeo';
import { projects, experiences, certifications, coreStack, tools, testimonials } from '@/data/portfolio';
import { LiquidLogo } from '@/components/LiquidLogo';
import { useLiquidGlass } from '@/hooks/useLiquidGlass';

const HeroParticleField = lazy(() => import('@/components/HeroParticleField'));

// ── Animation variants ──
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0, 1] as const }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] as const } }
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
    rotateX.set(y * -6);
    rotateY.set(x * 6);
  };

  const handleLeave = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
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
      style={{ x: springX, y: springY }} className={className} {...props as any}>
      {children}
    </motion.a>
  );
};

// ── Tech Icons (actual brand SVGs) ──
import { TechBrandIcons, TechBrandIconsLarge } from '@/components/TechBrandIcons';
const TechIcons = TechBrandIconsLarge;

// ── Section header: index label, dashed hairline, uppercase heading ──
const SectionHead = ({ index, label, title, className = '' }: { index: string; label: string; title: React.ReactNode; className?: string }) => (
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className={className}>
    <div className="flex items-center justify-between t-label mb-4">
      <span>({index})</span>
      <span>{label}</span>
    </div>
    <hr className="rule-dashed mb-10 md:mb-14" />
    <h2 data-split-scroll className="t-heading max-w-[18ch]">{title}</h2>
  </motion.div>
);

// ── Project preview: the "object" in each void-mode reveal ──
const ProjectPreview = ({ url, title, image, scan = false }: { url: string; title: string; image?: string; scan?: boolean }) => (
  <div className="relative aspect-[4/3] w-full overflow-hidden card-edge bg-surface/40">
    {image && <img src={image} alt={`${title} website`} width={1280} height={960} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top" />}
    {scan && <div className="ocr-scan-line" />}
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} live site`} className="absolute inset-0 z-[3]" />
  </div>
);

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
  { type: 'output', text: 'Information Technology graduate, Class of 2026 | Co-founder @ FaceTrust AI' },
  { type: 'output', text: 'Software Director @ ITSA (2025/2026) | Mentoring the next wave of developers' },
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
    <div ref={terminalRef} className="card-edge overflow-hidden">
      {/* Terminal title bar */}
      <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-dashed border-line">
        <span className="t-label">abdulrasaq@dev — cmd</span>
        <div className="flex gap-1.5" aria-hidden>
          <div className="w-2.5 h-2.5 rounded-full border border-line-strong" />
          <div className="w-2.5 h-2.5 rounded-full border border-line-strong" />
          <div className="w-2.5 h-2.5 rounded-full border border-line-strong" />
        </div>
      </div>
      {/* Terminal body */}
      <div className="terminal-scroll px-6 py-6 md:px-8 h-[460px] overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
        <div className="space-y-1.5">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={
                line.type === 'cmd'
                  ? 't-label text-[13px] pt-1'
                  : line.type === 'blank'
                  ? 'h-3'
                  : 't-body-sm md:pl-4'
              }
            >
              {line.text}
            </motion.div>
          ))}
          {visibleLines < terminalLines.length && isInView && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-2 h-3.5 bg-ink ml-1 align-middle"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  useSeo('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [processIndex, setProcessIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [navHidden, setNavHidden] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const navPillRef = useRef<HTMLDivElement>(null);
  useLiquidGlass(navPillRef, { depth: 20, scale: 30 });
  const processTriggerRef = useRef<ScrollTrigger | null>(null);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) smoothScrollTo(el);
  };

  const scrollToTop = () => smoothScrollTo(0);

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

  useGsapEffects(rootRef, { onProcessStep: setProcessIndex, processSteps: processSteps.length, processTriggerRef });

  // While the Process section is pinned, steps are driven by scroll, so controls scroll to the step
  const goToProcess = (i: number) => {
    const step = Math.max(0, Math.min(i, processSteps.length - 1));
    const st = processTriggerRef.current;
    if (st) smoothScrollTo(st.start + ((st.end - st.start) * (step + 0.5)) / processSteps.length);
    else setProcessIndex(step);
  };
  const nextProcess = () => goToProcess(processIndex + 1);
  const prevProcess = () => goToProcess(processIndex - 1);

  // Scroll-spy for the dashed active indicator in the nav
  useEffect(() => {
    const ids = navItems.map(n => n.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Hide the nav while scrolling down, reveal it the moment the user scrolls up
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 6) return;
      setNavHidden(y > lastY && y > 80);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const socials = [
    { icon: <Github className="w-4 h-4" />, name: "GitHub", label: "GitHub profile", href: "https://github.com/Quantum-techlab" },
    { icon: <Linkedin className="w-4 h-4" />, name: "LinkedIn", label: "LinkedIn profile", href: "https://linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351" },
    { icon: <Mail className="w-4 h-4" />, name: "Email", label: "Email Abdulrasaq", href: "mailto:ola283dayo@gmail.com" },
  ];

  const sectionPad = "py-[clamp(68px,10vw,160px)]";

  return (
    <MotionConfig reducedMotion="user">
    <div ref={rootRef} className="min-h-screen bg-canvas text-ink overflow-x-hidden">
      {/* ─── NAVIGATION (floating glass pill: logo / centred links / CTA) ─── */}
      <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: navHidden && !mobileMenuOpen ? '-140%' : 0, opacity: 1 }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0, 1] }}
        className="fixed top-3 md:top-4 inset-x-0 z-50 gutter">
        <div ref={navPillRef} className="glass-nav grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-16 md:h-[72px] pl-5 md:pl-7 pr-2.5 md:pr-3">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="inline-flex items-center justify-self-start" aria-label="Back to top">
            <LiquidLogo />
          </a>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map(item => (
              <a key={item.href} href={item.href}
                data-scramble
                className={`t-label text-[13px] ${activeSection === item.href.slice(1) ? 'nav-active' : ''}`}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 justify-self-end">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn-ghost btn-round border-line-strong"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <Sun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <Moon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a href="mailto:ola283dayo@gmail.com" data-magnetic className="hidden md:inline-flex btn-cream">
              <Mail className="w-4 h-4" /> <RollText>Hire Me</RollText>
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}
              className="lg:hidden btn-ghost btn-round border-line-strong">
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — full-viewport void */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-canvas gutter pt-28 pb-8 flex flex-col">
            <nav className="flex flex-col">
              {navItems.map((item, i) => (
                <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between py-4 border-b border-dashed border-line">
                  <span className="t-heading-sm">{item.label}</span>
                  <span className="t-label">0{i + 1}</span>
                </a>
              ))}
            </nav>
            <a href="mailto:ola283dayo@gmail.com" className="btn-fill mt-auto">
              <Mail className="w-4 h-4" /> Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Everything below scrolls inside ScrollSmoother; fixed layers stay above */}
      <div id="smooth-wrapper">
      <div id="smooth-content">

      {/* ─── HERO ─── */}
      <section ref={heroRef}
        className="relative min-h-[100svh] flex flex-col justify-between gutter pt-28 md:pt-36 pb-6 md:pb-8 overflow-hidden">
        {/* Three.js warm dust field */}
        <Suspense fallback={null}>
          <HeroParticleField />
        </Suspense>
        {/* Vertical edge label — the portfolio's serial number */}
        <div data-lag="0.35" className="hidden md:block absolute right-[clamp(16px,3vw,41px)] top-1/2 -translate-y-1/2 z-10 edge-label t-micro">
          Abdulrasaq Alatare — Portfolio 2026
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={staggerItem} className="flex items-center gap-2.5 t-label mb-5 md:mb-7 min-h-[14px]">
            <Terminal className="w-3.5 h-3.5" />
            <TypewriterText
              texts={["Full-Stack Developer", "Software Engineer", "React Specialist", "AI Integration Expert"]}
            />
          </motion.div>

          <h1 className="t-wordmark" data-speed="0.82">
            <span data-hero-split className="block">Abdulrasaq</span>
            <span data-hero-split className="block">Abdulrasaq</span>
            <span className="sr-only"> — Full-Stack Developer &amp; Software Engineer Portfolio</span>
          </h1>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible"
          className="relative z-10 mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-[18px]">
          {/* Info card — lower left */}
          <motion.div variants={staggerItem} className="card-edge bg-canvas/70 p-6 max-w-[460px]">
            <p className="t-sub leading-[1.09] mb-5">
              Crafting exceptional digital experiences through clean, efficient code.
            </p>
            <hr className="rule-dashed mb-5" />
            <p className="t-body-sm mb-6">
              Specializing in modern web technologies and AI integration.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <button onClick={() => scrollToSection('contact')} className="btn-fill">
                <RollText>Let's Connect</RollText> <ArrowRight className="w-4 h-4" />
              </button>
              <a href="https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk"
                target="_blank" rel="noopener noreferrer" className="btn-ghost min-h-[40px] px-5">
                <Download className="w-3.5 h-3.5" /> <RollText>Resume</RollText>
              </a>
            </div>
          </motion.div>

          {/* Social card — lower right */}
          <motion.div variants={staggerItem} className="card-edge bg-canvas/70 p-5 md:w-[260px] md:mr-8">
            <div className="flex items-center justify-between mb-5">
              <span className="t-sub">AA</span>
              <span className="t-micro">Elsewhere</span>
            </div>
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  data-magnetic className="btn-ghost btn-round">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── ABOUT (void-mode reveal: text / object / text) ─── */}
      <section id="about" className={`min-h-screen gutter ${sectionPad}`}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="flex items-center justify-between t-label mb-4">
          <span>(01)</span><span>About</span>
        </motion.div>
        <hr className="rule-dashed mb-12 md:mb-16" />

        <div className="grid lg:grid-cols-[1fr_minmax(260px,28vw)_1fr] gap-x-[18px] gap-y-12 items-start">
          {/* Left — heading + facts */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1">
            <h2 data-split-scroll className="t-heading mb-8">About Me</h2>
            <motion.div variants={staggerItem} className="flex items-center gap-2 t-label mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>University of Ilorin, Nigeria</span>
            </motion.div>
            <motion.div variants={staggerItem} className="t-label mb-10 pl-[22px]">
              Information Technology — Class of 2026
            </motion.div>
            <motion.div variants={staggerItem} className="grid grid-cols-2">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "8+", label: "Projects Built" },
                { value: "27+", label: "Technologies" },
                { value: "3", label: "Certifications" },
                { value: "2026", label: "Graduated" },
                {
                  value: (
                    <span aria-label="Four point something" title="Four point something.">
                      4.<span aria-hidden className="inline-block w-[1.05em] h-[0.7em] ml-[0.06em] bg-ink align-baseline" />
                    </span>
                  ),
                  label: "CGPA — Yes, a 4-pointer",
                },
              ].map((stat, i) => (
                <div key={i} className={`py-5 border-t border-dashed border-line ${i % 2 === 0 ? 'pr-4' : 'pl-4 border-l'}`}>
                  <div className="t-heading mb-2">
                    {typeof stat.value === 'string' && /^\d+\+?$/.test(stat.value)
                      ? <span data-count={parseInt(stat.value, 10)} data-suffix={stat.value.endsWith('+') ? '+' : ''}>{stat.value}</span>
                      : stat.value}
                  </div>
                  <div className="t-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Center — the object */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
            className="order-2 w-full max-w-[420px] mx-auto lg:max-w-none">
            <div data-skew className="relative aspect-[3/4] overflow-hidden">
              <img src="/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png" alt="Abdulrasaq Abdulrasaq"
                width={810} height={1080} loading="lazy" decoding="async"
                className="w-full h-full object-cover grade-warm"
                style={{ objectPosition: 'center 10%', transform: 'scale(1.35)', transformOrigin: 'center 20%' }} />
            </div>
            <div className="flex justify-between t-micro mt-3">
              <span>Fig. 01</span><span>Ilorin, NG</span>
            </div>
          </motion.div>

          {/* Right — conversational body voice */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-3">
            <motion.p variants={staggerItem} data-scrub-text className="t-body mb-8">
              <strong className="font-medium">Abdulrasaq Alatare</strong> (also known as <strong className="font-medium">Abdulrasaq Abdulrasaq</strong>) is a Full-Stack Developer and a Class of 2026 graduate of the Department of Information Technology, University of Ilorin, Nigeria,
              with expertise in building modern, scalable web applications. I specialize in the React ecosystem,
              AI integration, and creating user-centric digital experiences.
            </motion.p>
            <motion.p variants={staggerItem} data-scrub-text className="t-body">
              As Software Director at ITSA for the 2025/2026 session, I led technical initiatives and mentored fellow developers.
              I'm driven by turning complex problems into elegant, efficient solutions.
            </motion.p>
          </motion.div>
        </div>

        {/* ── CMD Terminal Story ── */}
        <motion.div
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
          className="mt-[clamp(68px,8vw,120px)]"
        >
          <div className="flex items-center justify-between t-label mb-4">
            <span>origin_story.txt</span><span>Read-only</span>
          </div>
          <TerminalStory />
        </motion.div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className={`gutter ${sectionPad}`}>
        <SectionHead index="02" label="Work" title="Featured Projects" className="mb-12 md:mb-16" />

        <div className="js-hscroll bleed-x relative lg:h-screen lg:overflow-hidden">
          <div className="js-hscroll-track lg:flex lg:h-full lg:w-max">
          {featuredProjects.map((project, index) => (
            <article key={index}
              className="grid lg:grid-cols-[1fr_minmax(0,1.35fr)_1fr] gap-x-[18px] gap-y-8 py-12 md:py-16 border-t border-dashed border-line lg:w-screen lg:h-full lg:shrink-0 lg:gutter lg:py-0 lg:border-t-0 lg:items-center lg:[&:not(:first-child)]:border-l">
              {/* Left — label + title */}
              <div className="self-start lg:self-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="t-label">{String(index + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}</span>
                  {project.tag && <span className="t-label px-3 py-1.5 rounded-outlined border border-dashed border-line-strong">{project.tag}</span>}
                </div>
                <h3 className="t-heading">
                  {'caseStudy' in project ? <Link to={`/projects/${project.slug}`}>{project.title}</Link> : project.title}
                </h3>
                {project.credit && <p className="t-label mt-5">{project.credit}</p>}
                {'caseStudy' in project && (
                  <Link to={`/projects/${project.slug}`} className="t-label mt-6 inline-flex items-center gap-2 underline underline-offset-4 decoration-1">
                    Read case study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              {/* Center — the product */}
              <div data-skew>
                <TiltCard featured>
                  <ProjectPreview url={project.demo} title={project.title} scan={project.hasOcrScan} image={project.preview} />
                </TiltCard>
              </div>

              {/* Right — description, stack, actions */}
              <div>
                <p className="t-body mb-8">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="t-micro px-3 py-1.5 rounded-outlined border border-line-strong">{tech}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-5">
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost min-h-[40px] px-5">
                      <ExternalLink className="w-3.5 h-3.5" /> <RollText>View Live</RollText>
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-u t-label inline-flex items-center gap-2">
                    <Github className="w-3.5 h-3.5" /> Github
                  </a>
                </div>
              </div>
            </article>
          ))}
          </div>
          {/* Scroll progress through the showcase */}
          <div className="hidden lg:block absolute bottom-8 inset-x-[clamp(16px,3vw,41px)] border-t border-dashed border-line">
            <div className="js-hscroll-progress h-px -mt-px bg-ink origin-left" style={{ transform: 'scaleX(0)' }} />
          </div>
        </div>

        {/* More projects — editorial index list */}
        <div className="mt-8">
          <div className="flex items-center justify-between t-label mb-4 pt-12 border-t border-dashed border-line">
            <span>Index</span>
            <Link to="/projects" className="inline-flex items-center gap-2 underline underline-offset-4 decoration-1">All projects <ArrowRight className="w-3 h-3" /></Link>
          </div>
          {smallProjects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={index * 0.06}
              className="group grid md:grid-cols-[56px_1.1fr_2fr_150px] gap-x-[18px] gap-y-3 py-6 border-t border-dashed border-line items-baseline">
              <span className="t-label">{String(index + featuredProjects.length + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="t-heading-sm">{project.title}</h3>
                {project.tag && <span className="inline-block t-micro mt-3 px-2.5 py-1 rounded-outlined border border-dashed border-line-strong">{project.tag}</span>}
              </div>
              <div>
                <p className="t-body-sm mb-3">{project.description}</p>
                <p className="t-micro">{project.tech.slice(0, 3).join(' / ')}</p>
              </div>
              <div className="flex gap-5 md:justify-end">
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-u t-label inline-flex items-center gap-1.5">
                    <ExternalLink className="w-3 h-3" /> Live
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-u t-label inline-flex items-center gap-1.5">
                  <Github className="w-3 h-3" /> Code
                </a>
              </div>
            </motion.div>
          ))}
          <hr className="rule-dashed" />
        </div>
      </section>

      {/* ─── THE PROCESS (Carousel) ─── */}
      <section id="process" className={`js-process md:min-h-screen lg:h-screen flex flex-col gutter ${sectionPad} lg:py-24`}>
        <SectionHead index="03" label="Method" title="The Process" className="mb-12 md:mb-16" />

        {/* Carousel controls */}
        <div className="flex items-center justify-between gap-4 mb-10 md:mb-14">
          <div className="flex flex-wrap gap-x-6 gap-y-3" role="tablist" aria-label="Process steps">
            {processSteps.map((s, i) => (
              <button key={i} onClick={() => goToProcess(i)} role="tab" aria-selected={i === processIndex}
                className={`t-label ${i === processIndex ? 'nav-active' : ''}`}>
                {s.step} {s.title}
              </button>
            ))}
          </div>
          <div className="flex gap-2 shrink-0">
            <button onClick={prevProcess} disabled={processIndex === 0} aria-label="Previous step" className="btn-ghost btn-round">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextProcess} disabled={processIndex === processSteps.length - 1} aria-label="Next step" className="btn-ghost btn-round">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel content */}
        <div className="flex-1 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={processIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0, 1] }}
              className="w-full grid md:grid-cols-[1fr_auto_1fr] gap-x-[18px] gap-y-10 items-center"
            >
              <div>
                <div className="t-display mb-4">{processSteps[processIndex].step}</div>
                <h3 className="t-heading">{processSteps[processIndex].title}</h3>
              </div>
              <div className="w-36 h-36 md:w-56 md:h-56 rounded-full border border-dashed border-line-strong flex items-center justify-center [&_svg]:w-12 [&_svg]:h-12 md:[&_svg]:w-16 md:[&_svg]:h-16 [&_svg]:stroke-[1.25]">
                {processSteps[processIndex].icon}
              </div>
              <p className="t-body md:max-w-[22ch]">{processSteps[processIndex].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── TECH ARSENAL ─── */}
      <section id="tech" className={`md:min-h-screen gutter ${sectionPad}`}>
        <SectionHead index="04" label="Toolkit" title="Tech Arsenal" className="mb-12 md:mb-16" />

        <h3 className="t-label mb-5 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" /> Core Stack
        </h3>
        <div className="card-edge overflow-hidden mb-16"><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 -mt-px -ml-px">
          {coreStack.map((tech, i) => (
            <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={i * 0.05}
              className="p-6 aspect-square flex flex-col justify-between cursor-default group border-t border-l border-dashed border-line">
              <div className="flex justify-between t-micro">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex justify-center transition-transform duration-500 group-hover:scale-110">
                {TechIcons[tech.icon] || <Globe className="w-8 h-8" />}
              </div>
              <div className="t-label">{tech.name}</div>
            </motion.div>
          ))}
        </div></div>

        <h3 className="t-label mb-5 flex items-center gap-2">
          <Wrench className="w-3.5 h-3.5" /> Tools & Technologies
        </h3>
        <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap gap-2">
          {tools.map((tool, i) => (
            <motion.li key={i} variants={staggerItem}
              className="t-label px-4 py-2.5 rounded-outlined border border-line-strong inline-flex items-center gap-2 cursor-default transition-colors duration-300 hover:border-ink">
              {TechBrandIcons[tool] && <span className="[&_svg]:w-3.5 [&_svg]:h-3.5">{TechBrandIcons[tool]}</span>}
              {tool}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section id="certifications" className={`md:min-h-screen gutter ${sectionPad}`}>
        <SectionHead index="05" label="Credentials" title="Awards & Certifications" className="mb-12 md:mb-16" />

        {/* Award — void-mode reveal */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.05}
          className="grid lg:grid-cols-[1fr_auto_1fr] gap-x-[18px] gap-y-8 items-center py-12 md:py-16 mb-12 md:mb-16 border-t border-dashed border-line">
          <div>
            <div className="t-label mb-6">Award — 2026</div>
            <h3 className="t-heading">Federal Government Students Venture Capital Grant</h3>
          </div>
          <div data-speed="0.92" className="t-wordmark text-left lg:text-center" style={{ fontSize: 'clamp(64px, 9vw, 150px)' }}>₦<span data-count="50">50</span>M</div>
          <div>
            <p className="t-body mb-8">
              Awarded for FaceTrust AI, co-founded with Elijah Adeniji, and selected as one of 45 ventures from over 36,000 student applicants nationwide. The grant was presented at the University of Ilorin on July 28, 2026.
            </p>
            <a href="https://www.unilorin.edu.ng/3-unilorites-secure-multimillion-naira-grant/" target="_blank" rel="noopener noreferrer"
              className="tag-ember underline underline-offset-4 decoration-1 inline-flex items-center gap-1.5">
              Source: University of Ilorin <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        <div>
          {certifications.map((cert, i) => (
            <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={i * 0.08}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[56px_1fr_220px_80px_auto] gap-x-[18px] gap-y-2 py-6 border-t border-dashed border-line items-center">
              <Award className="w-5 h-5 stroke-[1.5] row-span-2 md:row-span-1" />
              <h3 className="t-heading-sm">{cert.title}</h3>
              <p className="t-label col-start-2 md:col-start-auto">{cert.issuer}</p>
              <span className="t-label col-start-2 md:col-start-auto">{cert.date}</span>
              <span className="t-label col-start-2 md:col-start-auto md:text-right">{cert.credential}</span>
            </motion.div>
          ))}
          <hr className="rule-dashed" />
        </div>
      </section>

      {/* ─── TESTIMONIALS MARQUEE ─── */}
      <section className={`md:min-h-screen overflow-hidden ${sectionPad}`}>
        <SectionHead index="06" label="Words" title="Social Proof" className="gutter mb-12 md:mb-16" />

        <div className="relative">
          <div className="marquee-track js-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure key={i} aria-hidden={i >= testimonials.length} className="w-[320px] md:w-[440px] card-edge p-6 md:p-8 flex-shrink-0 flex flex-col">
                <Quote className="w-4 h-4 mb-6" />
                <blockquote className="t-body-sm md:text-[22px] md:leading-[1.26] mb-8">"{t.text}"</blockquote>
                <figcaption className="mt-auto pt-5 border-t border-dashed border-line flex items-center gap-3">
                  <Star className="w-3.5 h-3.5" />
                  <div>
                    <div className="t-label">{t.author}</div>
                    <div className="t-micro mt-1">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className={`md:min-h-screen gutter ${sectionPad}`}>
        <SectionHead index="07" label="Career" title="Experience" className="mb-12 md:mb-16" />

        <div>
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={index * 0.1}
              className="grid lg:grid-cols-[1fr_1.2fr_1.4fr] gap-x-[18px] gap-y-5 py-10 md:py-12 border-t border-dashed border-line">
              <div>
                <div className="t-label mb-3">{exp.period}</div>
                <div className="t-label">{exp.company}</div>
              </div>
              <h3 className="t-heading-sm">{exp.title}</h3>
              <div>
                <p className="t-body-sm mb-5">{exp.description}</p>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="grid grid-cols-[24px_1fr] t-body-sm">
                      <span aria-hidden>—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <hr className="rule-dashed" />
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className={`min-h-screen flex flex-col gutter ${sectionPad}`}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="flex items-center justify-between t-label mb-4">
          <span>(08)</span><span>Contact</span>
        </motion.div>
        <hr className="rule-dashed mb-12 md:mb-16" />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex-1 grid lg:grid-cols-[1.4fr_1fr] gap-x-[18px] gap-y-10 items-end">
          <h2 data-split-scroll className="t-display max-w-[14ch]">
            Let's Build Something Amazing
          </h2>
          <motion.div variants={staggerItem}>
            <p className="t-body mb-10">
              I'm always excited to collaborate on innovative projects and explore new opportunities.
            </p>
            <MagneticButton href="mailto:ola283dayo@gmail.com" className="btn-fill px-8 py-[18px] text-[14px]">
              <Mail className="w-4 h-4" /> <RollText>Work with me</RollText>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-[18px] mt-16 md:mt-24">
          {[
            { icon: <Mail className="w-4 h-4" />, label: "Email", value: "ola283dayo@gmail.com", href: "mailto:ola283dayo@gmail.com" },
            { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351" },
            { icon: <Github className="w-4 h-4" />, label: "GitHub", value: "Quantum-techlab", href: "https://github.com/Quantum-techlab" },
          ].map((c, i) => (
            <motion.a key={i} variants={staggerItem} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
              className="group card-edge p-6 flex flex-col gap-8 transition-colors duration-300 hover:border-ink">
              <div className="flex items-center justify-between">
                <span className="t-label">{c.label}</span>
                {c.icon}
              </div>
              <span className="t-sub break-all underline decoration-1 underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors">{c.value}</span>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="gutter pb-8">
        <hr className="rule-dashed mb-10" />
        <nav aria-label="Site index" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-[18px] gap-y-3 mb-12">
          {ROUTES.map((r) => (
            <Link key={r.path} to={r.path} className="t-label link-u no-underline hover:underline">{r.name}</Link>
          ))}
        </nav>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="t-legal">© 2026 Abdulrasaq Abdulrasaq Alatare · All rights reserved</span>
            <span className="tag-ember">Designed &amp; built by Abdulrasaq Abdulrasaq</span>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s, i) => (
              <a key={i} href={s.href} aria-label={s.label} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                className="btn-ghost btn-round">
                {s.icon}
              </a>
            ))}
            <button onClick={scrollToTop} className="btn-ghost ml-3 min-h-[40px] px-4" aria-label="Back to top">
              <ArrowUp className="w-3.5 h-3.5" /> Top
            </button>
          </div>
        </div>
      </footer>
      </div>
      </div>
    </div>
    </MotionConfig>
  );
};

export default Index;
