import { motion } from "motion/react";
import { User } from "lucide-react";

export function Introduction() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="inline-flex p-4 bg-blue-500/10 rounded-full border border-blue-500/20"
      >
        <User className="w-8 h-8 text-blue-400" />
      </motion.div>

      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-white uppercase tracking-widest"
        >
          Briefing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 leading-relaxed font-mono"
        >
          <span>-On a journey through the ever expanding universe of technology-</span>
          <br />
          A developer with a creative mindset, focused on building scalable, high performance applications. Currently exploring the vast space of full-stack development, cloud technologies, and user experience. I enjoy bringing ideas to life through code.
        </motion.p>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />
    </div>
  );
}
