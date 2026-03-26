import { motion } from "motion/react";
import { Home, Sparkles as SparklesIcon } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars as DreiStars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function SpiralGalaxy() {
  const pointsRef = useRef<THREE.Points>(null);

  // 📌 Generate a soft, realistic glowing star texture programmatically
  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.1, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  const { positions, colors, sizes } = useMemo(() => {
    const count = 150000; // Increased star count for density
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const branches = 4;
    const radius = 25;
    const spin = 1.2; // tighter spiral
    const randomnessPower = 3;

    // Realistic colors: Pale warm core -> Deep blue/purple edges
    const colorInside = new THREE.Color("#ffddaa"); 
    const colorOutside = new THREE.Color("#1b3984");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // 📌 Math.pow pushes the majority of stars toward the center to create a galactic bulge
      const r = Math.pow(Math.random(), 1.5) * radius;
      const spinAngle = r * spin;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;

      // 📌 Thicker core (Y axis randomness), flatter disk on the edges
      const isCore = r < 4;
      const randomness = isCore ? 1.5 : 0.8; 
      
      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * (isCore ? 2 : 0.3);
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

      // Color Mixing
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, r / radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      // Random sizes for depth
      sizes[i] = Math.random() * 1.5;
    }

    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    // 📌 Only a very slow, static rotation applied here
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group rotation={[Math.PI / 5, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
          <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
          transparent
          map={starTexture} // Replaces square pixels with soft glowing orbs
        />
      </points>

      {/* Ambient background stars */}
      <DreiStars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.2} />
    </group>
  );
}

export function Outro() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* 🌌 3D Spiral Galaxy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black">
        <Canvas gl={{ antialias: false, alpha: false }} camera={{ position: [0, 8, 20], fov: 45 }}>
          <Suspense fallback={null}>
            <SpiralGalaxy />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* 📜 Content */}
      <div className="relative z-20 text-center space-y-12 px-6 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
            <SparklesIcon className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-7xl font-space font-light text-white tracking-[0.1em] leading-tight uppercase drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            "Some journeys <br />
            <span className="font-bold text-blue-400">echo</span> through space."
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mt-10" />
        </motion.div>

        {/* 🏠 Back to Base Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="pt-16 flex justify-center"
        >
          <button
            onClick={scrollToTop}
            className="group relative px-12 py-6 bg-transparent border border-blue-500/50 text-blue-400 font-space font-bold tracking-[0.4em] uppercase overflow-hidden transition-all hover:border-blue-400 hover:text-white"
          >
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative flex items-center gap-4">
              Back to Base
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* 🛰️ Cinematic Overlay to blend text with background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none z-10" />
    </div>
  );
}