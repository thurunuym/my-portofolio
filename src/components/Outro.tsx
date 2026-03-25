import { motion } from "motion/react";
import { Home, Sparkles as SparklesIcon } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  Float,
  Stars as DreiStars,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function SpiralGalaxy() {
  const pointsRef = useRef<THREE.Points>(null);
  const dustRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes, dustPositions, dustColors, dustSizes } =
    useMemo(() => {
      const count = 50000;
      const dustCount = 300;

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);

      const dustPositions = new Float32Array(dustCount * 3);
      const dustColors = new Float32Array(dustCount * 3);
      const dustSizes = new Float32Array(dustCount);

      const branches = 3;
      const radius = 15;
      const spin = 1.5;
      const randomness = 0.3;
      const randomnessPower = 3;

      const colorInside = new THREE.Color("#3b82f6");
      const colorOutside = new THREE.Color("#1e3a8a");

      // Stars
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Position - use power to pack stars near center
        const r = Math.pow(Math.random(), 2) * (radius * 0.7);
        const spinAngle = r * spin;
        const branchAngle = ((i % branches) / branches) * Math.PI * 2;

        // Randomness decreases near center for a tighter core
        const currentRandomness = randomness * (r / radius + 0.2);
        const randomX =
          Math.pow(Math.random(), randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          currentRandomness *
          r;
        const randomY =
          Math.pow(Math.random(), randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          currentRandomness *
          r;
        const randomZ =
          Math.pow(Math.random(), randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          currentRandomness *
          r;

        positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
        positions[i3 + 1] = randomY * 0.3; // Very flat
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

        // Color
        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, r / radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        // Size
        sizes[i] = Math.random();
      }

      // Dust
      for (let i = 0; i < dustCount; i++) {
        const i3 = i * 3;
        const r = Math.pow(Math.random(), 1.2) * radius;
        const spinAngle = r * spin;
        const branchAngle = ((i % branches) / branches) * Math.PI * 2;

        const currentRandomness = randomness * 0.8;
        const randomX =
          Math.pow(Math.random(), 2) *
          (Math.random() < 0.5 ? 1 : -1) *
          currentRandomness *
          r;
        const randomY =
          Math.pow(Math.random(), 2) *
          (Math.random() < 0.5 ? 1 : -1) *
          currentRandomness *
          r;
        const randomZ =
          Math.pow(Math.random(), 2) *
          (Math.random() < 0.5 ? 1 : -1) *
          currentRandomness *
          r;

        dustPositions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
        dustPositions[i3 + 1] = randomY * 0.5;
        dustPositions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, r / radius);
        dustColors[i3] = mixedColor.r;
        dustColors[i3 + 1] = mixedColor.g;
        dustColors[i3 + 2] = mixedColor.b;

        dustSizes[i] = Math.random() * 2;
      }

      return { positions, colors, sizes, dustPositions, dustColors, dustSizes };
    }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
    }
    if (dustRef.current) {
      dustRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
      {/* 🌟 The Spiral Arms (Stars) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
          transparent
          opacity={1}
        />
      </points>
      {/* ☁️ Cosmic Dust */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={dustPositions.length / 3}
            array={dustPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={dustColors.length / 3}
            array={dustColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.2}
        />
      </points>
      {/* ✨ Ambient Stars in the background */}
      <DreiStars
        radius={80}
        depth={40}
        count={800}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />{" "}
    </group>
  );
}

export function Outro() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* 🌌 3D Spiral Galaxy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          gl={{ antialias: true }}
          camera={{ position: [0, 5, 15], fov: 45 }}
        >
          <Suspense fallback={null}>
            <SpiralGalaxy />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* 📜 Poetic Phrase */}
      <div className="relative z-20 text-center space-y-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
            <div>
              <SparklesIcon className="w-10 h-10 text-blue-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-space font-light text-white tracking-[0.1em] leading-tight uppercase drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            "Some journeys <br />
            <span className="font-bold text-blue-400">echo</span> through
            space."
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mt-10" />{" "}
        </motion.div>

        {/* 🏠 Back to Base Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="pt-16"
        >
          <button
            onClick={scrollToTop}
            className="group relative px-12 py-6 bg-transparent border border-blue-500/50 text-blue-400 font-space font-bold tracking-[0.4em] uppercase overflow-hidden transition-all hover:border-blue-400 hover:text-white"
          >
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative flex items-center gap-4">
              Back to Base{" "}
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* 🛰️ Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10 opacity-80" />
    </div>
  );
}
