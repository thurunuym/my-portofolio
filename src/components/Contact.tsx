import { motion, AnimatePresence } from "motion/react";
import { Send, Github, Radio, Activity, Cpu, Zap, ShieldCheck, Terminal, AlertCircle } from "lucide-react";
import { FaBehance, FaMedium, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { SOCIAL_LINKS } from "../constants";

const iconMap = {
  Github: Github,
  Linkedin: FaLinkedin,
  Behance: FaBehance,
  Medium: FaMedium,
};

export function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      // For development: use explicit port. For production: use same origin
      const apiUrl = process.env.NODE_ENV === "production" 
        ? `${window.location.origin}/api/contact`
        : "http://localhost:5000/api/contact";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Transmission Failed");

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 8000);
    } catch (err) {
      setError("Signal Lost: Unable to reach base station.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-16 relative">
      {/* Cockpit Header */}
      <div className="text-center space-y-4 relative">
        <div className="flex items-center justify-center gap-4 mb-2">
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-px w-24 bg-blue-500/50" 
          />
          <Terminal className="w-5 h-5 text-blue-400" />
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-px w-24 bg-blue-500/50" 
          />
        </div>
        <h2 className="text-5xl font-black text-white uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          Bridge Terminal
        </h2>
        <p className="text-blue-400 font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-2">
          <Activity className="w-4 h-4 animate-pulse" />
          Reach Out
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Left Panel: Comms Hub */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-blue-950/20 border-2 border-blue-500/30 rounded-[2rem] relative overflow-hidden group shadow-[inset_0_0_50px_rgba(59,130,246,0.1)]">
            {/* Cockpit Detail: Glowing Corner */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-blue-400/50 rounded-tl-3xl" />
            
            <div className="flex items-center gap-3 text-blue-400 mb-4 border-b border-blue-500/20 pb-4">
              <Radio className="w-6 h-6 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Awaiting Signal Input...</span>
            </div>
            
            <p className="text-[9px] font-mono text-blue-400/60 uppercase tracking-widest mb-3 pl-1">
               LET'S CONNECT
            </p>
            
            <div className="space-y-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap] || Github;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 8, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className="flex items-center justify-between p-2 bg-black/40 border border-blue-500/10 rounded-xl group transition-all hover:border-blue-500/50"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="font-mono text-xs text-gray-300 group-hover:text-white transition-colors uppercase tracking-wider">
                        {social.name}
                      </span>
                    </div>
                    <Zap className="w-3 h-3 text-blue-500/0 group-hover:text-blue-500/100 transition-all" />
                  </motion.a>
                );
              })}
            </div>

            {/* Status Indicators */}
            <div className="mt-8 pt-6 border-t border-blue-500/20 flex justify-between items-center px-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div className="w-2 h-2 bg-blue-500/30 rounded-full" />
              </div>
              <span className="text-[10px] font-mono text-blue-400/50 uppercase tracking-tighter">
                System: Optimal
              </span>
            </div>
          </div>

          {/* Secondary Panel: Hardware Status */}
          <div className="p-6 bg-black/40 border border-white/5 rounded-3xl flex items-center gap-6">
            <Cpu className="w-8 h-8 text-blue-500/50" />
            <div className="space-y-1">
              <div className="h-1 w-32 bg-blue-900/50 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["20%", "80%", "40%"] }} 
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="h-full bg-blue-500" 
                />
              </div>
              <p className="text-[8px] font-mono text-gray-600 uppercase">Processing...</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Main Input Console */}
        <div className="lg:col-span-8 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur opacity-25 rounded-[2.5rem]" />
          
          <form 
            onSubmit={handleSubmit} 
            className="relative p-10 bg-black/60 backdrop-blur-2xl border-2 border-blue-500/20 rounded-[2.5rem] space-y-6 overflow-hidden"
          >
            {/* Scanning Line Effect */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-blue-400/20 z-0 pointer-events-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-mono text-blue-400/70 uppercase tracking-widest font-bold">Identity</label>
                  <ShieldCheck className="w-3 h-3 text-blue-500/30" />
                </div>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-blue-950/20 border border-blue-500/20 rounded-2xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-700"
                  placeholder="[YOUR_NAME_HERE]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-mono text-blue-400/70 uppercase tracking-widest font-bold">Frequency</label>
                  <Zap className="w-3 h-3 text-blue-500/30" />
                </div>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-blue-950/20 border border-blue-500/20 rounded-2xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-700"
                  placeholder="[YOUR_EMAIL_HERE]"
                />
              </div>
            </div>

            <div className="space-y-2 relative z-10">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-mono text-blue-400/70 uppercase tracking-widest font-bold">Data Transmission</label>
                <Terminal className="w-3 h-3 text-blue-500/30" />
              </div>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-blue-950/20 border border-blue-500/20 rounded-2xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none placeholder:text-gray-700"
                placeholder="[YOUR_MESSAGE_HERE...]"
              />
            </div>

            <div className="pt-4 relative z-10">
              <button
                type="submit"
                disabled={isSending || isSent}
                className="group relative w-full py-5 bg-blue-600/10 border-2 border-blue-500/40 rounded-2xl font-black text-blue-400 uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-blue-600/20 hover:border-blue-400 active:scale-[0.98] disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-3">
                  {isSending ? (
                    <>
                      <Activity className="w-5 h-5 animate-spin" />
                      Encrypting...
                    </>
                  ) : isSent ? (
                    "Transmission Confirmed"
                  ) : (
                    <>
                      Execute Dispatch
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 font-mono text-[10px] justify-center mt-4"
              >
                <AlertCircle className="w-3 h-3" />
                {error}
              </motion.div>
            )}
          </form>

          {/* Success Overlay */}
          <AnimatePresence>
            {isSent && (
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-blue-950/40 rounded-[2.5rem] z-30"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center space-y-6 p-8 bg-black/80 border-2 border-blue-400 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                >
                  <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-blue-400 animate-pulse">
                    <Send className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Signal Dispatched</h3>
                    <p className="text-blue-400 font-mono text-xs uppercase tracking-widest">
                      Destination: thurunuym@gmail.com
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm max-w-[250px] mx-auto">
                    Your transmission has been successfully encrypted and sent through the deep space relay.
                  </p>
                  <div className="pt-4">
                    <div className="h-1 w-full bg-blue-900/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 8, ease: "linear" }}
                        className="h-full bg-blue-400" 
                      />
                    </div>
                    <p className="text-[8px] font-mono text-blue-400/50 mt-2 uppercase">Closing Link in 8s...</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
