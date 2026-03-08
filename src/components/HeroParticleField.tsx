import { useRef, useMemo, useCallback, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 3000;

interface StarFieldProps {
  mousePos: { x: number; y: number };
  containerSize: { width: number; height: number };
  tilt: { x: number; y: number };
}

const StarField = ({ mousePos, containerSize, tilt }: StarFieldProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, basePositions, sizes, opacities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const basePositions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const opacities = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Spread across a wide area to fill the hero
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      // Varied brightness — some stars are much brighter
      const brightness = Math.random();
      if (brightness > 0.95) {
        sizes[i] = 0.08 + Math.random() * 0.06; // Bright stars
        opacities[i] = 0.8 + Math.random() * 0.2;
      } else if (brightness > 0.8) {
        sizes[i] = 0.04 + Math.random() * 0.04; // Medium stars
        opacities[i] = 0.5 + Math.random() * 0.3;
      } else {
        sizes[i] = 0.015 + Math.random() * 0.025; // Dim stars
        opacities[i] = 0.15 + Math.random() * 0.25;
      }
    }

    return { positions, basePositions, sizes, opacities };
  }, []);

  // Star texture
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // 4-point star shape with glow
    const cx = 32, cy = 32;

    // Outer glow
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32);
    glow.addColorStop(0, 'rgba(255,255,255,1)');
    glow.addColorStop(0.1, 'rgba(255,255,255,0.8)');
    glow.addColorStop(0.3, 'rgba(200,220,255,0.3)');
    glow.addColorStop(0.6, 'rgba(100,160,255,0.08)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 64, 64);

    // Star cross flare
    ctx.globalCompositeOperation = 'lighter';
    for (let angle = 0; angle < 4; angle++) {
      const rad = (angle * Math.PI) / 2;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rad);
      const flare = ctx.createLinearGradient(0, 0, 28, 0);
      flare.addColorStop(0, 'rgba(255,255,255,0.9)');
      flare.addColorStop(0.3, 'rgba(200,220,255,0.3)');
      flare.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = flare;
      ctx.fillRect(0, -1.5, 28, 3);
      ctx.restore();
    }

    // Diagonal flares (fainter)
    for (let angle = 0; angle < 4; angle++) {
      const rad = (angle * Math.PI) / 2 + Math.PI / 4;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rad);
      const flare = ctx.createLinearGradient(0, 0, 16, 0);
      flare.addColorStop(0, 'rgba(255,255,255,0.4)');
      flare.addColorStop(0.5, 'rgba(180,210,255,0.1)');
      flare.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = flare;
      ctx.fillRect(0, -0.8, 16, 1.6);
      ctx.restore();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  // Custom shader material for per-particle opacity
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: starTexture },
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float aSize;
        attribute float aOpacity;
        varying float vOpacity;
        varying float vSize;
        void main() {
          vOpacity = aOpacity;
          vSize = aSize;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        varying float vOpacity;
        varying float vSize;
        void main() {
          vec4 texColor = texture2D(uTexture, gl_PointCoord);
          // Tint toward cool blue/cyan
          vec3 color = mix(vec3(0.6, 0.8, 1.0), vec3(1.0), vOpacity);
          gl_FragColor = vec4(color * texColor.rgb, texColor.a * vOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [starTexture]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const time = clock.getElapsedTime();

    // Normalize mouse to [-1, 1]
    const mx = containerSize.width > 0 ? (mousePos.x / containerSize.width) * 2 - 1 : 0;
    const my = containerSize.height > 0 ? -((mousePos.y / containerSize.height) * 2 - 1) : 0;

    // Combined drift from mouse + device tilt
    const driftX = mx * 1.2 + tilt.x * 2.0;
    const driftY = my * 1.2 + tilt.y * 2.0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];

      // Gentle parallax drift based on depth
      const depthFactor = (bz + 4) / 8; // 0 to 1
      const parallax = 0.3 + depthFactor * 0.7;

      pos[i * 3] = bx + driftX * parallax * 0.5;
      pos[i * 3 + 1] = by + driftY * parallax * 0.5;

      // Subtle twinkling via slight z oscillation
      pos[i * 3 + 2] = bz + Math.sin(time * (0.3 + depthFactor * 0.5) + i * 0.1) * 0.05;
    }

    // Update twinkling opacity
    const opAttr = geo.attributes.aOpacity.array as Float32Array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const baseOp = opacities[i];
      const twinkle = Math.sin(time * (1.0 + (i % 7) * 0.3) + i * 2.1) * 0.15;
      opAttr[i] = Math.max(0.05, baseOp + twinkle);
    }

    geo.attributes.position.needsUpdate = true;
    geo.attributes.aOpacity.needsUpdate = true;

    shaderMaterial.uniforms.uTime.value = time;
  });

  return (
    <points ref={pointsRef} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aSize" count={PARTICLE_COUNT} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-aOpacity" count={PARTICLE_COUNT} array={opacities} itemSize={1} />
      </bufferGeometry>
    </points>
  );
};

interface HeroParticleFieldProps {
  mousePos: { x: number; y: number };
}

const HeroParticleField = ({ mousePos }: HeroParticleFieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Device orientation for mobile tilt
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const x = (e.gamma || 0) / 45; // left/right tilt, normalized to ~[-1, 1]
      const y = (e.beta || 0) / 45;  // front/back tilt
      setTilt({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y - 0.5)) });
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  const getContainerSize = useCallback(() => {
    if (!containerRef.current) return { width: 1, height: 1 };
    return {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    };
  }, []);

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
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <StarField
          mousePos={mousePos}
          containerSize={getContainerSize()}
          tilt={tilt}
        />
      </Canvas>
    </div>
  );
};

export default HeroParticleField;
