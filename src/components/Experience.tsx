import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCE } from "../constants";
import { Briefcase, Terminal, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-12 min-h-[600px] flex flex-col justify-center">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest">
          Space Station
        </h2>
        <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">
          Experience
        </p>
      </div>

      {/* 🌌 DESKTOP FLOATING LAYOUT */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[600px] hidden lg:block">
        {EXPERIENCE.map((exp, i) => {

          // 🌌 Wider horizontal spread
          const positions = [
            { top: "5%", left: "2%" },
            { top: "35%", left: "30%" },
            { top: "20%", left: "75%" },
            
          ];

          const pos = positions[i % positions.length];

          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ zIndex: 50 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
              }}
              className="group"
            >
              {/* 🌌 FLOATING MOTION WRAPPER */}
              <motion.div
                animate={{
                  x: [0, 12, -10, 0],
                  y: [0, -14, 8, 0],
                  rotate: [0, 1.2, -1, 0],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* 🪐 MAIN CARD */}
                <motion.div
                  layout
                  className={`p-6 bg-blue-900/10 backdrop-blur-xl border border-blue-500/20 rounded-[2rem] transition-all duration-500 cursor-default
                    ${
                      hoveredIndex === i
                        ? "w-[460px] bg-blue-900/30 border-blue-500/50 shadow-[0_0_60px_rgba(59,130,246,0.25)]"
                        : "w-[300px]"
                    }
                  `}
                >
                  {/* HEADER */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 shrink-0">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>

                    <div className="space-y-1 overflow-hidden">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {exp.company}
                      </h3>

                      <p className="text-blue-400 font-mono text-[13px] uppercase tracking-widest">
                        {exp.role}
                      </p>

                      <div className="flex items-center gap-2 text-gray-400 text-[13px] font-mono mt-1">
                        <Clock className="w-3 h-3" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* EXPANDABLE CONTENT */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 pt-5 border-t border-white/10 space-y-4"
                      >
                        <div className="flex items-center gap-2 text-blue-400 font-mono text-[11px] uppercase tracking-widest">
                          <Terminal className="w-3 h-3" />
                          <span>Mission Contributions</span>
                        </div>

                        <ul className="space-y-3">
                          {exp.contributions.map((contribution, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.08 }}
                              className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                            >
                              <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-[2px]" />
                              <span className="group-hover:text-white transition-colors">
                                {contribution}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* 🪐 ORBIT RING */}
              <div className="absolute -inset-6 border border-blue-500/5 rounded-[2.5rem] -z-10 animate-[spin_30s_linear_infinite] group-hover:border-blue-500/20 transition-colors" />
            </motion.div>
          );
        })}

        {/* ✨ SPACE PARTICLES */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 📱 MOBILE VERSION */}
      <div className="lg:hidden space-y-6 px-4">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-blue-900/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <Briefcase className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-blue-400 font-mono text-[10px] uppercase tracking-widest">
                  {exp.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
              <Clock className="w-3 h-3" />
              <span>{exp.duration}</span>
            </div>

            <ul className="space-y-2 pt-4 border-t border-white/5">
              {exp.contributions.map((contribution, j) => (
                <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-[2px]" />
                  {contribution}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}