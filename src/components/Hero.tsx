import { motion } from "motion/react";
import { Github, Mouse} from "lucide-react";
import { SOCIAL_LINKS } from "../constants";
import { FaBehance, FaMedium,FaLinkedin} from "react-icons/fa";

const iconMap = {
  Github: Github,
  Linkedin: FaLinkedin,
  Behance: FaBehance,
  Medium: FaMedium,
};

export function Hero() {
  return (
    <div className="text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative inline-block"
      >
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse" />
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase relative z-10">
          Thurunu YM
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="space-y-6"
      >
        <p className="text-xl md:text-2xl font-mono text-blue-400 tracking-widest uppercase">
          Aspiring Software Engineer  |  Debugging Life & Code
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4">
          {SOCIAL_LINKS.map((social, i) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-blue-500/50"
                title={social.name}
              >
                <Icon className="w-5 h-5 stroke-[1.5]" />
              </motion.a>
            );
          })}
        </div>
        
        <div className="flex flex-col items-center gap-2 text-sm font-mono text-gray-500 pt-4">
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{  duration: 3, delay: 4 }}
          >Entering Deep Space...
            
          </motion.p>
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, delay: 6.8 }}
          >
            Loading experience...
          </motion.p>
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat:Infinity,duration: 3, delay: 9.6 }}
          >
            Ready.
          </motion.p>
          
        </div>
      </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="fixed left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              >
                <Mouse className="w-6 h-6 text-blue-400 animate-bounce" />
                
              </motion.div>
    </div>
    
  );
}
