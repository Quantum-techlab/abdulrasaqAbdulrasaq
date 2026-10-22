import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';

// Lots of stars — they're animated on the GPU, so the count costs almost no CPU
const PARTICLE_COUNT = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches ? 2500 : 5000;

type Vec2 = { x: number; y: number };
type Pointer = Vec2 & { inside: boolean; moved: number };
type Size = { width: number; height: number };

interface StarFieldProps {
  mouse: Pointer;
  size: Size;
  tilt: Vec2;
  light: boolean;
}

// All per-particle motion runs in the vertex shader — a flowing current, parallax drift
// toward the pointer, a whirlpool around the cursor, depth bob and twinkle — so each frame
// the CPU only updates a handful of uniforms.
const vertexShader = /* glsl */ `
  attribute float aSize;
  attribute float aOpacity;
  attribute float aSeed;
  uniform float uTime;
  uniform vec2 uDrift;
  uniform vec2 uMouse;   // pointer in NDC (-1..1)
  uniform float uAspect;
  uniform float uPush;   // whirlpool strength (rises while the pointer moves)
  uniform float uPixelRatio;
  varying float vOpacity;
  void main() {
    vec3 p = position;
    float depth = (p.z + 4.0) / 8.0;
    float parallax = 0.3 + depth * 0.7;

    // Flowing current: the field streams sideways (wrapping) and undulates
    p.x = mod(p.x + uTime * (0.12 + depth * 0.22) + 9.0, 18.0) - 9.0;
    p.y += sin(p.x * 0.35 + uTime * 0.25 + aSeed * 0.013) * 0.35;
    p.x += cos(p.y * 0.4 + uTime * 0.2 + aSeed * 0.007) * 0.2;

    // Parallax drift toward where the pointer is
    p.xy += uDrift * parallax * 0.5;

    // Whirlpool: stars near the cursor are pushed out and spun around it
    float halfH = 0.5774 * (7.0 - p.z);                 // tan(30deg) * distance to camera
    vec2 m = uMouse * vec2(halfH * uAspect, halfH);
    vec2 d = p.xy - m;
    float dist = max(length(d), 0.001);
    float f = exp(-(dist * dist) / 2.6) * uPush;
    p.xy += (d / dist) * f * 0.9 + vec2(-d.y, d.x) / dist * f * 0.7;

    p.z += sin(uTime * (0.3 + depth * 0.5) + aSeed * 0.1) * 0.05;
    float twinkle = sin(uTime * (1.0 + mod(aSeed, 7.0) * 0.3) + aSeed * 2.1) * 0.15;
    // Stars caught in the whirlpool flare a little
    vOpacity = clamp(aOpacity + twinkle + f * 0.35, 0.08, 1.0);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aSize * uPixelRatio * (420.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uLight;
  varying float vOpacity;
  void main() {
    vec4 tex = texture2D(uTexture, gl_PointCoord);
    if (uLight > 0.5) {
      // Light mode: warm ink specks on cream — driftwood when dim, deep bark when bright
      vec3 ink = mix(vec3(0.42, 0.37, 0.32), vec3(0.16, 0.09, 0.05), vOpacity);
      gl_FragColor = vec4(ink, tex.a * vOpacity * 0.9);
    } else {
      // Dark mode: warm cream stars — slightly deeper cream when dim, never brown
      vec3 color = mix(vec3(0.92, 0.8, 0.66), vec3(1.0, 0.95, 0.88), vOpacity);
      gl_FragColor = vec4(color * tex.rgb, tex.a * vOpacity);
    }
  }
`;

const StarField = ({ mouse, size, tilt, light }: StarFieldProps) => {
  const { positions, sizes, opacities, seeds } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const opacities = new Float32Array(PARTICLE_COUNT);
    const seeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Spread across a wide area to fill the hero
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      seeds[i] = i;

      // Varied brightness — some stars are much brighter
      const brightness = Math.random();
      if (brightness > 0.95) {
        sizes[i] = 0.12 + Math.random() * 0.08;
        opacities[i] = 0.8 + Math.random() * 0.2;
      } else if (brightness > 0.8) {
        sizes[i] = 0.07 + Math.random() * 0.05;
        opacities[i] = 0.6 + Math.random() * 0.3;
      } else {
        sizes[i] = 0.04 + Math.random() * 0.03;
        opacities[i] = 0.3 + Math.random() * 0.3;
      }
    }

    return { positions, sizes, opacities, seeds };
  }, []);

  // 4-point star sprite with a warm glow
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const cx = 32, cy = 32;

    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32);
    glow.addColorStop(0, 'rgba(255,237,215,1)');
    glow.addColorStop(0.1, 'rgba(255,237,215,0.8)');
    glow.addColorStop(0.3, 'rgba(255,220,180,0.25)');
    glow.addColorStop(0.6, 'rgba(220,150,90,0.06)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 64, 64);

    ctx.globalCompositeOperation = 'lighter';
    for (let angle = 0; angle < 4; angle++) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((angle * Math.PI) / 2);
      const flare = ctx.createLinearGradient(0, 0, 28, 0);
      flare.addColorStop(0, 'rgba(255,237,215,0.9)');
      flare.addColorStop(0.3, 'rgba(255,220,180,0.25)');
      flare.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = flare;
      ctx.fillRect(0, -1.5, 28, 3);
      ctx.restore();
    }
    for (let angle = 0; angle < 4; angle++) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((angle * Math.PI) / 2 + Math.PI / 4);
      const flare = ctx.createLinearGradient(0, 0, 16, 0);
      flare.addColorStop(0, 'rgba(255,237,215,0.4)');
      flare.addColorStop(0.5, 'rgba(255,220,180,0.08)');
      flare.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = flare;
      ctx.fillRect(0, -0.8, 16, 1.6);
      ctx.restore();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: starTexture },
          uTime: { value: 0 },
          uDrift: { value: new THREE.Vector2() },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uAspect: { value: 1 },
          uPush: { value: 0 },
          uPixelRatio: { value: 1 },
          uLight: { value: light ? 1 : 0 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        // Glowing light adds up on the dark canvas; ink has to sit on top of the cream one
        blending: light ? THREE.NormalBlending : THREE.AdditiveBlending,
      }),
    [starTexture, light]
  );
  useEffect(() => () => material.dispose(), [material]);

  useFrame(({ clock, gl }, delta) => {
    material.uniforms.uPixelRatio.value = gl.getPixelRatio();
    const mx = size.width > 0 ? (mouse.x / size.width) * 2 - 1 : 0;
    const my = size.height > 0 ? -((mouse.y / size.height) * 2 - 1) : 0;
    const drift = material.uniforms.uDrift.value as THREE.Vector2;
    // Eased follow — no snapping when the cursor jumps
    const k = 1 - Math.exp(-delta * 4);
    drift.x += (mx * 1.2 + tilt.x * 2.0 - drift.x) * k;
    drift.y += (my * 1.2 + tilt.y * 2.0 - drift.y) * k;
    material.uniforms.uTime.value = clock.getElapsedTime();

    // Whirlpool follows the cursor with a little lag; it swells while the pointer moves
    const m = material.uniforms.uMouse.value as THREE.Vector2;
    const km = 1 - Math.exp(-delta * 7);
    m.x += (mx - m.x) * km;
    m.y += (my - m.y) * km;
    material.uniforms.uAspect.value = size.height > 0 ? size.width / size.height : 1;
    const active = mouse.inside ? (performance.now() - mouse.moved < 250 ? 1.6 : 0.55) : 0;
    material.uniforms.uPush.value += (active - material.uniforms.uPush.value) * (1 - Math.exp(-delta * 3));
  });

  return (
    <points material={material} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aSize" count={PARTICLE_COUNT} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-aOpacity" count={PARTICLE_COUNT} array={opacities} itemSize={1} />
        <bufferAttribute attach="attributes-aSeed" count={PARTICLE_COUNT} array={seeds} itemSize={1} />
      </bufferGeometry>
    </points>
  );
};

const HeroParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  // Mutable refs read inside the render loop — pointer moves never trigger React renders
  const mouse = useRef<Pointer>({ x: 0, y: 0, inside: false, moved: 0 }).current;
  const size = useRef<Size>({ width: 1, height: 1 }).current;
  const tilt = useRef<Vec2>({ x: 0, y: 0 }).current;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      size.width = el.clientWidth;
      size.height = el.clientHeight;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const onPointer = (x: number, y: number) => {
      const r = el.getBoundingClientRect();
      mouse.x = x - r.left;
      mouse.y = y - r.top;
      mouse.inside = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= r.width && mouse.y <= r.height;
      mouse.moved = performance.now();
    };
    const onMouse = (e: MouseEvent) => onPointer(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => e.touches[0] && onPointer(e.touches[0].clientX, e.touches[0].clientY);
    const onOrientation = (e: DeviceOrientationEvent) => {
      tilt.x = Math.max(-1, Math.min(1, (e.gamma || 0) / 45));
      tilt.y = Math.max(-1, Math.min(1, (e.beta || 0) / 45 - 0.5));
    };
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('deviceorientation', onOrientation);

    // Stop rendering entirely once the hero is off screen
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '100px' });
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('deviceorientation', onOrientation);
    };
  }, [mouse, size, tilt]);

  const hasWebGL = useMemo(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('webgl2'));
    } catch {
      return false;
    }
  }, []);

  if (!hasWebGL) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        frameloop={visible ? 'always' : 'never'}
      >
        <StarField mouse={mouse} size={size} tilt={tilt} light={theme === 'light'} />
      </Canvas>
    </div>
  );
};

export default HeroParticleField;
