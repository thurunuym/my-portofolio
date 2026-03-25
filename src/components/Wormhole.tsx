import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useTransform } from "motion/react";

const WORMHOLE_LENGTH = 1000;
const SECTION_COUNT = 8;

export function Wormhole() {
  const { scrollYProgress } = useScroll();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { viewport } = useThree();

  // Map scroll progress to camera Z position
  const cameraZ = useTransform(scrollYProgress, [0, 1], [0, -WORMHOLE_LENGTH]);
  
  // Warp speed effect: stretch stars based on scroll velocity
  const starStretch = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 5, 5, 1]);

  useFrame((state) => {
    if (cameraRef.current) {
      cameraRef.current.position.z = cameraZ.get();
      
      // Add subtle camera shake
      cameraRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      cameraRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  // Generate a path for the wormhole
  const curve = useMemo(() => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      points.push(new THREE.Vector3(
        Math.sin(i * 0.5) * 2,
        Math.cos(i * 0.5) * 2,
        -i * (WORMHOLE_LENGTH / 19)
      ));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault fov={75} position={[0, 0, 0]} />
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Starfield */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Wormhole Tube */}
      <mesh>
        <tubeGeometry args={[curve, 100, 2, 8, false]} />
        <meshStandardMaterial 
          color="#1e1b4b" 
          wireframe 
          transparent 
          opacity={0.1} 
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating Particles */}
      <Sparkles count={200} scale={[10, 10, WORMHOLE_LENGTH]} size={2} speed={0.5} opacity={0.5} />

      {/* Section Markers (Visual cues in space) */}
      {Array.from({ length: SECTION_COUNT }).map((_, i) => (
        <group key={i} position={[0, 0, -i * (WORMHOLE_LENGTH / (SECTION_COUNT - 1))]}>
          <pointLight color={i % 2 === 0 ? "#4f46e5" : "#ec4899"} intensity={2} distance={20} />
          <mesh>
            <torusGeometry args={[5, 0.05, 16, 100]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#4f46e5" : "#ec4899"} emissive={i % 2 === 0 ? "#4f46e5" : "#ec4899"} emissiveIntensity={2} transparent opacity={0.2} />
          </mesh>
        </group>
      ))}
    </>
  );
}
