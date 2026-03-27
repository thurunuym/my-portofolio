import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../constants";
import { Github, ExternalLink, Play, X } from "lucide-react";
import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);

  // Slow rotation logic using useFrame
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group>
      {/* Sun Light (simulating distant sunlight) */}
      <directionalLight position={[-5, 3, 5]} intensity={1.2} color="#ffffff" />
      {/* Ambient Light (soft light from space) */}
      <ambientLight intensity={0.1} />

      {/* Earth Sphere - Simple gradient implementation */}
      <mesh ref={earthRef} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#1a4d7a"
          emissive="#0a1a33"
          emissiveIntensity={0.3}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Clouds Sphere (slightly larger, transparent) */}
      <mesh ref={cloudsRef} scale={2.51}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.2}
          depthWrite={false}
          metalness={0}
          roughness={0.8}
        />
      </mesh>

      {/* Atmospheric Glow (simple halo) */}
      <mesh scale={2.6}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#a0d8f1"
          transparent={true}
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function OrbitalProject({ project, index, totalProjects, onSelect }) {
  // Calculate position in a large orbit around Earth
  const orbitRadius = 15;
  const angle = (index / totalProjects) * Math.PI * 2;
  const position = useMemo(() => {
    return [
      Math.cos(angle) * orbitRadius,
      Math.sin(angle) * orbitRadius * 0.5, // Slightly elliptical
      0, // Keeping them roughly on a plane for now
    ];
  }, [angle, orbitRadius]);

  return (
    <Html
      position={position as [number, number, number]}
      distanceFactor={10} // Scales based on camera distance
      transform // Allows CSS transforms
      occlude // Simple occlusion by the Earth sphere
      style={{
        transition: "all 0.5s ease-out",
        opacity: 0,
        transform: "translateZ(-50px) rotateY(20deg)", // Initial state
      }}
      className="orbital-project-wrapper"
    >
      <motion.div
        whileHover={{ scale: 1.1, translateZ: 20 }}
        className="relative group cursor-pointer"
        onClick={onSelect}
        onViewportEnter={(entry) => {
          if (entry.target.parentElement) {
            entry.target.parentElement.style.opacity = "1";
            entry.target.parentElement.style.transform = "translateZ(0) rotateY(0deg)";
          }
        }}
      >
        {/* Sci-Fi Style Project Card */}
        <div className="p-6 bg-gray-950/90 border border-cyan-900/50 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-sm relative overflow-hidden group-hover:border-cyan-500/80 transition-all duration-300" style={{width: "280px"}}>
          {/* Faux scanlines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] pointer-events-none opacity-30" style={{backgroundSize: "100% 4px"}}></div>

          <div className="space-y-4 relative z-10">
            {/* Project ID / Sci-Fi marker */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-900">
                Unit {index + 1}
              </span>
              <div
                className="w-4 h-4 rounded-full shadow-[0_0_15px_currentColor]"
                style={{ color: project.color }}
              />
            </div>

            <h3 className="text-xl font-extrabold text-white uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>

            <p className="text-gray-400 text-xs font-mono leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono text-cyan-500 uppercase tracking-wider bg-cyan-950/30 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-[9px] font-mono text-gray-500">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Animated corner highlights */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-500"></div>
        </div>
      </motion.div>
    </Html>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 30], fov: 60 }}>
          {/* Deep Space Background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* The Realistic Earth */}
          <Earth />

          {/* Floating Project Elements in Orbit */}
          {PROJECTS.map((project, i) => (
            <OrbitalProject
              key={project.name}
              project={project}
              index={i}
              totalProjects={PROJECTS.length}
              onSelect={() => setSelectedProject(project)}
            />
          ))}

          {/* Camera controls for orbital feel */}
          <OrbitControls
  enablePan={false}
  enableZoom={false} // 🔥 disable scroll hijack
  autoRotate={true}
  autoRotateSpeed={0.3}
/>
        </Canvas>
      </div>

      {/* Overlay HTML Content (Titles, Instructions) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 pointer-events-none">
        <div className="text-center space-y-2 relative pointer-events-auto">
          <h2 className="text-5xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Planet Space
          </h2>
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase bg-black/30 inline-block px-4 py-1 rounded-full border border-cyan-900/50">
            Deployed Projects
          </p>
        </div>

        <div className="text-center text-gray-500 font-mono text-xs animate-pulse bg-black/50 inline-block px-6 py-2 rounded-full border border-gray-800 self-center">
          Rotate view to explore orbital elements 
        </div>
      </div>

      {/* Project Detail Modal (Remains the same structure) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-6 bg-black/85 backdrop-blur-xl pointer-events-auto"
            style={{ zIndex: 100 }}
            onClick={() => setSelectedProject(null)} // Close on background click
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-3xl bg-gray-950 border-2 border-cyan-900 rounded-3xl overflow-hidden relative shadow-[0_0_60px_rgba(6,182,212,0.2)]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-gray-900/80 rounded-full hover:bg-cyan-950 transition-all text-white z-20 border border-cyan-800"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                {/* Visual side (using the old gradient style for consistency inside modal) */}
                <div
                  className="h-48 md:h-auto md:col-span-2 flex items-center justify-center relative overflow-hidden p-8 border-b md:border-b-0 md:border-r border-cyan-900"
                  style={{
                    background: `radial-gradient(circle at center, ${selectedProject.color}15, #000 70%)`,
                  }}
                >
                  <div
                    className="w-40 h-40 rounded-full relative z-10 shadow-[inset_-15px_-15px_40px_rgba(0,0,0,0.6)]"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${selectedProject.color}, #000)`,
                      boxShadow: `0 0 50px ${selectedProject.color}66`,
                    }}
                  />
                  {/* Subtle sci-fi grid overlay inside visual area */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)]" style={{backgroundSize: "20px 20px"}}></div>
                </div>

                {/* Content side */}
                <div className="p-10 md:col-span-3 space-y-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-extrabold text-white uppercase tracking-tighter leading-none">
                        {selectedProject.name}
                      </h3>
                      <div className="flex flex-wrap gap-2.5 pt-1">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950 px-3 py-1 rounded-full border border-cyan-900"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed font-mono bg-gray-900/50 p-5 rounded-xl border border-gray-800">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-xs font-mono text-white hover:bg-gray-800 hover:border-gray-700 transition-all"
                      >
                        <Github className="w-4 h-4 text-gray-400" /> SOURCE_CODE
                      </a>
                    )}
                    {selectedProject.links.live && (
                      <a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-cyan-950 border border-cyan-900 rounded-xl text-xs font-mono text-cyan-300 hover:bg-cyan-900 hover:border-cyan-800 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      >
                        <ExternalLink className="w-4 h-4" /> LIVE_DEPLOYMENT
                      </a>
                    )}
                    {selectedProject.links.video && (
                      <a
                        href={selectedProject.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-purple-950 border border-purple-900 rounded-xl text-xs font-mono text-purple-300 hover:bg-purple-900 hover:border-purple-800 transition-all"
                      >
                        <Play className="w-4 h-4" /> SYSTEM_DEMO
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}