import { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin);
// Mobile address-bar show/hide resizes the viewport; re-measuring then causes visible jumps
ScrollTrigger.config({ ignoreMobileResize: true });

const EASE = 'expo.out';

/** Scroll to an element (or the top) through ScrollSmoother when it is running. */
export const smoothScrollTo = (target: Element | number) => {
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(target, true, 'top top');
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

interface Options {
  /** Called with the active step while the pinned Process section scrubs. */
  onProcessStep: (index: number) => void;
  processSteps: number;
  /** Receives the pinned Process ScrollTrigger (or null) so tab clicks can scroll to a step. */
  processTriggerRef: { current: ScrollTrigger | null };
}

/**
 * gsap.com-style motion layer. Targets are marked in markup with data attributes:
 *  data-hero-split    — headline chars rise from masked lines on load
 *  data-split-scroll  — heading chars rise when scrolled into view
 *  data-scrub-text    — words fill from dim to full as the reader scrolls
 *  data-count         — numbers count up on enter
 *  data-skew          — elements skew with scroll velocity
 *  data-scramble      — text scrambles on hover
 *  data-magnetic      — element is pulled toward the cursor
 *  .js-hscroll        — pinned horizontal showcase (desktop)
 *  .js-process        — pinned, scrubbed step section (desktop)
 *  .js-marquee        — velocity-reactive marquee
 */
export const useGsapEffects = (scope: RefObject<HTMLElement>, { onProcessStep, processSteps, processTriggerRef }: Options) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        desktop: '(min-width: 1024px)',
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
        if (!motion) return;
        const scrollEndListeners: (() => void)[] = [];

        // ── Smooth scrolling + data-speed / data-lag parallax ──
        ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.15,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
        });

        // ── Hero headline: chars rise out of masked lines ──
        gsap.utils.toArray<HTMLElement>('[data-hero-split]').forEach((el) => {
          SplitText.create(el, {
            type: 'lines,chars',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.chars, { yPercent: 115, rotate: 6, duration: 1.4, ease: EASE, stagger: 0.035, delay: 0.25 }),
          });
        });

        // ── Section headings: masked char reveal on scroll ──
        gsap.utils.toArray<HTMLElement>('[data-split-scroll]').forEach((el) => {
          SplitText.create(el, {
            type: 'lines,chars',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.chars, {
                yPercent: 110,
                duration: 1.1,
                ease: EASE,
                stagger: 0.018,
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
              }),
          });
        });

        // ── Body copy: words fill in as you read ──
        gsap.utils.toArray<HTMLElement>('[data-scrub-text]').forEach((el) => {
          SplitText.create(el, {
            type: 'words',
            autoSplit: true,
            onSplit: (self) =>
              gsap.fromTo(
                self.words,
                { opacity: 0.18 },
                {
                  opacity: 1,
                  ease: 'none',
                  stagger: 0.1,
                  scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 55%', scrub: true },
                }
              ),
          });
        });

        // ── Count-up numbers ──
        gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
          const end = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? '';
          const counter = { v: end > 100 ? end - 20 : 0 };
          el.textContent = `${counter.v}${suffix}`;
          gsap.to(counter, {
            v: end,
            duration: 1.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => { el.textContent = `${Math.round(counter.v)}${suffix}`; },
          });
        });

        // ── Velocity skew on imagery ──
        const skewTargets = gsap.utils.toArray<HTMLElement>('[data-skew]');
        if (skewTargets.length) {
          const proxy = { skew: 0 };
          const setSkew = gsap.quickSetter(skewTargets, 'skewY', 'deg');
          const clamp = gsap.utils.clamp(-4, 4);
          gsap.set(skewTargets, { transformOrigin: 'center center', force3D: true });
          ScrollTrigger.create({
            onUpdate: (self) => {
              const skew = clamp(self.getVelocity() / -400);
              if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, { skew: 0, duration: 0.8, ease: 'power3', overwrite: true, onUpdate: () => setSkew(proxy.skew) });
              }
            },
          });
        }

        // ── Velocity-reactive marquee ──
        gsap.utils.toArray<HTMLElement>('.js-marquee').forEach((track) => {
          track.style.animation = 'none';
          const loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 40, repeat: -1 });
          // One eased proxy drives the loop speed — no new tweens per scroll frame
          const speed = { v: 1 };
          const steer = gsap.quickTo(speed, 'v', { duration: 0.8, ease: 'power3.out', onUpdate: () => { loop.timeScale(speed.v); } });
          let direction = 1;
          let hovering = false;
          const rest = () => steer((hovering ? 0.15 : 1) * direction);
          ScrollTrigger.create({
            onUpdate: (self) => {
              direction = self.direction;
              const boost = Math.min(Math.abs(self.getVelocity()) / 250, 6);
              steer((hovering ? 0.15 : 1 + boost) * direction);
            },
          });
          ScrollTrigger.addEventListener('scrollEnd', rest);
          scrollEndListeners.push(rest);
          track.addEventListener('mouseenter', () => { hovering = true; rest(); });
          track.addEventListener('mouseleave', () => { hovering = false; rest(); });
        });

        // ── Scramble on hover ──
        gsap.utils.toArray<HTMLElement>('[data-scramble]').forEach((el) => {
          const text = el.textContent ?? '';
          const run = () => gsap.to(el, { duration: 0.6, scrambleText: { text, chars: 'upperCase', speed: 0.5 }, overwrite: true });
          el.addEventListener('mouseenter', run);
          el.addEventListener('focus', run);
        });

        // ── Magnetic pull ──
        gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
          const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
          const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
          el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.35);
            yTo((e.clientY - r.top - r.height / 2) * 0.35);
          });
          el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
        });

        if (desktop) {
          // ── Pinned horizontal showcase ──
          gsap.utils.toArray<HTMLElement>('.js-hscroll').forEach((wrap) => {
            const track = wrap.querySelector<HTMLElement>('.js-hscroll-track');
            const bar = wrap.querySelector<HTMLElement>('.js-hscroll-progress');
            if (!track) return;
            const distance = () => track.scrollWidth - window.innerWidth;
            const tween = gsap.to(track, { x: () => -distance(), ease: 'none' });
            ScrollTrigger.create({
              trigger: wrap,
              start: 'top top',
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 1,
              animation: tween,
              invalidateOnRefresh: true,
              onUpdate: (self) => bar && gsap.set(bar, { scaleX: self.progress }),
            });
          });

          // ── Pinned, scrubbed process steps ──
          const process = document.querySelector<HTMLElement>('.js-process');
          if (process) {
            let current = -1;
            processTriggerRef.current = ScrollTrigger.create({
              trigger: process,
              start: 'top top',
              end: () => `+=${window.innerHeight * (processSteps - 1)}`,
              pin: true,
              onUpdate: (self) => {
                const step = Math.min(processSteps - 1, Math.floor(self.progress * processSteps));
                if (step !== current) {
                  current = step;
                  onProcessStep(step);
                }
              },
            });
          }
        }

        // Re-measure once web fonts settle (line breaks change trigger positions)
        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        return () => {
          processTriggerRef.current = null;
          scrollEndListeners.forEach((fn) => ScrollTrigger.removeEventListener('scrollEnd', fn));
        };
      }
    );

    // ── In-page anchors go through the smoother ──
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute('href') ?? '#';
      const target = hash === '#' ? 0 : document.querySelector(hash);
      if (target === null) return;
      e.preventDefault();
      // Let the mobile menu close (and unlock body scroll) before moving
      setTimeout(() => smoothScrollTo(target), 60);
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      mm.revert();
    };
  }, { scope });
};
