import { motion } from "motion/react";
import { EDUCATION } from "../constants";
import { GraduationCap, Sparkles, ChevronRight } from "lucide-react";

export function Education() {
  return (
    <div className="space-y-16 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-2 relative z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest">
          Stellar Journey
        </h2>
        <p className="text-blue-400 font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          Education Timeline
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* 🌌 Animated Vertical Line with Pulse */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-x-1/2 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            animate={{ y: ["-100%", "1000%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        </div>

        <div className="space-y-20">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 0
                  ? "md:flex-row-reverse text-left md:text-right"
                  : "text-left"
              }`}
            >
              {/* 🪐 Pulsing Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 w-5 h-5 bg-blue-500 rounded-full -translate-x-1/2 border-4 border-black z-20"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(59,130,246,0.5)",
                    "0 0 30px rgba(59,130,246,1)",
                    "0 0 10px rgba(59,130,246,0.5)",
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
              />

              {/* 🌠 Floating Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full md:w-1/2 pl-10 md:pl-0 md:px-16"
              >
                <div className="p-8 bg-blue-900/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-500">
                  
                  {/* ✨ Dynamic Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-700" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-3xl rounded-full group-hover:bg-blue-500/15 transition-all duration-700" />

                  {/* Content */}
                  <div
                    className={`relative z-10 flex items-center gap-4 text-blue-400 mb-4 ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="p-2 bg-blue-500/20 rounded-xl border border-blue-500/30 group-hover:rotate-12 transition-transform duration-500">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs tracking-widest uppercase font-bold">
                      {edu.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-blue-100 transition-colors">
                    {edu.institution}
                  </h3>

                  <div className={`flex items-start gap-2 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <ChevronRight className={`w-4 h-4 text-blue-500 mt-1 shrink-0 ${i % 2 === 0 ? "rotate-180" : ""}`} />
                    <p className="text-sm text-gray-400 font-mono italic leading-relaxed">
                      {edu.degree}
                    </p>
                  </div>

                  {/* 🌌 Subtle Internal Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        animate={{
                          y: [0, -40],
                          x: [0, (j - 2) * 10],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        style={{
                          bottom: "10%",
                          left: `${20 + j * 15}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
