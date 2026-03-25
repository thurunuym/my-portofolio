/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Wormhole } from "./components/Wormhole";
import { Section } from "./components/Section";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Outro } from "./components/Outro";
import { Loader } from "@react-three/drei";

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
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0">
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

        <Section index={5} total={TOTAL_SECTIONS}>
          <Projects />
        </Section>

        <Section index={6} total={TOTAL_SECTIONS}>
          <Contact />
        </Section>

        <Section index={7} total={TOTAL_SECTIONS}>
          <Outro />
        </Section>
      </div>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
          <div 
            key={i} 
            className="w-1 h-8 bg-white/10 rounded-full overflow-hidden"
          >
            <div 
              className="w-full h-full bg-blue-500 origin-top transition-transform duration-300"
              style={{ 
                transform: `scaleY(${Math.max(0, Math.min(1, (i + 1) / TOTAL_SECTIONS))})`,
                opacity: 0.5
              }}
            />
          </div>
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

