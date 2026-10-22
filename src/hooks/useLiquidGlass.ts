import { RefObject, useEffect } from 'react';

// Liquid glass over live content: a displacement map is generated from a rounded-rect
// height field (convex bezel → magnifies, like a real lens) and fed to an SVG filter that
// the element references from `backdrop-filter`. That bends whatever is behind it — including
// the WebGL world. Only Chromium supports SVG filters in backdrop-filter; elsewhere the
// element keeps its regular frosted blur.

const SVGNS = 'http://www.w3.org/2000/svg';
let uid = 0;

const supportsSvgBackdrop = () => {
  const brands = (navigator as Navigator & { userAgentData?: { brands: { brand: string }[] } }).userAgentData?.brands;
  return !!brands?.some((b) => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand));
};

const roundedRectSDF = (px: number, py: number, hw: number, hh: number, r: number) => {
  const qx = Math.abs(px) - hw + r;
  const qy = Math.abs(py) - hh + r;
  return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
};

const buildMap = (W: number, H: number, radius: number, depth: number) => {
  const res = Math.min(1, 320 / Math.max(W, H));
  const mw = Math.max(2, Math.round(W * res));
  const mh = Math.max(2, Math.round(H * res));
  const canvas = document.createElement('canvas');
  canvas.width = mw;
  canvas.height = mh;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(mw, mh);
  const hw = W / 2, hh = H / 2, r = Math.min(radius, hw, hh);
  const bezel = Math.max(1, depth);
  const k = 2.4;
  const profile = (t: number) => Math.pow(1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), k), 1 / k);
  const e = 1;
  for (let y = 0; y < mh; y++) {
    for (let x = 0; x < mw; x++) {
      const px = ((x + 0.5) / mw) * W - hw;
      const py = ((y + 0.5) / mh) * H - hh;
      const d = roundedRectSDF(px, py, hw, hh, r);
      const din = -d;
      let mag = 0;
      if (din >= 0 && din <= bezel) {
        const t = din / bezel, dt = 0.02;
        mag = (profile(t + dt) - profile(t - dt)) / (2 * dt);
      }
      let gx = roundedRectSDF(px + e, py, hw, hh, r) - roundedRectSDF(px - e, py, hw, hh, r);
      let gy = roundedRectSDF(px, py + e, hw, hh, r) - roundedRectSDF(px, py - e, hw, hh, r);
      const gl = Math.hypot(gx, gy) || 1;
      gx /= gl;
      gy /= gl;
      const i = (y * mw + x) * 4;
      img.data[i] = Math.min(255, Math.max(0, (-gx * mag * 0.5 + 0.5) * 255));
      img.data[i + 1] = Math.min(255, Math.max(0, (-gy * mag * 0.5 + 0.5) * 255));
      img.data[i + 2] = 128;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
};

interface Options {
  radius?: number;
  depth?: number;
  scale?: number;
  blur?: number;
}

export const useLiquidGlass = (ref: RefObject<HTMLElement>, { radius = 9999, depth = 22, scale = 34, blur = 1.5 }: Options = {}) => {
  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsSvgBackdrop()) return;

    const id = `liquid-glass-${++uid}`;
    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
    svg.innerHTML =
      `<filter id="${id}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">` +
      `<feImage x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map"/>` +
      // Single displacement pass — this re-runs every frame the page scrolls under the glass,
      // so it stays as cheap as possible
      `<feDisplacementMap in="SourceGraphic" in2="map" scale="${scale}" xChannelSelector="R" yChannelSelector="G"/>` +
      `</filter>`;
    document.body.appendChild(svg);
    const feImage = svg.querySelector('feImage')!;

    const prevFilter = el.style.backdropFilter;
    const apply = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width < 2 || height < 2) return;
      const r = radius >= 9999 ? height / 2 : radius;
      const href = buildMap(width, height, r, depth);
      feImage.setAttribute('href', href);
      const value = `url(#${id}) blur(${blur}px) saturate(150%)`;
      el.style.backdropFilter = value;
      el.style.setProperty('-webkit-backdrop-filter', value);
      el.classList.add('is-liquid');
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);

    return () => {
      ro.disconnect();
      svg.remove();
      el.style.backdropFilter = prevFilter;
      el.style.removeProperty('-webkit-backdrop-filter');
      el.classList.remove('is-liquid');
    };
  }, [ref, radius, depth, scale, blur]);
};
