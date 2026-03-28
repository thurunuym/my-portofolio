import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float, Text, PerspectiveCamera, ContactShadows, Stars } from "@react-three/drei";
import * as THREE from "three";

const TECH_LOGOS = [
  { 
    name: "React", 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB"
  },
  { 
    name: "Node.js", 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933"
  },
  { 
    name: "Express", 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#FFFFFF"
  },
  { 
    name: "Spring Boot", 
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "#6DB33F"
  }
];

function LogoChip({ url, name, position, color }: { url: string, name: string, position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const chipRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, url);
  
  const randomOffset = useMemo(() => Math.random() * Math.PI * 2, []);
  const speed = useMemo(() => 0.15 + Math.random() * 0.2, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed + randomOffset;
    
    // Smooth organic floating
    meshRef.current.position.x = position[0] + Math.sin(t) * 0.1;
    meshRef.current.position.y = position[1] + Math.cos(t * 0.7) * 0.1;
    meshRef.current.position.z = position[2] + Math.sin(t * 1.1) * 0.1;

    // Keep each chip facing the camera so the logo/text don't flip away while orbiting.
    if (chipRef.current) {
      chipRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={chipRef}>
          {/* 3D Chip Body */}
          <mesh>
            <boxGeometry args={[1.05, 1.05, 0.12]} />
            <meshStandardMaterial 
              color={color} 
              metalness={0.8} 
              roughness={0.2} 
              transparent 
              opacity={0.3} 
              emissive={color}
              emissiveIntensity={0.2}
            />
          </mesh>
          
          {/* Front Face Logo */}
          <mesh position={[0, 0, 0.061]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={texture} transparent />
          </mesh>
          
          {/* Back Face Logo */}
          <mesh position={[0, 0, -0.061]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={texture} transparent />
          </mesh>

          {/* Label Glow */}
          <Text
            position={[0, -0.78, 0]}
            fontSize={0.16}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={1.4}
            outlineWidth={0.01}
            outlineColor="#0f172a"
          >
            {name}
          </Text>
        </group>
      </Float>
    </group>
  );
}

function GlobeContent() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Very smooth rotation
      groupRef.current.rotation.y += 0.001;
    }
  });

  const distributedLogos = useMemo(() => {
    return TECH_LOGOS.map((logo, i) => {
      const phi = Math.acos(-1 + (2 * i) / TECH_LOGOS.length);
      const theta = Math.sqrt(TECH_LOGOS.length * Math.PI) * phi;
      const radius = 2.8;
      
      return {
        ...logo,
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ] as [number, number, number]
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {/* Central Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          emissive="#3b82f6" 
          emissiveIntensity={0.5} 
          wireframe 
          transparent 
          opacity={0.1} 
        />
      </mesh>
      
      {/* Dynamic Orbiting Rings */}
      <group>
        {[...Array(4)].map((_, i) => (
          <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <torusGeometry args={[2.8, 0.005, 16, 128]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
          </mesh>
        ))}
      </group>

      {distributedLogos.map((logo) => (
        <LogoChip key={logo.name} {...logo} />
      ))}
    </group>
  );
}

export function TechGlobe() {
  return (
    <div className="w-full h-full min-h-[450px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        {/* Starfield for more liveness */}
        <Stars radius={100} depth={50} count={2300} factor={4} saturation={0} fade speed={1} />

        {/* Cinematic Lighting */}
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.15}
          enableDamping
          dampingFactor={0.05}
          makeDefault
        />
        
        <GlobeContent />
        
        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4.5} 
        />
      </Canvas>
    </div>
  );
}
