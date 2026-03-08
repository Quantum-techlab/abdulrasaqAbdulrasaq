
## Light Mode: 3D Geometric Mesh Animation

### Overview
Create a clean, slowly morphing wireframe polygon network for the light mode hero — a sophisticated contrast to the dark mode star field. The mesh will feature soft gray/teal interconnected nodes that rotate and respond to cursor/device tilt.

### Technical Approach

**New component: `src/components/HeroGeometricMesh.tsx`**
- 3D wireframe icosahedron mesh using `THREE.IcosahedronGeometry` with `THREE.EdgesGeometry` or `THREE.LineSegments`
- ~150-200 vertices connected by lines, creating a clean geometric network
- Soft gray-blue/teal stroke colors (matching light mode palette)
- Slow continuous rotation on Y-axis
- Mouse/tilt reactivity: mesh tilts slightly toward cursor position
- Transparent background for layering over hero content

**Modify `src/components/HeroParticleField.tsx` (or create wrapper)**
- Accept `theme` prop from `useTheme()` context
- Conditionally render:
  - **Dark mode** → Current star field (3000 particles)
  - **Light mode** → New geometric mesh component
- Smooth transition when theme switches

**Modify `src/pages/Index.tsx`**
- Pass theme to the hero background component
- Existing radial gradient and grid overlays remain as complementary layers

### Visual Result
In light mode: A clean, minimalist rotating wireframe polyhedron network behind the hero text — modern, professional, and contrasting beautifully with the immersive star field in dark mode.
