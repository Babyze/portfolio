"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Spinner } from "@nextui-org/react";
import {
  Environment,
  Float,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function ThreeDModel() {
  const { scene } = useGLTF("/3d/little-astronaut/little-astronaut.gltf");
  const { isMobile } = useIsMobile();

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="dawn" />
      <Float
        speed={1.5}
        position={[1, -2, 0]}
        floatIntensity={6}
        rotationIntensity={2}
      >
        <primitive object={scene} scale={isMobile ? 2 : 1.2} />
      </Float>
    </>
  );
}

function Loader() {
  return (
    <Html center>
      <Spinner color="secondary" size="md" />
    </Html>
  );
}

export default function LittleAstronaut() {
  return (
    <>
      <Canvas camera={{ position: [2, 3, 5] }}>
        <Suspense fallback={<Loader />}>
          <ThreeDModel />
        </Suspense>
      </Canvas>
    </>
  );
}
