/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Wormhole } from "./components/Wormhole";
import { Section } from "./components/Section";
import { Splash } from "./components/Splash";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Outro } from "./components/Outro";
import { Loader } from "@react-three/drei";

function SectionParticle({ index, total }: { index: number; total: number }) {
  const { scrollYProgress } = useScroll();

  const start = index / total;
  const end = (index + 1) / total;
  const mid = start + (end - start) * 0.5;
  const activationStart = Math.max(0, start - 0.04);
  const activationEnd = Math.min(1, end + 0.04);

  const fillOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [activationStart, start, mid, end, activationEnd],
      [0.18, 0.45, 1, 0.45, 0.18]
    ),
    { stiffness: 180, damping: 26 }
  );

  const scaleY = useSpring(
    useTransform(
      scrollYProgress,
      [activationStart, start, mid, end, activationEnd],
      [0.25, 0.55, 1, 0.55, 0.25]
    ),
    { stiffness: 180, damping: 24 }
  );

  const glowOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [activationStart, start, mid, end, activationEnd],
      [0, 0.25, 0.9, 0.25, 0]
    ),
    { stiffness: 180, damping: 24 }
  );

  return (
    <div className="relative h-8 w-1 overflow-visible rounded-full bg-white/10">
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400"
        style={{ opacity: glowOpacity, scaleY }}
      />
      <motion.div
        className="absolute inset-0 origin-center rounded-full bg-gradient-to-b from-sky-300 via-cyan-400 to-blue-500"
        style={{ opacity: fillOpacity, scaleY }}
      />
    </div>
  );
}

export default function App() {
  const TOTAL_SECTIONS = 8;

  useEffect(() => {
    // Smooth scroll polyfill or behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="relative bg-black min-h-[1600vh] overflow-x-hidden">
      {/* Splash Screen */}
      <Splash />

      {/* 3D Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <Wormhole />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay Layer */}
      <div className="relative z-10">
        <Section index={0} total={TOTAL_SECTIONS}>
          <Hero />
        </Section>

        <Section index={1} total={TOTAL_SECTIONS}>
          <Introduction />
        </Section>

        <Section index={2} total={TOTAL_SECTIONS}>
          <Education />
        </Section>

        <Section index={3} total={TOTAL_SECTIONS}>
          <Experience />
        </Section>

        <Section index={4} total={TOTAL_SECTIONS}>
          <TechStack />
        </Section>

        <Section index={5} total={TOTAL_SECTIONS} isStatic={true} fullBleed={true}>
          <Projects />
        </Section>

        <Section index={6} total={TOTAL_SECTIONS}>
          <Contact />
        </Section>

        <Section index={7} total={TOTAL_SECTIONS} isStatic={true}>
          <Outro />
        </Section>
      </div>

      {/* Progress Indicator */}
      <div className="pointer-events-none fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
          <SectionParticle key={i} index={i} total={TOTAL_SECTIONS} />
        ))}
      </div>

      {/* Loading Screen */}
      <Loader 
        containerStyles={{ background: "black" }}
        innerStyles={{ background: "#1e1b4b", height: "2px" }}
        barStyles={{ background: "#4f46e5" }}
        dataStyles={{ color: "white", fontFamily: "monospace", fontSize: "12px" }}
      />
    </main>
  );
}

