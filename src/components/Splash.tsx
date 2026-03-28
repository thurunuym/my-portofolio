import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { Mouse } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useState } from "react";

export function Splash() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest < 120);
  });

  const opacity = useSpring(useTransform(scrollY, [0, 40, 120], [1, 0.82, 0]), {
    stiffness: 110,
    damping: 22,
  });
  const scale = useSpring(useTransform(scrollY, [0, 120], [1, 1.04]), {
    stiffness: 110,
    damping: 24,
  });
  const y = useSpring(useTransform(scrollY, [0, 120], [0, -20]), {
    stiffness: 110,
    damping: 24,
  });
  const backgroundOpacity = useTransform(scrollY, [0, 60, 140], [1, 0.75, 0]);
  const titleOpacity = useTransform(scrollY, [0, 45, 120], [1, 0.9, 0]);
  const titleY = useTransform(scrollY, [0, 120], [0, -12]);
  const buttonOpacity = useTransform(scrollY, [0, 25, 75], [1, 0.65, 0]);
  const buttonY = useTransform(scrollY, [0, 75], [0, 10]);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      style={{ opacity, scale, y }}
      className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      {/* 3D Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: backgroundOpacity }}
      >
        <Canvas camera={{ position: [0, 0, 10] }}>
          {/* Lighting is crucial for realistic 3D objects */}
          <ambientLight intensity={0.1} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />

          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

          {/* Planet 1: Blue Gas Giant with Ring */}
          <mesh position={[8, 4, -15]}>
            <sphereGeometry args={[4, 64, 64]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.5} metalness={0.2} />
          </mesh>
          {/* Planetary Ring */}
          <mesh position={[8, 4, -15]} rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[6, 0.15, 16, 100]} />
            <meshStandardMaterial color="#60a5fa" roughness={0.6} opacity={0.8} transparent />
          </mesh>

          {/* Planet 2: Distant Red/Orange Planet */}
          <mesh position={[-6, -3, -10]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="#c2410c" roughness={0.8} />
          </mesh>
        </Canvas>
      </motion.div>

      {/* Main Text Content */}
      <div className="relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ opacity: titleOpacity, y: titleY }}
          className="space-y-4 text-center"
        >
          <h1 className="text-6xl md:text-7xl font-black text-white uppercase tracking-widest drop-shadow-lg">
            Welcome
          </h1>
          <p className="text-lg text-blue-400 font-mono tracking-widest drop-shadow-md">
            To My Digital Universe
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Button (Now cleanly anchored to the viewport bottom) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity: buttonOpacity, y: buttonY }}
        className="pointer-events-auto absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Mouse className="w-6 h-6 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xs text-blue-400 font-mono whitespace-nowrap"
        >
          Scroll down to proceed
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
