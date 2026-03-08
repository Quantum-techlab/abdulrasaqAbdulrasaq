import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GeometricMeshProps {
  mousePos: { x: number; y: number };
  containerSize: { width: number; height: number };
  tilt: { x: number; y: number };
}

const GeometricMesh = ({ mousePos, containerSize, tilt }: GeometricMeshProps) => {
  const groupRef = useRef<THREE.Group>(null);

  // Create multiple wireframe shapes
  const { meshes } = useMemo(() => {
    const meshes: { geometry: THREE.EdgesGeometry; position: [number, number, number]; scale: number; rotSpeed: [number, number, number] }[] = [];

    // Central large icosahedron
    const ico1 = new THREE.IcosahedronGeometry(2.5, 1);
    meshes.push({
      geometry: new THREE.EdgesGeometry(ico1),
      position: [0, 0, 0],
      scale: 1,
      rotSpeed: [0.08, 0.12, 0.05],
    });

    // Smaller orbiting shapes
    const ico2 = new THREE.IcosahedronGeometry(1.2, 1);
    meshes.push({
      geometry: new THREE.EdgesGeometry(ico2),
      position: [4, 1.5, -2],
      scale: 1,
      rotSpeed: [0.15, 0.1, 0.08],
    });

    const oct = new THREE.OctahedronGeometry(0.8, 0);
    meshes.push({
      geometry: new THREE.EdgesGeometry(oct),
      position: [-3.5, -1.5, -1],
      scale: 1,
      rotSpeed: [0.12, 0.18, 0.06],
    });

    const dodec = new THREE.DodecahedronGeometry(1.0, 0);
    meshes.push({
      geometry: new THREE.EdgesGeometry(dodec),
      position: [-4, 2, -3],
      scale: 1,
      rotSpeed: [0.1, 0.08, 0.14],
    });

    const tet = new THREE.TetrahedronGeometry(0.6, 0);
    meshes.push({
      geometry: new THREE.EdgesGeometry(tet),
      position: [3, -2, -1.5],
      scale: 1,
      rotSpeed: [0.2, 0.15, 0.1],
    });

    return { meshes };
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const time = clock.getElapsedTime();

    // Normalize mouse
    const mx = containerSize.width > 0 ? (mousePos.x / containerSize.width) * 2 - 1 : 0;
    const my = containerSize.height > 0 ? -((mousePos.y / containerSize.height) * 2 - 1) : 0;

    const driftX = mx * 0.3 + tilt.x * 0.5;
    const driftY = my * 0.3 + tilt.y * 0.5;

    // Tilt the whole group toward cursor
    groupRef.current.rotation.y = driftX * 0.4;
    groupRef.current.rotation.x = driftY * 0.3;

    // Rotate each child mesh
    groupRef.current.children.forEach((child, i) => {
      const m = meshes[i];
      if (m) {
        child.rotation.x = time * m.rotSpeed[0];
        child.rotation.y = time * m.rotSpeed[1];
        child.rotation.z = time * m.rotSpeed[2];
        // Gentle floating
        child.position.y = m.position[1] + Math.sin(time * 0.5 + i * 1.5) * 0.3;
      }
    });
  });

  // Soft teal/gray color matching light mode palette
  const lineColor = new THREE.Color('hsl(174, 35%, 65%)');
  const lineColorFaint = new THREE.Color('hsl(174, 25%, 75%)');

  return (
    <group ref={groupRef}>
      {meshes.map((m, i) => (
        <lineSegments
          key={i}
          geometry={m.geometry}
          position={m.position}
          scale={m.scale}
        >
          <lineBasicMaterial
            color={i === 0 ? lineColor : lineColorFaint}
            transparent
            opacity={i === 0 ? 0.4 : 0.25}
            linewidth={1}
          />
        </lineSegments>
      ))}
    </group>
  );
};

export default GeometricMesh;
