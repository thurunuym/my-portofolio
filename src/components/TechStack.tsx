import { motion } from "motion/react";
import { TECH_STACK } from "../constants";
import { TechGlobe } from "./TechGlobe";

export function TechStack() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest">Spaceship</h2>
        <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">Tech Stack</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Main Stack 3D Globe */}
        <div className="relative mx-auto" style={{width: "450px", height: "450px"}}>
          <TechGlobe />
        </div>

        {/* Full Tech Stack Grid */}
        <div className="grid grid-cols-1 gap-6">
          {TECH_STACK.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-xs text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
