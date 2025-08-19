import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  // if imgUrl is undefined/empty, don't try to load a texture
  const [decal] = useTexture(imgUrl ? [imgUrl] : []);

  return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
              color="#fff8eb"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
          />
          {imgUrl && (
              <Decal
                  position={[0, 0, 1]}
                  rotation={[2 * Math.PI, 0, 6.25]}
                  scale={1}
                  map={decal}
                  flatShading
              />
          )}
        </mesh>
      </Float>
  );
};

export const BallCanvas = ({ icon }) => {
  return (
      <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          // If you don't need screenshots, better leave this false to reduce white-screen risk on context loss
          gl={{ preserveDrawingBuffer: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
  );
};

export default BallCanvas;
