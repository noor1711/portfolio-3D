"use client";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Sky = ({ isRotating }) => {
  const sky = useGLTF("/3d/sky.glb");
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
