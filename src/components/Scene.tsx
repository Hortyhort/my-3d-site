'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Environment, Float, useTexture } from '@react-three/drei';

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  // Fake heavy load for testing - loads a large texture to simulate async loading
  useTexture("https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg");

  // Rotate the mesh every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
      >
        {/* The Geometry: A 20-sided die shape */}
        <icosahedronGeometry args={[2, 0]} />
        
        {/* The Material: Glass-like aesthetic */}
        <meshStandardMaterial 
          color={hovered ? "#ff0055" : "#222"} 
          roughness={0.3}
          metalness={0.8} 
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          
          {/* Suspense is REQUIRED for useProgress to track loading */}
          <Suspense fallback={null}>
            {/* Environment reflection for the metal material */}
            <Environment preset="city" />
            
            {/* The 3D Object */}
            <FloatingShape />
          </Suspense>
        </Canvas>
    </div>
  );
}
