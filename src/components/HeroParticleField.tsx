import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 800;
const GRID_SIZE = 28; // ~28x28 grid

interface ParticleWaveProps {
  mousePos: { x: number; y: number };
  containerSize: { width: number; height: number };
}

const ParticleWave = ({ mousePos, containerSize }: ParticleWaveProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const { positions, basePositions } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const basePositions = new Float32Array(PARTICLE_COUNT * 3);
    const cols = GRID_SIZE;
    const rows = Math.ceil(PARTICLE_COUNT / cols);
    const spacingX = 12 / cols;
    const spacingZ = 8 / rows;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = (col - cols / 2) * spacingX + (Math.random() - 0.5) * 0.15;
      const z = (row - rows / 2) * spacingZ + (Math.random() - 0.5) * 0.15;
      const y = 0;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;
    }

    return { positions, basePositions };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const time = clock.getElapsedTime();

    // Normalize mouse to [-1, 1]
    const mx = containerSize.width > 0 ? (mousePos.x / containerSize.width) * 2 - 1 : 0;
    const my = containerSize.height > 0 ? -((mousePos.y / containerSize.height) * 2 - 1) : 0;

    // Map mouse to world-ish coords
    const mouseWorldX = mx * 6;
    const mouseWorldZ = my * 4;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = basePositions[i * 3];
      const bz = basePositions[i * 3 + 2];

      // Sine wave
      const waveY =
        Math.sin(bx * 0.8 + time * 0.6) * 0.3 +
        Math.sin(bz * 1.2 + time * 0.4) * 0.2 +
        Math.cos((bx + bz) * 0.5 + time * 0.3) * 0.15;

      // Mouse influence
      const dx = bx - mouseWorldX;
      const dz = bz - mouseWorldZ;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const mouseInfluence = Math.max(0, 1 - dist / 3) * 0.6;

      pos[i * 3 + 1] = waveY + mouseInfluence;
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} rotation={[0.5, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.06}
        color="#58A6FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

interface HeroParticleFieldProps {
  mousePos: { x: number; y: number };
}

const HeroParticleField = ({ mousePos }: HeroParticleFieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getContainerSize = useCallback(() => {
    if (!containerRef.current) return { width: 1, height: 1 };
    return {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    };
  }, []);

  // Check for WebGL support
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
        camera={{ position: [0, 3, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <ParticleWave
          mousePos={mousePos}
          containerSize={getContainerSize()}
        />
      </Canvas>
    </div>
  );
};

export default HeroParticleField;
