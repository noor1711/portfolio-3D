"use client";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect } from "react";

export const Bird = () => {
  const birdRef = React.useRef();
  const { scene, animations } = useGLTF("/3d/bird.glb");
  const { actions } = useAnimations(animations, birdRef);
  scene.scale.set(0.003, 0.003, 0.003);

  useEffect(() => {
    actions["Take 001"]?.play();
    return () => {
      actions["Take 001"]?.stop();
    };
  }, [actions]);

  useFrame(({ camera, clock, delta }) => {
    birdRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.01;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x -= 0.5; // Move right
    } else {
      birdRef.current.position.x += 0.5; // Move left
    }
  });

  return (
    <mesh position={[10, 10, 1]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};
