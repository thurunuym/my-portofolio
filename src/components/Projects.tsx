import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../constants";
import { Github, ExternalLink, Play, X } from "lucide-react";
import { useState, useRef } from "react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-12 h-full flex flex-col justify-center">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest">Sector 4: Planets</h2>
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">3D Project Space</p>
      </div>

      {/* 3D Scrollable Space */}
      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto pb-12 px-12 no-scrollbar snap-x snap-mandatory perspective-1000"
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, rotateY: 45, translateZ: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, translateZ: 0 }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            className="flex-shrink-0 w-[300px] h-[400px] snap-center cursor-pointer group relative"
            onClick={() => setSelectedProject(project)}
          >
            {/* Planet Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-48 h-48 rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:shadow-[0_0_60px_rgba(0,0,0,0.5)]"
                style={{ 
                  background: `radial-gradient(circle at 30% 30%, ${project.color}, #000)`,
                  boxShadow: `0 0 40px ${project.color}44`
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-black text-white text-center px-4 drop-shadow-lg group-hover:scale-110 transition-transform">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Orbiting Ring */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite] opacity-20 group-hover:opacity-50 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-[2.5rem] overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all text-white z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div 
                  className="h-64 md:h-auto flex items-center justify-center relative overflow-hidden"
                  style={{ background: `radial-gradient(circle at center, ${selectedProject.color}22, transparent)` }}
                >
                  <div 
                    className="w-40 h-40 rounded-full"
                    style={{ 
                      background: `radial-gradient(circle at 30% 30%, ${selectedProject.color}, #000)`,
                      boxShadow: `0 0 40px ${selectedProject.color}44`
                    }}
                  />
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{selectedProject.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">#{t}</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {selectedProject.links.github && (
                      <a href={selectedProject.links.github} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-white hover:bg-white/10 transition-all">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}
                    {selectedProject.links.live && (
                      <a href={selectedProject.links.live} className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-xs font-mono text-cyan-400 hover:bg-cyan-500/30 transition-all">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {selectedProject.links.video && (
                      <a href={selectedProject.links.video} className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-xl text-xs font-mono text-purple-400 hover:bg-purple-500/30 transition-all">
                        <Play className="w-4 h-4" /> Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center text-gray-500 font-mono text-xs animate-pulse">
        Scroll horizontally to explore planets
      </div>
    </div>
  );
}
