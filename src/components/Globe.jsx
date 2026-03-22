import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const Earth = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        wireframe 
        transparent 
        opacity={0.3} 
      />
      {/* Glow effect sphere */}
      <Sphere args={[2.5, 64, 64]}>
        <MeshDistortMaterial
          color="#1e40af"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
          transparent
          opacity={0.2}
        />
      </Sphere>
    </mesh>
  );
};

const Globe = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e40af" />
        <Earth />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Globe;
