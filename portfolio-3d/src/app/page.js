"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./components/Loader";
import { Model as Island } from "./models/Island";
import { DirectionalLight, Sky } from "@react-three/drei";
import { Bird } from "./components/Bird";
import { Plane } from "./components/Plane";

export default function Home() {
  const adjustIslandForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    // if (window.innerWidth < 768) {
    //   // Small screens (e.g., mobile)
    //   screenScale = [0.9, 0.9, 0.9];
    // }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale = [3, 3, 3];
    let screenPosition = [4, 4, 4];
    let rotation = [0, 0, 0];

    // if (window.innerWidth < 768) {
    //   // Small screens (e.g., mobile)
    //   screenScale = [1.5, 1.5, 1.5];
    //   screenPosition = [0, -1.5, 0];
    // }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();

  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="bg-white font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />
      <section className="w-full h-screen relative">
        {/* <div className="absolute top-28 left-0 right-0 z-10 flex-items-center justify-center"></div> */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            {/* Your 3D content goes here */}
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
            <Bird />
            <Sky isRotating={isRotating} />
            <directionalLight position={[-4, 4, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#b97a20"
              intensity={0.6}
            />
            <Plane
              planeScale={planeScale}
              planePosition={planePosition}
              isRotating={isRotating}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
}
