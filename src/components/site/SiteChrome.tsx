import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X, ArrowUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { LiquidLogo } from '@/components/LiquidLogo';
import { RollText } from '@/components/RollText';
import { useLiquidGlass } from '@/hooks/useLiquidGlass';
import { ROUTES } from '@/seo/useSeo';
import { site } from '@/data/portfolio';

export const pageLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/awards', label: 'Awards' },
  { to: '/contact', label: 'Contact' },
];

export const socials = [
  { icon: <Github className="w-4 h-4" />, label: 'GitHub profile', href: site.github },
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn profile', href: site.linkedin },
  { icon: <Mail className="w-4 h-4" />, label: 'Email Abdulrasaq', href: `mailto:${site.email}` },
];

/** Floating glass nav for the sub-pages (the home page keeps its in-page section nav). */
const SiteNav = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pill = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  useLiquidGlass(pill, { depth: 20, scale: 30 });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 6) return;
      setHidden(y > lastY && y > 80);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav animate={{ y: hidden && !open ? '-140%' : 0 }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0, 1] }}
        className="fixed top-3 md:top-4 inset-x-0 z-50 gutter" aria-label="Main">
        <div ref={pill} className="glass-nav grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-16 md:h-[72px] pl-5 md:pl-7 pr-2.5 md:pr-3">
          <Link to="/" className="inline-flex items-center justify-self-start" aria-label="Abdulrasaq Alatare — home">
            <LiquidLogo />
          </Link>
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {pageLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `t-label text-[13px] ${isActive || pathname.startsWith(l.to + '/') ? 'nav-active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2 justify-self-end">
            <button onClick={toggleTheme} className="btn-ghost btn-round border-line-strong" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href={`mailto:${site.email}`} className="hidden md:inline-flex btn-cream">
              <Mail className="w-4 h-4" /> <RollText>Hire Me</RollText>
            </a>
            <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
              className="lg:hidden btn-ghost btn-round border-line-strong">
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-canvas gutter pt-28 pb-8 flex flex-col">
            <nav className="flex flex-col" aria-label="Mobile">
              {[{ to: '/', label: 'Home' }, ...pageLinks].map((l, i) => (
                <Link key={l.to} to={l.to} className="flex items-baseline justify-between py-4 border-b border-dashed border-line">
                  <span className="t-heading-sm">{l.label}</span>
                  <span className="t-label">{String(i + 1).padStart(2, '0')}</span>
                </Link>
              ))}
            </nav>
            <a href={`mailto:${site.email}`} className="btn-fill mt-auto"><Mail className="w-4 h-4" /> Hire Me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/** Footer with a full site index — every page links to every other page. */
export const SiteFooter = () => (
  <footer className="gutter pb-8 pt-16">
    <hr className="rule-dashed mb-10" />
    <nav aria-label="Site index" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-[18px] gap-y-3 mb-12">
      {ROUTES.map((r) => (
        <Link key={r.path} to={r.path} className="t-label link-u no-underline hover:underline">
          {r.name}
        </Link>
      ))}
    </nav>
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className="t-legal">© 2026 Abdulrasaq Abdulrasaq Alatare · All rights reserved</span>
        <span className="tag-ember">Designed &amp; built by Abdulrasaq Abdulrasaq</span>
      </div>
      <div className="flex items-center gap-2">
        {socials.map((s) => (
          <a key={s.href} href={s.href} aria-label={s.label} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="btn-ghost btn-round">
            {s.icon}
          </a>
        ))}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-ghost ml-3 min-h-[40px] px-4" aria-label="Back to top">
          <ArrowUp className="w-3.5 h-3.5" /> Top
        </button>
      </div>
    </div>
  </footer>
);

interface Crumb { to: string; label: string }

/** Page header: index label, visible breadcrumb, H1 and lead copy. */
export const PageHeader = ({ index, label, title, lead, crumbs }: { index: string; label: string; title: string; lead?: string; crumbs: Crumb[] }) => (
  <header className="pt-32 md:pt-40 pb-12 md:pb-16">
    <div className="flex items-center justify-between t-label mb-4">
      <span>({index})</span>
      <span>{label}</span>
    </div>
    <hr className="rule-dashed mb-8" />
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-2 t-micro">
        {crumbs.map((c, i) => (
          <li key={c.to} className="flex items-center gap-2">
            {i < crumbs.length - 1 ? <Link to={c.to} className="underline underline-offset-4 decoration-1">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            {i < crumbs.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
      className="t-display max-w-[18ch]">
      {title}
    </motion.h1>
    {lead && (
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
        className="t-body mt-8 max-w-[40ch]">
        {lead}
      </motion.p>
    )}
  </header>
);

/** Shared shell for every sub-page. */
export const SitePage = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-canvas text-ink overflow-x-hidden">
      <SiteNav />
      <main className="gutter">{children}</main>
      <SiteFooter />
    </div>
  </MotionConfig>
);

/** Fade-up wrapper for page sections. */
export const Reveal = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0, 1] }} className={className}>
    {children}
  </motion.div>
);
