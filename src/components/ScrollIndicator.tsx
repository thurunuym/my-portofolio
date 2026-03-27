import { motion, useScroll, useTransform } from "motion/react";
import { Mouse } from "lucide-react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Fade out after first section (hero) is scrolled past
  const opacity = useTransform(scrollYProgress, [0, 0.014, 0.2], [1, 0, 0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      style={{ opacity }}
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
    >
      <Mouse className="w-6 h-6 text-blue-400 animate-bounce" />
      <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
        Scroll Down to Explore
      </p>
    </motion.div>
  );
}
