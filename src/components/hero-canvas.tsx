"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import type * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial
          color="#00D4FF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          opacity={0.85}
          transparent
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.04, 16, 100]} />
      <meshStandardMaterial color="#00D4FF" opacity={0.3} transparent emissive="#00D4FF" emissiveIntensity={0.5} />
    </mesh>
  );
}

function OrbitRing2() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 5;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      ringRef.current.rotation.z = Math.PI / 6;
    }
  });
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[4, 0.025, 16, 100]} />
      <meshStandardMaterial color="#7C3AED" opacity={0.2} transparent emissive="#7C3AED" emissiveIntensity={0.3} />
    </mesh>
  );
}

// Fallback CSS animation when WebGL is not available
function FallbackHero() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-64 h-64 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: "8s" }} />
        <div className="absolute inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "5s", animationDirection: "reverse" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<FallbackHero />}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00D4FF" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7C3AED" />
          <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
          <AnimatedSphere />
          <OrbitRing />
          <OrbitRing2 />
        </Canvas>
      </Suspense>
    </div>
  );
}
