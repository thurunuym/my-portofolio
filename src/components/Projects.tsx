import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "motion/react";
import { PROJECTS } from "../constants";
import { Github, ExternalLink, Play, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group>
      <directionalLight position={[-5, 3, 5]} intensity={1.2} color="#ffffff" />
      <ambientLight intensity={0.1} />

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

      <mesh ref={cloudsRef} scale={2.51}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
          depthWrite={false}
          metalness={0}
          roughness={0.8}
        />
      </mesh>

      <mesh scale={2.6}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#a0d8f1"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

interface OrbitalProjectProps {
  index: number;
  onSelect: () => void;
  project: (typeof PROJECTS)[number];
  totalProjects: number;
}

function OrbitalProject({
  project,
  index,
  totalProjects,
  onSelect,
}: OrbitalProjectProps) {
  const orbitRadius = 15;
  const angle = (index / totalProjects) * Math.PI * 2;
  const position = useMemo(
    () =>
      [
        Math.cos(angle) * orbitRadius,
        Math.sin(angle) * orbitRadius * 0.5,
        0,
      ] as [number, number, number],
    [angle]
  );

  return (
    <Html
      position={position}
      distanceFactor={10}
      transform
      sprite
      occlude
      style={{
        transition: "all 0.5s ease-out",
        opacity: 0,
        transform: "translate3d(0, 24px, -40px)",
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
            entry.target.parentElement.style.transform = "translate3d(0, 0, 0)";
          }
        }}
      >
        <div
          className="relative overflow-hidden rounded-2xl border border-cyan-900/50 bg-gray-950/80 p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/80"
          style={{ width: "280px" }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
            style={{ backgroundSize: "100% 4px" }}
          />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-cyan-900 bg-cyan-950/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-600">
                Unit {index + 1}
              </span>
              <div
                className="h-4 w-4 rounded-full shadow-[0_0_15px_currentColor]"
                style={{ color: project.color }}
              />
            </div>

            <h3 className="text-xl font-extrabold uppercase tracking-tighter text-white transition-colors group-hover:text-cyan-400">
              {project.name}
            </h3>

            <p className="line-clamp-2 text-xs font-mono leading-relaxed text-gray-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-cyan-950/30 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-cyan-500"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-[9px] font-mono text-gray-500">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>

          <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-500/0 transition-all duration-500 group-hover:border-cyan-500" />
          <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-cyan-500/0 transition-all duration-500 group-hover:border-cyan-500" />
        </div>
      </motion.div>
    </Html>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);
  const { scrollYProgress } = useScroll();

  const sceneBlend = useSpring(
    useTransform(scrollYProgress, [0.57, 0.63, 0.72, 0.8], [0.35, 0.78, 1, 1]),
    { stiffness: 80, damping: 20 }
  );
  const veilOpacity = useSpring(
    useTransform(scrollYProgress, [0.57, 0.63, 0.72], [0.28, 0.12, 0.04]),
    { stiffness: 80, damping: 20 }
  );

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      <motion.div className="absolute inset-0 z-0" style={{ opacity: sceneBlend }}>
        <Canvas camera={{ position: [0, 5, 30], fov: 60 }}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <Earth />

          {PROJECTS.map((project, index) => (
            <OrbitalProject
              key={project.name}
              project={project}
              index={index}
              totalProjects={PROJECTS.length}
              onSelect={() => setSelectedProject(project)}
            />
          ))}

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: veilOpacity,
          background:
            "radial-gradient(circle at center, rgba(6, 24, 44, 0.18) 0%, rgba(2, 6, 23, 0.45) 45%, rgba(1, 2, 8, 0.82) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-12">
        <div className="pointer-events-auto relative space-y-2 text-center">
          <h2 className="text-5xl font-black uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Planet Space
          </h2>
          <p className="inline-block rounded-full border border-cyan-900/50 bg-black/20 px-4 py-1 font-mono text-sm uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
            Deployed Projects
          </p>
        </div>

        <div className="self-center rounded-full border border-gray-800 bg-black/30 px-6 py-2 text-center font-mono text-xs text-gray-400 backdrop-blur-sm">
          Rotate and click to explore orbital elements
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border-2 border-cyan-900 bg-gray-950 shadow-[0_0_60px_rgba(6,182,212,0.2)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 z-20 rounded-full border border-cyan-800 bg-gray-900/80 p-2 text-white transition-all hover:bg-cyan-950"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid h-full grid-cols-1 md:grid-cols-5">
                <div
                  className="relative flex h-48 items-center justify-center overflow-hidden border-b border-cyan-900 p-8 md:col-span-2 md:h-auto md:border-b-0 md:border-r"
                  style={{
                    background: `radial-gradient(circle at center, ${selectedProject.color}15, #000 70%)`,
                  }}
                >
                  <div
                    className="relative z-10 h-40 w-40 rounded-full shadow-[inset_-15px_-15px_40px_rgba(0,0,0,0.6)]"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${selectedProject.color}, #000)`,
                      boxShadow: `0 0 50px ${selectedProject.color}66`,
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)]"
                    style={{ backgroundSize: "20px 20px" }}
                  />
                </div>

                <div className="flex h-full flex-col justify-between space-y-8 p-10 md:col-span-3">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-extrabold uppercase leading-none tracking-tighter text-white">
                        {selectedProject.name}
                      </h3>
                      <div className="flex flex-wrap gap-2.5 pt-1">
                        {selectedProject.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-cyan-900 bg-cyan-950 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-400"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 font-mono text-sm leading-relaxed text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 border-t border-gray-800 pt-4">
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-xl border border-gray-800 bg-gray-900 px-5 py-2.5 font-mono text-xs text-white transition-all hover:border-gray-700 hover:bg-gray-800"
                      >
                        <Github className="h-4 w-4 text-gray-400" /> SOURCE_CODE
                      </a>
                    )}
                    {selectedProject.links.live && (
                      <a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-xl border border-cyan-900 bg-cyan-950 px-5 py-2.5 font-mono text-xs text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all hover:border-cyan-800 hover:bg-cyan-900"
                      >
                        <ExternalLink className="h-4 w-4" /> LIVE_DEPLOYMENT
                      </a>
                    )}
                    {selectedProject.links.video && (
                      <a
                        href={selectedProject.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-xl border border-purple-900 bg-purple-950 px-5 py-2.5 font-mono text-xs text-purple-300 transition-all hover:border-purple-800 hover:bg-purple-900"
                      >
                        <Play className="h-4 w-4" /> SYSTEM_DEMO
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
