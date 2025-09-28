"use client";
import { useGLTF } from "@react-three/drei";
import React from "react";

export const Bird = () => {
  const bird = useGLTF("/3d/bird.glb");
  return (
    <mesh position={[-5, 2, 1]}>
      <primitive object={bird.scene} />
    </mesh>
  );
};
