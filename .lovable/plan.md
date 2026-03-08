

## Three.js Particle Wave/Field in Hero Section

### What we'll build
A 3D particle field behind the hero text — hundreds of particles arranged in a wave pattern that gently undulates and responds subtly to mouse movement. The particles will use your portfolio's teal/cyan color scheme.

### Technical approach

**New dependencies:**
- `three@^0.160.0`
- `@react-three/fiber@^8.18.0`
- `@react-three/drei@^9.122.0`

**New file: `src/components/HeroParticleField.tsx`**
- A `<Canvas>` component with a custom particle system using `THREE.Points` and `THREE.BufferGeometry`
- ~800 particles arranged in a grid, with Y positions driven by a sine wave that animates over time via `useFrame`
- Mouse position (from the existing `handleHeroMouse`) passed as a uniform to subtly attract/repel nearby particles
- Teal/cyan colored points with size attenuation for depth
- Transparent background so hero text overlays cleanly

**Modified file: `src/pages/Index.tsx`**
- Import and place `<HeroParticleField>` as an absolute-positioned background layer inside the hero section
- Pass mouse position to the component
- Keep existing radial gradient and grid overlays as complementary layers

**Fallback:** Wrap in the existing WebGL guard pattern so non-WebGL browsers get the current CSS background instead.

### Visual result
A subtle, flowing ocean of glowing teal particles behind your name and title, gently rippling and responding to cursor movement — adding a premium, modern 3D feel to the hero.

