import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ReactNode, useState } from "react";

interface SectionProps {
  children: ReactNode;
  index: number;
  total: number;
  isStatic?: boolean;
  fullBleed?: boolean;
}

export function Section({
  children,
  index,
  total,
  isStatic = false,
  fullBleed = false,
}: SectionProps) {
  const { scrollYProgress } = useScroll();
  const [isInteractive, setIsInteractive] = useState(index === 0);

  const start = index / total;
  const end = (index + 1) / total;
  const startTrigger = Math.max(0, start - 0.08);
  const endTrigger = Math.min(1, end + 0.08);

  const fadeInEnd = start + (end - start) * 0.2;
  const fadeOutStart = start + (end - start) * 0.75;

  const opacityRaw = useTransform(
    scrollYProgress,
    [startTrigger, fadeInEnd, fadeOutStart, endTrigger],
    [0, 1, 0, 0]
  );
  const opacity = useSpring(opacityRaw, { stiffness: 100, damping: 25 });

  const scaleRaw = useTransform(
    scrollYProgress,
    [startTrigger, fadeInEnd, endTrigger],
    isStatic ? [1, 1, 1] : [0.1, 1.2, 1.5]
  );
  const scale = useSpring(scaleRaw, { stiffness: 20, damping: 5 });

  const yRaw = useTransform(
    scrollYProgress,
    [startTrigger, fadeInEnd, endTrigger],
    isStatic ? [0, 0, 0] : [30, 0, -30]
  );
  const y = useSpring(yRaw, { stiffness: 70, damping: 25 });

  const interactionWindow = useTransform(
    scrollYProgress,
    [startTrigger, fadeInEnd, fadeOutStart, endTrigger],
    [0, 1, 1, 0]
  );

  useMotionValueEvent(interactionWindow, "change", (latest) => {
    setIsInteractive(latest > 0.15);
  });

  return (
    <motion.section
      style={{ opacity, scale, y }}
      className={`fixed inset-0 flex items-center justify-center ${
        isInteractive ? "pointer-events-auto z-20" : "pointer-events-none z-0"
      }`}
    >
      <div
        className={`w-full h-full flex flex-col justify-center ${
          fullBleed ? "max-w-none px-0" : "max-w-4xl px-6"
        }`}
      >
        {children}
      </div>
    </motion.section>
  );
}
