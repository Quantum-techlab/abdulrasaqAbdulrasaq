import { useEffect, useId, useRef } from 'react';
import gsap from 'gsap';
import { Terminal } from 'lucide-react';

// The nav mark as liquid: a slowly churning turbulence field displaces the glyphs,
// and hovering stirs it harder.
export const LiquidLogo = () => {
  const raw = useId();
  const id = `liquid-logo-${raw.replace(/:/g, '')}`;
  const wrap = useRef<HTMLSpanElement>(null);
  const disp = useRef<SVGFEDisplacementMapElement>(null);
  const turb = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !turb.current || !disp.current) return;
    const state = { t: 0, frame: 0 };
    const tick = () => {
      // The churn is slow, so updating every other frame is visually identical and half the work
      if (state.frame++ % 2) return;
      state.t += 0.016;
      const bx = 0.018 + Math.sin(state.t) * 0.006;
      const by = 0.05 + Math.cos(state.t * 0.8) * 0.015;
      turb.current?.setAttribute('baseFrequency', `${bx.toFixed(4)} ${by.toFixed(4)}`);
    };
    gsap.ticker.add(tick);

    const el = wrap.current?.parentElement;
    const stir = () => gsap.to(disp.current, { attr: { scale: 14 }, duration: 0.35, ease: 'power2.out', overwrite: true });
    const settle = () => gsap.to(disp.current, { attr: { scale: 4 }, duration: 1.2, ease: 'elastic.out(1, 0.35)', overwrite: true });
    el?.addEventListener('mouseenter', stir);
    el?.addEventListener('mouseleave', settle);
    return () => {
      gsap.ticker.remove(tick);
      el?.removeEventListener('mouseenter', stir);
      el?.removeEventListener('mouseleave', settle);
    };
  }, []);

  return (
    <>
      <svg aria-hidden className="absolute w-0 h-0 overflow-hidden">
        <filter id={id} x="-20%" y="-40%" width="140%" height="180%">
          <feTurbulence ref={turb} type="fractalNoise" baseFrequency="0.018 0.05" numOctaves={2} seed={7} result="noise" />
          <feDisplacementMap ref={disp} in="SourceGraphic" in2="noise" scale={4} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <span ref={wrap} className="inline-flex items-center gap-2.5" style={{ filter: `url(#${id})` }}>
        <Terminal className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
        <span className="t-sub md:text-[20px]">AA.</span>
      </span>
    </>
  );
};
