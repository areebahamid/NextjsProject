"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text3D, OrbitControls, Environment, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function FloatingShape({ position, color, speed = 1, distort = 0.4, scale = 1 }) {
  const mesh = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2 * speed) * 0.2
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1 * speed) * 0.2
    }
  })

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color={color} speed={0.5} distort={hovered ? distort * 1.5 : distort} radius={1} />
    </mesh>
  )
}

function FloatingText() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text3D
        ref={textRef}
        font="/fonts/Inter_Bold.json"
        size={0.6}
        height={0.1}
        curveSegments={12}
        position={[-2, 0, 0]}
      >
        Areeba
        <meshStandardMaterial color="#bf7af0" />
      </Text3D>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <FloatingShape position={[-3, 1, 0]} color="#bf7af0" speed={1.2} scale={0.8} />
        <FloatingShape position={[3, -1, -2]} color="#ec4899" speed={0.8} scale={1.2} />
        <FloatingShape position={[0, -2, -1]} color="#14b8a6" speed={1} scale={0.6} />
        <FloatingShape position={[2, 2, -3]} color="#a855f7" speed={1.5} scale={0.4} />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}

