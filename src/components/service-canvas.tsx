"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Different 3D shapes per service slug
function ServiceShape({ slug }: { slug: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  const getGeometry = () => {
    switch (slug) {
      case "mobile-consulting": return <boxGeometry args={[1.5, 2.5, 0.2]} />;
      case "app-porting": return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case "technology-outsourcing": return <icosahedronGeometry args={[1.5, 1]} />;
      case "ui-ux-design": return <octahedronGeometry args={[1.5, 0]} />;
      case "ecommerce-development": return <boxGeometry args={[2, 2, 2]} />;
      case "startup-development": return <tetrahedronGeometry args={[1.8, 0]} />;
      case "crm-development": return <cylinderGeometry args={[1, 1, 2, 32]} />;
      case "saas-development": return <torusKnotGeometry args={[1, 0.3, 100, 16]} />;
      case "offshore-development": return <dodecahedronGeometry args={[1.5, 0]} />;
      case "product-engineering": return <icosahedronGeometry args={[1.5, 0]} />;
      case "staff-augmentation": return <sphereGeometry args={[1.5, 32, 32]} />;
      default: return <sphereGeometry args={[1.5, 32, 32]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {getGeometry()}
        <meshStandardMaterial
          color="#00D4FF"
          wireframe
          opacity={0.6}
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function ServiceCanvas({ slug }: { slug: string }) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#00D4FF" />
          <ServiceShape slug={slug} />
        </Canvas>
      </Suspense>
    </div>
  );
}
