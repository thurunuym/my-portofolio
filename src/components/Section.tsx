import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  index: number;
  total: number;
}

export function Section({ children, index, total }: SectionProps) {
  const { scrollYProgress } = useScroll();

  // 📌 Each section gets its own scroll range
  const start = index / total;
  const end = (index + 1) / total;

  // 📌 Extend range slightly for smoother transitions
  const startTrigger = Math.max(0, start - 0.08);
  const endTrigger = Math.min(1, end + 0.08);

  // 📌 Create adaptive fade points (prevents overlap issues)
  const fadeInEnd = start + (end - start) * 0.2;
  const fadeOutStart = start + (end - start) * 0.75;

  // 🎯 OPACITY (clean fade in → hold → fade out)
  const opacityRaw = useTransform(
    scrollYProgress,
    [startTrigger, fadeInEnd, fadeOutStart, endTrigger],
    [0, 1, 0, 0]
  );

  const opacity = useSpring(opacityRaw, {
    stiffness: 100,
    damping: 25,
  });

  // 🎯 SCALE (slower, smoother zoom — no aggressive jump)
  const scaleRaw = useTransform(
    scrollYProgress,
    [startTrigger, fadeInEnd, endTrigger],
    [0.1, 1.2, 1.5]
  );

  const scale = useSpring(scaleRaw, {
    stiffness: 20,   // lower = slower zoom
    damping: 5,     // higher = smoother
  });

  // 🎯 Y MOVEMENT (gentle cinematic motion)
  const yRaw = useTransform(
    scrollYProgress,
    [startTrigger, fadeInEnd, endTrigger],
    [30, 0, -30]
  );

  const y = useSpring(yRaw, {
    stiffness: 70,
    damping: 25,
  });

  return (
    <motion.section
      style={{ opacity, scale, y }}
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-4xl px-6">
        {children}
      </div>
    </motion.section>
  );
}